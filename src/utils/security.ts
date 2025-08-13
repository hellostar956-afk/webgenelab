import CryptoJS from 'crypto-js';

// Security utilities for protecting against malware and ensuring data integrity

export class SecurityManager {
  private static readonly ENCRYPTION_KEY = 'genetic-lab-secure-key-2024';
  
  // Input sanitization to prevent XSS attacks
  static sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocols
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  }

  // Validate email format
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Encrypt sensitive data before storing
  static encryptData(data: string): string {
    try {
      return CryptoJS.AES.encrypt(data, this.ENCRYPTION_KEY).toString();
    } catch (error) {
      console.error('Encryption failed:', error);
      return data;
    }
  }

  // Decrypt sensitive data
  static decryptData(encryptedData: string): string {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, this.ENCRYPTION_KEY);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error('Decryption failed:', error);
      return encryptedData;
    }
  }

  // Generate secure random IDs
  static generateSecureId(): string {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2);
    return `${timestamp}_${randomPart}`;
  }

  // Validate file uploads (if implemented)
  static validateFileUpload(file: File): boolean {
    const allowedTypes = ['text/plain', 'application/json'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      throw new Error('Invalid file type');
    }

    if (file.size > maxSize) {
      throw new Error('File too large');
    }

    return true;
  }

  // Rate limiting for API calls
  private static rateLimitMap = new Map<string, number[]>();

  static checkRateLimit(identifier: string, maxRequests: number = 10, windowMs: number = 60000): boolean {
    const now = Date.now();
    const windowStart = now - windowMs;
    
    if (!this.rateLimitMap.has(identifier)) {
      this.rateLimitMap.set(identifier, []);
    }

    const requests = this.rateLimitMap.get(identifier)!;
    
    // Remove old requests outside the window
    const validRequests = requests.filter(time => time > windowStart);
    
    if (validRequests.length >= maxRequests) {
      return false; // Rate limit exceeded
    }

    validRequests.push(now);
    this.rateLimitMap.set(identifier, validRequests);
    
    return true;
  }

  // Content Security Policy headers (for production)
  static getCSPHeaders(): Record<string, string> {
    return {
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' https://apis.google.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https:",
        "connect-src 'self' https://api.firebase.com https://*.firebaseio.com",
        "frame-src 'self' https://accounts.google.com"
      ].join('; '),
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    };
  }

  // Secure localStorage wrapper
  static secureStorage = {
    setItem: (key: string, value: string): void => {
      try {
        const encryptedValue = SecurityManager.encryptData(value);
        localStorage.setItem(key, encryptedValue);
      } catch (error) {
        console.error('Secure storage set failed:', error);
      }
    },

    getItem: (key: string): string | null => {
      try {
        const encryptedValue = localStorage.getItem(key);
        if (!encryptedValue) return null;
        return SecurityManager.decryptData(encryptedValue);
      } catch (error) {
        console.error('Secure storage get failed:', error);
        return null;
      }
    },

    removeItem: (key: string): void => {
      localStorage.removeItem(key);
    }
  };
}