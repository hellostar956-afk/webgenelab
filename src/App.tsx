import React from 'react';
import { useState } from 'react';
import GeneDatabase from './GeneDatabase';
import GeneLibrary from './GeneLibrary';
import DNAVisualization from './DNAVisualization';
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

function App() {
  const [activeTab, setActiveTab] = useState('database');
  const [selectedGenes, setSelectedGenes] = useState<Gene[]>([]);
  const [showDNA, setShowDNA] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Dna className="w-8 h-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">GeneForge Laboratory</h1>
            </div>
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab('database')}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                  activeTab === 'database' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Database className="w-4 h-4" />
                <span>Gene Database</span>
              </button>
              <button
                onClick={() => setActiveTab('library')}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                  activeTab === 'library' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>My Library</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {activeTab === 'database' && (
          <GeneDatabase 
            selectedGenes={selectedGenes} 
            setSelectedGenes={setSelectedGenes}
            setActiveTab={setActiveTab}
            setShowDNA={setShowDNA}
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

export default App;
