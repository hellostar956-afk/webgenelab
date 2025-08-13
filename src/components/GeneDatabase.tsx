import React, { useState } from 'react';
import { Search, Filter, MapPin, Dna, Info, Plus, ExternalLink, BookOpen } from 'lucide-react';
import { geneDatabase, Gene } from '../data/geneDatabase';

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

const expandedGenes: Gene[] = [
  // Human Genes
  {
    id: '1',
    name: 'BRCA1',
    function: 'DNA damage repair and tumor suppression',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 17q21.31',
    type: 'Tumor suppressor',
    properties: ['DNA repair', 'Cell cycle checkpoint', 'Transcriptional regulation'],
    diseases: ['Breast cancer', 'Ovarian cancer'],
    applications: ['Cancer research', 'Genetic testing']
  },
  {
    id: '2',
    name: 'TP53',
    function: 'Guardian of the genome - prevents cancer formation',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 17p13.1',
    type: 'Tumor suppressor',
    properties: ['Apoptosis regulation', 'Cell cycle arrest', 'DNA damage response'],
    diseases: ['Li-Fraumeni syndrome', 'Various cancers'],
    applications: ['Cancer therapy', 'Drug development']
  },
  {
    id: '3',
    name: 'Insulin (INS)',
    function: 'Blood glucose regulation hormone',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 11p15.5',
    type: 'Hormone',
    properties: ['Glucose metabolism', 'Cell signaling', 'Growth regulation'],
    diseases: ['Type 1 diabetes', 'Type 2 diabetes'],
    applications: ['Diabetes treatment', 'Metabolic research']
  },
  {
    id: '4',
    name: 'Hemoglobin Beta (HBB)',
    function: 'Oxygen transport protein',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 11p15.4',
    type: 'Transport protein',
    properties: ['Oxygen binding', 'Iron coordination', 'Quaternary structure'],
    diseases: ['Sickle cell anemia', 'Beta-thalassemia'],
    applications: ['Blood disorder research', 'Gene therapy']
  },
  {
    id: '5',
    name: 'CFTR',
    function: 'Chloride channel regulation',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 7q31.2',
    type: 'Ion channel',
    properties: ['Chloride transport', 'Membrane protein', 'ATP-binding'],
    diseases: ['Cystic fibrosis'],
    applications: ['CF treatment', 'Ion channel research']
  },
  
  // Model Organisms
  {
    id: '6',
    name: 'GFP',
    function: 'Green fluorescent protein for bioluminescence',
    organism: 'Aequorea victoria (Crystal Jellyfish)',
    location: 'Jellyfish photophore cells',
    type: 'Fluorescent protein',
    properties: ['Bioluminescence', 'Protein folding', 'Chromophore formation'],
    applications: ['Protein tagging', 'Cell imaging', 'Biotechnology']
  },
  {
    id: '7',
    name: 'lacZ',
    function: 'Beta-galactosidase enzyme for lactose metabolism',
    organism: 'Escherichia coli (E. coli Bacteria)',
    location: 'lac operon',
    type: 'Enzyme',
    properties: ['Lactose hydrolysis', 'Blue-white screening', 'Inducible expression'],
    applications: ['Cloning vectors', 'Gene expression studies']
  },
  {
    id: '8',
    name: 'p53 (Drosophila)',
    function: 'Tumor suppressor and DNA damage response',
    organism: 'Drosophila melanogaster (Fruit Fly)',
    location: 'Chromosome 3L',
    type: 'Tumor suppressor',
    properties: ['Apoptosis', 'Cell cycle control', 'DNA repair'],
    applications: ['Cancer research', 'Aging studies']
  },
  
  // Agricultural Genes
  {
    id: '9',
    name: 'Bt toxin (Cry1Ab)',
    function: 'Insecticidal crystal protein',
    organism: 'Bacillus thuringiensis (Bt Bacteria)',
    location: 'Bacterial spores',
    type: 'Toxin protein',
    properties: ['Insect resistance', 'Pore formation', 'Species-specific toxicity'],
    applications: ['Crop protection', 'Biopesticides', 'GMO crops']
  },
  {
    id: '10',
    name: 'EPSPS',
    function: 'Enzyme in aromatic amino acid biosynthesis',
    organism: 'Agrobacterium tumefaciens (Crown Gall Bacteria)',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Glyphosate resistance', 'Amino acid synthesis', 'Metabolic pathway'],
    applications: ['Herbicide resistance', 'Agricultural biotechnology']
  },
  
  // Marine Organisms
  {
    id: '11',
    name: 'Luciferase',
    function: 'Enzyme producing bioluminescence',
    organism: 'Photinus pyralis (Firefly)',
    location: 'Firefly lantern',
    type: 'Enzyme',
    properties: ['ATP-dependent', 'Light emission', 'Oxidative reaction'],
    applications: ['Reporter gene', 'ATP detection', 'Imaging']
  },
  {
    id: '12',
    name: 'Antifreeze protein',
    function: 'Prevents ice crystal formation',
    organism: 'Pseudopleuronectes americanus (Winter Flounder)',
    location: 'Blood and tissues',
    type: 'Structural protein',
    properties: ['Ice binding', 'Thermal hysteresis', 'Cryoprotection'],
    applications: ['Food preservation', 'Cryobiology', 'Agriculture']
  },
  
  // Plant Genes
  {
    id: '13',
    name: 'RuBisCO',
    function: 'Carbon dioxide fixation in photosynthesis',
    organism: 'Arabidopsis thaliana (Thale Cress)',
    location: 'Chloroplast',
    type: 'Enzyme',
    properties: ['CO2 fixation', 'Photosynthesis', 'Carbon metabolism'],
    applications: ['Climate change research', 'Crop improvement']
  },
  {
    id: '14',
    name: 'Phytoene synthase',
    function: 'Carotenoid biosynthesis enzyme',
    organism: 'Oryza sativa (Rice)',
    location: 'Plastids',
    type: 'Enzyme',
    properties: ['Vitamin A precursor', 'Carotenoid pathway', 'Nutritional enhancement'],
    applications: ['Golden rice', 'Nutritional improvement']
  },
  
  // Microbial Genes
  {
    id: '15',
    name: 'Cas9',
    function: 'RNA-guided DNA endonuclease',
    organism: 'Streptococcus pyogenes (Group A Strep)',
    location: 'CRISPR locus',
    type: 'Nuclease',
    properties: ['DNA cutting', 'RNA guidance', 'Programmable specificity'],
    applications: ['Gene editing', 'CRISPR technology', 'Therapeutics']
  },
  {
    id: '16',
    name: 'Taq polymerase',
    function: 'Thermostable DNA polymerase',
    organism: 'Thermus aquaticus (Hot Spring Bacteria)',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Heat stability', 'DNA synthesis', '5\' to 3\' exonuclease'],
    applications: ['PCR amplification', 'DNA sequencing', 'Diagnostics']
  },
  
  // Yeast Genes
  {
    id: '17',
    name: 'GAL4',
    function: 'Transcriptional activator for galactose metabolism',
    organism: 'Saccharomyces cerevisiae (Baker\'s Yeast)',
    location: 'Chromosome XVI',
    type: 'Transcription factor',
    properties: ['DNA binding', 'Transcriptional activation', 'Galactose response'],
    applications: ['Gene expression systems', 'Protein production']
  },
  {
    id: '18',
    name: 'URA3',
    function: 'Orotidine-5\'-phosphate decarboxylase',
    organism: 'Saccharomyces cerevisiae (Baker\'s Yeast)',
    location: 'Chromosome V',
    type: 'Enzyme',
    properties: ['Pyrimidine biosynthesis', 'Selectable marker', 'Essential gene'],
    applications: ['Yeast genetics', 'Cloning vectors']
  },
  
  // Viral Genes
  {
    id: '19',
    name: 'Spike protein',
    function: 'Viral entry and host cell binding',
    organism: 'SARS-CoV-2 (COVID-19 Virus)',
    location: 'Viral genome',
    type: 'Surface protein',
    properties: ['Receptor binding', 'Membrane fusion', 'Antigenic'],
    applications: ['Vaccine development', 'Antiviral research']
  },
  {
    id: '20',
    name: 'Reverse transcriptase',
    function: 'RNA-dependent DNA polymerase',
    organism: 'HIV-1 (Human Immunodeficiency Virus)',
    location: 'Viral genome',
    type: 'Enzyme',
    properties: ['RNA to DNA conversion', 'Retroviral replication', 'Error-prone'],
    applications: ['Antiviral targets', 'Molecular biology tools']
  },
  
  // Additional Human Genes
  {
    id: '21',
    name: 'APOE',
    function: 'Apolipoprotein E for lipid transport',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 19q13.32',
    type: 'Lipoprotein',
    properties: ['Cholesterol transport', 'Neuronal repair', 'Lipid metabolism'],
    diseases: ['Alzheimer\'s disease', 'Cardiovascular disease'],
    applications: ['Neurodegeneration research', 'Personalized medicine']
  },
  {
    id: '22',
    name: 'CRISPR-Cas12',
    function: 'RNA-guided DNA endonuclease with different PAM',
    organism: 'Acidaminococcus sp. (Acidaminococcus Bacteria)',
    location: 'CRISPR locus',
    type: 'Nuclease',
    properties: ['T-rich PAM', 'Single RNA guide', 'Sticky end cutting'],
    applications: ['Gene editing', 'Diagnostics', 'Therapeutics']
  },
  {
    id: '23',
    name: 'Myostatin (MSTN)',
    function: 'Muscle growth inhibitor',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 2q32.2',
    type: 'Growth factor',
    properties: ['Muscle development', 'TGF-β family', 'Negative regulation'],
    diseases: ['Muscle wasting', 'Muscular dystrophy'],
    applications: ['Muscle enhancement', 'Livestock improvement']
  },
  
  // Additional Organisms - Mammals
  {
    id: '24',
    name: 'Growth Hormone (GH)',
    function: 'Promotes growth and cell reproduction',
    organism: 'Bos taurus (Cattle)',
    location: 'Chromosome 19',
    type: 'Hormone',
    properties: ['Growth stimulation', 'Protein synthesis', 'Metabolic regulation'],
    applications: ['Livestock improvement', 'Dairy production', 'Growth studies']
  },
  {
    id: '25',
    name: 'Casein',
    function: 'Major milk protein',
    organism: 'Bos taurus (Cattle)',
    location: 'Chromosome 6',
    type: 'Structural protein',
    properties: ['Calcium binding', 'Nutritional protein', 'Micelle formation'],
    applications: ['Dairy industry', 'Nutrition research', 'Food technology']
  },
  {
    id: '26',
    name: 'Myoglobin',
    function: 'Oxygen storage in muscle tissue',
    organism: 'Sus scrofa (Pig)',
    location: 'Chromosome 2',
    type: 'Transport protein',
    properties: ['Oxygen storage', 'Heme binding', 'Muscle metabolism'],
    applications: ['Meat quality research', 'Exercise physiology']
  },
  {
    id: '27',
    name: 'Keratin',
    function: 'Structural protein in hair and wool',
    organism: 'Ovis aries (Sheep)',
    location: 'Chromosome 3',
    type: 'Structural protein',
    properties: ['Fiber strength', 'Water resistance', 'Thermal insulation'],
    applications: ['Textile industry', 'Biomaterials', 'Wool quality']
  },
  
  // Fish and Aquatic
  {
    id: '28',
    name: 'Rhodopsin',
    function: 'Light-sensitive protein for vision',
    organism: 'Danio rerio (Zebrafish)',
    location: 'Chromosome 11',
    type: 'Sensory protein',
    properties: ['Light detection', 'G-protein coupling', 'Visual transduction'],
    applications: ['Vision research', 'Developmental biology', 'Drug screening']
  },
  {
    id: '29',
    name: 'Collagen Type I',
    function: 'Major structural protein in connective tissue',
    organism: 'Salmo salar (Atlantic Salmon)',
    location: 'Chromosome 25',
    type: 'Structural protein',
    properties: ['Tensile strength', 'Tissue scaffolding', 'Wound healing'],
    applications: ['Aquaculture', 'Biomedicine', 'Tissue engineering']
  },
  
  // Birds
  {
    id: '30',
    name: 'Ovalbumin',
    function: 'Major egg white protein',
    organism: 'Gallus gallus (Chicken)',
    location: 'Chromosome Z',
    type: 'Storage protein',
    properties: ['Protein storage', 'Antimicrobial activity', 'Nutritional value'],
    applications: ['Poultry industry', 'Food science', 'Protein production']
  },
  {
    id: '31',
    name: 'Lysozyme',
    function: 'Antimicrobial enzyme in egg white',
    organism: 'Gallus gallus (Chicken)',
    location: 'Chromosome 1',
    type: 'Enzyme',
    properties: ['Bacterial cell wall degradation', 'Innate immunity', 'Food preservation'],
    applications: ['Food preservation', 'Antimicrobial research', 'Biotechnology']
  },
  
  // Insects
  {
    id: '32',
    name: 'Silk Fibroin',
    function: 'Structural protein in silk production',
    organism: 'Bombyx mori (Silkworm)',
    location: 'Chromosome 25',
    type: 'Structural protein',
    properties: ['High tensile strength', 'Biocompatibility', 'Biodegradability'],
    applications: ['Textile industry', 'Biomaterials', 'Medical sutures']
  },
  {
    id: '33',
    name: 'Chitin Synthase',
    function: 'Enzyme for chitin biosynthesis',
    organism: 'Apis mellifera (Honeybee)',
    location: 'Chromosome 11',
    type: 'Enzyme',
    properties: ['Exoskeleton formation', 'Structural support', 'Molting regulation'],
    applications: ['Pest control', 'Biomaterials', 'Chitin production']
  },
  
  // Plants - Crops
  {
    id: '34',
    name: 'Gluten',
    function: 'Storage protein complex in wheat',
    organism: 'Triticum aestivum (Wheat)',
    location: 'Chromosome 1A, 1B, 1D',
    type: 'Storage protein',
    properties: ['Dough elasticity', 'Protein storage', 'Bread quality'],
    diseases: ['Celiac disease', 'Gluten sensitivity'],
    applications: ['Food industry', 'Crop breeding', 'Nutrition research']
  },
  {
    id: '35',
    name: 'Zein',
    function: 'Storage protein in corn kernels',
    organism: 'Zea mays (Corn/Maize)',
    location: 'Chromosome 4',
    type: 'Storage protein',
    properties: ['Protein storage', 'Seed development', 'Nutritional quality'],
    applications: ['Food industry', 'Biodegradable plastics', 'Nutrition enhancement']
  },
  {
    id: '36',
    name: 'Caffeine Synthase',
    function: 'Enzyme for caffeine biosynthesis',
    organism: 'Coffea arabica (Coffee)',
    location: 'Chromosome 1c',
    type: 'Enzyme',
    properties: ['Alkaloid synthesis', 'Plant defense', 'Stimulant production'],
    applications: ['Beverage industry', 'Pharmaceutical research', 'Plant breeding']
  },
  
  // Fungi
  {
    id: '37',
    name: 'Penicillin Synthase',
    function: 'Enzyme for penicillin antibiotic production',
    organism: 'Penicillium chrysogenum (Penicillium Mold)',
    location: 'Chromosome VII',
    type: 'Enzyme',
    properties: ['Antibiotic synthesis', 'Beta-lactam formation', 'Antimicrobial activity'],
    applications: ['Antibiotic production', 'Pharmaceutical industry', 'Medical research']
  },
  {
    id: '38',
    name: 'Cellulase',
    function: 'Enzyme complex for cellulose degradation',
    organism: 'Trichoderma reesei (Trichoderma Fungus)',

interface GeneDatabaseProps {
  selectedGenes: Gene[];
  setSelectedGenes: React.Dispatch<React.SetStateAction<Gene[]>>;
  setActiveTab: (tab: string) => void;
}

export default function GeneDatabase({ selectedGenes, setSelectedGenes, setActiveTab }: GeneDatabaseProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterOrganism, setFilterOrganism] = useState('all');

  const organisms = [...new Set(geneDatabase.map(gene => `${gene.organism}${gene.commonName ? ` (${gene.commonName})` : ''}`))];
  const geneTypes = [...new Set(geneDatabase.map(gene => gene.type))];

  const filteredGenes = geneDatabase.filter(gene => {
    const displayName = `${gene.organism}${gene.commonName ? ` (${gene.commonName})` : ''}`;
    const matchesSearch = gene.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gene.function.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gene.properties.some(prop => prop.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTypeFilter = filterType === 'all' || gene.type === filterType;
    const matchesOrganismFilter = filterOrganism === 'all' || displayName === filterOrganism;
    return matchesSearch && matchesTypeFilter && matchesOrganismFilter;
  });

  const addToExperiment = (gene: Gene) => {
    if (!selectedGenes.find(g => g.id === gene.id)) {
      setSelectedGenes([...selectedGenes, gene]);
    }
  };

  const removeFromExperiment = (geneId: string) => {
    setSelectedGenes(selectedGenes.filter(g => g.id !== geneId));
  };

  const startExperiment = () => {
    if (selectedGenes.length > 0) {
      setActiveTab('lab');
    }
  };

  const clearSelection = () => {
    setSelectedGenes([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Comprehensive Gene Database</h1>
          <p className="text-gray-600">Search and explore genetic information from diverse organisms across all domains of life</p>
          <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center space-x-1">
              <BookOpen className="w-4 h-4" />
              <span>{geneDatabase.length} genes catalogued</span>
            </span>
            <span className="flex items-center space-x-1">
              <Dna className="w-4 h-4" />
              <span>{organisms.length} organisms</span>
            </span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search genes, organisms, functions, or properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Types</option>
                  {geneTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <Dna className="text-gray-400 w-5 h-5" />
                <select
                  value={filterOrganism}
                  onChange={(e) => setFilterOrganism(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[200px]"
                >
                  <option value="all">All Organisms</option>
                  {organisms.map(organism => (
                    <option key={organism} value={organism}>{organism}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Genes Panel */}
        {selectedGenes.length > 0 && (
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8 border border-green-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Selected Genes ({selectedGenes.length})</h3>
              <div className="flex space-x-3">
                <button
                  onClick={clearSelection}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={startExperiment}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <Dna className="w-4 h-4" />
                  <span>Start Experiment</span>
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedGenes.map(gene => (
                <span 
                  key={gene.id} 
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2 cursor-pointer hover:bg-green-200 transition-colors"
                  onClick={() => removeFromExperiment(gene.id)}
                >
                  <span>{gene.name}</span>
                  <span className="text-green-600 hover:text-green-800">×</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Gene Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredGenes.map(gene => (
            <div key={gene.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{gene.name}</h3>
                    <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                      {gene.type}
                    </span>
                  </div>
                  <button
                    onClick={() => addToExperiment(gene)}
                    disabled={selectedGenes.find(g => g.id === gene.id) !== undefined}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
                    title={selectedGenes.find(g => g.id === gene.id) ? "Already selected" : "Add to experiment"}
                  >
                    <Plus className="w-4 h-4" />
                  <span className="text-gray-700 text-sm font-medium">
                    {gene.organism}{gene.commonName ? ` (${gene.commonName})` : ''}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Info className="text-gray-400 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{gene.function}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Dna className="text-gray-400 w-4 h-4 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{gene.organism}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <MapPin className="text-gray-400 w-4 h-4 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{gene.location}</span>
                  </div>

                  {gene.diseases && gene.diseases.length > 0 && (
                    <div className="pt-2">
                      <p className="text-red-600 text-xs mb-2 font-medium">Associated Diseases:</p>
                      <div className="flex flex-wrap gap-1">
                        {gene.diseases.map((disease, index) => (
                          <span key={index} className="bg-red-50 text-red-700 px-2 py-1 rounded text-xs">
                            {disease}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {gene.applications && gene.applications.length > 0 && (
                    <div className="pt-2">
                      <p className="text-green-600 text-xs mb-2 font-medium">Applications:</p>
                      <div className="flex flex-wrap gap-1">
                        {gene.applications.map((app, index) => (
                          <span key={index} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <p className="text-gray-500 text-xs mb-2">Key Properties:</p>
                    <div className="flex flex-wrap gap-1">
                      {gene.properties.map((prop, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {prop}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGenes.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No genes found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Database Stats */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
          <h3 className="text-xl font-semibold mb-4">Database Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{geneDatabase.length}</div>
              <div className="text-blue-100 text-sm">Total Genes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{organisms.length}</div>
              <div className="text-blue-100 text-sm">Organisms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{geneTypes.length}</div>
              <div className="text-blue-100 text-sm">Gene Types</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-blue-100 text-sm">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}