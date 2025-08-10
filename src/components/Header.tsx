import React from 'react';
import { Dna, Search, FlaskConical, BookOpen, Share2 } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Dna },
    { id: 'database', label: 'Gene Database', icon: Search },
    { id: 'lab', label: 'Virtual Lab', icon: FlaskConical },
    { id: 'library', label: 'My Library', icon: BookOpen },
  ];

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
          
          <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </header>
  );
}