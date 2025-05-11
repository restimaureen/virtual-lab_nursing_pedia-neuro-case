import React, { useState } from 'react';
import { FileText, PlusCircle, Book, User, Stethoscope, TrendingUp, Edit, Save, CheckCircle, RefreshCw } from 'lucide-react';

const ReflectionPage = () => {
  const [reflections, setReflections] = useState({
    clinicalReasoning: '',
    challengingDecisions: '',
    keyLearning: '',
    clinicalPractice: '',
    teamCollaboration: ''
  });
  
  const [savedReflections, setSavedReflections] = useState([]);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  
  const handleChange = (field, value) => {
    setReflections(prev => ({
      ...prev,
      [field]: value
    }));
    setShowSaveButton(true);
  };

  const handleSaveReflection = () => {
    if (Object.values(reflections).some(value => value.trim() !== '')) {
      const newReflection = {
        id: Date.now(),
        ...reflections,
        date: new Date().toLocaleDateString(),
      };
      setSavedReflections([...savedReflections, newReflection]);
      setShowSaveButton(false);
      // Show success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      notification.textContent = '✓ Reflection saved successfully!';
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.remove();
      }, 3000);
    }
  };

  const reflectionPrompts = [
    {
      id: 'clinicalReasoning',
      title: 'Clinical Reasoning Process',
      icon: Stethoscope,
      color: 'blue',
      prompt: 'Reflect on your clinical decision-making process throughout this case. How did you apply knowledge to practice interactions?',
      additionalQuestions: [
        'What assessment data did you prioritize?',
        'How did you integrate theoretical knowledge with practical application?',
        'What nursing diagnoses would you formulate?'
      ]
    },
    {
      id: 'challengingDecisions',
      title: 'Challenging Decisions',
      icon: Edit,
      color: 'purple',
      prompt: 'What clinical decision was most challenging? What resources or knowledge gaps did you have in confronting?',
      additionalQuestions: [
        'How would you approach this decision differently now?',
        'What additional resources would you seek?',
        'How did your decision impact patient outcomes?'
      ]
    },
    {
      id: 'keyLearning',
      title: 'Key Learning Points',
      icon: Book,
      color: 'green',
      prompt: 'What are the key knowledge gaps you have about pediatric TBI? How has this changed your understanding?',
      additionalQuestions: [
        'What evidence-based interventions did you learn?',
        'How will this knowledge change your practice?',
        'What areas need further study?'
      ]
    },
    {
      id: 'clinicalPractice',
      title: 'Clinical Practice Application',
      icon: TrendingUp,
      color: 'pink',
      prompt: 'How will you apply these insights in your future clinical practice? What specific actions will you take based on this experience?',
      additionalQuestions: [
        'What protocols would you implement?',
        'How would you educate patients and families?',
        'What quality improvement initiatives could you suggest?'
      ]
    },
    {
      id: 'teamCollaboration',
      title: 'Team Collaboration Insights',
      icon: User,
      color: 'indigo',
      prompt: 'Reflect on collaborative decisions with healthcare teams. How did your nursing assessment influence care planning?',
      additionalQuestions: [
        'How would you improve interdisciplinary communication?',
        'What role did you play in the healthcare team?',
        'How did collaboration impact patient outcomes?'
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Full-width Header with Image */}
      <div className="relative" style={{ height: '500px' }}>
        <img 
          src="/images/mauress-hospital.jpg" 
          alt="Clinical reflection setting"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
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
            <p className="text-white text-xl">Reflection image loading...</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">Clinical Reflection</h1>
          <p className="text-indigo-200 mt-2 text-lg drop-shadow">Document your clinical learning experience from the pediatric TBI scenarios</p>
        </div>
      </div>
      
      <div className="p-8">
        {/* Quick Tips */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            💡 Reflection Tips for Nursing Students
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
            <ul className="space-y-1">
              <li>• Use specific examples from the case scenario</li>
              <li>• Reference evidence-based nursing interventions</li>
              <li>• Consider patient-centered care principles</li>
            </ul>
            <ul className="space-y-1">
              <li>• Include your emotional responses and learning</li>
              <li>• Think about practical applications in clinical practice</li>
              <li>• Identify areas for professional growth</li>
            </ul>
          </div>
        </div>

        {/* Save Button */}
        {showSaveButton && (
          <div className="mb-8 flex justify-end">
            <button
              onClick={handleSaveReflection}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center transition-all hover:scale-105 active:scale-95"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Reflection
            </button>
          </div>
        )}
        
        {/* Interactive Reflection Sections */}
        <div className="space-y-8">
          {reflectionPrompts.map(({ id, title, icon: Icon, color, prompt, additionalQuestions }) => (
            <div key={id} className={`border-l-4 border-${color}-600 pl-6 bg-gradient-to-r from-${color}-50 to-transparent p-6 rounded-lg transition-all`}>
              <div className="flex items-center mb-4">
                <div className={`bg-${color}-100 p-3 rounded-full mr-3 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-6 w-6 text-${color}-600`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold text-${color}-700`}>{title}</h3>
                  <button
                    onClick={() => setActiveSection(activeSection === id ? null : id)}
                    className="text-sm text-gray-500 hover:text-gray-700 mt-1"
                  >
                    {activeSection === id ? 'Hide Tips' : 'Show Reflection Tips'}
                  </button>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{prompt}</p>
              
              {activeSection === id && (
                <div className="bg-white border rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">💭 Consider these questions:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {additionalQuestions.map((question, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-indigo-600 mr-2 mt-1">•</span>
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="relative">
                <textarea
                  value={reflections[id]}
                  onChange={(e) => handleChange(id, e.target.value)}
                  className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-y"
                  placeholder={`Share your thoughts on ${title.toLowerCase()}...`}
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                  {reflections[id].length} characters
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Previous Reflections with Enhanced Display */}
        {savedReflections.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                Previous Reflections
              </h2>
              <button
                onClick={() => setSavedReflections([])}
                className="text-sm text-red-600 hover:text-red-700 flex items-center"
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                Clear All
              </button>
            </div>
            <div className="space-y-6">
              {savedReflections.map((reflection) => (
                <div key={reflection.id} className="bg-gradient-to-r from-gray-50 to-blue-50 border rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-800 flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-blue-600" />
                      Reflection Entry - {reflection.date}
                    </h3>
                    <span className="text-sm text-gray-500">{reflection.date}</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {reflectionPrompts.map(({ id, title, icon: Icon, color }) => (
                      reflection[id] && (
                        <div key={id} className="space-y-1">
                          <h4 className="text-sm font-medium text-gray-700 flex items-center">
                            <Icon className={`h-4 w-4 text-${color}-600 mr-1`} />
                            {title}
                          </h4>
                          <div className="bg-white p-3 rounded border border-gray-100">
                            <p className="text-sm text-gray-600 whitespace-pre-line">{reflection[id]}</p>
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReflectionPage;
