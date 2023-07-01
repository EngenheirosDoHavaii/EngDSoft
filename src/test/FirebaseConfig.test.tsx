import { FirebaseConfig } from '../services/FirebaseConfig';

describe('FirebaseConfig', () => {
  let firebaseConfig: FirebaseConfig;

  beforeEach(() => {
    firebaseConfig = FirebaseConfig.getInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize the Firebase app', () => {
    expect(firebaseConfig.app).toBeDefined();
    expect(firebaseConfig.app.name).toBe('[DEFAULT]');
  });

  it('should get the Firestore instance', () => {
    const db = firebaseConfig.db;
    expect(db).toBeDefined();
    expect(db).toBeInstanceOf(Object);
  });

  it('should get the Auth instance', () => {
    const auth = firebaseConfig.auth;
    expect(auth).toBeDefined();
    expect(auth).toBeInstanceOf(Object);
  });

  it('should return the same instance when calling getInstance', () => {
    const instance1 = FirebaseConfig.getInstance();
    const instance2 = FirebaseConfig.getInstance();
    expect(instance1).toBe(instance2);
  });
});
