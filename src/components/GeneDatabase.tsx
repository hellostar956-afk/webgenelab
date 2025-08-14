import React, { useState, useMemo } from 'react';
import { Search, Filter, Plus, Eye, Dna, FlaskConical, BookOpen, X } from 'lucide-react';
import { geneDatabase, Gene } from '../data/geneDatabase';
import { useAuth } from './Auth/AuthContext';

interface GeneDatabaseProps {
  selectedGenes: Gene[];
  setSelectedGenes: (genes: Gene[]) => void;
  setActiveTab: (tab: string) => void;
  setShowDNA: (show: boolean) => void;
}

export default function GeneDatabase({ selectedGenes, setSelectedGenes, setActiveTab, setShowDNA }: GeneDatabaseProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrganism, setSelectedOrganism] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const { currentUser } = useAuth();

  // Get unique organisms and types for filters
  const organisms = useMemo(() => {
    const uniqueOrganisms = [...new Set(geneDatabase.map(gene => gene.organism))];
    return uniqueOrganisms.sort();
  }, []);

  const types = useMemo(() => {
    const uniqueTypes = [...new Set(geneDatabase.map(gene => gene.type))];
    return uniqueTypes.sort();
  }, []);

  // Filter genes based on search and filters
  const filteredGenes = useMemo(() => {
    return geneDatabase.filter(gene => {
      const matchesSearch = searchTerm === '' || 
        gene.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gene.function.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gene.organism.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (gene.commonName && gene.commonName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        gene.properties.some(prop => prop.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesOrganism = selectedOrganism === '' || gene.organism === selectedOrganism;
      const matchesType = selectedType === '' || gene.type === selectedType;

      return matchesSearch && matchesOrganism && matchesType;
    });
  }, [searchTerm, selectedOrganism, selectedType]);

  const toggleGeneSelection = (gene: Gene) => {
    const isSelected = selectedGenes.some(g => g.id === gene.id);
    if (isSelected) {
      setSelectedGenes(selectedGenes.filter(g => g.id !== gene.id));
    } else {
      setSelectedGenes([...selectedGenes, gene]);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedOrganism('');
    setSelectedType('');
  };

  const goToLab = () => {
    if (selectedGenes.length > 0) {
      setActiveTab('lab');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Gene Database</h1>
              <p className="text-gray-600">Explore 5000+ genes from diverse organisms for genetic engineering</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{geneDatabase.length}+</div>
              <div className="text-sm text-gray-500">Genes Available</div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search genes, organisms, or functions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>

            {showFilters && (
              <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organism</label>
                    <select
                      value={selectedOrganism}
                      onChange={(e) => setSelectedOrganism(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">All Organisms</option>
                      {organisms.map(organism => (
                        <option key={organism} value={organism}>{organism}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gene Type</label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">All Types</option>
                      {types.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={clearFilters}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Selected Genes Summary */}
          {selectedGenes.length > 0 && (
            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-blue-900">Selected Genes ({selectedGenes.length})</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedGenes.map(gene => (
                      <span key={gene.id} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm flex items-center space-x-1">
                        <span>{gene.name}</span>
                        <button
                          onClick={() => toggleGeneSelection(gene)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowDNA(true)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <Dna className="w-4 h-4" />
                    <span>3D DNA</span>
                  </button>
                  <button
                    onClick={goToLab}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <FlaskConical className="w-4 h-4" />
                    <span>Go to Lab</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Gene Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGenes.map((gene) => {
            const isSelected = selectedGenes.some(g => g.id === gene.id);
            return (
              <div
                key={gene.id}
                className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all border-2 cursor-pointer ${
                  isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => toggleGeneSelection(gene)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{gene.name}</h3>
                    <button
                      className={`p-2 rounded-lg transition-colors ${
                        isSelected 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {isSelected ? <Eye className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{gene.function}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Organism:</span>
                      <span className="text-gray-900 font-medium">
                        {gene.commonName ? `${gene.commonName}` : gene.organism}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Type:</span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                        {gene.type}
                      </span>
                    </div>
                    {gene.location && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Location:</span>
                        <span className="text-gray-700 text-xs">{gene.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="text-xs text-gray-500 mb-1 block">Properties:</span>
                      <div className="flex flex-wrap gap-1">
                        {gene.properties.slice(0, 3).map((property, index) => (
                          <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                            {property}
                          </span>
                        ))}
                        {gene.properties.length > 3 && (
                          <span className="text-xs text-gray-500">+{gene.properties.length - 3} more</span>
                        )}
                      </div>
                    </div>

                    {gene.applications && gene.applications.length > 0 && (
                      <div>
                        <span className="text-xs text-gray-500 mb-1 block">Applications:</span>
                        <div className="flex flex-wrap gap-1">
                          {gene.applications.slice(0, 2).map((app, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              {app}
                            </span>
                          ))}
                          {gene.applications.length > 2 && (
                            <span className="text-xs text-gray-500">+{gene.applications.length - 2} more</span>
                          )}
                        </div>
                      </div>
                    )}

                    {gene.diseases && gene.diseases.length > 0 && (
                      <div>
                        <span className="text-xs text-gray-500 mb-1 block">Related Diseases:</span>
                        <div className="flex flex-wrap gap-1">
                          {gene.diseases.slice(0, 2).map((disease, index) => (
                            <span key={index} className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                              {disease}
                            </span>
                          ))}
                          {gene.diseases.length > 2 && (
                            <span className="text-xs text-gray-500">+{gene.diseases.length - 2} more</span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredGenes.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No genes found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}