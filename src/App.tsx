import React, { useState } from 'react';
import { AuthProvider, useAuth } from './components/Auth/AuthContext';
import AuthGate from './components/Auth/AuthGate';
import Header from './components/Header';
import HomePage from './components/HomePage';
import GeneDatabase from './components/GeneDatabase';
import VirtualLab from './components/VirtualLab';
import GeneLibrary from './components/GeneLibrary';
import { Gene } from './data/geneDatabase';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedGenes, setSelectedGenes] = useState<Gene[]>([]);
  const { currentUser } = useAuth();

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage setActiveTab={setActiveTab} />;
      case 'database':
        return <GeneDatabase selectedGenes={selectedGenes} setSelectedGenes={setSelectedGenes} setActiveTab={setActiveTab} />;
      case 'lab':
        return <VirtualLab selectedGenes={selectedGenes} setActiveTab={setActiveTab} />;
      case 'library':
        return <GeneLibrary />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  if (!currentUser) {
    return null; // This will be handled by AuthGate
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderActiveTab()}
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
