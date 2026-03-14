import React from 'react';
import { LogOut, AlertOctagon } from 'lucide-react';
import Link from 'next/link';

export default function LogoutPage() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center animate-fade-in z-10 relative">
      <div className="glass-panel p-10 max-w-md w-full relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -tranwhite-1/2 -tranwhite-1/2 w-48 h-48 bg-rose-500/10 rounded-full blur-[60px] -z-10"></div>
        
        <div className="w-20 h-20 bg-rose-500/20 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
          <AlertOctagon size={40} />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">Déconnexion Administrateur</h2>
        <p className="text-gray-400 mb-8">
          Êtes-vous sûr de vouloir fermer votre session Enseignant sur Campus-Prof ?
        </p>
        
        <div className="flex gap-4 w-full">
          <Link href="/" className="flex-1 py-3 px-4 bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 rounded-xl transition-colors">
            Annuler
          </Link>
          <button className="flex-1 py-3 px-4 bg-rose-500 hover:bg-rose-600 shadow-lg shadow-rose-500/30 text-white rounded-xl flex items-center justify-center gap-2 transition-all">
            <LogOut size={18} />
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}
