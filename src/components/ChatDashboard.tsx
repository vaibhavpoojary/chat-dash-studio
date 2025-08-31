import { useState } from 'react';
import TopNavigation from './TopNavigation';
import ConversationSidebar from './ConversationSidebar';
import ConversationPanel from './ConversationPanel';
import { Conversation } from '@/types/chat';

const ChatDashboard = () => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | undefined>();

  const handleConversationSelect = (conversation: Conversation) => {
    setSelectedConversation(conversation);
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <TopNavigation />
      <div className="flex flex-1 overflow-hidden">
        <ConversationSidebar 
          selectedConversationId={selectedConversation?.id}
          onConversationSelect={handleConversationSelect}
        />
        <ConversationPanel conversation={selectedConversation} />
      </div>
    </div>
  );
};

export default ChatDashboard;