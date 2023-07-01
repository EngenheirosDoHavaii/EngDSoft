import { AuthManager } from '../services/AuthManager';

describe('AuthManager', () => {
  let authManager: AuthManager;

  beforeEach(() => {
    authManager = AuthManager.getInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the same instance when calling getInstance', () => {
    const instance1 = AuthManager.getInstance();
    const instance2 = AuthManager.getInstance();
    expect(instance1).toBe(instance2);
  });
});
