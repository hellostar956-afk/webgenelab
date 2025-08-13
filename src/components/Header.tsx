import React from 'react';
import { Dna, Search, FlaskConical, BookOpen, Share2, LogOut, User } from 'lucide-react';
import { useAuth } from './Auth/AuthContext';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const { currentUser, logout } = useAuth();
  
  const tabs = [
    { id: 'home', label: 'Home', icon: Dna },
    { id: 'database', label: 'Gene Database', icon: Search },
    { id: 'lab', label: 'Virtual Lab', icon: FlaskConical },
    { id: 'library', label: 'My Library', icon: BookOpen },
  ];

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2 rounded-lg">
              <Dna className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">GeneEdit Pro</h1>
              <p className="text-blue-100 text-sm">Advanced Genetic Engineering Platform</p>
            </div>
          </div>
          
          <nav className="flex space-x-1">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === id
                    ? 'bg-white/20 text-white'
                    : 'text-blue-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-blue-100">
              <User className="w-4 h-4" />
              <span className="text-sm">{currentUser?.email}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}