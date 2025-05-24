
import React from 'react';

const AppDescription = () => {
  return (
    <div className="bg-white px-4 py-6 border-t border-gray-100">
      <h2 className="text-lg font-medium text-gray-900 mb-4">À propos de cette application</h2>
      <div className="text-sm text-gray-700 space-y-3">
        <p>
          💕 <strong>Couple Connect</strong> - L'application ultime pour pimenter votre relation !
        </p>
        <p>
          🔥 Plus de <strong>20 jeux interactifs</strong> spécialement conçus pour les couples qui veulent briser la routine et redécouvrir la passion dans leur relation.
        </p>
        <p>
          ✨ <strong>Fonctionnalités incluses :</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Jeux de couple romantiques et sensuels</li>
          <li>Défis hot pour pimenter vos soirées</li>
          <li>Questions intimes pour mieux vous connaître</li>
          <li>Activités créatives pour renforcer votre complicité</li>
        </ul>
        <p>
          🎁 <strong>BONUS EXCLUSIF :</strong> eBook "50 Défis de Couple" inclus gratuitement !
        </p>
        <p>
          🔒 <strong>Confidentialité garantie :</strong> Vos données restent privées et sécurisées.
        </p>
      </div>
    </div>
  );
};

export default AppDescription;
