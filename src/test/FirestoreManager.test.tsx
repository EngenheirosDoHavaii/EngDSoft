import { FirestoreManager } from '../services/FirestoreManager';

describe('FirestoreManager', () => {
  let firestoreManager: FirestoreManager;

  beforeEach(() => {
    firestoreManager = FirestoreManager.getInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the same instance when calling getInstance', () => {
    const instance1 = FirestoreManager.getInstance();
    const instance2 = FirestoreManager.getInstance();
    expect(instance1).toBe(instance2);
  });
});
