
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
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Captures d'écran</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(screenshot)}
            >
              <img 
                src={screenshot} 
                alt={`Screenshot ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg"
              />
            </div>
          ))}
        </div>
        
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-screen p-4">
              <img 
                src={selectedImage} 
                alt="Screenshot agrandi"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenshotGallery;
