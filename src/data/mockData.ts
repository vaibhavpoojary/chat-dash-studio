import { Conversation, User, Message, NavigationItem } from '@/types/chat';

export const mockUsers: User[] = [
  { id: '1', name: 'Sarah Johnson', initials: 'SJ' },
  { id: '2', name: 'Mike Chen', initials: 'MC' },
  { id: '3', name: 'Emma Wilson', initials: 'EW' },
  { id: '4', name: 'David Brown', initials: 'DB' },
];

export const mockMessages: Message[] = [
  {
    id: '1',
    content: 'Hi! How does your pricing work?',
    timestamp: new Date('2024-01-15T10:30:00'),
    type: 'user',
    userId: '1'
  },
  {
    id: '2',
    content: 'Hello! I\'d be happy to help explain our pricing. We offer three main plans: Starter ($29/month), Professional ($99/month), and Enterprise (custom pricing). Each plan includes different features and usage limits. Would you like me to go into detail about any specific plan? 😊',
    timestamp: new Date('2024-01-15T10:31:00'),
    type: 'agent'
  },
  {
    id: '3',
    content: 'What\'s included in the Professional plan?',
    timestamp: new Date('2024-01-15T10:32:00'),
    type: 'user',
    userId: '1',
    hasThumbsUp: true
  },
  {
    id: '4',
    content: 'The Professional plan includes: ✅ Up to 10,000 API calls/month ✅ Advanced analytics dashboard ✅ Priority support ✅ Custom integrations ✅ Team collaboration tools. You can also upgrade or downgrade at any time. Here\'s a link to see the full comparison: https://example.com/pricing',
    timestamp: new Date('2024-01-15T10:33:00'),
    type: 'agent'
  }
];

export const mockConversations: Conversation[] = [
  {
    id: '1',
    title: 'How does pricing work?',
    user: mockUsers[0],
    lastMessage: 'The Professional plan includes...',
    timestamp: new Date('2024-01-15T10:33:00'),
    hasHandoff: false,
    hasAgent: true,
    thumbsUp: 2,
    thumbsDown: 0,
    messages: mockMessages,
    status: 'active'
  },
  {
    id: '2',
    title: 'API Integration Help',
    user: mockUsers[1],
    lastMessage: 'Let me check the documentation for you.',
    timestamp: new Date('2024-01-15T09:15:00'),
    hasHandoff: true,
    hasAgent: false,
    thumbsUp: 1,
    thumbsDown: 0,
    messages: [],
    status: 'pending'
  },
  {
    id: '3',
    title: 'Account Setup Issues',
    user: mockUsers[2],
    lastMessage: 'Thank you, that solved my problem!',
    timestamp: new Date('2024-01-15T08:45:00'),
    hasHandoff: false,
    hasAgent: true,
    thumbsUp: 3,
    thumbsDown: 0,
    messages: [],
    status: 'resolved'
  },
  {
    id: '4',
    title: 'Feature Request',
    user: mockUsers[3],
    lastMessage: 'I\'ll forward this to our product team.',
    timestamp: new Date('2024-01-14T16:20:00'),
    hasHandoff: false,
    hasAgent: true,
    thumbsUp: 1,
    thumbsDown: 1,
    messages: [],
    status: 'resolved'
  }
];

export const navigationItems: NavigationItem[] = [
  { id: 'answers', label: 'Answers', active: false },
  { id: 'questions', label: 'Questions', active: false },
  { id: 'conversations', label: 'Conversations', active: true },
  { id: 'analytics', label: 'Analytics', active: false },
  { id: 'settings', label: 'Settings', active: false }
];