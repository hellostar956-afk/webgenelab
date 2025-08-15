import React, { useState } from 'react';
import { Dna, Shield, Users, Globe, Microscope, FlaskConical } from 'lucide-react';
import Login from './Login';
import Signup from './Signup';
import { useAuth } from './AuthContext';

interface AuthGateProps {
  children: React.ReactNode;
}

export default function AuthGate({ children }: AuthGateProps) {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (currentUser) {
    return <>{children}</>;
  }

  if (!showAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  <Dna className="w-16 h-16 text-white" />
                </div>
              </div>
              <h1 className="text-6xl font-bold text-white mb-6">
                GeneEdit Pro
              </h1>
              <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Advanced Genetic Engineering Platform
              </p>
              <p className="text-xl text-blue-200 mb-12 max-w-4xl mx-auto">
                Explore, experiment, and innovate with our comprehensive genetic engineering simulation platform. 
                Access 5000+ genes from diverse organisms and conduct safe virtual experiments.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <button 
                  onClick={() => {
                    setAuthMode('signup');
                    setShowAuth(true);
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Users className="w-6 h-6" />
                  <span>Get Started Free</span>
                </button>
                <button 
                  onClick={() => {
                    setAuthMode('login');
                    setShowAuth(true);
                  }}
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
                >
                  Sign In
                </button>
              </div>

              {/* Security Features */}
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Secure & Private</h3>
                  <p className="text-blue-100">Your research data is protected with enterprise-grade security</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Global Access</h3>
                  <p className="text-blue-100">Access your experiments from anywhere with cloud synchronization</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Microscope className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Research Grade</h3>
                  <p className="text-blue-100">Scientifically accurate data and realistic simulation models</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="bg-white/5 backdrop-blur-sm py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose GeneEdit Pro?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                The most comprehensive genetic engineering platform with cutting-edge features
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">5000+ Genes</h3>
                <p className="text-blue-100 text-sm">Comprehensive database including your favorite sunflower genes</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Virus Protection</h3>
                <p className="text-blue-100 text-sm">Advanced security measures protect against malware</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Library</h3>
                <p className="text-blue-100 text-sm">Private workspace for your experiments and discoveries</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Verification</h3>
                <p className="text-blue-100 text-sm">Secure account creation with OTP verification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (authMode === 'login') {
    return (
      <Login 
        onSwitchToSignup={() => setAuthMode('signup')}
        onBack={() => setShowAuth(false)}
      />
    );
  }

  return (
    <Signup 
      onSwitchToLogin={() => setAuthMode('login')}
      onBack={() => setShowAuth(false)}
    />
  );
}