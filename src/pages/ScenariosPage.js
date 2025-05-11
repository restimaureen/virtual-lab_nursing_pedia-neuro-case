import React, { useState } from 'react';
import { Brain, ChevronRight, CheckCircle, AlertCircle, ChevronLeft, RefreshCw, ArrowRight, Lightbulb, Clock, Award, AlertTriangle } from 'lucide-react';
import scenarios from '../data/scenarios';

const ScenariosPage = ({ 
  selectedScenario, 
  setSelectedScenario, 
  currentDecisionPoint, 
  setCurrentDecisionPoint,
  selectedOption,
  setSelectedOption,
  showFeedback,
  setShowFeedback,
  setActiveSection
}) => {
  // State management
  const [localSelectedScenario, setLocalSelectedScenario] = useState(selectedScenario || null);
  const [localCurrentDecisionPoint, setLocalCurrentDecisionPoint] = useState(currentDecisionPoint || 0);
  const [localSelectedOption, setLocalSelectedOption] = useState(selectedOption || null);
  const [localShowFeedback, setLocalShowFeedback] = useState(showFeedback || false);
  const [hintsUsed, setHintsUsed] = useState(0);

  const currentScenario = selectedScenario !== undefined ? selectedScenario : localSelectedScenario;
  const currentPoint = currentDecisionPoint !== undefined ? currentDecisionPoint : localCurrentDecisionPoint;
  const currentOption = selectedOption !== undefined ? selectedOption : localSelectedOption;
  const feedbackVisible = showFeedback !== undefined ? showFeedback : localShowFeedback;

  const setCurrentScenario = setSelectedScenario || setLocalSelectedScenario;
  const setCurrentPoint = setCurrentDecisionPoint || setLocalCurrentDecisionPoint;
  const setCurrentOption = setSelectedOption || setLocalSelectedOption;
  const setFeedbackVisible = setShowFeedback || setLocalShowFeedback;

  // Handlers
  const handleOptionSelect = (index) => {
    setCurrentOption(index);
    setFeedbackVisible(false);
  };

  const handleSubmitAnswer = () => {
    if (currentOption !== null) {
      setFeedbackVisible(true);
    }
  };

  const handleHint = () => {
    setHintsUsed(prev => prev + 1);
    // Show hint logic here
  };

  const handleNextDecision = () => {
    const scenario = scenarios[currentScenario];
    if (currentPoint < scenario.decisionPoints.length - 1) {
      setCurrentPoint(currentPoint + 1);
      setCurrentOption(null);
      setFeedbackVisible(false);
    }
  };

  const handlePreviousDecision = () => {
    if (currentPoint > 0) {
      setCurrentPoint(currentPoint - 1);
      setCurrentOption(null);
      setFeedbackVisible(false);
    }
  };

  const handleResetScenario = () => {
    setCurrentPoint(0);
    setCurrentOption(null);
    setFeedbackVisible(false);
    setHintsUsed(0);
  };

  const handleCompleteScenario = () => {
    if (setActiveSection) {
      setActiveSection('reflection');
    }
  };

  // Scenario selection view
  if (!currentScenario) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Full-width Header Image */}
        <div className="relative" style={{ height: '500px' }}>
          <img 
            src="/images/child-park.jpg" 
            alt="Child at park"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-80 hidden"
            style={{ display: 'none' }}
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-white text-xl">Scenario image loading...</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">Real-World Pediatric TBI Cases</h1>
            <p className="text-indigo-200 mt-2 text-lg drop-shadow">Learn through authentic emergency scenarios</p>
          </div>
        </div>
        
        <div className="p-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-3">🚀 Welcome to Clinical Scenarios</h2>
            <p className="text-blue-700">
              These authentic case studies simulate real <span className="font-bold bg-blue-100 px-2 rounded">Emergency Department situations</span> where you'll make critical decisions in pediatric neurological care. 
              Each scenario builds your <span className="font-bold text-blue-900">clinical reasoning skills</span> through evidence-based practice.
            </p>
          </div>
          
          {Object.entries(scenarios).map(([key, scenario]) => (
            <div key={key} className="border rounded-lg overflow-hidden hover:shadow-lg transition-all mb-6 group">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Brain className="h-8 w-8 text-indigo-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{scenario.title}</h3>
                      <div className="flex items-center space-x-3 mt-1">
                        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                          TBI Case Study
                        </span>
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {scenario.decisionPoints.length} Decision Points
                        </span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setCurrentScenario(key);
                      setCurrentPoint(0);
                      setCurrentOption(null);
                      setFeedbackVisible(false);
                      setHintsUsed(0);
                    }}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center group"
                  >
                    <span>Start Clinical Scenario</span>
                    <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">👤 Patient</h4>
                    <p className="text-gray-600">
                      <span className="font-bold text-gray-800">{scenario.patientInfo.name}</span><br />
                      {scenario.patientInfo.age} • {scenario.patientInfo.gender}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">🧠 Glasgow Coma Scale</h4>
                    <p className="text-gray-600 font-mono text-lg">{scenario.patientInfo.gcs}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">💗 Vital Signs</h4>
                    <p className="text-gray-600 text-sm">{scenario.patientInfo.vitals}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">🚨 Chief Complaint</h4>
                    <p className="text-gray-600 text-sm">{scenario.patientInfo.chiefComplaint}</p>
                  </div>
                </div>
                
                <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-700 mb-2">📋 Clinical Story</h4>
                  <p className="text-gray-600">{scenario.story}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Scenario details view
  const scenario = scenarios[currentScenario];
  const currentDecision = scenario.decisionPoints[currentPoint];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">{scenario.title}</h2>
              <p className="text-indigo-100 mt-1 flex items-center">
                <Brain className="h-4 w-4 mr-2" />
                Decision Point {currentPoint + 1} of {scenario.decisionPoints.length}: {currentDecision.title}
              </p>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={handleHint}
                className="bg-yellow-500 hover:bg-yellow-600 p-2 rounded"
                title="Get a hint"
              >
                <Lightbulb className="h-5 w-5" />
              </button>
              <button 
                onClick={handleResetScenario}
                className="bg-white/20 hover:bg-white/30 p-2 rounded"
                title="Reset scenario"
              >
                <RefreshCw className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setCurrentScenario(null)}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded"
              >
                Back to Scenarios
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          {/* Patient Info Dashboard */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800 flex items-center">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                Patient Information
              </h3>
              <div className="flex space-x-3">
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  Stable
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  ED Status
                </span>
              </div>
            </div>
            <div className="grid md:grid-cols-5 gap-4 text-sm">
              <div className="bg-white p-3 rounded border">
                <span className="text-gray-500">Name:</span>
                <p className="font-bold text-gray-800">{scenario.patientInfo.name}</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <span className="text-gray-500">Age/Gender:</span>
                <p className="font-bold text-gray-800">{scenario.patientInfo.age} • {scenario.patientInfo.gender}</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <span className="text-gray-500">GCS:</span>
                <p className="font-bold text-gray-800 text-lg">{scenario.patientInfo.gcs}</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <span className="text-gray-500">Vitals:</span>
                <p className="font-bold text-gray-800">{scenario.patientInfo.vitals}</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <span className="text-gray-500">Chief Complaint:</span>
                <p className="font-bold text-gray-800">{scenario.patientInfo.chiefComplaint}</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Decision Point */}
          <div className="mb-8">
            {/* Interactive Progress Indicator */}
            <div className="flex justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg">
              <div className="flex space-x-1">
                {scenario.decisionPoints.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-4 h-4 rounded-full flex items-center justify-center ${
                      index === currentPoint ? 'bg-indigo-600 ring-4 ring-indigo-200 text-white' : 
                      index < currentPoint ? 'bg-green-500 text-white' : 'bg-gray-300'
                    }`}
                  >
                    {index < currentPoint && <CheckCircle className="h-3 w-3" />}
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-500">
                  Progress: {currentPoint + 1}/{scenario.decisionPoints.length}
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                  Hints used: {hintsUsed}
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-600 p-6 mb-8">
              <div className="flex items-start">
                <Brain className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-indigo-900 mb-2">Clinical Decision Required</h4>
                  <p className="text-gray-800 text-lg">{currentDecision.question}</p>
                </div>
              </div>
            </div>
            
            {/* Interactive Options */}
            <div className="space-y-4">
              {currentDecision.options.map((option, index) => (
                <div 
                  key={index}
                  className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    currentOption === index 
                      ? 'border-indigo-500 bg-indigo-50 shadow-lg' 
                      : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                  }`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <div className="flex items-start">
                    <div className="relative mr-3 mt-1">
                      <input 
                        type="radio" 
                        checked={currentOption === index}
                        onChange={() => {}}
                        className="accent-indigo-600 w-5 h-5"
                      />
                      {currentOption === index && (
                        <div className="absolute inset-0 rounded-full animate-ping bg-indigo-400 opacity-20"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <p className="text-gray-800 font-medium">{option}</p>
                        {feedbackVisible && currentOption === index && index === currentDecision.correctAnswer && (
                          <Award className="h-5 w-5 text-green-600 flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Feedback Display */}
                  {feedbackVisible && currentOption === index && (
                    <div className={`mt-4 p-4 rounded-lg border-l-4 ${
                      index === currentDecision.correctAnswer 
                        ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-600' 
                        : currentDecision.feedback[index].includes('PARTIALLY') 
                          ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-600'
                          : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-600'
                    }`}>
                      <div className="flex items-start">
                        {index === currentDecision.correctAnswer ? (
                          <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full mr-3 flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                        ) : currentDecision.feedback[index].includes('PARTIALLY') ? (
                          <div className="flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full mr-3 flex-shrink-0">
                            <AlertCircle className="h-5 w-5 text-yellow-600" />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-full mr-3 flex-shrink-0">
                            <AlertCircle className="h-5 w-5 text-red-600" />
                          </div>
                        )}
                        <div className="flex-1">
                          <h5 className={`font-semibold mb-2 ${
                            index === currentDecision.correctAnswer ? 'text-green-800' :
                            currentDecision.feedback[index].includes('PARTIALLY') ? 'text-yellow-800' :
                            'text-red-800'
                          }`}>
                            {index === currentDecision.correctAnswer ? '✓ Excellent Choice!' :
                             currentDecision.feedback[index].includes('PARTIALLY') ? '⚠ Partially Correct' :
                             '✗ Not the Best Choice'}
                          </h5>
                          <p className="text-gray-700 mb-2">{currentDecision.feedback[index]}</p>
                          
                          {index === currentDecision.correctAnswer && (
                            <div className="mt-4 pt-4 border-t border-green-200">
                              <h6 className="text-sm font-semibold text-green-800 mb-2 flex items-center">
                                <Lightbulb className="h-4 w-4 mr-1" />
                                Clinical Rationale:
                              </h6>
                              <p className="text-sm text-green-700">{currentDecision.rationale}</p>
                              
                              {currentDecision.references && (
                                <div className="mt-3">
                                  <h6 className="text-xs font-semibold text-green-700 mb-1">📚 Evidence-Based References:</h6>
                                  <ul className="text-xs text-green-600 space-y-1">
                                    {currentDecision.references.map((ref, idx) => (
                                      <li key={idx} className="flex items-start">
                                        <span className="mr-1">•</span>
                                        <span>{ref}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Enhanced Navigation Buttons */}
            <div className="mt-8 flex justify-between items-center">
              <div>
                {currentPoint > 0 && (
                  <button 
                    onClick={handlePreviousDecision}
                    className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 flex items-center transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous Decision
                  </button>
                )}
              </div>
              
              <div className="flex space-x-4">
                {!feedbackVisible ? (
                  <button 
                    onClick={handleSubmitAnswer}
                    disabled={currentOption === null}
                    className={`px-8 py-3 rounded-lg flex items-center transition-all transform ${
                      currentOption === null 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 active:scale-95'
                    }`}
                  >
                    Submit Answer
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                ) : (
                  <div>
                    {currentPoint < scenario.decisionPoints.length - 1 ? (
                      <button 
                        onClick={handleNextDecision}
                        className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 flex items-center transition-all hover:scale-105 active:scale-95"
                      >
                        Next Decision Point
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </button>
                    ) : (
                      <button 
                        onClick={handleCompleteScenario}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 flex items-center transition-all hover:scale-105 active:scale-95"
                      >
                        Complete Scenario - Go to Reflection
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScenariosPage;
