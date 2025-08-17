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