
import React, { useState } from 'react';

const screenshots = [
  "https://orawin.fun/wp-content/uploads/2025/05/photo_2025-05-15_15-32-35.jpg",
  "https://orawin.fun/wp-content/uploads/2025/05/photo_2025-05-15_15-32-38.jpg",
  "https://orawin.fun/wp-content/uploads/2025/05/photo_2025-05-15_15-32-41.jpg",
  "https://orawin.fun/wp-content/uploads/2025/05/photo_2025-05-15_15-32-42.jpg",
  "https://orawin.fun/wp-content/uploads/2025/05/photo_2025-05-15_15-32-43-2.jpg"
];

const ScreenshotGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white px-4 py-2">
      {/* Horizontal scroll container */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {screenshots.map((screenshot, index) => (
          <div 
            key={index}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => setSelectedImage(screenshot)}
          >
            <img 
              src={screenshot} 
              alt={`Screenshot ${index + 1}`}
              className="w-[180px] h-[320px] sm:w-[160px] sm:h-[280px] object-cover rounded-lg border border-gray-200"
            />
          </div>
        ))}
      </div>
      
      {/* Modal for enlarged view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-sm max-h-full">
            <img 
              src={selectedImage} 
              alt="Screenshot agrandi"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenshotGallery;
