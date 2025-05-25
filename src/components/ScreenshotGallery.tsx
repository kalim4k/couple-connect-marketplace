
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from 'lucide-react';

const ScreenshotGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const screenshots = [
    "https://orawin.fun/wp-content/uploads/2025/05/photo_2025-05-15_15-32-35.jpg",
    "https://orawin.fun/wp-content/uploads/2025/05/photo_2025-05-15_15-32-38.jpg",
    "https://orawin.fun/wp-content/uploads/2025/05/photo_2025-05-15_15-32-41.jpg",
    "https://orawin.fun/wp-content/uploads/2025/05/photo_2025-05-15_15-32-42.jpg",
    "https://orawin.fun/wp-content/uploads/2025/05/photo_2025-05-15_15-32-43-2.jpg"
  ];

  return (
    <>
      <div className="bg-white px-4 py-6 border-t border-gray-100">
        <Carousel className="w-full max-w-sm mx-auto md:max-w-md">
          <CarouselContent>
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index} className="basis-4/5 md:basis-1/2">
                <div className="p-1">
                  <img 
                    src={screenshot}
                    alt={`Capture d'écran ${index + 1}`}
                    className="w-full h-40 md:h-48 object-contain rounded-lg shadow-sm cursor-pointer hover:opacity-90 transition-opacity bg-gray-50"
                    onClick={() => setSelectedImage(screenshot)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full h-full max-h-[90vh] p-0 bg-black">
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage || ''}
              alt="Capture d'écran en plein écran"
              className="max-w-full max-h-full object-contain"
            />
            <DialogClose className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors">
              <X className="h-6 w-6 text-white" />
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ScreenshotGallery;
