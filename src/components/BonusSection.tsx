
import React from 'react';
import { Gift } from 'lucide-react';

const BonusSection = () => {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-50 px-4 py-6 border-t border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <Gift className="w-6 h-6 text-pink-600" />
        <h2 className="text-lg font-medium text-gray-900">Bonus Inclus</h2>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm border border-pink-100">
        <div className="flex gap-4">
          <img 
            src="https://orawin.fun/wp-content/uploads/2025/05/50-defis-de-couple.png"
            alt="eBook 50 Défis de Couple"
            className="w-16 h-20 object-cover rounded-md shadow-sm flex-shrink-0"
          />
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">eBook Bonus</h3>
            <p className="text-sm text-pink-600 font-medium mb-2">50 Défis de Couple</p>
            <p className="text-xs text-gray-600">
              Un guide complet avec 50 défis créatifs pour renforcer votre relation et créer des moments inoubliables ensemble.
            </p>
            <div className="mt-2">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Inclus gratuitement
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusSection;
