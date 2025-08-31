import { useState } from 'react';
import { RotateCcw, Trash2, Check, Send, Paperclip, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import ChatMessage from './ChatMessage';
import { Conversation, Message } from '@/types/chat';

interface ConversationPanelProps {
  conversation?: Conversation;
}

const ConversationPanel = ({ conversation }: ConversationPanelProps) => {
  const [messages, setMessages] = useState<Message[]>(conversation?.messages || []);
  const [messageInput, setMessageInput] = useState('');

  const handleThumbsUp = (messageId: string) => {
    setMessages(msgs => 
      msgs.map(msg => 
        msg.id === messageId 
          ? { ...msg, hasThumbsUp: !msg.hasThumbsUp, hasThumbsDown: false }
          : msg
      )
    );
  };

  const handleThumbsDown = (messageId: string) => {
    setMessages(msgs => 
      msgs.map(msg => 
        msg.id === messageId 
          ? { ...msg, hasThumbsDown: !msg.hasThumbsDown, hasThumbsUp: false }
          : msg
      )
    );
  };

  const handleSendMessage = () => {
    if (!messageInput.trim() || !conversation) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: messageInput.trim(),
      timestamp: new Date(),
      type: 'user',
      userId: conversation.user.id
    };

    setMessages(prev => [...prev, newMessage]);
    setMessageInput('');

    // Simulate agent response after a short delay
    setTimeout(() => {
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thanks for your message! I'm processing your request and will get back to you shortly. 😊",
        timestamp: new Date(),
        type: 'agent'
      };
      setMessages(prev => [...prev, agentResponse]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    
    if (isToday) {
      return 'Today';
    }
    
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();
    
    if (isYesterday) {
      return 'Yesterday';
    }
    
    return date.toLocaleDateString([], { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (!conversation) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Select a conversation
          </h2>
          <p className="text-muted-foreground">
            Choose a conversation from the sidebar to view the chat history.
          </p>
        </div>
      </div>
    );
  }

  // Group messages by date
  const messagesByDate = messages.reduce((groups, message) => {
    const dateKey = message.timestamp.toDateString();
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(message);
    return groups;
  }, {} as Record<string, Message[]>);

  return (
    <div className="flex-1 flex flex-col bg-background">
      {/* Action Buttons Header */}
      <div className="p-4 border-b border-border flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
            {conversation.user.initials}
          </div>
          <div>
            <h2 className="font-semibold text-foreground">{conversation.title}</h2>
            <p className="text-sm text-muted-foreground">{conversation.user.name}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <RotateCcw className="w-4 h-4 mr-2" />
            Revert
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
          <Button size="sm" className="bg-success hover:bg-success/90 text-white">
            <Check className="w-4 h-4 mr-2" />
            Mark as Done
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6">
        {Object.entries(messagesByDate).map(([dateKey, dateMessages]) => (
          <div key={dateKey}>
            {/* Date Separator */}
            <div className="flex items-center justify-center my-6">
              <div className="bg-muted px-3 py-1 rounded-full">
                <span className="text-xs text-muted-foreground font-medium">
                  {formatDate(new Date(dateKey))}
                </span>
              </div>
            </div>
            
            {/* Messages for this date */}
            {dateMessages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                onThumbsUp={() => handleThumbsUp(message.id)}
                onThumbsDown={() => handleThumbsDown(message.id)}
              />
            ))}
          </div>
        ))}
        
        {messages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No messages in this conversation yet.</p>
          </div>
        )}
      </div>

      {/* Chat Input Box */}
      {conversation && (
        <div className="border-t border-border p-4 bg-background">
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <Textarea
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="min-h-[60px] max-h-32 resize-none bg-background border-border focus:border-primary"
                rows={2}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                <Paperclip className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                <Smile className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleSendMessage}
                disabled={!messageInput.trim()}
                size="sm"
                className="bg-primary hover:bg-primary/90 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-muted-foreground">
              Press Enter to send, Shift + Enter for new line
            </span>
            <span className="text-xs text-muted-foreground">
              {messageInput.length}/2000
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationPanel;