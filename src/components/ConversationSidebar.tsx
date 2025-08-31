import { useState } from 'react';
import { ChevronDown, ThumbsUp, ThumbsDown, Users, Bot, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { mockConversations } from '@/data/mockData';
import { type Conversation } from '@/types/chat';
import { cn } from '@/lib/utils';

interface ConversationSidebarProps {
  selectedConversationId?: string;
  onConversationSelect: (conversation: Conversation) => void;
}

const ConversationSidebar = ({ selectedConversationId, onConversationSelect }: ConversationSidebarProps) => {
  const [filterBy, setFilterBy] = useState('All Conversations');
  const [sortBy, setSortBy] = useState('Recent');

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  return (
    <div className="w-80 bg-sidebar-bg border-r border-border flex flex-col h-full">
      {/* Filter and Sort Controls */}
      <div className="p-4 border-b border-border space-y-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between bg-background">
              {filterBy}
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            <DropdownMenuItem onClick={() => setFilterBy('All Conversations')}>
              All Conversations
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterBy('Active')}>
              Active
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterBy('Resolved')}>
              Resolved
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterBy('Pending')}>
              Pending
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between bg-background">
              Sort by {sortBy}
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            <DropdownMenuItem onClick={() => setSortBy('Recent')}>
              Sort by Recent
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy('Oldest')}>
              Sort by Oldest
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy('Most Votes')}>
              Sort by Most Votes
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {mockConversations.map((conversation, index) => (
          <div key={conversation.id}>
            <div
              className={cn(
                "p-4 cursor-pointer transition-colors hover:bg-conversation-hover",
                selectedConversationId === conversation.id && "bg-primary-light border-r-2 border-primary"
              )}
              onClick={() => onConversationSelect(conversation)}
            >
              <div className="flex items-start space-x-3">
                {/* User Avatar */}
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium flex-shrink-0">
                  {conversation.user.initials}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Conversation Title and Time */}
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-medium text-foreground truncate">
                      {conversation.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {formatTime(conversation.timestamp)}
                    </span>
                  </div>

                  {/* Last Message */}
                  <p className="text-sm text-muted-foreground truncate mb-2">
                    {conversation.lastMessage}
                  </p>

                  {/* Icons and Votes Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {conversation.hasHandoff && (
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      )}
                      {conversation.hasAgent ? (
                        <Users className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <Bot className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-3 h-3 text-success" />
                        <span className="text-xs text-success">{conversation.thumbsUp}</span>
                      </div>
                      {conversation.thumbsDown > 0 && (
                        <div className="flex items-center space-x-1">
                          <ThumbsDown className="w-3 h-3 text-error" />
                          <span className="text-xs text-error">{conversation.thumbsDown}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {index < mockConversations.length - 1 && (
              <div className="mx-4 border-b border-border/50" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationSidebar;