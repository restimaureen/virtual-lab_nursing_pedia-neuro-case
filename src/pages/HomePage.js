import React from 'react';
import { Brain, CheckCircle, Users, Copyright, ChevronRight, Stars, Heart, Target, Stethoscope, BookOpen } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">Welcome to Pediatric Neurologic Alterations Virtual Lab</h2>
        
        {/* Video Section with New Cover */}
        <div className="mb-8">
          <div className="relative rounded-lg overflow-hidden shadow-md bg-gradient-to-r from-indigo-600 to-purple-600" style={{ minHeight: '400px' }}>
            <video 
              controls
              className="w-full"
              poster="/images/video-cover.jpg"
              style={{ minHeight: '400px' }}
            >
              <source src="/videos/Video-Introduction.mp4" type="video/mp4" />
              <p className="text-center text-white p-8">
                Your browser does not support the video tag. 
                <a href="/videos/Video-Introduction.mp4" className="text-indigo-400 hover:underline ml-2">
                  Download the video instead
                </a>
              </p>
            </video>
          </div>
        </div>
        
        <p className="text-gray-700 mb-8 text-lg">
          This <span className="font-bold text-indigo-600">interactive virtual lab</span> will guide you through <span className="font-bold text-purple-600">clinical scenarios</span> involving pediatric neurological alterations,
          specifically focusing on <span className="font-bold bg-yellow-100 px-2 py-1 rounded">traumatic brain injury (TBI)</span> cases. You'll make critical clinical decisions, receive 
          evidence-based feedback, and engage in reflective learning practices.
        </p>
        
        {/* Interactive Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-lg relative overflow-hidden group hover:scale-105 transition-transform">
            <div className="absolute top-0 right-0 p-2">
              <Stars className="h-5 w-5 text-indigo-300" />
            </div>
            <div className="bg-indigo-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-indigo-700 text-lg mb-2">Clinical Scenarios</h3>
            <p className="text-gray-600 text-sm">Navigate through <span className="font-semibold">realistic pediatric TBI cases</span> with multiple decision points</p>
            <div className="mt-4 flex items-center text-indigo-600 text-sm font-medium">
              <Target className="h-4 w-4 mr-1" />
              <span>Interactive Learning</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg relative overflow-hidden group hover:scale-105 transition-transform">
            <div className="absolute top-0 right-0 p-2">
              <Heart className="h-5 w-5 text-purple-300" />
            </div>
            <div className="bg-purple-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-purple-700 text-lg mb-2">Evidence-Based Feedback</h3>
            <p className="text-gray-600 text-sm">Receive <span className="font-semibold">detailed explanations</span> for both correct and incorrect choices</p>
            <div className="mt-4 flex items-center text-purple-600 text-sm font-medium">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>Immediate Learning</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-lg relative overflow-hidden group hover:scale-105 transition-transform">
            <div className="absolute top-0 right-0 p-2">
              <Stethoscope className="h-5 w-5 text-pink-300" />
            </div>
            <div className="bg-pink-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-pink-700 text-lg mb-2">Reflective Practice</h3>
            <p className="text-gray-600 text-sm">Document your <span className="font-semibold">clinical reasoning</span> and learn from your decisions</p>
            <div className="mt-4 flex items-center text-pink-600 text-sm font-medium">
              <ChevronRight className="h-4 w-4 mr-1" />
              <span>Professional Growth</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Intellectual Property Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 px-8 rounded-lg shadow-lg">
        <div className="text-center">
          <div className="mb-2 flex justify-center items-center">
            <Copyright className="h-6 w-6 mr-2" />
            <span className="text-lg font-bold">2025</span>
          </div>
          <p className="text-white font-medium">
            Intellectual Property of Resti Tito H. Villarino, Dev.Ed.D, RN, LPT
          </p>
          <p className="text-indigo-100 mt-1">
            All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
