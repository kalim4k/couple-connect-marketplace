
import React from 'react';

const RatingSection = () => {
  const ratingData = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 }
  ];

  return (
    <div className="bg-white px-4 py-6 border-t border-gray-100">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Notation et évaluation</h2>
      
      <div className="flex items-center gap-6 mb-6">
        <div className="text-center">
          <div className="text-3xl font-medium text-gray-900 mb-1">4.8</div>
          <div className="flex justify-center mb-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-xs text-gray-500">8,245 avis</div>
        </div>
        
        <div className="flex-1">
          {ratingData.map(({ stars, percentage }) => (
            <div key={stars} className="flex items-center gap-2 mb-1">
              <span className="text-xs text-gray-600 w-2">{stars}</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
