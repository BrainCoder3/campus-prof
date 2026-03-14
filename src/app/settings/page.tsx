"use client";

import React from 'react';
import { Settings, Shield, Bell, User } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in relative z-10">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Settings className="text-gray-400" size={32} />
          Paramètres <span className="text-gray-400">du Compte</span>
        </h2>
        <p className="text-gray-400">Gérez vos préférences pédagogiques et l'accès IA.</p>
      </header>

      <div className="space-y-6">
        {/* Profile */}
        <div className="glass-panel p-6 flex items-center justify-between border border-white/5">
          <div className="flex items-center gap-4">
             <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-600 to-white/70 flex items-center justify-center">
               <User size={32} className="text-white" />
             </div>
             <div>
               <h3 className="text-xl font-bold text-white">Profil Enseignant</h3>
               <p className="text-gray-400 text-sm">Gérez vos modules et droits d'accès</p>
             </div>
          </div>
          <button onClick={() => alert("Édition du profil enseignant...")} className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10">
            Modifier
          </button>
        </div>

        {/* Security */}
        <div className="glass-panel p-6 flex items-center justify-between border border-white/5">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-500">
               <Shield size={24} />
             </div>
             <div>
               <h3 className="text-lg font-bold text-white">Sécurité et Accès aux notes</h3>
               <p className="text-gray-400 text-sm">Confidentialité 2FA requise pour les validations</p>
             </div>
          </div>
          <button onClick={() => alert("Configuration de sécurité IA...")} className="px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 rounded-lg transition-colors border border-rose-500/20">
            Configurer
          </button>
        </div>

        {/* AI Auto-Grading Config */}
        <div className="glass-panel p-6 flex items-center justify-between border border-cyan-500/30">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
               <Bell size={24} />
             </div>
             <div>
               <h3 className="text-lg font-bold text-white">Correction Automatique (IA)</h3>
               <p className="text-gray-400 text-sm">Autoriser l'IA à pré-corriger vos copies déposées</p>
             </div>
          </div>
          <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-cyan-500 appearance-none cursor-pointer transform tranwhite-6 transition-transform" defaultChecked onChange={(e) => alert(e.target.checked ? "Pré-correction activée" : "Pré-correction désactivée")} />
              <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-cyan-500 cursor-pointer"></label>
          </div>
        </div>
      </div>
    </div>
  );
}
