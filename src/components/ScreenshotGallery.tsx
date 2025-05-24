
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ScreenshotGallery = () => {
  const screenshots = [
    "https://orawin.fun/wp-content/uploads/2025/05/photo_2025-05-15_15-32-35.jpg",
    "https://orawin.fun/wp-content/uploads/2025/05/photo_2025-05-15_15-32-38.jpg",
    "https://orawin.fun/wp-content/uploads/2025/05/photo_2025-05-15_15-32-41.jpg",
    "https://orawin.fun/wp-content/uploads/2025/05/photo_2025-05-15_15-32-42.jpg",
    "https://orawin.fun/wp-content/uploads/2025/05/photo_2025-05-15_15-32-43-2.jpg"
  ];

  return (
    <div className="bg-white px-4 py-6 border-t border-gray-100">
      <Carousel className="w-full max-w-sm mx-auto md:max-w-md">
        <CarouselContent>
          {screenshots.map((screenshot, index) => (
            <CarouselItem key={index} className="basis-4/5 md:basis-1/2">
              <div className="p-1">
                <img 
                  src={screenshot}
                  alt={`Capture d'écran ${index + 1}`}
                  className="w-full h-40 md:h-48 object-cover rounded-lg shadow-sm"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default ScreenshotGallery;
