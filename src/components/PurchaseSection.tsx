
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Shield, Heart, Loader } from 'lucide-react';

const PurchaseSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = () => {
    setIsLoading(true);
    
    // Simuler un délai de chargement avant la redirection
    setTimeout(() => {
      window.open('https://quhyhlse.mychariow.com/prd_h8ilxu', '_blank');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4 pulse-heart" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Prêt à Transformer Votre Relation ?
          </h2>
          <p className="text-xl text-gray-700">
            Rejoignez plus de 50,000 couples qui ont déjà pimenté leur amour !
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
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
            <div className="mb-6">
              <span className="text-5xl font-bold text-pink-600">4990 FCFA</span>
              <p className="text-gray-600 mt-2">Accès à vie • Pas d'abonnement</p>
            </div>
            
            <Button 
              onClick={handlePurchase}
              disabled={isLoading}
              className="btn-gradient text-white px-12 py-4 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <>
                  <Loader className="w-6 h-6 mr-3 animate-spin" />
                  Téléchargement en cours...
                </>
              ) : (
                <>
                  <ShoppingCart className="w-6 h-6 mr-3" />
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
          <p className="text-gray-600 italic">
            "La meilleure application pour couple que j'ai jamais utilisée !" - Emma, utilisatrice vérifiée
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSection;
