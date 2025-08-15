import React from 'react';
import { useState } from 'react';
import GeneDatabase from './components/GeneDatabase';
import GeneLibrary from './components/GeneLibrary';
import DNAVisualization from './DNAVisualization';
import VirtualLab from './components/VirtualLab';
import HomePage from './components/HomePage';
import Header from './components/Header';
import { AuthProvider } from './components/Auth/AuthContext';
import AuthGate from './components/Auth/AuthGate';
import { useAuth } from './components/Auth/AuthContext';
import { Database, BookOpen, Dna, X } from 'lucide-react';

interface Gene {
  id: string;
  name: string;
  function: string;
  organism: string;
  location: string;
  type: string;
  properties: string[];
  sequence?: string;
  diseases?: string[];
  applications?: string[];
}

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedGenes, setSelectedGenes] = useState<Gene[]>([]);
  const [showDNA, setShowDNA] = useState(false);
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main>
        {activeTab === 'home' && <HomePage setActiveTab={setActiveTab} />}
        {activeTab === 'database' && (
          <GeneDatabase 
            selectedGenes={selectedGenes} 
            setSelectedGenes={setSelectedGenes}
            setActiveTab={setActiveTab}
            setShowDNA={setShowDNA}
          />
        )}
        {activeTab === 'lab' && (
          <VirtualLab 
            selectedGenes={selectedGenes}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === 'library' && <GeneLibrary />}
      </main>

      {/* DNA 3D Visualization Modal */}
      {showDNA && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-5/6 flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-900">3D DNA Structure Visualization</h2>
              <button
                onClick={() => setShowDNA(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1">
              <DNAVisualization selectedGenes={selectedGenes.map(g => g.name)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AuthGate>
        <AppContent />
      </AuthGate>
    </AuthProvider>
  );
}

export default App;