export interface User {
  id: string;
  name: string;
  initials: string;
  avatar?: string;
}

export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  type: 'user' | 'agent';
  userId?: string;
  hasThumbsUp?: boolean;
  hasThumbsDown?: boolean;
}

export interface Conversation {
  id: string;
  title: string;
  user: User;
  lastMessage: string;
  timestamp: Date;
  hasHandoff: boolean;
  hasAgent: boolean;
  thumbsUp: number;
  thumbsDown: number;
  messages: Message[];
  status: 'active' | 'resolved' | 'pending';
}

export interface NavigationItem {
  id: string;
  label: string;
  active: boolean;
}