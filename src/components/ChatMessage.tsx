import { ThumbsUp, ThumbsDown, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Message } from '@/types/chat';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: Message;
  onThumbsUp?: () => void;
  onThumbsDown?: () => void;
}

const ChatMessage = ({ message, onThumbsUp, onThumbsDown }: ChatMessageProps) => {
  const isUser = message.type === 'user';
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatMessageContent = (content: string) => {
    // Simple URL detection and styling
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = content.split(urlRegex);
    
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={index} 
            href={part} 
            className="text-primary underline hover:text-primary/80"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className={cn("flex gap-3 mb-6", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="w-8 h-8 bg-agent-message rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <Bot className="w-4 h-4 text-muted-foreground" />
        </div>
      )}
      
      <div className={cn("max-w-[70%] space-y-2", isUser && "order-2")}>
        <div
          className={cn(
            "px-4 py-3 rounded-xl shadow-sm",
            isUser
              ? "bg-user-message text-primary-foreground rounded-br-md"
              : "bg-agent-message text-foreground rounded-bl-md"
          )}
        >
          <div className="text-sm leading-relaxed whitespace-pre-wrap">
            {formatMessageContent(message.content)}
          </div>
        </div>
        
        <div className={cn("flex items-center gap-2", isUser ? "justify-end" : "justify-start")}>
          <span className="text-xs text-muted-foreground">
            {formatTime(message.timestamp)}
          </span>
          
          {isUser && (
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "h-6 px-1 hover:bg-muted",
                  message.hasThumbsUp && "text-success"
                )}
                onClick={onThumbsUp}
              >
                <ThumbsUp className="w-3 h-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "h-6 px-1 hover:bg-muted",
                  message.hasThumbsDown && "text-error"
                )}
                onClick={onThumbsDown}
              >
                <ThumbsDown className="w-3 h-3" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {isUser && (
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 order-1">
          <User className="w-4 h-4 text-primary-foreground" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;