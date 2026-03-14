"use client";

import React from 'react';
import Link from 'next/link';
import { Users, FileSignature, BrainCircuit, BellRing, ArrowRight, BookOpen, Activity } from 'lucide-react';

export default function ProfessorDashboard() {
  const alerts = [
    { title: "Baisse de performance critique", message: "La classe 3A montre des difficultés majeures en Algorithmique. Moyenne en chute de 15%.", type: "danger" },
    { title: "Devoirs en attente", message: "45 copies du partiel d'Architecture Réseau doivent être corrigées par l'IA.", type: "warning" },
    { title: "Recommandation d'optimisation", message: "Votre planning de Jeudi présente un trou de 4 heures. Voulez-vous que l'IA le comble avec des entretiens de suivi ?", type: "info" }
  ];

  return (
    <div className="w-full animate-fade-in relative z-10">
      <header className="mb-10 p-6 glass-panel flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Bonjour, <span className="text-cyan-400">Pr. Ben Kasmia 👋</span></h2>
          <p className="text-gray-300">Voici un aperçu de l'état de vos classes et de vos tâches pédagogiques généré par l'IA.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/grading" className="flex items-center gap-2 btn-primary rounded-xl">
            <BrainCircuit size={18} />
            <span>Lancer la Correction IA</span>
          </Link>
        </div>
      </header>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-panel p-6 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/ rounded-full blur-[30px] -z-10 group-hover:scale-150 transition-transform"></div>
          <div className="flex justify-between items-start mb-4">
             <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Copies à corriger</span>
             <FileSignature className="text-white" size={24} />
          </div>
          <div className="flex items-end gap-3">
             <span className="text-4xl font-black text-white">45</span>
             <span className="text-sm font-bold text-rose-400 mb-1">Urgent</span>
          </div>
        </div>

        <div className="glass-panel p-6 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-[30px] -z-10 group-hover:scale-150 transition-transform"></div>
          <div className="flex justify-between items-start mb-4">
             <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Moyenne Globale</span>
             <Activity className="text-cyan-400" size={24} />
          </div>
          <div className="flex items-end gap-3">
             <span className="text-4xl font-black text-white">13.8</span>
             <span className="text-sm font-bold text-cyan-400 mb-1">+0.5 pts</span>
          </div>
        </div>

        <div className="glass-panel p-6 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/20 rounded-full blur-[30px] -z-10 group-hover:scale-150 transition-transform"></div>
          <div className="flex justify-between items-start mb-4">
             <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Étudiants Suivis</span>
             <Users className="text-blue-400" size={24} />
          </div>
          <div className="flex items-end gap-3">
             <span className="text-4xl font-black text-white">124</span>
             <span className="text-sm text-gray-400 mb-1">Sur 3 classes</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Alerts Center */}
        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <BellRing className="text-rose-500" size={20} />
            Alertes Systémiques (IA)
          </h3>
          <div className="space-y-4">
            {alerts.map((alert, idx) => (
              <div key={idx} className={`p-4 rounded-xl border-l-4 ${alert.type === 'danger' ? 'border-l-rose-500 bg-rose-500/10' : alert.type === 'warning' ? 'border-l-amber-500 bg-amber-500/10' : 'border-l-white/70 bg-white/'} border border-white/5`}>
                <h4 className="text-white font-semibold mb-1">{alert.title}</h4>
                <p className="text-sm text-gray-300">{alert.message}</p>
                {alert.type === 'danger' && (
                  <Link href="/classes" className="inline-block mt-3 text-xs font-bold text-rose-400 hover:text-white transition-colors">Intervenir sur la classe →</Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions & AI Summary */}
        <div className="glass-panel p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] -z-10"></div>
          
          <div>
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
              <BrainCircuit size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Générer Test avec l'IA</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Basez-vous sur les difficultés récentes relevées par le système pour créer automatiquement un Quiz de rattrapage adapté au niveau de vos étudiants.
            </p>
          </div>
          
          <div className="space-y-3">
             <Link href="/classes" className="flex items-center justify-between p-4 bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/30 border border-white/10 rounded-xl transition-all group">
               <div className="flex items-center gap-3">
                 <BookOpen size={18} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                 <span className="text-gray-300 group-hover:text-white font-medium">Générer pour Algorithmique (3A)</span>
               </div>
               <ArrowRight size={16} className="text-gray-500 group-hover:text-cyan-400 transform group-hover:tranwhite-1 transition-all" />
             </Link>
             
             <Link href="/schedule" className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/ hover:border-white/ border border-white/10 rounded-xl transition-all group">
               <div className="flex items-center gap-3">
                 <Users size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                 <span className="text-gray-300 group-hover:text-white font-medium">Planifier des entretiens IA</span>
               </div>
               <ArrowRight size={16} className="text-gray-500 group-hover:text-white transform group-hover:tranwhite-1 transition-all" />
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
