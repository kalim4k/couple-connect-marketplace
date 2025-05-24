
import React from 'react';
import { Gift, Download } from 'lucide-react';

const BonusSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center text-white mb-8">
          <Gift className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">🎁 Bonus Exclusif Inclus !</h2>
          <p className="text-xl opacity-90">Avec votre achat, recevez gratuitement notre eBook</p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
          <div className="flex items-center gap-6">
            <img 
              src="https://orawin.fun/wp-content/uploads/2025/05/50-defis-de-couple.png" 
              alt="50 défis de couple" 
              className="w-32 h-40 object-cover rounded-lg shadow-md"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                📚 "50 Défis de Couple"
              </h3>
              <p className="text-gray-700 mb-4">
                Un eBook complet avec 50 défis romantiques et sensuels pour enrichir votre relation. 
                Parfait pour compléter l'expérience de l'application !
              </p>
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <Download className="w-5 h-5" />
                <span>Téléchargement immédiat après achat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusSection;
