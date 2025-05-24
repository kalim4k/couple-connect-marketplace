
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MoreVertical, ZoomIn, Loader } from 'lucide-react';

const AppHeader = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = () => {
    setIsLoading(true);
    
    // Animation de loading de 4 secondes avant redirection
    setTimeout(() => {
      window.open('https://quhyhlse.mychariow.com/prd_h8ilxu/checkout', '_blank');
      setIsLoading(false);
    }, 4000);
  };

  return (
    <div className="bg-white">
      {/* Top navigation bar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <ArrowLeft className="w-6 h-6 text-gray-700" />
        <div className="flex gap-4">
          <ZoomIn className="w-6 h-6 text-gray-700" />
          <MoreVertical className="w-6 h-6 text-gray-700" />
        </div>
      </div>

      {/* App info section */}
      <div className="p-4">
        <div className="flex gap-4 mb-4">
          <img 
            src="https://orawin.fun/wp-content/uploads/2025/05/ENIGME.jpg" 
            alt="Couple Connect" 
            className="w-16 h-16 rounded-xl shadow-sm"
          />
          <div className="flex-1">
            <h1 className="text-xl font-medium text-gray-900 mb-1">Couple Connect</h1>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-sm text-green-700">Love Games</span>
              <img src="https://easy-image.b-cdn.net/icon/verify-dev.webp" alt="" className="w-4 h-4" />
            </div>
            <p className="text-xs text-gray-500 mb-2">Jeux de couple • 18+</p>
            
            {/* Download progress */}
            <div className="text-xs text-gray-500">
              <span className="font-medium">100%</span> de 25 MB
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex justify-between items-center text-center mb-4">
          <div>
            <div className="flex items-center gap-1 justify-center">
              <span className="text-sm font-medium">4.8</span>
              <svg className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-xs text-gray-500">8.2k avis</p>
          </div>
          
          <div>
            <p className="text-sm font-medium">25 MB</p>
            <p className="text-xs text-gray-500">Taille</p>
          </div>
          
          <div>
            <img src="https://easy-image.b-cdn.net/icon/icon_18.webp" alt="" className="w-6 h-6 mx-auto mb-1" />
            <p className="text-xs text-gray-500">18+</p>
          </div>
          
          <div>
            <p className="text-sm font-medium">50k+</p>
            <p className="text-xs text-gray-500">Téléchargements</p>
          </div>
        </div>

        {/* Purchase button */}
        <Button 
          className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-medium disabled:opacity-70 disabled:cursor-not-allowed"
          onClick={handlePurchase}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader className="w-5 h-5 mr-2 animate-spin" />
              Téléchargement en cours...
            </>
          ) : (
            'Acheter l\'application - 4990 FCFA'
          )}
        </Button>
      </div>
    </div>
  );
};

export default AppHeader;
