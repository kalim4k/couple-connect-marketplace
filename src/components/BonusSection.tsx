
import React from 'react';

const BonusSection = () => {
  return (
    <div className="bg-white px-4 py-6 border-t border-gray-100">
      <div className="flex gap-4">
        <img 
          src="https://orawin.fun/wp-content/uploads/2025/05/50-defis-de-couple.png" 
          alt="50 défis de couple" 
          className="w-16 h-20 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h3 className="text-base font-medium text-gray-900 mb-2">
            🎁 Bonus eBook inclus
          </h3>
          <p className="text-sm text-gray-700 mb-2">
            "50 Défis de Couple" - Un eBook complet avec 50 défis romantiques et sensuels pour enrichir votre relation.
          </p>
          <p className="text-xs text-green-600 font-medium">
            📥 Téléchargement immédiat après achat
          </p>
        </div>
      </div>
    </div>
  );
};

export default BonusSection;
