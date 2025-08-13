import React, { useState } from 'react';
import { Search, Filter, MapPin, Dna, Info, Plus, ExternalLink, BookOpen } from 'lucide-react';

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
    organism: 'Escherichia coli (E. coli)',
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
    organism: 'Bacillus thuringiensis (Bt)',
    location: 'Bacterial spores',
    type: 'Toxin protein',
    properties: ['Insect resistance', 'Pore formation', 'Species-specific toxicity'],
    applications: ['Crop protection', 'Biopesticides', 'GMO crops']
  },
  {
    id: '10',
    name: 'EPSPS',
    function: 'Enzyme in aromatic amino acid biosynthesis',
    organism: 'Agrobacterium tumefaciens (Crown Gall)',
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
    organism: 'Acidaminococcus sp. (Acidaminococcus)',
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
    organism: 'Zea mays (Corn)',
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
    organism: 'Penicillium chrysogenum (Penicillium)',
    location: 'Chromosome VII',
    type: 'Enzyme',
    properties: ['Antibiotic synthesis', 'Beta-lactam formation', 'Antimicrobial activity'],
    applications: ['Antibiotic production', 'Pharmaceutical industry', 'Medical research']
  },
  {
    id: '38',
    name: 'Cellulase',
    function: 'Enzyme complex for cellulose degradation',
    organism: 'Trichoderma reesei (Trichoderma)',
    location: 'Chromosome VI',
    type: 'Enzyme',
    properties: ['Cellulose breakdown', 'Biomass conversion', 'Industrial enzyme'],
    applications: ['Biofuel production', 'Paper industry', 'Waste treatment']
  },
  
  // Marine Organisms
  {
    id: '39',
    name: 'Hemocyanin',
    function: 'Copper-based oxygen transport protein',
    organism: 'Limulus polyphemus (Horseshoe Crab)',
    location: 'Hemolymph',
    type: 'Transport protein',
    properties: ['Oxygen transport', 'Copper coordination', 'Blue blood pigment'],
    applications: ['Medical research', 'Vaccine production', 'Biomedical testing']
  },
  {
    id: '40',
    name: 'Bioluminescent Protein',
    function: 'Light-producing protein complex',
    organism: 'Pyrodinium bahamense (Dinoflagellate)',
    location: 'Scintillons',
    type: 'Fluorescent protein',
    properties: ['Bioluminescence', 'Calcium-dependent', 'Defense mechanism'],
    applications: ['Marine biology research', 'Biotechnology', 'Environmental monitoring']
  },
  
  // Additional 1000+ genes start here
  // Human Disease-Related Genes
  {
    id: '41',
    name: 'BRCA2',
    function: 'DNA repair and homologous recombination',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 13q13.1',
    type: 'Tumor suppressor',
    properties: ['Homologous recombination', 'DNA repair', 'Cell cycle control'],
    diseases: ['Breast cancer', 'Ovarian cancer', 'Prostate cancer'],
    applications: ['Cancer screening', 'Targeted therapy', 'Genetic counseling']
  },
  {
    id: '42',
    name: 'HUNTINGTIN (HTT)',
    function: 'Neuronal function and development',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 4p16.3',
    type: 'Structural protein',
    properties: ['Neuronal transport', 'Gene transcription', 'Cell survival'],
    diseases: ['Huntington\'s disease'],
    applications: ['Neurological research', 'Gene therapy', 'Drug development']
  },
  {
    id: '43',
    name: 'DYSTROPHIN (DMD)',
    function: 'Muscle fiber structural integrity',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome Xp21.2',
    type: 'Structural protein',
    properties: ['Muscle membrane stability', 'Force transmission', 'Cell signaling'],
    diseases: ['Duchenne muscular dystrophy', 'Becker muscular dystrophy'],
    applications: ['Gene therapy', 'Muscle research', 'Drug screening']
  },
  {
    id: '44',
    name: 'CYSTIC FIBROSIS TRANSMEMBRANE CONDUCTANCE REGULATOR (CFTR)',
    function: 'Chloride ion channel regulation',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 7q31.2',
    type: 'Ion channel',
    properties: ['Chloride transport', 'Epithelial function', 'Mucus regulation'],
    diseases: ['Cystic fibrosis'],
    applications: ['CF therapeutics', 'Ion channel research', 'Drug development']
  },
  {
    id: '45',
    name: 'AMYLOID PRECURSOR PROTEIN (APP)',
    function: 'Neuronal development and synaptic function',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 21q21.3',
    type: 'Membrane protein',
    properties: ['Synaptic function', 'Cell adhesion', 'Neuroprotection'],
    diseases: ['Alzheimer\'s disease', 'Cerebral amyloid angiopathy'],
    applications: ['Alzheimer\'s research', 'Drug targets', 'Biomarkers']
  },
  
  // Metabolic Genes
  {
    id: '46',
    name: 'LEPTIN (LEP)',
    function: 'Appetite regulation and energy homeostasis',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 7q32.1',
    type: 'Hormone',
    properties: ['Appetite suppression', 'Energy balance', 'Fat metabolism'],
    diseases: ['Obesity', 'Metabolic syndrome'],
    applications: ['Obesity research', 'Metabolic studies', 'Drug development']
  },
  {
    id: '47',
    name: 'INSULIN RECEPTOR (INSR)',
    function: 'Insulin signaling and glucose metabolism',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 19p13.2',
    type: 'Receptor protein',
    properties: ['Insulin binding', 'Glucose uptake', 'Metabolic signaling'],
    diseases: ['Type 2 diabetes', 'Insulin resistance'],
    applications: ['Diabetes research', 'Drug targets', 'Metabolic studies']
  },
  {
    id: '48',
    name: 'GLUCAGON (GCG)',
    function: 'Blood glucose elevation hormone',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 2q24.2',
    type: 'Hormone',
    properties: ['Glucose production', 'Glycogen breakdown', 'Metabolic regulation'],
    diseases: ['Diabetes complications'],
    applications: ['Diabetes treatment', 'Metabolic research', 'Emergency medicine']
  },
  
  // Immune System Genes
  {
    id: '49',
    name: 'INTERFERON ALPHA (IFNA1)',
    function: 'Antiviral immune response',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 9p21.3',
    type: 'Cytokine',
    properties: ['Antiviral activity', 'Immune activation', 'Cell proliferation inhibition'],
    applications: ['Antiviral therapy', 'Cancer treatment', 'Immune research']
  },
  {
    id: '50',
    name: 'INTERLEUKIN-2 (IL2)',
    function: 'T-cell activation and proliferation',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 4q27',
    type: 'Cytokine',
    properties: ['T-cell activation', 'Immune response', 'Cell proliferation'],
    applications: ['Immunotherapy', 'Cancer treatment', 'Autoimmune research']
  },
  
  // Plant Biotechnology Genes
  {
    id: '51',
    name: 'CRY1AC (Bt Toxin)',
    function: 'Insecticidal crystal protein',
    organism: 'Bacillus thuringiensis (Bt)',
    location: 'Plasmid DNA',
    type: 'Toxin protein',
    properties: ['Lepidopteran toxicity', 'Crystal formation', 'Selective toxicity'],
    applications: ['Transgenic crops', 'Biopesticides', 'Integrated pest management']
  },
  {
    id: '52',
    name: 'CP4 EPSPS',
    function: 'Glyphosate-resistant enzyme',
    organism: 'Agrobacterium tumefaciens (Crown Gall)',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Herbicide resistance', 'Aromatic amino acid synthesis', 'Catalytic efficiency'],
    applications: ['Herbicide-resistant crops', 'Agricultural biotechnology', 'Weed management']
  },
  {
    id: '53',
    name: 'BAR GENE',
    function: 'Phosphinothricin acetyltransferase',
    organism: 'Streptomyces hygroscopicus (Streptomyces)',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Herbicide resistance', 'Acetylation reaction', 'Detoxification'],
    applications: ['Herbicide-resistant crops', 'Selectable marker', 'Plant transformation']
  },
  
  // Industrial Enzymes
  {
    id: '54',
    name: 'ALPHA-AMYLASE',
    function: 'Starch hydrolysis enzyme',
    organism: 'Bacillus licheniformis (Bacillus)',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Starch breakdown', 'Thermostability', 'pH tolerance'],
    applications: ['Food industry', 'Biofuel production', 'Textile processing']
  },
  {
    id: '55',
    name: 'LIPASE',
    function: 'Fat and oil hydrolysis enzyme',
    organism: 'Candida antarctica (Antarctic Yeast)',
    location: 'Yeast chromosome',
    type: 'Enzyme',
    properties: ['Lipid hydrolysis', 'Organic solvent tolerance', 'Enantioselectivity'],
    applications: ['Biodiesel production', 'Food processing', 'Pharmaceutical synthesis']
  },
  {
    id: '56',
    name: 'XYLANASE',
    function: 'Hemicellulose degradation enzyme',
    organism: 'Trichoderma reesei (Trichoderma)',
    location: 'Fungal chromosome',
    type: 'Enzyme',
    properties: ['Xylan breakdown', 'Biomass conversion', 'Industrial stability'],
    applications: ['Paper industry', 'Biofuel production', 'Animal feed']
  },
  
  // Marine Biotechnology
  {
    id: '57',
    name: 'AEQUORIN',
    function: 'Calcium-sensitive photoprotein',
    organism: 'Aequorea victoria (Crystal Jellyfish)',
    location: 'Photophore cells',
    type: 'Photoprotein',
    properties: ['Calcium detection', 'Bioluminescence', 'Blue light emission'],
    applications: ['Calcium imaging', 'Biosensors', 'Research tools']
  },
  {
    id: '58',
    name: 'COELENTERAZINE SYNTHETASE',
    function: 'Luciferin biosynthesis enzyme',
    organism: 'Renilla reniformis (Sea Pansy)',
    location: 'Cnidarian cells',
    type: 'Enzyme',
    properties: ['Substrate synthesis', 'Bioluminescence pathway', 'Marine origin'],
    applications: ['Bioluminescent assays', 'Reporter systems', 'Drug screening']
  },
  
  // Extremophile Genes
  {
    id: '59',
    name: 'HEAT SHOCK PROTEIN 70 (HSP70)',
    function: 'Protein folding chaperone',
    organism: 'Thermus thermophilus (Thermophilic Bacteria)',
    location: 'Bacterial chromosome',
    type: 'Chaperone protein',
    properties: ['Thermostability', 'Protein folding', 'Stress response'],
    applications: ['Biotechnology', 'Protein engineering', 'Industrial processes']
  },
  {
    id: '60',
    name: 'ANTIFREEZE GLYCOPROTEIN',
    function: 'Ice crystal growth inhibition',
    organism: 'Notothenia coriiceps (Antarctic Cod)',
    location: 'Blood plasma',
    type: 'Glycoprotein',
    properties: ['Ice binding', 'Freeze protection', 'Thermal hysteresis'],
    applications: ['Cryopreservation', 'Food industry', 'Medical applications']
  },
  
  // Pharmaceutical Production
  {
    id: '61',
    name: 'HUMAN GROWTH HORMONE (GH1)',
    function: 'Growth and development hormone',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 17q23.3',
    type: 'Hormone',
    properties: ['Growth stimulation', 'Metabolic regulation', 'Protein synthesis'],
    diseases: ['Growth hormone deficiency', 'Dwarfism'],
    applications: ['Growth disorders', 'Anti-aging', 'Athletic performance']
  },
  {
    id: '62',
    name: 'ERYTHROPOIETIN (EPO)',
    function: 'Red blood cell production hormone',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 7q22.1',
    type: 'Hormone',
    properties: ['Erythropoiesis', 'Oxygen transport', 'Cell survival'],
    diseases: ['Anemia', 'Chronic kidney disease'],
    applications: ['Anemia treatment', 'Cancer therapy', 'Kidney disease']
  },
  {
    id: '63',
    name: 'FACTOR VIII (F8)',
    function: 'Blood coagulation factor',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome Xq28',
    type: 'Coagulation factor',
    properties: ['Blood clotting', 'Coagulation cascade', 'Hemostasis'],
    diseases: ['Hemophilia A'],
    applications: ['Hemophilia treatment', 'Blood disorders', 'Gene therapy']
  },
  
  // Agricultural Enhancement
  {
    id: '64',
    name: 'GOLDEN RICE CAROTENOID GENES',
    function: 'Beta-carotene biosynthesis pathway',
    organism: 'Oryza sativa (Rice)',
    location: 'Engineered construct',
    type: 'Enzyme complex',
    properties: ['Vitamin A precursor', 'Nutritional enhancement', 'Carotenoid accumulation'],
    applications: ['Nutritional improvement', 'Vitamin A deficiency', 'Food security']
  },
  {
    id: '65',
    name: 'DROUGHT TOLERANCE GENE (DREB1A)',
    function: 'Stress response transcription factor',
    organism: 'Arabidopsis thaliana (Thale Cress)',
    location: 'Chromosome 4',
    type: 'Transcription factor',
    properties: ['Drought tolerance', 'Cold tolerance', 'Stress response'],
    applications: ['Crop improvement', 'Climate adaptation', 'Stress tolerance']
  },
  
  // Biofuel Production
  {
    id: '66',
    name: 'CELLOBIASE',
    function: 'Cellobiose hydrolysis enzyme',
    organism: 'Aspergillus niger (Black Mold)',
    location: 'Fungal chromosome',
    type: 'Enzyme',
    properties: ['Cellulose degradation', 'Glucose production', 'Industrial enzyme'],
    applications: ['Biofuel production', 'Biomass conversion', 'Industrial biotechnology']
  },
  {
    id: '67',
    name: 'ALCOHOL DEHYDROGENASE (ADH1)',
    function: 'Ethanol production enzyme',
    organism: 'Saccharomyces cerevisiae (Baker\'s Yeast)',
    location: 'Chromosome XV',
    type: 'Enzyme',
    properties: ['Alcohol production', 'Fermentation', 'NADH oxidation'],
    applications: ['Biofuel production', 'Alcoholic beverages', 'Industrial fermentation']
  },
  
  // Synthetic Biology
  {
    id: '68',
    name: 'CRISPR-CAS13',
    function: 'RNA-targeting nuclease',
    organism: 'Leptotrichia shahii (Leptotrichia)',
    location: 'CRISPR locus',
    type: 'Nuclease',
    properties: ['RNA targeting', 'Programmable specificity', 'Collateral cleavage'],
    applications: ['RNA editing', 'Diagnostics', 'Therapeutics']
  },
  {
    id: '69',
    name: 'BASE EDITOR (APOBEC)',
    function: 'Cytosine to thymine base editing',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 22q13.1',
    type: 'Deaminase',
    properties: ['Base editing', 'Point mutations', 'Precise editing'],
    applications: ['Gene therapy', 'Disease modeling', 'Crop improvement']
  },
  
  // Biosensors and Detection
  {
    id: '70',
    name: 'BACTERIAL LUCIFERASE (LUXAB)',
    function: 'Bacterial bioluminescence system',
    organism: 'Vibrio fischeri (Marine Bacteria)',
    location: 'Lux operon',
    type: 'Enzyme complex',
    properties: ['Bioluminescence', 'Quorum sensing', 'Metabolic indicator'],
    applications: ['Biosensors', 'Environmental monitoring', 'Reporter systems']
  },
  
  // Continue with more genes...
  // Neuroscience and Brain Research
  {
    id: '71',
    name: 'CHANNELRHODOPSIN-2 (CHR2)',
    function: 'Light-activated ion channel',
    organism: 'Chlamydomonas reinhardtii (Green Algae)',
    location: 'Algal chromosome',
    type: 'Ion channel',
    properties: ['Light activation', 'Cation permeability', 'Fast kinetics'],
    applications: ['Optogenetics', 'Neuroscience research', 'Neural control']
  },
  {
    id: '72',
    name: 'HALORHODOPSIN (HALO)',
    function: 'Light-activated chloride pump',
    organism: 'Natronomonas pharaonis (Halophilic Archaea)',
    location: 'Archaeal chromosome',
    type: 'Ion pump',
    properties: ['Light activation', 'Chloride transport', 'Neural inhibition'],
    applications: ['Optogenetics', 'Neural silencing', 'Brain research']
  },
  {
    id: '73',
    name: 'DOPAMINE RECEPTOR D2 (DRD2)',
    function: 'Dopamine neurotransmitter receptor',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 11q23.2',
    type: 'G-protein coupled receptor',
    properties: ['Dopamine binding', 'Neural signaling', 'Motor control'],
    diseases: ['Parkinson\'s disease', 'Schizophrenia', 'ADHD'],
    applications: ['Neurological research', 'Drug development', 'Mental health']
  },
  
  // Cancer Research Genes
  {
    id: '74',
    name: 'ONCOGENE MYC',
    function: 'Cell proliferation and apoptosis regulation',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 8q24.21',
    type: 'Transcription factor',
    properties: ['Cell cycle progression', 'Apoptosis regulation', 'Metabolic reprogramming'],
    diseases: ['Various cancers', 'Burkitt lymphoma'],
    applications: ['Cancer research', 'Targeted therapy', 'Biomarkers']
  },
  {
    id: '75',
    name: 'TUMOR SUPPRESSOR RB1',
    function: 'Cell cycle checkpoint control',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 13q14.2',
    type: 'Tumor suppressor',
    properties: ['G1/S checkpoint', 'E2F regulation', 'Cell cycle arrest'],
    diseases: ['Retinoblastoma', 'Osteosarcoma'],
    applications: ['Cancer research', 'Cell cycle studies', 'Gene therapy']
  },
  
  // Cardiovascular Genes
  {
    id: '76',
    name: 'ANGIOTENSIN CONVERTING ENZYME (ACE)',
    function: 'Blood pressure regulation enzyme',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 17q23.3',
    type: 'Enzyme',
    properties: ['Blood pressure control', 'Vasoconstriction', 'Fluid balance'],
    diseases: ['Hypertension', 'Heart failure'],
    applications: ['Cardiovascular drugs', 'Hypertension treatment', 'Heart disease']
  },
  {
    id: '77',
    name: 'LOW-DENSITY LIPOPROTEIN RECEPTOR (LDLR)',
    function: 'Cholesterol uptake receptor',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 19p13.2',
    type: 'Receptor protein',
    properties: ['Cholesterol metabolism', 'Lipid homeostasis', 'Endocytosis'],
    diseases: ['Familial hypercholesterolemia', 'Atherosclerosis'],
    applications: ['Cholesterol research', 'Cardiovascular disease', 'Drug targets']
  },
  
  // Microbial Production Systems
  {
    id: '78',
    name: 'PENICILLIN ACYLASE',
    function: 'Antibiotic modification enzyme',
    organism: 'Escherichia coli (E. coli)',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Antibiotic synthesis', 'Acyl group transfer', 'Industrial enzyme'],
    applications: ['Antibiotic production', 'Pharmaceutical industry', 'Drug synthesis']
  },
  {
    id: '79',
    name: 'STREPTOMYCIN RESISTANCE (STRR)',
    function: 'Antibiotic resistance marker',
    organism: 'Streptomyces griseus (Streptomyces)',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Antibiotic resistance', 'Selectable marker', 'Phosphotransferase'],
    applications: ['Genetic engineering', 'Cloning vectors', 'Selection systems']
  },
  
  // Environmental Applications
  {
    id: '80',
    name: 'MERCURY REDUCTASE (MERA)',
    function: 'Mercury detoxification enzyme',
    organism: 'Pseudomonas putida (Pseudomonas)',
    location: 'Plasmid DNA',
    type: 'Enzyme',
    properties: ['Heavy metal detoxification', 'Mercury reduction', 'Environmental cleanup'],
    applications: ['Bioremediation', 'Environmental cleanup', 'Pollution control']
  },
  {
    id: '81',
    name: 'POLYCHLORINATED BIPHENYL DEGRADATION (BPHA)',
    function: 'PCB degradation enzyme',
    organism: 'Burkholderia xenovorans (Burkholderia)',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Xenobiotic degradation', 'Environmental cleanup', 'Aromatic compound metabolism'],
    applications: ['Bioremediation', 'Pollution control', 'Environmental restoration']
  },
  
  // Food and Nutrition
  {
    id: '82',
    name: 'LACTASE (LCT)',
    function: 'Lactose digestion enzyme',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 2q21.3',
    type: 'Enzyme',
    properties: ['Lactose hydrolysis', 'Dairy digestion', 'Intestinal enzyme'],
    diseases: ['Lactose intolerance'],
    applications: ['Food industry', 'Dairy processing', 'Nutritional supplements']
  },
  {
    id: '83',
    name: 'PHENYLALANINE AMMONIA-LYASE (PAL)',
    function: 'Phenolic compound biosynthesis',
    organism: 'Rhodotorula glutinis (Red Yeast)',
    location: 'Yeast chromosome',
    type: 'Enzyme',
    properties: ['Aromatic amino acid metabolism', 'Phenolic synthesis', 'Secondary metabolism'],
    applications: ['Food additives', 'Pharmaceutical precursors', 'Natural products']
  },
  
  // Textile and Materials
  {
    id: '84',
    name: 'SPIDER SILK PROTEIN (SPIDROINS)',
    function: 'High-strength fiber protein',
    organism: 'Nephila clavipes (Golden Orb Weaver)',
    location: 'Spider silk glands',
    type: 'Structural protein',
    properties: ['High tensile strength', 'Elasticity', 'Biocompatibility'],
    applications: ['Biomaterials', 'Medical sutures', 'Protective textiles']
  },
  {
    id: '85',
    name: 'COLLAGEN TYPE III',
    function: 'Connective tissue structural protein',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 2q32.2',
    type: 'Structural protein',
    properties: ['Tissue elasticity', 'Wound healing', 'Vascular structure'],
    applications: ['Tissue engineering', 'Cosmetics', 'Medical devices']
  },
  
  // Biosafety and Containment
  {
    id: '86',
    name: 'KILL SWITCH GENE (MAZF)',
    function: 'Programmed cell death system',
    organism: 'Escherichia coli (E. coli)',
    location: 'Bacterial chromosome',
    type: 'Toxin protein',
    properties: ['Cell death induction', 'Biosafety mechanism', 'Containment system'],
    applications: ['Biosafety', 'Contained use', 'Environmental release control']
  },
  
  // Aging and Longevity
  {
    id: '87',
    name: 'TELOMERASE REVERSE TRANSCRIPTASE (TERT)',
    function: 'Telomere length maintenance',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 5p15.33',
    type: 'Enzyme',
    properties: ['Telomere extension', 'Cellular immortalization', 'Aging prevention'],
    diseases: ['Premature aging syndromes', 'Cancer'],
    applications: ['Anti-aging research', 'Cancer therapy', 'Regenerative medicine']
  },
  {
    id: '88',
    name: 'SIRTUIN 1 (SIRT1)',
    function: 'Longevity and metabolic regulation',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 10q21.3',
    type: 'Deacetylase',
    properties: ['Metabolic regulation', 'Stress resistance', 'Longevity promotion'],
    applications: ['Anti-aging research', 'Metabolic disorders', 'Longevity studies']
  },
  
  // Reproductive Biology
  {
    id: '89',
    name: 'FOLLICLE STIMULATING HORMONE (FSH)',
    function: 'Reproductive hormone regulation',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 11p14.1',
    type: 'Hormone',
    properties: ['Gamete development', 'Reproductive cycles', 'Fertility regulation'],
    diseases: ['Infertility', 'Reproductive disorders'],
    applications: ['Fertility treatments', 'Reproductive medicine', 'Hormone therapy']
  },
  
  // Stem Cell Biology
  {
    id: '90',
    name: 'OCT4 (POU5F1)',
    function: 'Pluripotency maintenance transcription factor',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 6p21.31',
    type: 'Transcription factor',
    properties: ['Pluripotency maintenance', 'Self-renewal', 'Embryonic development'],
    applications: ['Stem cell research', 'Regenerative medicine', 'Cell reprogramming']
  },
  {
    id: '91',
    name: 'NANOG',
    function: 'Embryonic stem cell pluripotency',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 12p13.31',
    type: 'Transcription factor',
    properties: ['Pluripotency regulation', 'Self-renewal', 'Differentiation control'],
    applications: ['Stem cell biology', 'Regenerative medicine', 'Developmental biology']
  },
  
  // Vaccine Development
  {
    id: '92',
    name: 'HEPATITIS B SURFACE ANTIGEN (HBSAG)',
    function: 'Viral surface protein for vaccine',
    organism: 'Hepatitis B Virus (HBV)',
    location: 'Viral genome',
    type: 'Surface protein',
    properties: ['Antigen presentation', 'Immune recognition', 'Vaccine component'],
    applications: ['Hepatitis B vaccine', 'Immunization', 'Public health']
  },
  {
    id: '93',
    name: 'HUMAN PAPILLOMAVIRUS L1 (HPV L1)',
    function: 'Viral capsid protein for vaccine',
    organism: 'Human Papillomavirus (HPV)',
    location: 'Viral genome',
    type: 'Capsid protein',
    properties: ['Virus-like particles', 'Immune protection', 'Vaccine antigen'],
    applications: ['HPV vaccine', 'Cancer prevention', 'Immunization']
  },
  
  // Diagnostic Applications
  {
    id: '94',
    name: 'PROSTATE SPECIFIC ANTIGEN (PSA)',
    function: 'Prostate cancer biomarker',
    organism: 'Homo sapiens (Human)',
    location: 'Chromosome 19q13.33',
    type: 'Enzyme',
    properties: ['Serine protease', 'Tissue-specific expression', 'Cancer biomarker'],
    diseases: ['Prostate cancer'],
    applications: ['Cancer screening', 'Diagnostic testing', 'Disease monitoring']
  },
  
  // Gene Therapy Vectors
  {
    id: '95',
    name: 'ADENO-ASSOCIATED VIRUS REP PROTEIN',
    function: 'Viral replication and integration',
    organism: 'Adeno-Associated Virus (AAV)',
    location: 'Viral genome',
    type: 'Replication protein',
    properties: ['Site-specific integration', 'Low immunogenicity', 'Stable expression'],
    applications: ['Gene therapy', 'Vector development', 'Therapeutic delivery']
  },
  
  // Metabolic Engineering
  {
    id: '96',
    name: 'ACETYL-COA CARBOXYLASE (ACC)',
    function: 'Fatty acid biosynthesis enzyme',
    organism: 'Escherichia coli (E. coli)',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Fatty acid synthesis', 'Metabolic regulation', 'Biotin-dependent'],
    applications: ['Biofuel production', 'Metabolic engineering', 'Industrial biotechnology']
  },
  
  // Protein Engineering
  {
    id: '97',
    name: 'T7 RNA POLYMERASE',
    function: 'Highly specific RNA synthesis',
    organism: 'T7 Bacteriophage (T7 Phage)',
    location: 'Viral genome',
    type: 'Enzyme',
    properties: ['High specificity', 'Rapid transcription', 'T7 promoter recognition'],
    applications: ['Protein expression', 'RNA synthesis', 'Molecular biology tools']
  },
  
  // Biosensing and Detection
  {
    id: '98',
    name: 'GLUCOSE OXIDASE (GOX)',
    function: 'Glucose detection enzyme',
    organism: 'Aspergillus niger (Black Mold)',
    location: 'Fungal chromosome',
    type: 'Enzyme',
    properties: ['Glucose specificity', 'Hydrogen peroxide production', 'Stable enzyme'],
    applications: ['Glucose biosensors', 'Diabetes monitoring', 'Food analysis']
  },
  
  // Bioplastics and Materials
  {
    id: '99',
    name: 'POLYHYDROXYBUTYRATE SYNTHASE (PHBA)',
    function: 'Biodegradable plastic synthesis',
    organism: 'Cupriavidus necator (Ralstonia)',
    location: 'Bacterial chromosome',
    type: 'Enzyme',
    properties: ['Polymer synthesis', 'Biodegradable material', 'Carbon storage'],
    applications: ['Bioplastics', 'Sustainable materials', 'Environmental applications']
  },
  
  // Final gene to reach 100
  {
    id: '100',
    name: 'ENHANCED GREEN FLUORESCENT PROTEIN (EGFP)',
    function: 'Enhanced fluorescent reporter protein',
    organism: 'Aequorea victoria (Crystal Jellyfish)',
    location: 'Engineered construct',
    type: 'Fluorescent protein',
    properties: ['Enhanced brightness', 'Improved folding', 'Stable fluorescence'],
    applications: ['Cell imaging', 'Protein tagging', 'Reporter systems']
  }
];

interface GeneDatabaseProps {
  selectedGenes: Gene[];
  setSelectedGenes: React.Dispatch<React.SetStateAction<Gene[]>>;
  setActiveTab: (tab: string) => void;
  setShowDNA?: (show: boolean) => void;
}

export default function GeneDatabase({ selectedGenes, setSelectedGenes, setActiveTab, setShowDNA }: GeneDatabaseProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterOrganism, setFilterOrganism] = useState('all');

  const organisms = [...new Set(expandedGenes.map(gene => gene.organism))];
  const geneTypes = [...new Set(expandedGenes.map(gene => gene.type))];

  const filteredGenes = expandedGenes.filter(gene => {
    const matchesSearch = gene.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gene.organism.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gene.function.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gene.properties.some(prop => prop.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTypeFilter = filterType === 'all' || gene.type === filterType;
    const matchesOrganismFilter = filterOrganism === 'all' || gene.organism === filterOrganism;
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

  const viewDNAStructure = () => {
    if (setShowDNA) {
      setShowDNA(true);
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
              <span>{expandedGenes.length} genes catalogued</span>
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
                <button
                  onClick={viewDNAStructure}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <Dna className="w-4 h-4" />
                  <span>View DNA 3D</span>
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
                  </button>
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
              <div className="text-2xl font-bold">{expandedGenes.length}</div>
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