import React, { useState } from 'react';
import { FlaskConical, Scissors, RotateCcw, Play, Save, AlertTriangle, CheckCircle, Zap, Beaker, Dna as Dna2, ArrowRight } from 'lucide-react';
import { Gene } from '../data/geneDatabase';
import { useAuth } from './Auth/AuthContext';

interface VirtualLabProps {
  selectedGenes: Gene[];
  setActiveTab: (tab: string) => void;
}

interface ExperimentResult {
  success: boolean;
  newOrganism: string;
  properties: string[];
  risks: string[];
  viability: number;
  id: string;
  dateCreated: string;
  genes: string[];
}

export default function VirtualLab({ selectedGenes, setActiveTab }: VirtualLabProps) {
  const [experimentStage, setExperimentStage] = useState<'preparation' | 'editing' | 'results'>('preparation');
  const [editedGenes, setEditedGenes] = useState<Gene[]>([]);
  const [draggedGene, setDraggedGene] = useState<Gene | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [result, setResult] = useState<ExperimentResult | null>(null);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  const { currentUser } = useAuth();

  const startEditing = () => {
    setEditedGenes([...selectedGenes]);
    setExperimentStage('editing');
  };

  const simulateExperiment = () => {
    setIsSimulating(true);
    
    // Simulate realistic genetic engineering outcomes
    setTimeout(() => {
      const viability = Math.max(0.3, Math.random());
      const hasRisks = Math.random() < 0.4;
    
      const combinedProperties = editedGenes.reduce((acc, gene) => {
        return [...acc, ...gene.properties];
      }, [] as string[]);

      const uniqueProperties = [...new Set(combinedProperties)];
    
      const risks = hasRisks ? [
        'Potential immune response',
        'Unknown protein interactions',
        'Regulatory approval required',
        'Off-target effects possible',
        'Long-term stability unknown'
      ] : [];

      const newResult: ExperimentResult = {
        success: viability > 0.5,
        newOrganism: `Engineered ${editedGenes[0]?.organism || 'Organism'}`,
        properties: uniqueProperties,
        risks: risks,
        viability: Math.round(viability * 100),
        id: `exp_${Date.now()}`,
        dateCreated: new Date().toISOString().split('T')[0],
        genes: editedGenes.map(gene => gene.name)
      };

      setResult(newResult);
      setIsSimulating(false);
      setExperimentStage('results');
    }, 3000);
  };

  const resetExperiment = () => {
    setExperimentStage('preparation');
    setEditedGenes([]);
    setResult(null);
  };

  const saveToLibrary = () => {
    if (result) {
      // Get user-specific experiments from localStorage
      const userKey = `savedExperiments_${currentUser?.uid || 'anonymous'}`;
      const existingExperiments = JSON.parse(localStorage.getItem(userKey) || '[]');
      
      // Create new experiment object
      const newExperiment = {
        id: result.id,
        name: result.newOrganism,
        organism: result.newOrganism,
        genes: result.genes,
        viability: result.viability,
        dateCreated: result.dateCreated,
        properties: result.properties,
        type: result.success ? 'success' : (result.viability > 30 ? 'partial' : 'failed'),
        risks: result.risks
      };
      
      // Add to experiments array
      existingExperiments.push(newExperiment);
      
      // Save back to user-specific localStorage
      localStorage.setItem(userKey, JSON.stringify(existingExperiments));
      
      // Show success message
      setShowSaveSuccess(true);
      setTimeout(() => setShowSaveSuccess(false), 3000);
    }
  };
  const handleDragStart = (gene: Gene) => {
    setDraggedGene(gene);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedGene) {
      // Simulate gene combination/editing
      console.log('Gene editing simulation:', draggedGene);
      setDraggedGene(null);
    }
  };

  if (selectedGenes.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FlaskConical className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Genes Selected</h2>
          <p className="text-gray-600 mb-6">Select genes from the database to start your experiment</p>
          <button
            onClick={() => setActiveTab('database')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Go to Gene Database
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Lab Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Virtual Genetic Engineering Lab</h1>
              <p className="text-gray-600">Conduct safe, simulated genetic modifications with accurate scientific modeling</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={resetExperiment}
                className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>

        {/* Experiment Progress */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-center space-x-8">
            <div className={`flex items-center space-x-2 ${experimentStage === 'preparation' ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${experimentStage === 'preparation' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                1
              </div>
              <span className="font-medium">Preparation</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 rounded">
              <div className={`h-1 rounded transition-all duration-500 ${experimentStage !== 'preparation' ? 'bg-blue-600 w-full' : 'bg-gray-200 w-0'}`}></div>
            </div>
            <div className={`flex items-center space-x-2 ${experimentStage === 'editing' ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${experimentStage === 'editing' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                2
              </div>
              <span className="font-medium">Gene Editing</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 rounded">
              <div className={`h-1 rounded transition-all duration-500 ${experimentStage === 'results' ? 'bg-blue-600 w-full' : 'bg-gray-200 w-0'}`}></div>
            </div>
            <div className={`flex items-center space-x-2 ${experimentStage === 'results' ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${experimentStage === 'results' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                3
              </div>
              <span className="font-medium">Results</span>
            </div>
          </div>
        </div>

        {/* Preparation Stage */}
        {experimentStage === 'preparation' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Selected Genes for Modification</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedGenes.map((gene) => (
                  <div key={gene.id} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">{gene.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{gene.function}</p>
                    <div className="mt-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {gene.organism}{gene.commonName ? ` (${gene.commonName})` : ''}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {gene.properties.map((prop, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {prop}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={startEditing}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg flex items-center space-x-2 mx-auto transition-colors"
                >
                  <Scissors className="w-5 h-5" />
                  <span>Start Gene Editing</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Editing Stage */}
        {experimentStage === 'editing' && (
          <div className="space-y-6">
            {isSimulating && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center justify-center space-x-3">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <span className="text-blue-800 font-medium">Running CRISPR simulation...</span>
                </div>
                <div className="mt-4 bg-blue-100 rounded-lg p-4">
                  <div className="text-sm text-blue-700 space-y-1">
                    <p>• Designing guide RNAs...</p>
                    <p>• Calculating off-target effects...</p>
                    <p>• Simulating protein interactions...</p>
                    <p>• Analyzing phenotypic outcomes...</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Gene Editing Workspace</h2>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-medium text-gray-900 mb-2">CRISPR-Cas9 Editing Simulation</h3>
                <p className="text-sm text-gray-600">
                  Simulating precise gene editing using CRISPR technology. The system will model realistic outcomes based on current scientific understanding.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Target Genes</h4>
                  <div className="space-y-3">
                    {editedGenes.map((gene, index) => (
                      <div 
                        key={gene.id} 
                        className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 cursor-move hover:bg-gray-100 transition-colors"
                        draggable
                        onDragStart={() => handleDragStart(gene)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Dna2 className="w-4 h-4 text-blue-600" />
                            <span className="font-medium">{gene.name}</span>
                          </div>
                          <span className="text-sm text-gray-500">#{index + 1}</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">
                          {gene.organism}{gene.commonName ? ` (${gene.commonName})` : ''}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {gene.properties.slice(0, 2).map((prop, propIndex) => (
                            <span key={propIndex} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                              {prop}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center py-4">
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </div>

                <div 
                  className="border-2 border-dashed border-green-300 rounded-lg p-8 bg-green-50 text-center"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <Beaker className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <p className="text-green-700 font-medium">Drag genes here to combine</p>
                  <p className="text-green-600 text-sm">CRISPR editing zone</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Editing Tools</h4>
                  <div className="space-y-2">
                    <div className="bg-green-100 text-green-800 p-3 rounded-lg text-sm">
                      <strong>CRISPR-Cas9:</strong> Precision gene cutting and editing
                    </div>
                    <div className="bg-blue-100 text-blue-800 p-3 rounded-lg text-sm">
                      <strong>DNA Ligase:</strong> Joining genetic sequences
                    </div>
                    <div className="bg-purple-100 text-purple-800 p-3 rounded-lg text-sm">
                      <strong>Plasmid Vectors:</strong> Gene delivery system
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={simulateExperiment}
                  disabled={isSimulating}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg flex items-center space-x-2 mx-auto transition-colors"
                >
                  {isSimulating ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : <Play className="w-5 h-5" />}
                  <span>{isSimulating ? 'Simulating...' : 'Run Simulation'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Results Stage */}
        {experimentStage === 'results' && result && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-6">
                {result.success ? (
                  <CheckCircle className="w-8 h-8 text-green-500" />
                ) : (
                  <AlertTriangle className="w-8 h-8 text-yellow-500" />
                )}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Experiment Results</h2>
                  <p className="text-gray-600">
                    {result.success ? 'Successful genetic modification' : 'Modification with limitations'}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">New Organism Properties</h3>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-2">{result.newOrganism}</h4>
                    <div className="space-y-2">
                      {result.properties.map((property, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-green-800">{property}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Viability Score</span>
                      <span className="text-sm font-medium text-gray-900">{result.viability}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          result.viability >= 70 ? 'bg-green-500' : 
                          result.viability >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${result.viability}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Risk Assessment</h3>
                  {result.risks.length > 0 ? (
                    <div className="bg-yellow-50 rounded-lg p-4">
                      {result.risks.map((risk, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-yellow-800">{risk}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-800">Low risk modification</span>
                      </div>
                    </div>
                  )}

                  <div className="mt-4">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                      <Save className="w-4 h-4" />
                      <span>Save to Library</span>
                    </button>
                    
                    <button 
                      onClick={saveToLibrary}
                      className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save to My Library</span>
                    </button>
                    
                    {showSaveSuccess && (
                      <div className="mt-2 bg-green-100 border border-green-400 text-green-700 px-3 py-2 rounded text-sm">
                        ✅ Experiment saved to library successfully!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}