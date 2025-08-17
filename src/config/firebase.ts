// Simple mock authentication for demo purposes
// This avoids Firebase configuration issues while maintaining functionality

export interface MockUser {
  uid: string;
  email: string;
  emailVerified: boolean;
}

class MockAuth {
  private currentUser: MockUser | null = null;
  private listeners: ((user: MockUser | null) => void)[] = [];

  getCurrentUser(): MockUser | null {
    return this.currentUser;
  }

  onAuthStateChanged(callback: (user: MockUser | null) => void) {
    this.listeners.push(callback);
    // Immediately call with current state
    callback(this.currentUser);
    
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  async signInWithEmailAndPassword(email: string, password: string): Promise<{ user: MockUser }> {
    // Simple validation
    if (!email || !password) {
      throw new Error('Invalid credentials');
    }

    const user: MockUser = {
      uid: `user_${Date.now()}`,
      email,
      emailVerified: true
    };

    this.currentUser = user;
    this.notifyListeners();
    
    return { user };
  }

  async createUserWithEmailAndPassword(email: string, password: string): Promise<{ user: MockUser }> {
    // Simple validation
    if (!email || !password) {
      throw new Error('Invalid input');
    }

    const user: MockUser = {
      uid: `user_${Date.now()}`,
      email,
      emailVerified: false
    };

    this.currentUser = user;
    this.notifyListeners();
    
    return { user };
  }

  async signOut(): Promise<void> {
    this.currentUser = null;
    this.notifyListeners();
  }

  async sendEmailVerification(user: MockUser): Promise<void> {
    // Mock email verification
    console.log(`Email verification sent to ${user.email}`);
  }

  async signInWithPopup(): Promise<{ user: MockUser }> {
    const user: MockUser = {
      uid: `google_user_${Date.now()}`,
      email: 'demo@example.com',
      emailVerified: true
    };

    this.currentUser = user;
    this.notifyListeners();
    
    return { user };
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.currentUser));
  }
}

export const auth = new MockAuth();

// Mock Firestore (not used but imported)
export const db = {
  collection: () => ({
    doc: () => ({
      set: () => Promise.resolve(),
      get: () => Promise.resolve({ exists: false, data: () => null })
    })
  })
};

export default { auth, db };