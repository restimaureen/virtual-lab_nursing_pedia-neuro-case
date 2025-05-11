import React from 'react';
import { BookOpen, ExternalLink, FileText, GraduationCap, Download, Link } from 'lucide-react';

const ReferencesPage = () => {
  const clinicalGuidelines = [
    {
      title: "Pediatric Emergency Care Applied Research Network (PECARN)",
      subtitle: "Clinical Decision Rules for Children with Head Trauma",
      link: "https://www.pecarn.org/studyDatasets/documents/PECARN_HeadTrauma_ClinicalDecisionRules.pdf",
      description: "Evidence-based clinical decision rules for pediatric head injury assessment and CT imaging decisions."
    },
    {
      title: "American Academy of Pediatrics",
      subtitle: "Pediatric Traumatic Brain Injury Clinical Practice Guideline",
      link: "https://publications.aap.org/pediatrics/article/150/3/e2022058986/189095/Pediatric-Traumatic-Brain-Injury-Clinical-Practice",
      description: "Comprehensive guidelines for the management of pediatric TBI across all care settings."
    },
    {
      title: "Brain Injury Guidelines Development Committee",
      subtitle: "Guidelines for the Management of Pediatric Severe TBI",
      link: "#",
      description: "Specialized guidelines for intensive care management of severe pediatric brain injuries."
    }
  ];

  const researchStudies = [
    "Kuppermann, N., Holmes, J. F., Dayan, P. S., et al. (2021). Identification of children at very low risk of clinically-important brain injuries after head trauma. The Lancet, 374(9696), 1160-1170.",
    "Osmond, M. H., Klassen, T. P., Wells, G. A., et al. (2020). CATCH: a clinical decision rule for the use of computed tomography in children with minor head injury. Canadian Medical Association Journal, 182(4), 341-348.",
    "Bressan, S., Romanato, S., Mion, T., et al. (2021). Implementation of adapted PECARN decision rule for children with minor head injury. Academic Emergency Medicine, 19(7), 801-807."
  ];

  const assessmentTools = [
    {
      title: "Glasgow Coma Scale - Pediatric Modifications",
      description: "Age-adjusted scoring system for pediatric patients",
      items: ["Eye Opening (1-4)", "Verbal Response (1-5)", "Motor Response (1-6)", "Age-specific modifications"],
      downloadLink: "/resources/GCS-Pediatric.pdf"
    },
    {
      title: "Post-Concussion Symptoms Checklist",
      description: "Comprehensive assessment tool for monitoring recovery",
      items: ["Physical symptoms scale", "Cognitive function assessment", "Emotional/behavioral evaluation", "Activity tolerance tracking"],
      downloadLink: "/resources/Post-Concussion-Checklist.pdf"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header with Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src="/images/mauress-hospital.jpg" 
          alt="Clinical references"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <h1 className="text-3xl font-bold text-white">Clinical References & Resources</h1>
          <p className="text-indigo-200 mt-2">Comprehensive evidence-based guidelines for pediatric neurological nursing</p>
        </div>
      </div>
      
      <div className="p-8">
        {/* Clinical Guidelines */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FileText className="h-6 w-6 text-indigo-600 mr-2" />
            Clinical Guidelines
          </h2>
          
          <div className="space-y-4">
            {clinicalGuidelines.map((guideline, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{guideline.title}</h3>
                    <p className="text-indigo-600 font-medium text-sm mt-1">{guideline.subtitle}</p>
                    <p className="text-gray-600 text-sm mt-2">{guideline.description}</p>
                  </div>
                  <a 
                    href={guideline.link}
                    className="bg-indigo-100 hover:bg-indigo-200 p-2 rounded"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5 text-indigo-600" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Evidence-Based Research */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Evidence-Based Research</h2>
          
          <div className="bg-gray-50 border rounded-lg p-6">
            <ol className="space-y-3">
              {researchStudies.map((study, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-2 mt-1">{index + 1}.</span>
                  <p className="text-gray-700 text-sm">{study}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        
        {/* Assessment Tools & Scales */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Assessment Tools & Scales</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {assessmentTools.map((tool, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-gray-800">{tool.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{tool.description}</p>
                  </div>
                  <a 
                    href={tool.downloadLink}
                    className="bg-green-100 hover:bg-green-200 p-2 rounded"
                  >
                    <Download className="h-5 w-5 text-green-600" />
                  </a>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  {tool.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        {/* Course Materials */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <GraduationCap className="h-6 w-6 text-indigo-600 mr-2" />
            Educational Resources
          </h2>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border rounded-lg p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800">Course Materials & Resources</h3>
              <div className="mt-3 text-gray-700">
                <p className="font-medium">Instructor: Resti Tito H. Villarino, Dev.Ed.D, RN, LPT</p>
                <p className="text-sm">West Visayas State University College of Nursing</p>
                <p className="text-sm">Pediatric Neurologic Alterations Virtual Lab (2025)</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://drive.google.com/drive/folders/13xhO5ov9vIUqTOxryWmRwDHAHC4W02xT"
                className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 flex items-center"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Access Course Materials
              </a>
              <a 
                href="/resources/Syllabus-Pediatric-Neuro.pdf"
                className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded hover:bg-indigo-50 flex items-center"
              >
                <FileText className="h-5 w-5 mr-2" />
                Download Syllabus
              </a>
              <a 
                href="/resources/Teaching-Guide.pdf"
                className="bg-white border border-purple-600 text-purple-600 px-6 py-3 rounded hover:bg-purple-50 flex items-center"
              >
                <Link className="h-5 w-5 mr-2" />
                Teaching Guide
              </a>
            </div>
          </div>
        </section>
        
        {/* Citation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Cite This Resource</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="mb-4">
              <h3 className="font-medium text-gray-800">APA Citation</h3>
              <p className="text-gray-700 mt-2">
                Villarino, R. T. H. (2025). <em>Pediatric Neurologic Alterations Virtual Lab: Interactive clinical scenarios for nursing education</em> [Educational platform]. West Visayas State University.
              </p>
            </div>
            
            <div className="border-t border-blue-200 pt-4 text-sm text-blue-800">
              <p><strong>License:</strong> © 2025 Resti Tito H. Villarino, Dev.Ed.D, RN, LPT. All Rights Reserved.</p>
              <p className="mt-1"><strong>Version:</strong> 1.0 | <strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReferencesPage;
