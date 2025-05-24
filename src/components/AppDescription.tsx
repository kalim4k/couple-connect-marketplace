
import React from 'react';
import { Heart, Star, Shield, Smartphone } from 'lucide-react';

const AppDescription = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            À propos de Couple Connect
          </h2>
          <div className="flex justify-center">
            <Heart className="w-8 h-8 text-pink-500 pulse-heart" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              💕 <strong>Couple Connect</strong> est l'application ultime pour pimenter votre relation ! 
              Avec plus de <strong>20 jeux exclusifs</strong>, brisez la routine et redonnez du peps à votre couple.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Jeux Variés</h3>
                  <p className="text-gray-600">Plus de 20 jeux pour tous les goûts et toutes les humeurs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-pink-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Intimité Renforcée</h3>
                  <p className="text-gray-600">Des jeux sensuels et hot pour rapprocher les couples</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">100% Privé</h3>
                  <p className="text-gray-600">Vos données restent confidentielles, aucun partage avec des tiers</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Smartphone className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Facile à Utiliser</h3>
                  <p className="text-gray-600">Interface intuitive, utilisable partout sur votre mobile</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg float-animation">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">🔥 Contenu Exclusif</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>✨ Jeux de découverte mutuelle</li>
                <li>💋 Défis sensuels et romantiques</li>
                <li>🎮 Jeux interactifs en ligne</li>
                <li>💕 Challenges pour couples aventureux</li>
                <li>🔥 Contenu très hot pour pimenter</li>
                <li>📚 Bonus : eBook "50 jeux de couple"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDescription;
