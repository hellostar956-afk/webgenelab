import React from 'react';
import { Microscope, Database, FlaskConical, Dna, ArrowRight, Beaker, GitBranch, Users, Globe, Award } from 'lucide-react';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

export default function HomePage({ setActiveTab }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-green-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to the Future of 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> Genetic Engineering</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Explore, experiment, and innovate with our comprehensive genetic engineering simulation platform. 
              Discover the building blocks of life and create tomorrow's organisms today.
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => setActiveTab('lab')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-colors"
              >
                <FlaskConical className="w-5 h-5" />
                <span>Start Experimenting</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setActiveTab('database')}
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Explore Database
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Research Platform</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access cutting-edge tools and accurate scientific data to conduct virtual genetic engineering experiments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-blue-100">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Organism Database</h3>
            <p className="text-gray-600 mb-4">
              Access comprehensive genetic information for diverse organisms, from bacteria to complex mammals with accurate scientific data.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">23+ Organisms</span>
              <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">Verified Data</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-green-100">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Microscope className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Virtual Laboratory</h3>
            <p className="text-gray-600 mb-4">
              Conduct CRISPR-based gene editing experiments with drag-and-drop functionality and realistic scientific modeling.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">CRISPR Tools</span>
              <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">Interactive Editing</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-purple-100">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <GitBranch className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Gene Library</h3>
            <p className="text-gray-600 mb-4">
              Store and manage your custom genetic modifications, create hybrid organisms, and share discoveries.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">Custom GMOs</span>
              <span className="bg-orange-50 text-orange-700 px-2 py-1 rounded text-sm">Shareable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">23+</div>
              <div className="text-blue-100">Organisms</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">23+</div>
              <div className="text-blue-100">Genes Catalogued</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">∞</div>
              <div className="text-blue-100">Possible Combinations</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Data Accuracy</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Genetic Journey?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Join thousands of researchers, students, and curious minds exploring the fascinating world of genetic engineering.
          </p>
          <button 
            onClick={() => setActiveTab('database')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 mx-auto transition-colors"
          >
            <Beaker className="w-5 h-5" />
            <span>Begin Your First Experiment</span>
          </button>
        </div>
      </div>
    </div>
  );
}