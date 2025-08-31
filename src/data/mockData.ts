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
    messages: [
      {
        id: '1',
        content: 'Hi! How does your pricing work?',
        timestamp: new Date('2024-01-15T10:30:00'),
        type: 'user',
        userId: '1'
      },
      {
        id: '2',
        content: 'Hello! I\'d be happy to help explain our pricing. We offer three main plans:\n\n💰 **Starter** - $29/month\n• Up to 1,000 conversations\n• Basic analytics\n• Email support\n\n💰 **Professional** - $99/month\n• Up to 10,000 conversations\n• Advanced analytics\n• Priority support\n• Team collaboration\n\n💰 **Enterprise** - Custom pricing\n• Unlimited conversations\n• Custom integrations\n• Dedicated account manager\n\nWould you like me to go into detail about any specific plan? 😊',
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
        content: 'The Professional plan includes:\n\n✅ Up to 10,000 API calls/month\n✅ Advanced analytics dashboard\n✅ Priority support\n✅ Custom integrations\n✅ Team collaboration tools\n\nYou can also upgrade or downgrade at any time. Here\'s a link to see the full comparison: https://example.com/pricing',
        timestamp: new Date('2024-01-15T10:33:00'),
        type: 'agent'
      }
    ],
    status: 'active'
  },
  {
    id: '2',
    title: 'API Integration Help',
    user: mockUsers[1],
    lastMessage: 'Thanks! That fixed the issue.',
    timestamp: new Date('2024-01-15T09:15:00'),
    hasHandoff: true,
    hasAgent: false,
    thumbsUp: 1,
    thumbsDown: 0,
    messages: [
      {
        id: '5',
        content: 'I\'m having trouble with the API integration. Getting a 401 error.',
        timestamp: new Date('2024-01-15T09:10:00'),
        type: 'user',
        userId: '2'
      },
      {
        id: '6',
        content: 'I\'ll help you with that API error! A 401 usually means authentication issues. Can you check:\n\n1️⃣ Your API key is correct\n2️⃣ You\'re using the right endpoint\n3️⃣ Headers include Authorization: Bearer YOUR_TOKEN\n\nHere\'s a sample request:\n\n```javascript\nfetch(\'https://api.example.com/v1/chat\', {\n  method: \'POST\',\n  headers: {\n    \'Authorization\': \'Bearer your-api-key\',\n    \'Content-Type\': \'application/json\'\n  }\n})\n```',
        timestamp: new Date('2024-01-15T09:12:00'),
        type: 'agent'
      },
      {
        id: '7',
        content: 'Thanks! That fixed the issue.',
        timestamp: new Date('2024-01-15T09:15:00'),
        type: 'user',
        userId: '2',
        hasThumbsUp: true
      }
    ],
    status: 'resolved'
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
    messages: [
      {
        id: '8',
        content: 'I can\'t seem to complete my account setup. The verification email isn\'t arriving.',
        timestamp: new Date('2024-01-15T08:30:00'),
        type: 'user',
        userId: '3'
      },
      {
        id: '9',
        content: 'Let me help you with the email verification! This happens sometimes. Here are a few things to try:\n\n📧 **Check spam/junk folder** - Our emails sometimes end up there\n⏰ **Wait 5-10 minutes** - Delivery can be delayed\n🔄 **Request a new email** - I can trigger a new verification email\n✉️ **Whitelist our domain** - Add @example.com to your contacts\n\nI\'ve just sent you a new verification email. Can you check your inbox?',
        timestamp: new Date('2024-01-15T08:32:00'),
        type: 'agent'
      },
      {
        id: '10',
        content: 'Found it in spam! Account is verified now.',
        timestamp: new Date('2024-01-15T08:40:00'),
        type: 'user',
        userId: '3'
      },
      {
        id: '11',
        content: 'Excellent! 🎉 Your account is now fully set up. You should have access to all features. If you need help getting started, check out our quick start guide: https://example.com/quickstart',
        timestamp: new Date('2024-01-15T08:42:00'),
        type: 'agent'
      },
      {
        id: '12',
        content: 'Thank you, that solved my problem!',
        timestamp: new Date('2024-01-15T08:45:00'),
        type: 'user',
        userId: '3',
        hasThumbsUp: true
      }
    ],
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
    messages: [
      {
        id: '13',
        content: 'Could you add a dark mode option? It would be great for night time usage.',
        timestamp: new Date('2024-01-14T16:15:00'),
        type: 'user',
        userId: '4'
      },
      {
        id: '14',
        content: 'That\'s a great suggestion! Dark mode is actually on our roadmap for Q2 2024. Many users have requested this feature. I\'ll add your vote to the feature request and forward this to our product team. \n\nIn the meantime, you can reduce eye strain by adjusting your browser\'s zoom or using browser extensions for dark themes.',
        timestamp: new Date('2024-01-14T16:18:00'),
        type: 'agent'
      },
      {
        id: '15',
        content: 'Sounds good, but I was hoping for it sooner.',
        timestamp: new Date('2024-01-14T16:20:00'),
        type: 'user',
        userId: '4',
        hasThumbsDown: true
      }
    ],
    status: 'resolved'
  },
  {
    id: '5',
    title: 'Billing Question',
    user: { id: '5', name: 'Lisa Park', initials: 'LP' },
    lastMessage: 'Perfect, thank you!',
    timestamp: new Date('2024-01-14T14:30:00'),
    hasHandoff: false,
    hasAgent: true,
    thumbsUp: 2,
    thumbsDown: 0,
    messages: [
      {
        id: '16',
        content: 'When will I be charged for my subscription?',
        timestamp: new Date('2024-01-14T14:25:00'),
        type: 'user',
        userId: '5'
      },
      {
        id: '17',
        content: 'Great question! Here\'s how our billing works:\n\n📅 **Free trial**: 14 days, no charge\n💳 **First charge**: After trial ends\n🔄 **Recurring**: Same date each month\n📧 **Reminders**: Email 3 days before charging\n\nYour trial started on Jan 1st, so your first charge will be on Jan 15th. You\'ll receive an email reminder on Jan 12th.',
        timestamp: new Date('2024-01-14T14:27:00'),
        type: 'agent'
      },
      {
        id: '18',
        content: 'Perfect, thank you!',
        timestamp: new Date('2024-01-14T14:30:00'),
        type: 'user',
        userId: '5',
        hasThumbsUp: true
      }
    ],
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