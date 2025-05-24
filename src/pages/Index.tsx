
import React from 'react';
import AppHeader from '@/components/AppHeader';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import AppDescription from '@/components/AppDescription';
import UserReviews from '@/components/UserReviews';
import BonusSection from '@/components/BonusSection';
import PurchaseSection from '@/components/PurchaseSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec informations de l'app */}
      <AppHeader />
      
      {/* Galerie de captures d'écran */}
      <ScreenshotGallery />
      
      {/* Description de l'application */}
      <AppDescription />
      
      {/* Section Bonus eBook */}
      <BonusSection />
      
      {/* Avis des utilisateurs */}
      <UserReviews />
      
      {/* Section d'achat finale */}
      <PurchaseSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://orawin.fun/wp-content/uploads/2025/05/ENIGME.jpg" 
              alt="Couple Connect" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-bold">Couple Connect</span>
          </div>
          <p className="text-gray-400 mb-4">
            L'application n°1 des jeux de couple pour pimenter votre relation
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-400">
            <span>🔞 Application réservée aux adultes</span>
            <span>•</span>
            <span>🔒 Données sécurisées</span>
            <span>•</span>
            <span>💝 Made with love</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
