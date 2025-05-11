import React from 'react';
import { Home, BookOpen, Users, Brain } from 'lucide-react';

const NavigationBar = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center space-x-3 mb-2 sm:mb-0">
          {/* Custom Logo - fallbacks to Brain icon if image not found */}
          <div className="relative w-10 h-10 overflow-hidden rounded-full bg-white/20">
            <img 
              src="/images/logo.jpg" 
              alt="Lab Logo" 
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div style={{display: 'none'}} className="absolute inset-0 flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-lg sm:text-xl font-bold">Pediatric Neurologic Alterations Virtual Lab</h1>
        </div>
        <div className="flex flex-wrap space-x-2 sm:space-x-4 justify-center sm:justify-end">
          <button 
            onClick={() => setActiveSection('home')} 
            className={`px-3 py-2 rounded transition-colors text-sm sm:text-base ${
              activeSection === 'home' ? 'bg-white text-indigo-600' : 'hover:bg-indigo-700'
            }`}
          >
            <Home className="inline h-4 w-4 mr-1 sm:mr-2" />
            Home
          </button>
          <button 
            onClick={() => setActiveSection('scenarios')} 
            className={`px-3 py-2 rounded transition-colors text-sm sm:text-base ${
              activeSection === 'scenarios' ? 'bg-white text-indigo-600' : 'hover:bg-indigo-700'
            }`}
          >
            <BookOpen className="inline h-4 w-4 mr-1 sm:mr-2" />
            Scenarios
          </button>
          <button 
            onClick={() => setActiveSection('reflection')} 
            className={`px-3 py-2 rounded transition-colors text-sm sm:text-base ${
              activeSection === 'reflection' ? 'bg-white text-indigo-600' : 'hover:bg-indigo-700'
            }`}
          >
            <Users className="inline h-4 w-4 mr-1 sm:mr-2" />
            Reflection
          </button>
          <button 
            onClick={() => setActiveSection('references')} 
            className={`px-3 py-2 rounded transition-colors text-sm sm:text-base ${
              activeSection === 'references' ? 'bg-white text-indigo-600' : 'hover:bg-indigo-700'
            }`}
          >
            <BookOpen className="inline h-4 w-4 mr-1 sm:mr-2" />
            References
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
