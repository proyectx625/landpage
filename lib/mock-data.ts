export const mockUser = {
  id: 1,
  name: 'Demo User',
  email: 'demo@example.com',
  passwordHash: 'hashed_password',
  role: 'admin',
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

export const mockTeam = {
  id: 1,
  name: 'Demo Team',
  slug: 'demo-team',
  stripeCustomerId: 'cus_mock_123',
  stripeSubscriptionId: 'sub_mock_123',
  stripeProductId: 'prod_mock_base',
  planName: 'Base',
  subscriptionStatus: 'active',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const mockPrices = [
  {
    id: 'price_mock_base',
    productId: 'prod_mock_base',
    unitAmount: 800,
    currency: 'usd',
    interval: 'month',
    trialPeriodDays: 7,
  },
  {
    id: 'price_mock_plus',
    productId: 'prod_mock_plus',
    unitAmount: 1200,
    currency: 'usd',
    interval: 'month',
    trialPeriodDays: 7,
  },
];

export const mockProducts = [
  {
    id: 'prod_mock_base',
    name: 'Base',
    description: 'Essential features for small teams',
    defaultPriceId: 'price_mock_base',
  },
  {
    id: 'prod_mock_plus',
    name: 'Plus',
    description: 'Advanced features for growing teams',
    defaultPriceId: 'price_mock_plus',
  },
];

export const mockActivityLogs = [
  {
    id: 1,
    action: 'SIGNED_IN',
    timestamp: new Date(),
    ipAddress: '127.0.0.1',
    userName: 'Demo User',
  },
  {
    id: 2,
    action: 'TEAM_CREATED',
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    ipAddress: '127.0.0.1',
    userName: 'Demo User',
  },
];
