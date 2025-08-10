import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import GeneDatabase from './components/GeneDatabase';
import VirtualLab from './components/VirtualLab';
import GeneLibrary from './components/GeneLibrary';

interface Gene {
  id: string;
  name: string;
  function: string;
  organism: string;
  location: string;
  type: string;
  properties: string[];
}

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedGenes, setSelectedGenes] = useState<Gene[]>([]);

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
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderActiveTab()}
    </div>
  );
}

export default App;
