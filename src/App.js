import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import ScenariosPage from './pages/ScenariosPage';
import ReflectionPage from './pages/ReflectionPage';
import ReferencesPage from './pages/ReferencesPage';
import InteractiveFeatures from './components/InteractiveFeatures';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  // Scenario state management
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [currentDecisionPoint, setCurrentDecisionPoint] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <>
            <InteractiveFeatures />
            <HomePage />
          </>
        );
      case 'scenarios':
        return (
          <ScenariosPage 
            selectedScenario={selectedScenario}
            setSelectedScenario={setSelectedScenario}
            currentDecisionPoint={currentDecisionPoint}
            setCurrentDecisionPoint={setCurrentDecisionPoint}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            showFeedback={showFeedback}
            setShowFeedback={setShowFeedback}
            setActiveSection={setActiveSection}
          />
        );
      case 'reflection':
        return <ReflectionPage />;
      case 'references':
        return <ReferencesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto px-4 py-8">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
