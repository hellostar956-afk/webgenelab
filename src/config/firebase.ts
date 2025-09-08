// Enhanced mock authentication system with better error handling
export interface MockUser {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName?: string;
}

class MockAuth {
  private currentUser: MockUser | null = null;
  private listeners: ((user: MockUser | null) => void)[] = [];
  private users: Map<string, { email: string; password: string; verified: boolean }> = new Map();

  constructor() {
    // Load saved user session
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        this.currentUser = JSON.parse(savedUser);
      } catch (error) {
        localStorage.removeItem('currentUser');
      }
    }
  }

  getCurrentUser(): MockUser | null {
    return this.currentUser;
  }

  onAuthStateChanged(callback: (user: MockUser | null) => void) {
    this.listeners.push(callback);
    // Immediately call with current state
    setTimeout(() => callback(this.currentUser), 0);
    
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  async signInWithEmailAndPassword(email: string, password: string): Promise<{ user: MockUser }> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (!email || !password) {
      throw new Error('Invalid credentials');
    }

    // Check if user exists and password matches
    const userData = this.users.get(email);
    if (!userData || userData.password !== password) {
      throw new Error('Invalid email or password');
    }

    const user: MockUser = {
      uid: `user_${email.replace('@', '_').replace('.', '_')}`,
      email,
      emailVerified: userData.verified,
      displayName: email.split('@')[0]
    };

    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.notifyListeners();
    
    return { user };
  }

  async createUserWithEmailAndPassword(email: string, password: string): Promise<{ user: MockUser }> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (!email || !password) {
      throw new Error('Invalid input');
    }

    if (this.users.has(email)) {
      throw new Error('Email already in use');
    }

    // Store user data
    this.users.set(email, { email, password, verified: false });

    const user: MockUser = {
      uid: `user_${email.replace('@', '_').replace('.', '_')}`,
      email,
      emailVerified: false,
      displayName: email.split('@')[0]
    };

    return { user };
  }

  async signOut(): Promise<void> {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.notifyListeners();
  }

  async sendEmailVerification(user: MockUser): Promise<void> {
    // Mock email verification
    console.log(`Email verification sent to ${user.email}`);
    // Auto-verify after 2 seconds for demo
    setTimeout(() => {
      if (this.users.has(user.email)) {
        const userData = this.users.get(user.email)!;
        userData.verified = true;
        this.users.set(user.email, userData);
      }
    }, 2000);
  }

  async signInWithPopup(): Promise<{ user: MockUser }> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user: MockUser = {
      uid: `google_user_${Date.now()}`,
      email: 'demo@gmail.com',
      emailVerified: true,
      displayName: 'Demo User'
    };

    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.notifyListeners();
    
    return { user };
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.currentUser));
  }
}

export const auth = new MockAuth();

// Mock Firestore
export const db = {
  collection: () => ({
    doc: () => ({
      set: () => Promise.resolve(),
      get: () => Promise.resolve({ exists: false, data: () => null })
    })
  })
};

export default { auth, db };