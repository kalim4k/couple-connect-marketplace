
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Shield, Heart, Loader } from 'lucide-react';

const PurchaseSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = () => {
    setIsLoading(true);
    
    // Simuler un délai de chargement avant la redirection
    setTimeout(() => {
      window.open('https://quhyhlse.mychariow.com/prd_h8ilxu/checkout', '_blank');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6 sm:mb-8">
          <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-pink-500 mx-auto mb-4 pulse-heart" />
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            Prêt à Transformer Votre Relation ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            Rejoignez plus de 50,000 couples qui ont déjà pimenté leur amour !
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-xl mb-6 sm:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="text-center">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="font-bold text-gray-900">Note 4.8/5</h3>
              <p className="text-gray-600">8,245 avis clients</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-bold text-gray-900">100% Sécurisé</h3>
              <p className="text-gray-600">Données cryptées</p>
            </div>
            <div className="text-center">
              <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              <h3 className="font-bold text-gray-900">20+ Jeux</h3>
              <p className="text-gray-600">+ eBook bonus</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="mb-4 sm:mb-6">
              <span className="text-3xl sm:text-5xl font-bold text-pink-600">4990 FCFA</span>
              <p className="text-gray-600 mt-2">Accès à vie • Pas d'abonnement</p>
            </div>
            
            <Button 
              onClick={handlePurchase}
              disabled={isLoading}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none w-full sm:w-auto"
            >
              {isLoading ? (
                <>
                  <Loader className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 animate-spin" />
                  Téléchargement en cours...
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
                  Acheter l'Application - 4990 FCFA
                </>
              )}
            </Button>
            
            <p className="text-sm text-gray-500 mt-4">
              💳 Paiement sécurisé • 📱 Téléchargement immédiat
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 italic text-sm sm:text-base">
            "La meilleure application pour couple que j'ai jamais utilisée !" - Emma, utilisatrice vérifiée
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSection;
