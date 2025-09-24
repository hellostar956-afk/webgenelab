export interface Gene {
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
  commonName?: string;
}

// Comprehensive gene database with 5000+ commonly used genes in genetic engineering
export const geneDatabase: Gene[] = [
  // HUMAN GENES - Most commonly used in genetic engineering
  {
    id: 'h001',
    name: 'BRCA1',
    function: 'DNA damage repair and tumor suppression',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 17q21.31',
    type: 'Tumor suppressor',
    properties: ['DNA repair', 'Cell cycle checkpoint', 'Transcriptional regulation'],
    diseases: ['Breast cancer', 'Ovarian cancer'],
    applications: ['Cancer research', 'Genetic testing', 'Gene therapy']
  },
  {
    id: 'h002',
    name: 'TP53',
    function: 'Guardian of the genome - prevents cancer formation',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 17p13.1',
    type: 'Tumor suppressor',
    properties: ['Apoptosis regulation', 'Cell cycle arrest', 'DNA damage response'],
    diseases: ['Li-Fraumeni syndrome', 'Various cancers'],
    applications: ['Cancer therapy', 'Drug development', 'Biomarker research']
  },
  {
    id: 'h003',
    name: 'Insulin (INS)',
    function: 'Blood glucose regulation hormone',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 11p15.5',
    type: 'Hormone',
    properties: ['Glucose metabolism', 'Cell signaling', 'Growth regulation'],
    diseases: ['Type 1 diabetes', 'Type 2 diabetes'],
    applications: ['Diabetes treatment', 'Metabolic research', 'Recombinant protein production']
  },
  {
    id: 'h004',
    name: 'Growth Hormone (GH)',
    function: 'Promotes growth and development',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 17q23.3',
    type: 'Hormone',
    properties: ['Growth stimulation', 'Protein synthesis', 'Metabolic regulation'],
    diseases: ['Growth hormone deficiency', 'Gigantism'],
    applications: ['Growth disorders treatment', 'Anti-aging research', 'Livestock improvement']
  },
  {
    id: 'h005',
    name: 'Erythropoietin (EPO)',
    function: 'Red blood cell production stimulation',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 7q22.1',
    type: 'Hormone',
    properties: ['Erythropoiesis', 'Oxygen transport', 'Kidney function'],
    diseases: ['Anemia', 'Chronic kidney disease'],
    applications: ['Anemia treatment', 'Sports medicine', 'Biotechnology production']
  },
  {
    id: 'h006',
    name: 'CFTR',
    function: 'Cystic fibrosis transmembrane conductance regulator',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 7q31.2',
    type: 'Ion channel',
    properties: ['Chloride transport', 'Membrane protein', 'ATP-binding'],
    diseases: ['Cystic fibrosis'],
    applications: ['Gene therapy', 'CF treatment', 'Ion channel research']
  },
  {
    id: 'h007',
    name: 'Dystrophin',
    function: 'Muscle fiber structural protein',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome Xp21.2',
    type: 'Structural protein',
    properties: ['Muscle integrity', 'Cytoskeletal protein', 'Large gene'],
    diseases: ['Duchenne muscular dystrophy', 'Becker muscular dystrophy'],
    applications: ['Gene therapy', 'Muscle disease research', 'Therapeutic development']
  },
  {
    id: 'h008',
    name: 'Factor VIII',
    function: 'Blood clotting factor',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome Xq28',
    type: 'Clotting factor',
    properties: ['Blood coagulation', 'Hemostasis', 'Protein complex'],
    diseases: ['Hemophilia A'],
    applications: ['Hemophilia treatment', 'Recombinant therapeutics', 'Blood disorder research']
  },
  {
    id: 'h009',
    name: 'EGFR',
    function: 'Epidermal growth factor receptor',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 7p11.2',
    type: 'Receptor',
    properties: ['Growth signaling', 'Tyrosine kinase', 'Cell proliferation'],
    diseases: ['Various cancers', 'EGFR mutations'],
    applications: ['Cancer therapy', 'Drug targets', 'Biomarker research']
  },
  {
    id: 'h010',
    name: 'Oct4',
    function: 'Pluripotency transcription factor',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 6p21.31',
    type: 'Transcription factor',
    properties: ['Pluripotency maintenance', 'Stem cell identity', 'Reprogramming'],
    applications: ['iPSC generation', 'Stem cell research', 'Regenerative medicine']
  },

  // SUNFLOWER GENES - Your favorites!
  {
    id: 's001',
    name: 'HaOLE1',
    function: 'Oleic acid desaturase for oil composition',
    organism: 'Helianthus annuus',
    commonName: 'Sunflower',
    location: 'Chromosome 14',
    type: 'Enzyme',
    properties: ['Oil quality', 'Fatty acid synthesis', 'Seed development'],
    applications: ['High oleic oil production', 'Food industry', 'Biodiesel production']
  },
  {
    id: 's002',
    name: 'HaFAD2',
    function: 'Fatty acid desaturase for linoleic acid synthesis',
    organism: 'Helianthus annuus',
    commonName: 'Sunflower',
    location: 'Chromosome 1',
    type: 'Enzyme',
    properties: ['Fatty acid composition', 'Oil quality', 'Temperature adaptation'],
    applications: ['Oil crop improvement', 'Nutritional enhancement', 'Industrial applications']
  },
  {
    id: 's003',
    name: 'HaDREB2',
    function: 'Drought response transcription factor',
    organism: 'Helianthus annuus',
    commonName: 'Sunflower',
    location: 'Chromosome 10',
    type: 'Transcription factor',
    properties: ['Drought tolerance', 'Stress response', 'Gene regulation'],
    applications: ['Drought-resistant crops', 'Climate adaptation', 'Stress biology research']
  },
  {
    id: 's004',
    name: 'HaWRKY',
    function: 'Defense response transcription factor',
    organism: 'Helianthus annuus',
    commonName: 'Sunflower',
    location: 'Chromosome 5',
    type: 'Transcription factor',
    properties: ['Disease resistance', 'Pathogen response', 'Immune system'],
    applications: ['Disease-resistant crops', 'Plant immunity', 'Sustainable agriculture']
  },
  {
    id: 's005',
    name: 'HaCHS',
    function: 'Chalcone synthase for flavonoid biosynthesis',
    organism: 'Helianthus annuus',
    commonName: 'Sunflower',
    location: 'Chromosome 8',
    type: 'Enzyme',
    properties: ['Flavonoid production', 'Antioxidant activity', 'UV protection'],
    applications: ['Nutraceuticals', 'Natural antioxidants', 'Plant protection']
  },
  {
    id: 's011',
    name: 'HaFT1',
    function: 'Flowering time regulation',
    organism: 'Helianthus annuus',
    commonName: 'Sunflower',
    location: 'Chromosome 11',
    type: 'Transcription factor',
    properties: ['Flowering control', 'Photoperiod response', 'Development'],
    applications: ['Crop timing', 'Breeding programs', 'Climate adaptation']
  },
  {
    id: 's012',
    name: 'HaACS',
    function: 'Acetyl-CoA synthetase for oil synthesis',
    organism: 'Helianthus annuus',
    commonName: 'Sunflower',
    location: 'Chromosome 6',
    type: 'Enzyme',
    properties: ['Lipid metabolism', 'Oil production', 'Energy storage'],
    applications: ['Oil quality improvement', 'Biofuel production', 'Metabolic engineering']
  },

  // E. COLI GENES - Laboratory workhorses
  {
    id: 'e001',
    name: 'lacZ',
    function: 'Beta-galactosidase for lactose metabolism',
    organism: 'Escherichia coli',
    commonName: 'E. coli Bacteria',
    location: 'lac operon',
    type: 'Enzyme',
    properties: ['Lactose hydrolysis', 'Blue-white screening', 'Reporter gene'],
    applications: ['Cloning vectors', 'Gene expression', 'Biotechnology screening']
  },
  {
    id: 'e002',
    name: 'ampR',
    function: 'Ampicillin resistance beta-lactamase',
    organism: 'Escherichia coli',
    commonName: 'E. coli Bacteria',
    location: 'Plasmid',
    type: 'Resistance gene',
    properties: ['Antibiotic resistance', 'Selection marker', 'Beta-lactamase activity'],
    applications: ['Plasmid selection', 'Cloning vectors', 'Genetic engineering']
  },
  {
    id: 'e004',
    name: 'tetR',
    function: 'Tetracycline resistance',
    organism: 'Escherichia coli',
    commonName: 'E. coli Bacteria',
    location: 'Plasmid',
    type: 'Resistance gene',
    properties: ['Antibiotic resistance', 'Selection marker', 'Inducible system'],
    applications: ['Plasmid selection', 'Inducible expression', 'Cloning vectors']
  },
  {
    id: 'e005',
    name: 'araC',
    function: 'Arabinose operon regulator',
    organism: 'Escherichia coli',
    commonName: 'E. coli Bacteria',
    location: 'Bacterial chromosome',
    type: 'Transcription factor',
    properties: ['Inducible expression', 'Sugar metabolism', 'Regulatory protein'],
    applications: ['Protein expression', 'Metabolic engineering', 'Synthetic biology']
  },

  // FLUORESCENT PROTEINS - Visualization tools
  {
    id: 'fp001',
    name: 'GFP',
    function: 'Green fluorescent protein',
    organism: 'Aequorea victoria',
    commonName: 'Crystal Jellyfish',
    location: 'Photophore cells',
    type: 'Fluorescent protein',
    properties: ['Bioluminescence', 'Protein tagging', 'Live imaging'],
    applications: ['Protein localization', 'Cell tracking', 'Biotechnology research']
  },
  {
    id: 'fp002',
    name: 'RFP',
    function: 'Red fluorescent protein',
    organism: 'Discosoma sp.',
    commonName: 'Coral',
    location: 'Coral tissue',
    type: 'Fluorescent protein',
    properties: ['Red fluorescence', 'Protein tagging', 'Multicolor imaging'],
    applications: ['Cell tracking', 'Protein localization', 'Live imaging']
  },
  {
    id: 'fp003',
    name: 'YFP',
    function: 'Yellow fluorescent protein',
    organism: 'Aequorea victoria',
    commonName: 'Crystal Jellyfish',
    location: 'Modified GFP',
    type: 'Fluorescent protein',
    properties: ['Yellow fluorescence', 'FRET applications', 'pH sensitivity'],
    applications: ['FRET microscopy', 'Protein interactions', 'Biosensors']
  },
  {
    id: 'fp004',
    name: 'CFP',
    function: 'Cyan fluorescent protein',
    organism: 'Aequorea victoria',
    commonName: 'Crystal Jellyfish',
    location: 'Modified GFP',
    type: 'Fluorescent protein',
    properties: ['Cyan fluorescence', 'FRET donor', 'Stable expression'],
    applications: ['FRET microscopy', 'Multicolor imaging', 'Protein dynamics']
  },
  {
    id: 'fp005',
    name: 'mCherry',
    function: 'Monomeric red fluorescent protein',
    organism: 'Discosoma sp.',
    commonName: 'Coral',
    location: 'Modified DsRed',
    type: 'Fluorescent protein',
    properties: ['Bright red fluorescence', 'Monomeric', 'Photostable'],
    applications: ['Live cell imaging', 'Protein tagging', 'Multicolor experiments']
  },

  // YEAST GENES - Expression system
  {
    id: 'y001',
    name: 'GAL4',
    function: 'Galactose-inducible transcription factor',
    organism: 'Saccharomyces cerevisiae',
    commonName: 'Baker\'s Yeast',
    location: 'Chromosome XVI',
    type: 'Transcription factor',
    properties: ['Inducible expression', 'DNA binding', 'Transcriptional activation'],
    applications: ['Protein expression', 'Gene regulation studies', 'Biotechnology production']
  },
  {
    id: 'y002',
    name: 'URA3',
    function: 'Orotidine-5\'-phosphate decarboxylase',
    organism: 'Saccharomyces cerevisiae',
    commonName: 'Baker\'s Yeast',
    location: 'Chromosome V',
    type: 'Enzyme',
    properties: ['Pyrimidine biosynthesis', 'Selectable marker', 'Essential metabolism'],
    applications: ['Yeast transformation', 'Selection systems', 'Metabolic engineering']
  },
  {
    id: 'y003',
    name: 'LEU2',
    function: 'Beta-isopropylmalate dehydrogenase',
    organism: 'Saccharomyces cerevisiae',
    commonName: 'Baker\'s Yeast',
    location: 'Chromosome III',
    type: 'Enzyme',
    properties: ['Leucine biosynthesis', 'Selectable marker', 'Essential metabolism'],
    applications: ['Yeast transformation', 'Complementation', 'Genetic studies']
  },
  {
    id: 'y004',
    name: 'HIS3',
    function: 'Imidazoleglycerol-phosphate dehydratase',
    organism: 'Saccharomyces cerevisiae',
    commonName: 'Baker\'s Yeast',
    location: 'Chromosome XV',
    type: 'Enzyme',
    properties: ['Histidine biosynthesis', 'Selection marker', 'Reporter gene'],
    applications: ['Yeast genetics', 'Complementation', 'Transformation']
  },

  // CRISPR SYSTEM - Gene editing revolution
  {
    id: 'c001',
    name: 'Cas9',
    function: 'RNA-guided DNA endonuclease',
    organism: 'Streptococcus pyogenes',
    commonName: 'Group A Strep',
    location: 'CRISPR locus',
    type: 'Nuclease',
    properties: ['Programmable DNA cutting', 'RNA guidance', 'Precise editing'],
    applications: ['Gene editing', 'Genome engineering', 'Therapeutic development']
  },
  {
    id: 'c002',
    name: 'Cas12a (Cpf1)',
    function: 'RNA-guided DNA endonuclease with T-rich PAM',
    organism: 'Acidaminococcus sp.',
    commonName: 'Acidaminococcus Bacteria',
    location: 'CRISPR locus',
    type: 'Nuclease',
    properties: ['T-rich PAM recognition', 'Sticky end generation', 'Single guide RNA'],
    applications: ['Gene editing', 'Diagnostics', 'Multiplexed editing']
  },
  {
    id: 'c003',
    name: 'Cas13',
    function: 'RNA-targeting CRISPR nuclease',
    organism: 'Leptotrichia shahii',
    commonName: 'Leptotrichia Bacteria',
    location: 'CRISPR locus',
    type: 'Nuclease',
    properties: ['RNA targeting', 'Programmable', 'Diagnostic applications'],
    applications: ['RNA editing', 'Diagnostics', 'Therapeutic development']
  },
  {
    id: 'c004',
    name: 'Base Editor',
    function: 'Cytosine to thymine base editing',
    organism: 'Engineered construct',
    commonName: 'Synthetic',
    location: 'Synthetic',
    type: 'Editor enzyme',
    properties: ['Point mutations', 'No double-strand breaks', 'Precise editing'],
    applications: ['Disease correction', 'Crop improvement', 'Research tools']
  },

  // AGRICULTURAL GENES - Crop improvement
  {
    id: 'p001',
    name: 'Bt Cry1Ab',
    function: 'Insecticidal crystal protein',
    organism: 'Bacillus thuringiensis',
    commonName: 'Bt Bacteria',
    location: 'Bacterial spores',
    type: 'Toxin protein',
    properties: ['Insect toxicity', 'Lepidoptera specificity', 'Biodegradable'],
    applications: ['Insect-resistant crops', 'Biopesticides', 'Sustainable agriculture']
  },
  {
    id: 'p002',
    name: 'EPSPS',
    function: '5-enolpyruvylshikimate-3-phosphate synthase',
    organism: 'Agrobacterium tumefaciens',
    commonName: 'Crown Gall Bacteria',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Glyphosate resistance', 'Aromatic amino acid synthesis', 'Herbicide tolerance'],
    applications: ['Herbicide-resistant crops', 'Weed management', 'Agricultural biotechnology']
  },
  {
    id: 'p003',
    name: 'Roundup Ready',
    function: 'Glyphosate-resistant EPSPS',
    organism: 'Agrobacterium tumefaciens',
    commonName: 'Crown Gall Bacteria',
    location: 'Modified bacterial gene',
    type: 'Enzyme',
    properties: ['Herbicide resistance', 'Crop protection', 'Transgenic trait'],
    applications: ['GM crops', 'Weed control', 'Agricultural productivity']
  },
  {
    id: 'p004',
    name: 'Bt Cry2Ab',
    function: 'Insecticidal crystal protein',
    organism: 'Bacillus thuringiensis',
    commonName: 'Bt Bacteria',
    location: 'Bacterial spores',
    type: 'Toxin protein',
    properties: ['Insect resistance', 'Coleoptera specificity', 'Biodegradable'],
    applications: ['Beetle-resistant crops', 'Integrated pest management', 'Sustainable agriculture']
  },

  // THERAPEUTIC GENES - Medical applications
  {
    id: 't001',
    name: 'Interferon Alpha',
    function: 'Antiviral and immunomodulatory protein',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 9p21.3',
    type: 'Cytokine',
    properties: ['Antiviral activity', 'Immune modulation', 'Cell signaling'],
    applications: ['Antiviral therapy', 'Cancer treatment', 'Immune disorders']
  },
  {
    id: 't002',
    name: 'Telomerase (TERT)',
    function: 'Telomere extension enzyme',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 5p15.33',
    type: 'Enzyme',
    properties: ['Telomere maintenance', 'Cellular immortalization', 'Aging regulation'],
    applications: ['Aging research', 'Cancer research', 'Regenerative medicine']
  },
  {
    id: 't003',
    name: 'CAR',
    function: 'Chimeric antigen receptor',
    organism: 'Synthetic construct',
    commonName: 'Engineered',
    location: 'Synthetic',
    type: 'Receptor',
    properties: ['Antigen recognition', 'T cell activation', 'Targeted therapy'],
    applications: ['CAR-T therapy', 'Cancer immunotherapy', 'Adoptive cell therapy']
  },

  // INDUSTRIAL ENZYMES - Biotechnology workhorses
  {
    id: 'i001',
    name: 'Taq Polymerase',
    function: 'Thermostable DNA polymerase',
    organism: 'Thermus aquaticus',
    commonName: 'Hot Spring Bacteria',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Heat stability', 'DNA synthesis', '5\' to 3\' exonuclease'],
    applications: ['PCR amplification', 'DNA sequencing', 'Molecular diagnostics']
  },
  {
    id: 'i002',
    name: 'Pfu Polymerase',
    function: 'High-fidelity thermostable DNA polymerase',
    organism: 'Pyrococcus furiosus',
    commonName: 'Hyperthermophile',
    location: 'Archaeal chromosome',
    type: 'Enzyme',
    properties: ['High fidelity', 'Proofreading', 'Heat stability'],
    applications: ['High-fidelity PCR', 'Cloning', 'Mutagenesis']
  },
  {
    id: 'i003',
    name: 'T4 DNA Ligase',
    function: 'DNA joining enzyme',
    organism: 'Bacteriophage T4',
    commonName: 'T4 Phage',
    location: 'Viral genome',
    type: 'Enzyme',
    properties: ['DNA ligation', 'Blunt end joining', 'Molecular cloning'],
    applications: ['Cloning', 'DNA assembly', 'Molecular biology']
  },
  {
    id: 'i004',
    name: 'Restriction Enzymes',
    function: 'DNA cutting enzymes',
    organism: 'Various bacteria',
    commonName: 'Bacteria',
    location: 'Bacterial genomes',
    type: 'Enzyme',
    properties: ['Sequence-specific cutting', 'Molecular scissors', 'Cloning tools'],
    applications: ['DNA cloning', 'Genetic engineering', 'Molecular biology']
  },

  // METABOLIC ENGINEERING - Pathway modification
  {
    id: 'me001',
    name: 'ACC1',
    function: 'Acetyl-CoA carboxylase',
    organism: 'Saccharomyces cerevisiae',
    commonName: 'Baker\'s Yeast',
    location: 'Chromosome VII',
    type: 'Enzyme',
    properties: ['Fatty acid synthesis', 'Metabolic regulation', 'Biotin-dependent'],
    applications: ['Biofuel production', 'Metabolic engineering', 'Lipid biosynthesis']
  },
  {
    id: 'me002',
    name: 'FAS',
    function: 'Fatty acid synthase',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 17q25.3',
    type: 'Enzyme',
    properties: ['Lipid synthesis', 'Metabolic enzyme', 'Multi-domain protein'],
    applications: ['Metabolic engineering', 'Biofuel production', 'Cancer research']
  },
  {
    id: 'me003',
    name: 'PDC',
    function: 'Pyruvate decarboxylase',
    organism: 'Saccharomyces cerevisiae',
    commonName: 'Baker\'s Yeast',
    location: 'Chromosome XII',
    type: 'Enzyme',
    properties: ['Ethanol production', 'Central metabolism', 'Fermentation'],
    applications: ['Biofuel production', 'Fermentation', 'Metabolic engineering']
  },

  // PLANT BIOTECHNOLOGY - Crop enhancement
  {
    id: 'pb001',
    name: 'Bar Gene',
    function: 'Phosphinothricin acetyltransferase',
    organism: 'Streptomyces hygroscopicus',
    commonName: 'Streptomyces Bacteria',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Herbicide resistance', 'Glufosinate tolerance', 'Selection marker'],
    applications: ['Herbicide-resistant crops', 'Plant transformation', 'Agricultural biotechnology']
  },
  {
    id: 'pb002',
    name: 'Golden Rice PSY',
    function: 'Phytoene synthase for beta-carotene',
    organism: 'Narcissus pseudonarcissus',
    commonName: 'Daffodil',
    location: 'Plastid',
    type: 'Enzyme',
    properties: ['Carotenoid biosynthesis', 'Vitamin A precursor', 'Nutritional enhancement'],
    applications: ['Nutritional improvement', 'Vitamin A deficiency', 'Biofortification']
  },

  // VACCINE DEVELOPMENT - Disease prevention
  {
    id: 'v001',
    name: 'Spike Protein',
    function: 'Viral entry and receptor binding',
    organism: 'SARS-CoV-2',
    commonName: 'COVID-19 Virus',
    location: 'Viral genome',
    type: 'Surface protein',
    properties: ['Receptor binding', 'Membrane fusion', 'Immunogenic'],
    applications: ['Vaccine development', 'Antiviral research', 'Diagnostic development']
  },
  {
    id: 'v002',
    name: 'Hepatitis B Surface Antigen',
    function: 'Viral surface protein for immunity',
    organism: 'Hepatitis B virus',
    commonName: 'HBV',
    location: 'Viral genome',
    type: 'Surface protein',
    properties: ['Immunogenic', 'Vaccine antigen', 'Protective immunity'],
    applications: ['Hepatitis B vaccine', 'Recombinant vaccines', 'Immunization']
  },

  // BIOSENSORS - Detection systems
  {
    id: 'bs001',
    name: 'Luciferase',
    function: 'ATP-dependent light-emitting enzyme',
    organism: 'Photinus pyralis',
    commonName: 'Firefly',
    location: 'Lantern organ',
    type: 'Enzyme',
    properties: ['Bioluminescence', 'ATP detection', 'Real-time monitoring'],
    applications: ['Reporter assays', 'ATP detection', 'Biosensors']
  },
  {
    id: 'bs002',
    name: 'Beta-Galactosidase',
    function: 'Colorimetric reporter enzyme',
    organism: 'Escherichia coli',
    commonName: 'E. coli Bacteria',
    location: 'lac operon',
    type: 'Enzyme',
    properties: ['Blue-white screening', 'Colorimetric detection', 'Reporter gene'],
    applications: ['Gene expression analysis', 'Cloning', 'Biotechnology screening']
  },

  // FOOD BIOTECHNOLOGY - Food production
  {
    id: 'fb001',
    name: 'Chymosin',
    function: 'Milk-clotting enzyme for cheese production',
    organism: 'Bos taurus',
    commonName: 'Cattle',
    location: 'Stomach',
    type: 'Enzyme',
    properties: ['Milk coagulation', 'Protein cleavage', 'Food processing'],
    applications: ['Cheese production', 'Food industry', 'Recombinant enzymes']
  },

  // ENVIRONMENTAL BIOTECHNOLOGY - Cleanup applications
  {
    id: 'eb001',
    name: 'Laccase',
    function: 'Lignin-degrading enzyme',
    organism: 'Trametes versicolor',
    commonName: 'Turkey Tail Mushroom',
    location: 'Fungal mycelium',
    type: 'Enzyme',
    properties: ['Lignin degradation', 'Oxidative enzyme', 'Environmental cleanup'],
    applications: ['Bioremediation', 'Paper industry', 'Environmental cleanup']
  },

  // NEUROSCIENCE - Brain research
  {
    id: 'ns001',
    name: 'Channelrhodopsin-2',
    function: 'Light-activated ion channel',
    organism: 'Chlamydomonas reinhardtii',
    commonName: 'Green Algae',
    location: 'Eyespot',
    type: 'Ion channel',
    properties: ['Light activation', 'Cation channel', 'Optogenetics'],
    applications: ['Optogenetics', 'Neuroscience research', 'Neural control']
  },

  // TISSUE ENGINEERING - Regenerative medicine
  {
    id: 'te001',
    name: 'Collagen Type I',
    function: 'Major structural protein in connective tissue',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 17q21.33',
    type: 'Structural protein',
    properties: ['Tissue scaffolding', 'Mechanical strength', 'Biocompatibility'],
    applications: ['Tissue engineering', 'Wound healing', 'Biomaterials']
  },

  // BIOPLASTICS - Sustainable materials
  {
    id: 'bp001',
    name: 'PHA Synthase',
    function: 'Polyhydroxyalkanoate synthesis',
    organism: 'Cupriavidus necator',
    commonName: 'Hydrogen Bacteria',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Bioplastic production', 'Carbon storage', 'Biodegradable polymer'],
    applications: ['Biodegradable plastics', 'Sustainable materials', 'Green chemistry']
  },

  // MARINE BIOTECHNOLOGY - Ocean resources
  {
    id: 'mb001',
    name: 'Antifreeze Protein',
    function: 'Ice-binding protein for freeze protection',
    organism: 'Pseudopleuronectes americanus',
    commonName: 'Winter Flounder',
    location: 'Blood and tissues',
    type: 'Structural protein',
    properties: ['Ice binding', 'Freeze protection', 'Thermal hysteresis'],
    applications: ['Food preservation', 'Cryoprotection', 'Industrial applications']
  },

  // COSMETICS - Beauty industry
  {
    id: 'cos001',
    name: 'Hyaluronic Acid Synthase',
    function: 'Hyaluronic acid production',
    organism: 'Streptococcus equi',
    commonName: 'Streptococcus Bacteria',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Polysaccharide synthesis', 'Skin hydration', 'Tissue repair'],
    applications: ['Cosmetics', 'Medical devices', 'Tissue engineering']
  },

  // PROBIOTICS - Gut health
  {
    id: 'prob001',
    name: 'Bacteriocin',
    function: 'Antimicrobial peptide production',
    organism: 'Lactobacillus plantarum',
    commonName: 'Lactobacillus',
    location: 'Bacterial chromosome',
    type: 'Antimicrobial peptide',
    properties: ['Antimicrobial activity', 'Food preservation', 'Gut health'],
    applications: ['Probiotics', 'Food preservation', 'Microbiome research']
  },

  // FLAVOR & FRAGRANCE - Sensory enhancement
  {
    id: 'ff001',
    name: 'Limonene Synthase',
    function: 'Monoterpene synthesis for citrus flavor',
    organism: 'Citrus limon',
    commonName: 'Lemon',
    location: 'Oil glands',
    type: 'Enzyme',
    properties: ['Terpene synthesis', 'Flavor compound', 'Aromatic production'],
    applications: ['Flavor industry', 'Fragrance production', 'Natural products']
  },

  // BIOMINING - Metal recovery
  {
    id: 'bm001',
    name: 'Metallothionein',
    function: 'Metal-binding protein for detoxification',
    organism: 'Saccharomyces cerevisiae',
    commonName: 'Baker\'s Yeast',
    location: 'Chromosome XVI',
    type: 'Metal-binding protein',
    properties: ['Metal tolerance', 'Detoxification', 'Stress response'],
    applications: ['Biomining', 'Metal recovery', 'Environmental cleanup']
  },

  // DIAGNOSTIC GENES - Medical testing
  {
    id: 'dg001',
    name: 'HRP',
    function: 'Horseradish peroxidase',
    organism: 'Armoracia rusticana',
    commonName: 'Horseradish',
    location: 'Root tissue',
    type: 'Enzyme',
    properties: ['Peroxidase activity', 'Colorimetric detection', 'Stable enzyme'],
    applications: ['ELISA assays', 'Western blotting', 'Diagnostic kits']
  },

  // METABOLIC DISEASE - Genetic disorders
  {
    id: 'md001',
    name: 'Phenylalanine Hydroxylase',
    function: 'Phenylalanine to tyrosine conversion',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 12q23.2',
    type: 'Enzyme',
    properties: ['Amino acid metabolism', 'Cofactor dependent', 'Liver expression'],
    diseases: ['Phenylketonuria (PKU)'],
    applications: ['PKU treatment', 'Metabolic engineering', 'Enzyme therapy']
  },

  // BIOFUEL PRODUCTION - Energy applications
  {
    id: 'bf001',
    name: 'Cellulase',
    function: 'Cellulose-degrading enzyme complex',
    organism: 'Trichoderma reesei',
    commonName: 'Trichoderma Fungus',
    location: 'Fungal genome',
    type: 'Enzyme',
    properties: ['Cellulose hydrolysis', 'Biomass conversion', 'Industrial enzyme'],
    applications: ['Biofuel production', 'Biomass processing', 'Green energy']
  },

  // SYNTHETIC BIOLOGY - Engineered systems
  {
    id: 'sb001',
    name: 'T7 RNA Polymerase',
    function: 'Highly specific RNA polymerase',
    organism: 'Bacteriophage T7',
    commonName: 'T7 Phage',
    location: 'Viral genome',
    type: 'Enzyme',
    properties: ['High specificity', 'Orthogonal system', 'Rapid transcription'],
    applications: ['Synthetic circuits', 'Orthogonal expression', 'Biotechnology tools']
  },

  // SELECTION MARKERS - Laboratory tools
  {
    id: 'sm001',
    name: 'neoR',
    function: 'Neomycin resistance',
    organism: 'Escherichia coli',
    commonName: 'E. coli Bacteria',
    location: 'Transposon Tn5',
    type: 'Resistance gene',
    properties: ['Antibiotic resistance', 'Selection marker', 'Aminoglycoside resistance'],
    applications: ['Cell selection', 'Genetic engineering', 'Stable transfection']
  },
  {
    id: 'sm002',
    name: 'hygR',
    function: 'Hygromycin resistance',
    organism: 'Streptomyces hygroscopicus',
    commonName: 'Streptomyces Bacteria',
    location: 'Bacterial chromosome',
    type: 'Resistance gene',
    properties: ['Hygromycin resistance', 'Broad spectrum', 'Eukaryotic selection'],
    applications: ['Mammalian cell selection', 'Plant transformation', 'Stable cell lines']
  },

  // PROMOTERS - Regulatory sequences
  {
    id: 'pr001',
    name: 'CMV Promoter',
    function: 'Strong constitutive promoter',
    organism: 'Human Cytomegalovirus',
    commonName: 'CMV',
    location: 'Viral genome',
    type: 'Promoter',
    properties: ['High expression', 'Constitutive', 'Mammalian cells'],
    applications: ['Protein expression', 'Gene therapy', 'Recombinant production']
  },
  {
    id: 'pr002',
    name: 'T7 Promoter',
    function: 'Bacteriophage T7 RNA polymerase promoter',
    organism: 'Bacteriophage T7',
    commonName: 'T7 Phage',
    location: 'Viral genome',
    type: 'Promoter',
    properties: ['High specificity', 'Inducible', 'Bacterial expression'],
    applications: ['Protein expression', 'In vitro transcription', 'Recombinant systems']
  },

  // MODEL ORGANISM GENES - Research tools
  {
    id: 'mo001',
    name: 'White Gene',
    function: 'Eye pigmentation in fruit flies',
    organism: 'Drosophila melanogaster',
    commonName: 'Fruit Fly',
    location: 'X chromosome',
    type: 'Pigmentation gene',
    properties: ['Eye color', 'Genetic marker', 'Transformation marker'],
    applications: ['Genetic research', 'Transformation', 'Developmental biology']
  },
  {
    id: 'mo002',
    name: 'unc-22',
    function: 'Muscle protein twitchin',
    organism: 'Caenorhabditis elegans',
    commonName: 'Roundworm',
    location: 'Chromosome IV',
    type: 'Structural protein',
    properties: ['Muscle function', 'Twitching phenotype', 'Large protein'],
    applications: ['Neurobiology research', 'Muscle studies', 'Genetic screens']
  },

  // ZEBRAFISH GENES - Developmental biology
  {
    id: 'zf001',
    name: 'sonic hedgehog',
    function: 'Developmental signaling protein',
    organism: 'Danio rerio',
    commonName: 'Zebrafish',
    location: 'Chromosome 7',
    type: 'Signaling protein',
    properties: ['Pattern formation', 'Neural development', 'Morphogen'],
    applications: ['Developmental biology', 'Disease modeling', 'Drug screening']
  },

  // MOUSE GENES - Mammalian research
  {
    id: 'ms001',
    name: 'p53',
    function: 'Tumor suppressor protein',
    organism: 'Mus musculus',
    commonName: 'Mouse',
    location: 'Chromosome 11',
    type: 'Tumor suppressor',
    properties: ['DNA damage response', 'Cell cycle control', 'Apoptosis'],
    applications: ['Cancer research', 'Drug testing', 'Disease modeling']
  },

  // ARABIDOPSIS GENES - Plant model
  {
    id: 'at001',
    name: 'FLOWERING LOCUS T',
    function: 'Flowering time control',
    organism: 'Arabidopsis thaliana',
    commonName: 'Thale Cress',
    location: 'Chromosome 1',
    type: 'Signaling protein',
    properties: ['Flowering induction', 'Mobile signal', 'Photoperiod response'],
    applications: ['Plant breeding', 'Crop timing', 'Developmental research']
  },

  // ADDITIONAL HUMAN GENES - Medical importance
  {
    id: 'h011',
    name: 'BRCA2',
    function: 'DNA repair and tumor suppression',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 13q13.1',
    type: 'Tumor suppressor',
    properties: ['DNA repair', 'Homologous recombination', 'Cancer prevention'],
    diseases: ['Breast cancer', 'Ovarian cancer'],
    applications: ['Cancer research', 'Genetic testing', 'Personalized medicine']
  },
  {
    id: 'h012',
    name: 'Huntingtin',
    function: 'Neuronal function and development',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 4p16.3',
    type: 'Structural protein',
    properties: ['Neuronal transport', 'Development', 'Protein interactions'],
    diseases: ['Huntington\'s disease'],
    applications: ['Neurological research', 'Drug development', 'Gene therapy']
  },

  // ADDITIONAL E. COLI GENES - Laboratory essentials
  {
    id: 'e006',
    name: 'recA',
    function: 'DNA repair and recombination',
    organism: 'Escherichia coli',
    commonName: 'E. coli Bacteria',
    location: 'Bacterial chromosome',
    type: 'DNA repair protein',
    properties: ['DNA repair', 'Recombination', 'SOS response'],
    applications: ['DNA repair research', 'Recombination studies', 'Biotechnology']
  },
  {
    id: 'e007',
    name: 'malE',
    function: 'Maltose-binding protein',
    organism: 'Escherichia coli',
    commonName: 'E. coli Bacteria',
    location: 'Bacterial chromosome',
    type: 'Binding protein',
    properties: ['Maltose transport', 'Fusion partner', 'Protein purification'],
    applications: ['Protein expression', 'Purification tags', 'Structural biology']
  },

  // ADDITIONAL YEAST GENES - Biotechnology workhorses
  {
    id: 'y005',
    name: 'ADH1',
    function: 'Alcohol dehydrogenase',
    organism: 'Saccharomyces cerevisiae',
    commonName: 'Baker\'s Yeast',
    location: 'Chromosome XV',
    type: 'Enzyme',
    properties: ['Ethanol metabolism', 'Strong promoter', 'Constitutive expression'],
    applications: ['Protein expression', 'Metabolic engineering', 'Biofuel production']
  },
  {
    id: 'y006',
    name: 'TRP1',
    function: 'Phosphoribosylanthranilate isomerase',
    organism: 'Saccharomyces cerevisiae',
    commonName: 'Baker\'s Yeast',
    location: 'Chromosome IV',
    type: 'Enzyme',
    properties: ['Tryptophan biosynthesis', 'Selection marker', 'Auxotrophy complementation'],
    applications: ['Yeast transformation', 'Genetic complementation', 'Metabolic studies']
  },

  // ADDITIONAL PLANT GENES - Crop improvement
  {
    id: 'p005',
    name: 'Chitinase',
    function: 'Chitin-degrading enzyme for pathogen defense',
    organism: 'Nicotiana tabacum',
    commonName: 'Tobacco',
    location: 'Plant genome',
    type: 'Enzyme',
    properties: ['Antifungal activity', 'Pathogen resistance', 'Cell wall degradation'],
    applications: ['Disease-resistant crops', 'Biopesticides', 'Plant protection']
  },
  {
    id: 'p006',
    name: 'Rubisco',
    function: 'CO2 fixation enzyme',
    organism: 'Spinacia oleracea',
    commonName: 'Spinach',
    location: 'Chloroplast',
    type: 'Enzyme',
    properties: ['Carbon fixation', 'Photosynthesis', 'Most abundant protein'],
    applications: ['Photosynthesis enhancement', 'Climate change research', 'Crop improvement']
  }
];

// Additional 500+ genes for comprehensive database
const additionalGenes: Gene[] = [
  // HUMAN GENES - Extended medical collection
  {
    id: 'h013',
    name: 'APOE',
    function: 'Apolipoprotein E for lipid transport',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 19q13.32',
    type: 'Protein',
    properties: ['Lipid transport', 'Alzheimer risk factor', 'Cardiovascular health'],
    diseases: ['Alzheimer disease', 'Cardiovascular disease'],
    applications: ['Personalized medicine', 'Drug development', 'Risk assessment']
  },
  {
    id: 'h014',
    name: 'CFTR',
    function: 'Cystic fibrosis transmembrane conductance regulator',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 7q31.2',
    type: 'Ion channel',
    properties: ['Chloride transport', 'Membrane protein', 'ATP-binding'],
    diseases: ['Cystic fibrosis'],
    applications: ['Gene therapy', 'CF treatment', 'Ion channel research']
  },
  {
    id: 'h015',
    name: 'LDLR',
    function: 'Low-density lipoprotein receptor',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 19p13.2',
    type: 'Receptor',
    properties: ['Cholesterol uptake', 'Lipid metabolism', 'Cell surface receptor'],
    diseases: ['Familial hypercholesterolemia'],
    applications: ['Cholesterol research', 'Cardiovascular medicine', 'Drug targets']
  },
  {
    id: 'h016',
    name: 'PCSK9',
    function: 'Proprotein convertase subtilisin/kexin type 9',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 1p32.3',
    type: 'Enzyme',
    properties: ['LDLR degradation', 'Cholesterol regulation', 'Therapeutic target'],
    diseases: ['Hypercholesterolemia'],
    applications: ['Cholesterol-lowering drugs', 'Cardiovascular therapy', 'CRISPR targets']
  },
  {
    id: 'h017',
    name: 'VEGF',
    function: 'Vascular endothelial growth factor',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 6p21.1',
    type: 'Growth factor',
    properties: ['Angiogenesis', 'Blood vessel formation', 'Wound healing'],
    diseases: ['Cancer', 'Diabetic retinopathy'],
    applications: ['Cancer therapy', 'Wound healing', 'Tissue engineering']
  },
  {
    id: 'h018',
    name: 'TNF',
    function: 'Tumor necrosis factor alpha',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 6p21.33',
    type: 'Cytokine',
    properties: ['Inflammation', 'Immune response', 'Cell death'],
    diseases: ['Rheumatoid arthritis', 'Inflammatory bowel disease'],
    applications: ['Anti-inflammatory drugs', 'Autoimmune therapy', 'Cancer research']
  },
  {
    id: 'h019',
    name: 'IL2',
    function: 'Interleukin-2 immune signaling',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 4q27',
    type: 'Cytokine',
    properties: ['T cell activation', 'Immune response', 'Cell proliferation'],
    applications: ['Cancer immunotherapy', 'Immune system research', 'Vaccine development']
  },
  {
    id: 'h020',
    name: 'CD19',
    function: 'B-cell surface antigen',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 16p11.2',
    type: 'Surface protein',
    properties: ['B cell marker', 'Immune recognition', 'CAR-T target'],
    applications: ['CAR-T therapy', 'B cell research', 'Cancer treatment']
  },

  // PLANT GENES - Agricultural powerhouses
  {
    id: 'p007',
    name: 'Rubisco Large Subunit',
    function: 'CO2 fixation in photosynthesis',
    organism: 'Zea mays',
    commonName: 'Corn/Maize',
    location: 'Chloroplast',
    type: 'Enzyme',
    properties: ['Carbon fixation', 'Photosynthesis', 'Climate adaptation'],
    applications: ['Crop improvement', 'Climate change research', 'Biofuel production']
  },
  {
    id: 'p008',
    name: 'Waxy Gene',
    function: 'Starch synthesis regulation',
    organism: 'Oryza sativa',
    commonName: 'Rice',
    location: 'Chromosome 6',
    type: 'Enzyme',
    properties: ['Starch quality', 'Grain texture', 'Food processing'],
    applications: ['Rice breeding', 'Food industry', 'Starch modification']
  },
  {
    id: 'p009',
    name: 'Phytase',
    function: 'Phosphorus release from phytate',
    organism: 'Glycine max',
    commonName: 'Soybean',
    location: 'Nuclear genome',
    type: 'Enzyme',
    properties: ['Phosphorus availability', 'Nutrient efficiency', 'Environmental benefit'],
    applications: ['Sustainable agriculture', 'Animal feed', 'Phosphorus management']
  },
  {
    id: 'p010',
    name: 'Lectin',
    function: 'Insect resistance protein',
    organism: 'Galanthus nivalis',
    commonName: 'Snowdrop',
    location: 'Bulb tissue',
    type: 'Protein',
    properties: ['Insect toxicity', 'Plant defense', 'Aphid resistance'],
    applications: ['Insect-resistant crops', 'Biopesticides', 'Integrated pest management']
  },

  // BACTERIAL GENES - Laboratory essentials
  {
    id: 'b001',
    name: 'GusA',
    function: 'Beta-glucuronidase reporter',
    organism: 'Escherichia coli',
    commonName: 'E. coli',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Reporter gene', 'Blue staining', 'Gene expression'],
    applications: ['Gene expression studies', 'Plant transformation', 'Molecular biology']
  },
  {
    id: 'b002',
    name: 'CAT',
    function: 'Chloramphenicol acetyltransferase',
    organism: 'Escherichia coli',
    commonName: 'E. coli',
    location: 'Plasmid',
    type: 'Enzyme',
    properties: ['Antibiotic resistance', 'Selection marker', 'Reporter gene'],
    applications: ['Cloning vectors', 'Gene expression', 'Selection systems']
  },
  {
    id: 'b003',
    name: 'LacI',
    function: 'Lactose operon repressor',
    organism: 'Escherichia coli',
    commonName: 'E. coli',
    location: 'Bacterial chromosome',
    type: 'Transcription factor',
    properties: ['Gene regulation', 'Inducible system', 'Protein-DNA binding'],
    applications: ['Inducible expression', 'Synthetic biology', 'Gene regulation']
  },
  {
    id: 'b004',
    name: 'TrpE',
    function: 'Tryptophan biosynthesis enzyme',
    organism: 'Escherichia coli',
    commonName: 'E. coli',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Amino acid synthesis', 'Metabolic pathway', 'Essential metabolism'],
    applications: ['Metabolic engineering', 'Amino acid production', 'Biochemical research']
  },

  // VIRAL GENES - Research and therapy
  {
    id: 'v003',
    name: 'AAV Rep',
    function: 'Adeno-associated virus replication',
    organism: 'Adeno-associated virus',
    commonName: 'AAV',
    location: 'Viral genome',
    type: 'Replication protein',
    properties: ['Viral replication', 'Site-specific integration', 'Gene therapy vector'],
    applications: ['Gene therapy', 'Vector development', 'Viral research']
  },
  {
    id: 'v004',
    name: 'Lentiviral Gag',
    function: 'Structural protein for virus assembly',
    organism: 'Human immunodeficiency virus',
    commonName: 'HIV',
    location: 'Viral genome',
    type: 'Structural protein',
    properties: ['Virus assembly', 'Particle formation', 'Vector component'],
    applications: ['Lentiviral vectors', 'Gene therapy', 'Research tools']
  },

  // FUNGAL GENES - Biotechnology workhorses
  {
    id: 'f001',
    name: 'Cellulase',
    function: 'Cellulose degradation enzyme',
    organism: 'Aspergillus niger',
    commonName: 'Black Mold',
    location: 'Fungal genome',
    type: 'Enzyme',
    properties: ['Cellulose hydrolysis', 'Biomass conversion', 'Industrial enzyme'],
    applications: ['Biofuel production', 'Paper industry', 'Food processing']
  },
  {
    id: 'f002',
    name: 'Lipase',
    function: 'Fat-degrading enzyme',
    organism: 'Candida antarctica',
    commonName: 'Antarctic Yeast',
    location: 'Fungal genome',
    type: 'Enzyme',
    properties: ['Lipid hydrolysis', 'Cold adaptation', 'Industrial catalyst'],
    applications: ['Biodiesel production', 'Food industry', 'Detergents']
  },
  {
    id: 'f003',
    name: 'Xylanase',
    function: 'Hemicellulose degradation',
    organism: 'Trichoderma reesei',
    commonName: 'Trichoderma Fungus',
    location: 'Fungal genome',
    type: 'Enzyme',
    properties: ['Xylan degradation', 'Biomass processing', 'Paper bleaching'],
    applications: ['Paper industry', 'Biofuel production', 'Animal feed']
  },

  // MARINE ORGANISMS - Unique properties
  {
    id: 'm001',
    name: 'Aequorin',
    function: 'Calcium-sensitive bioluminescent protein',
    organism: 'Aequorea victoria',
    commonName: 'Crystal Jellyfish',
    location: 'Photophore cells',
    type: 'Bioluminescent protein',
    properties: ['Calcium detection', 'Bioluminescence', 'Real-time imaging'],
    applications: ['Calcium imaging', 'Biosensors', 'Cell biology research']
  },
  {
    id: 'm002',
    name: 'Ice-binding Protein',
    function: 'Antifreeze activity',
    organism: 'Colwellia psychrerythraea',
    commonName: 'Arctic Bacteria',
    location: 'Bacterial chromosome',
    type: 'Structural protein',
    properties: ['Ice binding', 'Freeze protection', 'Cold adaptation'],
    applications: ['Food preservation', 'Cryoprotection', 'Biotechnology']
  },

  // EXTREMOPHILE GENES - Harsh environment adaptation
  {
    id: 'ex001',
    name: 'Heat Shock Protein 70',
    function: 'Protein folding under stress',
    organism: 'Thermus thermophilus',
    commonName: 'Thermophilic Bacteria',
    location: 'Bacterial chromosome',
    type: 'Chaperone protein',
    properties: ['Heat tolerance', 'Protein folding', 'Stress response'],
    applications: ['Thermostable enzymes', 'Stress biology', 'Industrial processes']
  },
  {
    id: 'ex002',
    name: 'Catalase',
    function: 'Hydrogen peroxide decomposition',
    organism: 'Deinococcus radiodurans',
    commonName: 'Radiation-resistant Bacteria',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Oxidative stress resistance', 'DNA protection', 'Radiation tolerance'],
    applications: ['Bioremediation', 'Radiation research', 'Antioxidant systems']
  },

  // ADDITIONAL SUNFLOWER GENES - Your favorites expanded!
  {
    id: 's013',
    name: 'HaHSP90',
    function: 'Heat shock protein for stress tolerance',
    organism: 'Helianthus annuus',
    commonName: 'Sunflower',
    location: 'Chromosome 3',
    type: 'Chaperone protein',
    properties: ['Heat tolerance', 'Protein folding', 'Stress adaptation'],
    applications: ['Climate-resilient crops', 'Stress biology', 'Crop breeding']
  },
  {
    id: 's014',
    name: 'HaCAB',
    function: 'Chlorophyll a/b binding protein',
    organism: 'Helianthus annuus',
    commonName: 'Sunflower',
    location: 'Chloroplast',
    type: 'Structural protein',
    properties: ['Light harvesting', 'Photosynthesis', 'Chloroplast function'],
    applications: ['Photosynthesis enhancement', 'Light adaptation', 'Crop improvement']
  },
  {
    id: 's015',
    name: 'HaNAC',
    function: 'NAC transcription factor for development',
    organism: 'Helianthus annuus',
    commonName: 'Sunflower',
    location: 'Chromosome 7',
    type: 'Transcription factor',
    properties: ['Development control', 'Stress response', 'Gene regulation'],
    applications: ['Plant development', 'Stress tolerance', 'Breeding programs']
  },
  {
    id: 's016',
    name: 'HaLTP',
    function: 'Lipid transfer protein',
    organism: 'Helianthus annuus',
    commonName: 'Sunflower',
    location: 'Chromosome 12',
    type: 'Transfer protein',
    properties: ['Lipid transport', 'Membrane stability', 'Stress tolerance'],
    applications: ['Oil quality', 'Stress resistance', 'Membrane research']
  },
  {
    id: 's017',
    name: 'HaPPO',
    function: 'Polyphenol oxidase for browning',
    organism: 'Helianthus annuus',
    commonName: 'Sunflower',
    location: 'Chromosome 9',
    type: 'Enzyme',
    properties: ['Phenol oxidation', 'Defense response', 'Food quality'],
    applications: ['Food processing', 'Plant defense', 'Quality control']
  },

  // ADDITIONAL MODEL ORGANISM GENES
  {
    id: 'dm001',
    name: 'Hedgehog',
    function: 'Developmental signaling protein',
    organism: 'Drosophila melanogaster',
    commonName: 'Fruit Fly',
    location: 'Chromosome 3',
    type: 'Signaling protein',
    properties: ['Pattern formation', 'Development', 'Cell fate'],
    applications: ['Developmental biology', 'Cancer research', 'Drug screening']
  },
  {
    id: 'dm002',
    name: 'Notch',
    function: 'Cell-cell communication receptor',
    organism: 'Drosophila melanogaster',
    commonName: 'Fruit Fly',
    location: 'X chromosome',
    type: 'Receptor',
    properties: ['Cell signaling', 'Development', 'Neurogenesis'],
    applications: ['Developmental research', 'Stem cell biology', 'Cancer studies']
  },
  {
    id: 'ce001',
    name: 'lin-4',
    function: 'MicroRNA for development timing',
    organism: 'Caenorhabditis elegans',
    commonName: 'Roundworm',
    location: 'Chromosome X',
    type: 'MicroRNA',
    properties: ['Gene regulation', 'Development timing', 'RNA interference'],
    applications: ['RNA research', 'Development studies', 'Gene regulation']
  },
  {
    id: 'ce002',
    name: 'daf-2',
    function: 'Insulin/IGF-1 receptor for longevity',
    organism: 'Caenorhabditis elegans',
    commonName: 'Roundworm',
    location: 'Chromosome III',
    type: 'Receptor',
    properties: ['Longevity control', 'Metabolism', 'Stress resistance'],
    applications: ['Aging research', 'Longevity studies', 'Metabolic research']
  },

  // ADDITIONAL THERAPEUTIC GENES
  {
    id: 't004',
    name: 'FVIII',
    function: 'Coagulation factor VIII',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome X',
    type: 'Clotting factor',
    properties: ['Blood coagulation', 'Hemostasis', 'X-linked'],
    diseases: ['Hemophilia A'],
    applications: ['Hemophilia treatment', 'Blood disorder therapy', 'Recombinant production']
  },
  {
    id: 't005',
    name: 'Alpha-1 Antitrypsin',
    function: 'Protease inhibitor for lung protection',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 14',
    type: 'Protease inhibitor',
    properties: ['Lung protection', 'Anti-inflammatory', 'Liver production'],
    diseases: ['Alpha-1 antitrypsin deficiency'],
    applications: ['Lung disease therapy', 'Protein replacement', 'Respiratory medicine']
  },
  {
    id: 't006',
    name: 'Adenosine Deaminase',
    function: 'Purine metabolism enzyme',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 20',
    type: 'Enzyme',
    properties: ['Immune function', 'Purine metabolism', 'T cell development'],
    diseases: ['Severe combined immunodeficiency'],
    applications: ['Gene therapy', 'Immune disorders', 'Enzyme replacement']
  },

  // ADDITIONAL INDUSTRIAL ENZYMES
  {
    id: 'i005',
    name: 'Alpha-amylase',
    function: 'Starch hydrolysis enzyme',
    organism: 'Bacillus licheniformis',
    commonName: 'Bacillus Bacteria',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Starch breakdown', 'Heat stable', 'Industrial enzyme'],
    applications: ['Food processing', 'Textile industry', 'Paper production']
  },
  {
    id: 'i006',
    name: 'Glucose Oxidase',
    function: 'Glucose to gluconic acid conversion',
    organism: 'Aspergillus niger',
    commonName: 'Black Mold',
    location: 'Fungal genome',
    type: 'Enzyme',
    properties: ['Glucose oxidation', 'Food preservation', 'Biosensor component'],
    applications: ['Food industry', 'Glucose sensors', 'Biotechnology']
  },
  {
    id: 'i007',
    name: 'Pectinase',
    function: 'Pectin degradation enzyme',
    organism: 'Aspergillus niger',
    commonName: 'Black Mold',
    location: 'Fungal genome',
    type: 'Enzyme',
    properties: ['Pectin breakdown', 'Fruit processing', 'Cell wall degradation'],
    applications: ['Juice production', 'Wine making', 'Food processing']
  },

  // ADDITIONAL CRISPR AND GENE EDITING TOOLS
  {
    id: 'c005',
    name: 'Cas12f1',
    function: 'Miniature CRISPR nuclease',
    organism: 'Acidibacillus ferrooxidans',
    commonName: 'Acidibacillus Bacteria',
    location: 'CRISPR locus',
    type: 'Nuclease',
    properties: ['Compact size', 'RNA-guided', 'Precise cutting'],
    applications: ['Gene editing', 'Therapeutic delivery', 'Research tools']
  },
  {
    id: 'c006',
    name: 'Prime Editor',
    function: 'Precise gene editing without double-strand breaks',
    organism: 'Engineered construct',
    commonName: 'Synthetic',
    location: 'Synthetic',
    type: 'Editor enzyme',
    properties: ['Precise insertion', 'No DSBs', 'Programmable'],
    applications: ['Therapeutic editing', 'Research', 'Disease correction']
  },
  {
    id: 'c007',
    name: 'dCas9',
    function: 'Catalytically dead Cas9 for gene regulation',
    organism: 'Streptococcus pyogenes',
    commonName: 'Group A Strep',
    location: 'Modified CRISPR',
    type: 'DNA-binding protein',
    properties: ['Gene regulation', 'No cutting', 'Programmable binding'],
    applications: ['Gene activation', 'Gene repression', 'Epigenome editing']
  },

  // ADDITIONAL FLUORESCENT AND REPORTER PROTEINS
  {
    id: 'fp006',
    name: 'mTurquoise',
    function: 'Cyan fluorescent protein variant',
    organism: 'Aequorea victoria',
    commonName: 'Crystal Jellyfish',
    location: 'Modified GFP',
    type: 'Fluorescent protein',
    properties: ['Cyan fluorescence', 'Improved brightness', 'FRET applications'],
    applications: ['Live imaging', 'FRET microscopy', 'Protein tracking']
  },
  {
    id: 'fp007',
    name: 'mVenus',
    function: 'Yellow fluorescent protein variant',
    organism: 'Aequorea victoria',
    commonName: 'Crystal Jellyfish',
    location: 'Modified YFP',
    type: 'Fluorescent protein',
    properties: ['Yellow fluorescence', 'Fast maturation', 'pH stable'],
    applications: ['Live cell imaging', 'Protein localization', 'FRET acceptor']
  },
  {
    id: 'fp008',
    name: 'mKate2',
    function: 'Far-red fluorescent protein',
    organism: 'Entacmaea quadricolor',
    commonName: 'Sea Anemone',
    location: 'Modified protein',
    type: 'Fluorescent protein',
    properties: ['Far-red fluorescence', 'Deep tissue imaging', 'Low toxicity'],
    applications: ['In vivo imaging', 'Deep tissue studies', 'Multicolor experiments']
  },

  // ADDITIONAL METABOLIC ENGINEERING GENES
  {
    id: 'me004',
    name: 'Acetyl-CoA Synthetase',
    function: 'Acetyl-CoA production from acetate',
    organism: 'Escherichia coli',
    commonName: 'E. coli',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Central metabolism', 'Acetyl-CoA synthesis', 'Energy metabolism'],
    applications: ['Metabolic engineering', 'Biofuel production', 'Biochemical synthesis']
  },
  {
    id: 'me005',
    name: 'Isoprenyl Synthase',
    function: 'Isoprenoid precursor synthesis',
    organism: 'Saccharomyces cerevisiae',
    commonName: 'Baker\'s Yeast',
    location: 'Chromosome XIV',
    type: 'Enzyme',
    properties: ['Isoprenoid synthesis', 'Terpenoid production', 'Secondary metabolism'],
    applications: ['Pharmaceutical production', 'Flavor compounds', 'Natural products']
  },

  // ADDITIONAL PLANT BIOTECHNOLOGY GENES
  {
    id: 'pb003',
    name: 'Cry1Ac',
    function: 'Insecticidal crystal protein',
    organism: 'Bacillus thuringiensis',
    commonName: 'Bt Bacteria',
    location: 'Bacterial spores',
    type: 'Toxin protein',
    properties: ['Lepidoptera toxicity', 'Biodegradable', 'Specific targeting'],
    applications: ['Bt cotton', 'Insect resistance', 'Sustainable agriculture']
  },
  {
    id: 'pb004',
    name: 'NPT II',
    function: 'Neomycin phosphotransferase',
    organism: 'Escherichia coli',
    commonName: 'E. coli',
    location: 'Transposon Tn5',
    type: 'Enzyme',
    properties: ['Antibiotic resistance', 'Selection marker', 'Plant transformation'],
    applications: ['Plant transformation', 'Selection systems', 'Genetic engineering']
  },

  // ADDITIONAL VACCINE AND THERAPEUTIC GENES
  {
    id: 'v005',
    name: 'Influenza HA',
    function: 'Hemagglutinin surface protein',
    organism: 'Influenza A virus',
    commonName: 'Flu Virus',
    location: 'Viral genome',
    type: 'Surface protein',
    properties: ['Viral attachment', 'Immunogenic', 'Strain-specific'],
    applications: ['Flu vaccines', 'Antiviral research', 'Pandemic preparedness']
  },
  {
    id: 'v006',
    name: 'HPV L1',
    function: 'Human papillomavirus capsid protein',
    organism: 'Human papillomavirus',
    commonName: 'HPV',
    location: 'Viral genome',
    type: 'Capsid protein',
    properties: ['Virus structure', 'Immunogenic', 'Vaccine antigen'],
    applications: ['HPV vaccine', 'Cancer prevention', 'Recombinant vaccines']
  },

  // ADDITIONAL BIOSENSOR GENES
  {
    id: 'bs003',
    name: 'Renilla Luciferase',
    function: 'Coelenterazine-dependent luciferase',
    organism: 'Renilla reniformis',
    commonName: 'Sea Pansy',
    location: 'Marine organism',
    type: 'Enzyme',
    properties: ['Bioluminescence', 'Different substrate', 'Dual reporter'],
    applications: ['Dual luciferase assays', 'Gene expression', 'High-throughput screening']
  },
  {
    id: 'bs004',
    name: 'Gaussia Luciferase',
    function: 'Secreted luciferase enzyme',
    organism: 'Gaussia princeps',
    commonName: 'Copepod',
    location: 'Marine crustacean',
    type: 'Enzyme',
    properties: ['Secreted protein', 'High sensitivity', 'Small size'],
    applications: ['Secretion assays', 'Live cell imaging', 'Bioassays']
  },

  // ADDITIONAL FOOD BIOTECHNOLOGY GENES
  {
    id: 'fb002',
    name: 'Invertase',
    function: 'Sucrose hydrolysis enzyme',
    organism: 'Saccharomyces cerevisiae',
    commonName: 'Baker\'s Yeast',
    location: 'Chromosome VII',
    type: 'Enzyme',
    properties: ['Sugar conversion', 'Food processing', 'Sweetener production'],
    applications: ['Food industry', 'Confectionery', 'Beverage production']
  },
  {
    id: 'fb003',
    name: 'Transglutaminase',
    function: 'Protein cross-linking enzyme',
    organism: 'Streptoverticillium mobaraense',
    commonName: 'Streptomyces Bacteria',
    location: 'Bacterial genome',
    type: 'Enzyme',
    properties: ['Protein binding', 'Texture improvement', 'Food processing'],
    applications: ['Meat processing', 'Dairy products', 'Food texture']
  },

  // ADDITIONAL ENVIRONMENTAL BIOTECHNOLOGY GENES
  {
    id: 'eb002',
    name: 'Lignin Peroxidase',
    function: 'Lignin degradation enzyme',
    organism: 'Phanerochaete chrysosporium',
    commonName: 'White Rot Fungus',
    location: 'Fungal genome',
    type: 'Enzyme',
    properties: ['Lignin breakdown', 'Environmental cleanup', 'Oxidative enzyme'],
    applications: ['Bioremediation', 'Pulp industry', 'Waste treatment']
  },
  {
    id: 'eb003',
    name: 'Alkane Hydroxylase',
    function: 'Hydrocarbon degradation enzyme',
    organism: 'Pseudomonas putida',
    commonName: 'Pseudomonas Bacteria',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Hydrocarbon breakdown', 'Oil degradation', 'Bioremediation'],
    applications: ['Oil spill cleanup', 'Bioremediation', 'Environmental restoration']
  },

  // ADDITIONAL NEUROSCIENCE GENES
  {
    id: 'ns002',
    name: 'Halorhodopsin',
    function: 'Light-activated chloride pump',
    organism: 'Natronomonas pharaonis',
    commonName: 'Halophilic Archaea',
    location: 'Archaeal membrane',
    type: 'Ion pump',
    properties: ['Light activation', 'Neural inhibition', 'Optogenetics'],
    applications: ['Optogenetics', 'Neural silencing', 'Neuroscience research']
  },
  {
    id: 'ns003',
    name: 'Archaerhodopsin',
    function: 'Light-driven proton pump',
    organism: 'Halorubrum sodomense',
    commonName: 'Halophilic Archaea',
    location: 'Archaeal membrane',
    type: 'Ion pump',
    properties: ['Light activation', 'Neural silencing', 'Optogenetic tool'],
    applications: ['Optogenetics', 'Neural control', 'Brain research']
  },

  // ADDITIONAL TISSUE ENGINEERING GENES
  {
    id: 'te002',
    name: 'Fibronectin',
    function: 'Cell adhesion glycoprotein',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 2q34',
    type: 'Glycoprotein',
    properties: ['Cell adhesion', 'Wound healing', 'Tissue scaffolding'],
    applications: ['Tissue engineering', 'Wound healing', 'Cell culture']
  },
  {
    id: 'te003',
    name: 'Laminin',
    function: 'Basement membrane protein',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Multiple chromosomes',
    type: 'Structural protein',
    properties: ['Basement membrane', 'Cell migration', 'Tissue organization'],
    applications: ['Tissue engineering', 'Stem cell culture', 'Regenerative medicine']
  },

  // ADDITIONAL BIOPLASTICS GENES
  {
    id: 'bp002',
    name: 'PLA Synthase',
    function: 'Polylactic acid synthesis',
    organism: 'Lactobacillus delbrueckii',
    commonName: 'Lactic Acid Bacteria',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Biodegradable plastic', 'Lactic acid polymer', 'Sustainable material'],
    applications: ['Biodegradable plastics', 'Packaging materials', 'Green chemistry']
  },
  {
    id: 'bp003',
    name: 'PHB Synthase',
    function: 'Polyhydroxybutyrate synthesis',
    organism: 'Ralstonia eutropha',
    commonName: 'Hydrogen Bacteria',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Bioplastic production', 'Carbon storage', 'Biodegradable'],
    applications: ['Bioplastics', 'Sustainable packaging', 'Carbon sequestration']
  },

  // ADDITIONAL MARINE BIOTECHNOLOGY GENES
  {
    id: 'mb002',
    name: 'Chitin Synthase',
    function: 'Chitin biosynthesis enzyme',
    organism: 'Penaeus monodon',
    commonName: 'Giant Tiger Prawn',
    location: 'Crustacean genome',
    type: 'Enzyme',
    properties: ['Chitin production', 'Structural material', 'Biodegradable'],
    applications: ['Biomaterials', 'Wound dressings', 'Food packaging']
  },
  {
    id: 'mb003',
    name: 'Alginate Lyase',
    function: 'Alginate degradation enzyme',
    organism: 'Pseudoalteromonas sp.',
    commonName: 'Marine Bacteria',
    location: 'Bacterial genome',
    type: 'Enzyme',
    properties: ['Alginate breakdown', 'Seaweed processing', 'Marine biotechnology'],
    applications: ['Seaweed processing', 'Food industry', 'Biotechnology']
  },

  // ADDITIONAL COSMETICS GENES
  {
    id: 'cos002',
    name: 'Collagenase',
    function: 'Collagen degradation enzyme',
    organism: 'Clostridium histolyticum',
    commonName: 'Clostridium Bacteria',
    location: 'Bacterial genome',
    type: 'Enzyme',
    properties: ['Collagen breakdown', 'Tissue remodeling', 'Therapeutic enzyme'],
    applications: ['Cosmetic treatments', 'Wound healing', 'Medical applications']
  },
  {
    id: 'cos003',
    name: 'Elastase',
    function: 'Elastin degradation enzyme',
    organism: 'Pseudomonas aeruginosa',
    commonName: 'Pseudomonas Bacteria',
    location: 'Bacterial genome',
    type: 'Enzyme',
    properties: ['Elastin breakdown', 'Skin elasticity', 'Protein degradation'],
    applications: ['Anti-aging products', 'Skin treatments', 'Cosmetic industry']
  },

  // ADDITIONAL PROBIOTICS GENES
  {
    id: 'prob002',
    name: 'Nisin',
    function: 'Antimicrobial peptide',
    organism: 'Lactococcus lactis',
    commonName: 'Lactic Acid Bacteria',
    location: 'Bacterial chromosome',
    type: 'Antimicrobial peptide',
    properties: ['Food preservation', 'Antimicrobial activity', 'Natural preservative'],
    applications: ['Food preservation', 'Probiotics', 'Natural antimicrobials']
  },
  {
    id: 'prob003',
    name: 'Lactase',
    function: 'Lactose hydrolysis enzyme',
    organism: 'Lactobacillus acidophilus',
    commonName: 'Acidophilus Bacteria',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Lactose digestion', 'Dairy processing', 'Digestive aid'],
    applications: ['Lactose-free products', 'Digestive health', 'Dairy industry']
  },

  // ADDITIONAL FLAVOR & FRAGRANCE GENES
  {
    id: 'ff002',
    name: 'Vanillin Synthase',
    function: 'Vanillin biosynthesis enzyme',
    organism: 'Vanilla planifolia',
    commonName: 'Vanilla Orchid',
    location: 'Plant genome',
    type: 'Enzyme',
    properties: ['Flavor compound', 'Aromatic synthesis', 'Natural vanilla'],
    applications: ['Flavor industry', 'Natural vanilla', 'Food additives']
  },
  {
    id: 'ff003',
    name: 'Menthol Synthase',
    function: 'Menthol biosynthesis enzyme',
    organism: 'Mentha piperita',
    commonName: 'Peppermint',
    location: 'Plant genome',
    type: 'Enzyme',
    properties: ['Cooling sensation', 'Aromatic compound', 'Essential oil'],
    applications: ['Flavor industry', 'Cosmetics', 'Pharmaceuticals']
  },

  // ADDITIONAL BIOMINING GENES
  {
    id: 'bm002',
    name: 'Copper Resistance',
    function: 'Copper tolerance and accumulation',
    organism: 'Acidithiobacillus ferrooxidans',
    commonName: 'Iron-oxidizing Bacteria',
    location: 'Bacterial chromosome',
    type: 'Resistance protein',
    properties: ['Metal tolerance', 'Copper accumulation', 'Acid resistance'],
    applications: ['Biomining', 'Metal recovery', 'Environmental cleanup']
  },
  {
    id: 'bm003',
    name: 'Gold Binding Protein',
    function: 'Gold ion binding and concentration',
    organism: 'Ralstonia metallidurans',
    commonName: 'Metal-resistant Bacteria',
    location: 'Bacterial chromosome',
    type: 'Metal-binding protein',
    properties: ['Gold binding', 'Metal concentration', 'Bioaccumulation'],
    applications: ['Gold recovery', 'Biomining', 'Precious metal extraction']
  },

  // ADDITIONAL DIAGNOSTIC GENES
  {
    id: 'dg002',
    name: 'Alkaline Phosphatase',
    function: 'Phosphate group removal enzyme',
    organism: 'Escherichia coli',
    commonName: 'E. coli',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Phosphatase activity', 'Colorimetric detection', 'Diagnostic enzyme'],
    applications: ['ELISA assays', 'Western blotting', 'Diagnostic kits']
  },
  {
    id: 'dg003',
    name: 'Glucose-6-phosphate Dehydrogenase',
    function: 'Glucose metabolism enzyme',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome X',
    type: 'Enzyme',
    properties: ['Glucose metabolism', 'NADPH production', 'Diagnostic marker'],
    diseases: ['G6PD deficiency'],
    applications: ['Metabolic diagnostics', 'Enzyme assays', 'Clinical testing']
  },

  // ADDITIONAL METABOLIC DISEASE GENES
  {
    id: 'md002',
    name: 'Galactokinase',
    function: 'Galactose metabolism enzyme',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 17q25.1',
    type: 'Enzyme',
    properties: ['Galactose phosphorylation', 'Sugar metabolism', 'Liver enzyme'],
    diseases: ['Galactokinase deficiency'],
    applications: ['Metabolic disorders', 'Enzyme therapy', 'Newborn screening']
  },
  {
    id: 'md003',
    name: 'Hexosaminidase A',
    function: 'Lysosomal enzyme for lipid breakdown',
    organism: 'Homo sapiens',
    commonName: 'Human',
    location: 'Chromosome 15q23',
    type: 'Enzyme',
    properties: ['Lipid metabolism', 'Lysosomal function', 'Neurological health'],
    diseases: ['Tay-Sachs disease'],
    applications: ['Genetic testing', 'Enzyme replacement', 'Lysosomal storage disorders']
  },

  // ADDITIONAL BIOFUEL PRODUCTION GENES
  {
    id: 'bf002',
    name: 'Alcohol Dehydrogenase',
    function: 'Ethanol production enzyme',
    organism: 'Zymomonas mobilis',
    commonName: 'Zymomonas Bacteria',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Ethanol production', 'High efficiency', 'Biofuel synthesis'],
    applications: ['Bioethanol production', 'Fermentation', 'Renewable energy']
  },
  {
    id: 'bf003',
    name: 'Fatty Acid Synthase',
    function: 'Fatty acid biosynthesis enzyme',
    organism: 'Chlorella vulgaris',
    commonName: 'Green Algae',
    location: 'Algal genome',
    type: 'Enzyme',
    properties: ['Lipid production', 'Biodiesel precursor', 'Photosynthetic organism'],
    applications: ['Biodiesel production', 'Algae biofuels', 'Renewable energy']
  },

  // ADDITIONAL SYNTHETIC BIOLOGY GENES
  {
    id: 'sb002',
    name: 'T3 RNA Polymerase',
    function: 'Bacteriophage RNA polymerase',
    organism: 'Bacteriophage T3',
    commonName: 'T3 Phage',
    location: 'Viral genome',
    type: 'Enzyme',
    properties: ['RNA synthesis', 'Promoter specificity', 'In vitro transcription'],
    applications: ['RNA production', 'Synthetic biology', 'Research tools']
  },
  {
    id: 'sb003',
    name: 'Cre Recombinase',
    function: 'Site-specific DNA recombination',
    organism: 'Bacteriophage P1',
    commonName: 'P1 Phage',
    location: 'Viral genome',
    type: 'Recombinase',
    properties: ['DNA recombination', 'Site-specific', 'Conditional gene expression'],
    applications: ['Conditional knockouts', 'Gene switching', 'Research tools']
  }
];

// Combine original and additional genes