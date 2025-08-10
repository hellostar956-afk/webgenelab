import { useState } from 'react';
import Header from './components/header';
import GeneDatabase from './components/gene-database';
import VirtualLab from './components/virtual-lab';

export default function App() {
  const [activeTab, setActiveTab] = useState('database'); // Default to Gene Database

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-7xl mx-auto p-4">
        {activeTab === 'database' && <GeneDatabase />}
        {activeTab === 'lab' && <VirtualLab />}
      </main>
    </div>
  );
}
