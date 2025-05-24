
import React from 'react';
import { Button } from '@/components/ui/button';

const AppHeader = () => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://orawin.fun/wp-content/uploads/2025/05/ENIGME.jpg" 
              alt="Couple Connect" 
              className="w-16 h-16 rounded-xl object-cover shadow-md"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Couple Connect</h1>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Love Games</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Vérifié</span>
              </div>
              <div className="text-xs text-gray-500">Jeux de couple • 18+</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-center">
            <div>
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold">4.8</span>
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-xs text-gray-500">8.2k avis</div>
            </div>
            
            <div>
              <div className="text-lg font-bold">25 MB</div>
              <div className="text-xs text-gray-500">Taille</div>
            </div>
            
            <div>
              <div className="text-lg font-bold">50k+</div>
              <div className="text-xs text-gray-500">Téléchargements</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <Button className="btn-gradient text-white px-8 py-3 text-lg font-semibold rounded-full w-full sm:w-auto">
            💰 Acheter l'application - 4990 FCFA
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
