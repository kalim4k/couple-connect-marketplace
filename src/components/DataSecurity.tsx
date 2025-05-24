
import React from 'react';
import { Shield, Lock } from 'lucide-react';

const DataSecurity = () => {
  return (
    <div className="bg-white px-4 py-6 border-t border-gray-100">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Sécurité des données</h2>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-gray-600 mt-0.5" />
          <p className="text-sm text-gray-700">Cette application ne partage pas de données avec des tiers</p>
        </div>
        <div className="flex items-start gap-3">
          <Lock className="w-5 h-5 text-gray-600 mt-0.5" />
          <p className="text-sm text-gray-700">Les données sont cryptées pendant la transmission</p>
        </div>
      </div>
    </div>
  );
};

export default DataSecurity;
