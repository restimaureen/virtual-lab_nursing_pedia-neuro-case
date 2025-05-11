import React, { useState } from 'react';
import { Trophy, Star, Target, Zap, Heart, Award } from 'lucide-react';

const InteractiveFeatures = () => {
  const [gamificationScore, setGamificationScore] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [streak, setStreak] = useState(0);

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-indigo-800">Your Learning Journey</h3>
        <div className="flex space-x-4">
          <div className="bg-white rounded-full px-3 py-1 shadow">
            <span className="text-sm font-bold text-indigo-600">{gamificationScore} XP</span>
          </div>
          <div className="bg-white rounded-full px-3 py-1 shadow">
            <span className="text-sm font-bold text-purple-600">{streak} Day Streak</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
          <h4 className="text-sm font-semibold">Clinical Expert</h4>
          <p className="text-xs text-gray-600">Complete 5 scenarios</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <Star className="h-8 w-8 text-indigo-500 mx-auto mb-2" />
          <h4 className="text-sm font-semibold">Evidence Master</h4>
          <p className="text-xs text-gray-600">100% accuracy rate</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
          <h4 className="text-sm font-semibold">Patient Advocate</h4>
          <p className="text-xs text-gray-600">Complete reflection</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeatures;
