// Advanced virus and malware protection utilities

export class VirusProtection {
  private static readonly SUSPICIOUS_PATTERNS = [
    /eval\s*\(/gi,
    /document\.write/gi,
    /innerHTML\s*=/gi,
    /javascript:/gi,
    /vbscript:/gi,
    /onload\s*=/gi,
    /onerror\s*=/gi,
    /onclick\s*=/gi,
    /<script/gi,
    /<iframe/gi,
    /base64/gi,
    /fromCharCode/gi,
    /unescape/gi,
    /setTimeout/gi,
    /setInterval/gi
  ];

  private static readonly MALICIOUS_EXTENSIONS = [
    '.exe', '.bat', '.cmd', '.com', '.pif', '.scr', '.vbs', '.js', '.jar'
  ];

  // Scan content for malicious patterns
  static scanContent(content: string): { safe: boolean; threats: string[] } {
    const threats: string[] = [];

    this.SUSPICIOUS_PATTERNS.forEach((pattern, index) => {
      if (pattern.test(content)) {
        threats.push(`Suspicious pattern detected: ${pattern.source}`);
      }
    });

    // Check for encoded content that might hide malicious code
    if (this.containsEncodedContent(content)) {
      threats.push('Potentially encoded malicious content detected');
    }

    // Check for unusual character sequences
    if (this.containsUnusualSequences(content)) {
      threats.push('Unusual character sequences detected');
    }

    return {
      safe: threats.length === 0,
      threats
    };
  }

  // Check for base64 or other encoding that might hide malicious content
  private static containsEncodedContent(content: string): boolean {
    // Check for base64 patterns
    const base64Pattern = /^[A-Za-z0-9+/]{4,}={0,2}$/;
    const words = content.split(/\s+/);
    
    let suspiciousEncodedCount = 0;
    words.forEach(word => {
      if (word.length > 20 && base64Pattern.test(word)) {
        suspiciousEncodedCount++;
      }
    });

    return suspiciousEncodedCount > 3;
  }

  // Check for unusual character sequences that might indicate obfuscation
  private static containsUnusualSequences(content: string): boolean {
    // Check for excessive special characters
    const specialCharCount = (content.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length;
    const totalLength = content.length;
    
    if (totalLength > 0 && (specialCharCount / totalLength) > 0.3) {
      return true;
    }

    // Check for repeated character patterns
    const repeatedPatterns = content.match(/(.)\1{10,}/g);
    if (repeatedPatterns && repeatedPatterns.length > 0) {
      return true;
    }

    return false;
  }

  // Validate file uploads for malicious content
  static validateFileUpload(file: File): Promise<{ safe: boolean; threats: string[] }> {
    return new Promise((resolve) => {
      // Check file extension
      const threats: string[] = [];
      const fileName = file.name.toLowerCase();
      
      this.MALICIOUS_EXTENSIONS.forEach(ext => {
        if (fileName.endsWith(ext)) {
          threats.push(`Potentially dangerous file extension: ${ext}`);
        }
      });

      // Check file size (unusually large files might be suspicious)
      if (file.size > 50 * 1024 * 1024) { // 50MB
        threats.push('File size exceeds safe limits');
      }

      // Read file content for scanning
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        if (content) {
          const contentScan = this.scanContent(content);
          threats.push(...contentScan.threats);
        }
        
        resolve({
          safe: threats.length === 0,
          threats
        });
      };

      reader.onerror = () => {
        resolve({
          safe: false,
          threats: ['Failed to read file for security scanning']
        });
      };

      reader.readAsText(file);
    });
  }

  // Real-time monitoring for suspicious activity
  static monitorActivity(): void {
    // Monitor for suspicious DOM modifications
    if (typeof window !== 'undefined') {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as Element;
                
                // Check for suspicious script injections
                if (element.tagName === 'SCRIPT') {
                  console.warn('Suspicious script injection detected');
                  element.remove();
                }

                // Check for suspicious iframe injections
                if (element.tagName === 'IFRAME') {
                  const src = element.getAttribute('src');
                  if (src && !this.isWhitelistedDomain(src)) {
                    console.warn('Suspicious iframe injection detected');
                    element.remove();
                  }
                }
              }
            });
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  // Check if domain is whitelisted
  private static isWhitelistedDomain(url: string): boolean {
    const whitelistedDomains = [
      'accounts.google.com',
      'apis.google.com',
      'firebase.google.com',
      'firebaseapp.com'
    ];

    try {
      const urlObj = new URL(url);
      return whitelistedDomains.some(domain => 
        urlObj.hostname === domain || urlObj.hostname.endsWith('.' + domain)
      );
    } catch {
      return false;
    }
  }

  // Initialize protection systems
  static initialize(): void {
    console.log('🛡️ Virus protection initialized');
    
    // Start activity monitoring
    this.monitorActivity();

    // Set up periodic security checks
    setInterval(() => {
      this.performSecurityCheck();
    }, 30000); // Check every 30 seconds

    // Override dangerous functions
    this.overrideDangerousFunctions();
  }

  // Perform periodic security checks
  private static performSecurityCheck(): void {
    // Check for suspicious global variables
    if (typeof window !== 'undefined') {
      const suspiciousGlobals = ['eval', 'Function', 'setTimeout', 'setInterval'];
      suspiciousGlobals.forEach(globalName => {
        if (window.hasOwnProperty(globalName)) {
          const originalFunction = (window as any)[globalName];
          if (typeof originalFunction === 'function') {
            // Monitor usage of these functions
            (window as any)[globalName] = function(...args: any[]) {
              console.warn(`Potentially dangerous function called: ${globalName}`);
              return originalFunction.apply(this, args);
            };
          }
        }
      });
    }
  }

  // Override dangerous functions with safer alternatives
  private static overrideDangerousFunctions(): void {
    if (typeof window !== 'undefined') {
      // Override eval to prevent code injection
      const originalEval = window.eval;
      window.eval = function(code: string) {
        console.warn('eval() usage detected - potential security risk');
        const scanResult = VirusProtection.scanContent(code);
        if (!scanResult.safe) {
          throw new Error('Malicious code detected in eval()');
        }
        return originalEval(code);
      };

      // Override Function constructor
      const originalFunction = window.Function;
      window.Function = function(...args: string[]) {
        console.warn('Function constructor usage detected');
        const code = args.join(' ');
        const scanResult = VirusProtection.scanContent(code);
        if (!scanResult.safe) {
          throw new Error('Malicious code detected in Function constructor');
        }
        return originalFunction.apply(this, args);
      } as any;
    }
  }
}