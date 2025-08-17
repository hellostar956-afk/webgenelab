import React, { useState, useEffect } from 'react';
import { BookOpen, Share2, Download, Trash2, Eye, Plus, Beaker, Copy, Check } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface SavedExperiment {
  id: string;
  name: string;
  organism: string;
  genes: string[];
  viability: number;
  dateCreated: string;
  properties: string[];
  type: 'success' | 'partial' | 'failed';
}

const sampleExperiments: SavedExperiment[] = [
  {
    id: '1',
    name: 'Luminescent E. coli',
    organism: 'Engineered Escherichia coli',
    genes: ['GFP', 'Luciferase'],
    viability: 85,
    dateCreated: '2024-12-15',
    properties: ['Bioluminescence', 'Fast reproduction', 'Laboratory safe'],
    type: 'success'
  },
  {
    id: '2',
    name: 'Insulin-producing Yeast',
    organism: 'Modified Saccharomyces cerevisiae',
    genes: ['Human Insulin', 'Proinsulin'],
    viability: 92,
    dateCreated: '2024-12-14',
    properties: ['Insulin production', 'Scalable fermentation', 'FDA approved pathway'],
    type: 'success'
  },
  {
    id: '3',
    name: 'Bt Cotton Enhancement',
    organism: 'Enhanced Gossypium hirsutum',
    genes: ['Bt toxin', 'Herbicide resistance'],
    viability: 78,
    dateCreated: '2024-12-13',
    properties: ['Insect resistance', 'Herbicide tolerance', 'Improved yield'],
    type: 'success'
  },
  {
    id: '4',
    name: 'Experimental Algae',
    organism: 'Modified Chlorella vulgaris',
    genes: ['Beta-carotene', 'Enhanced photosynthesis'],
    viability: 45,
    dateCreated: '2024-12-12',
    properties: ['High beta-carotene', 'CO2 absorption'],
    type: 'partial'
  }
];

export default function GeneLibrary() {
  const [experiments, setExperiments] = useState<SavedExperiment[]>(sampleExperiments);
  const [selectedExperiment, setSelectedExperiment] = useState<SavedExperiment | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Load experiments from localStorage on component mount
  useEffect(() => {
    try {
      // Get current user ID from auth context or localStorage
      const userId = localStorage.getItem('currentUserId') || 'anonymous';
      const userKey = `savedExperiments_${userId}`;
      const savedExperiments = JSON.parse(localStorage.getItem(userKey) || '[]');
      
      if (savedExperiments.length > 0) {
        // Combine sample experiments with user experiments, avoiding duplicates
        const combinedExperiments = [...sampleExperiments];
        savedExperiments.forEach((saved: SavedExperiment) => {
          if (!combinedExperiments.find(exp => exp.id === saved.id)) {
            combinedExperiments.push(saved);
          }
        });
        setExperiments(combinedExperiments);
      }
    } catch (error) {
      console.error('Failed to load experiments:', error);
      setExperiments(sampleExperiments);
    }
  }, []);

  const shareExperiment = async (experiment: SavedExperiment) => {
    const shareData = {
      title: `Gene Experiment: ${experiment.name}`,
      text: `Check out this genetic engineering experiment: ${experiment.name} with ${experiment.genes.join(', ')} genes. Viability: ${experiment.viability}%`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
        copyToClipboard(experiment);
      }
    } else {
      copyToClipboard(experiment);
    }
  };

  const copyToClipboard = (experiment: SavedExperiment) => {
    const shareText = `Gene Experiment: ${experiment.name}\nOrganism: ${experiment.organism}\nGenes: ${experiment.genes.join(', ')}\nViability: ${experiment.viability}%\nProperties: ${experiment.properties.join(', ')}`;
    
    navigator.clipboard.writeText(shareText).then(() => {
      setCopiedId(experiment.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const downloadExperiment = async (experiment: SavedExperiment) => {
    // Create a temporary div with experiment details
    const tempDiv = document.createElement('div');
    tempDiv.style.padding = '20px';
    tempDiv.style.backgroundColor = 'white';
    tempDiv.style.fontFamily = 'Arial, sans-serif';
    tempDiv.innerHTML = `
      <h1 style="color: #1f2937; margin-bottom: 20px;">${experiment.name}</h1>
      <div style="margin-bottom: 15px;">
        <strong>Organism:</strong> ${experiment.organism}
      </div>
      <div style="margin-bottom: 15px;">
        <strong>Viability:</strong> ${experiment.viability}%
      </div>
      <div style="margin-bottom: 15px;">
        <strong>Type:</strong> ${experiment.type}
      </div>
      <div style="margin-bottom: 15px;">
        <strong>Date Created:</strong> ${experiment.dateCreated}
      </div>
      <div style="margin-bottom: 15px;">
        <strong>Genes Used:</strong>
        <ul style="margin: 5px 0; padding-left: 20px;">
          ${experiment.genes.map(gene => `<li>${gene}</li>`).join('')}
        </ul>
      </div>
      <div style="margin-bottom: 15px;">
        <strong>Properties:</strong>
        <ul style="margin: 5px 0; padding-left: 20px;">
          ${experiment.properties.map(prop => `<li>${prop}</li>`).join('')}
        </ul>
      </div>
    `;
    
    document.body.appendChild(tempDiv);
    
    try {
      const canvas = await html2canvas(tempDiv);
      const imgData = canvas.toDataURL('image/png');
      
      // Create PDF
      const pdf = new jsPDF();
      const imgWidth = 190;
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      
      let position = 10;
      
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save(`${experiment.name.replace(/\s+/g, '_')}_experiment.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback: download as JSON
      const dataStr = JSON.stringify(experiment, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${experiment.name.replace(/\s+/g, '_')}_experiment.json`;
      link.click();
      URL.revokeObjectURL(url);
    } finally {
      document.body.removeChild(tempDiv);
    }
  };

  const deleteExperiment = (experimentId: string) => {
    // Remove from state
    const updatedExperiments = experiments.filter(exp => exp.id !== experimentId);
    setExperiments(updatedExperiments);
    
    // Update localStorage (only remove user-created experiments)
    const userKey = `savedExperiments_${localStorage.getItem('currentUserId') || 'anonymous'}`;
    const savedExperiments = JSON.parse(localStorage.getItem(userKey) || '[]');
    const updatedSaved = savedExperiments.filter((exp: SavedExperiment) => exp.id !== experimentId);
    localStorage.setItem(userKey, JSON.stringify(updatedSaved));
    
    // Clear selection if deleted experiment was selected
    if (selectedExperiment?.id === experimentId) {
      setSelectedExperiment(null);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'partial': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getViabilityColor = (viability: number) => {
    if (viability >= 70) return 'bg-green-500';
    if (viability >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Gene Library</h1>
              <p className="text-gray-600">Manage your saved genetic experiments and modifications</p>
            </div>
            <div className="flex space-x-3">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                <Plus className="w-4 h-4" />
                <span>New Experiment</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experiments List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Saved Experiments ({experiments.length})</h2>
            </div>

            {experiments.map((experiment) => (
              <div key={experiment.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{experiment.name}</h3>
                      <p className="text-gray-600 text-sm">{experiment.organism}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(experiment.type)}`}>
                      {experiment.type.charAt(0).toUpperCase() + experiment.type.slice(1)}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Modified Genes:</p>
                      <div className="flex flex-wrap gap-1">
                        {experiment.genes.map((gene, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {gene}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">Viability</span>
                        <span className="text-sm font-medium text-gray-900">{experiment.viability}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getViabilityColor(experiment.viability)}`}
                          style={{ width: `${experiment.viability}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm text-gray-500">Created: {experiment.dateCreated}</span>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => setSelectedExperiment(experiment)}
                          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => shareExperiment(experiment)}
                          className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors relative"
                          title="Share Experiment"
                        >
                          {copiedId === experiment.id ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                        </button>
                        <button 
                          onClick={() => downloadExperiment(experiment)}
                          className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors"
                          title="Download as PDF"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => deleteExperiment(experiment.id)}
                          className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
                          title="Delete Experiment"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experiment Details */}
          <div className="space-y-6">
            {selectedExperiment ? (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Experiment Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{selectedExperiment.name}</h4>
                    <p className="text-sm text-gray-600">{selectedExperiment.organism}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Properties</h4>
                    <div className="space-y-2">
                      {selectedExperiment.properties.map((property, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{property}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Genes Used</h4>
                    <div className="space-y-1">
                      {selectedExperiment.genes.map((gene, index) => (
                        <div key={index} className="bg-blue-50 text-blue-800 px-2 py-1 rounded text-sm">
                          {gene}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                      <Beaker className="w-4 h-4" />
                      <span>Clone Experiment</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Experiment Selected</h3>
                <p className="text-gray-600 text-sm">Click on an experiment to view details</p>
              </div>
            )}

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-4">Library Statistics</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Experiments:</span>
                  <span className="font-medium">{experiments.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Successful:</span>
                  <span className="font-medium">{experiments.filter(e => e.type === 'success').length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg. Viability:</span>
                  <span className="font-medium">
                    {Math.round(experiments.reduce((acc, e) => acc + e.viability, 0) / experiments.length)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}