"use client";

import React, { useState } from 'react';
import { Users, TrendingUp, TrendingDown, Award, Search, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function ClassesPage() {
  const [selectedClass, setSelectedClass] = useState('3A-Algo');

  const classes = [
    { id: '3A-Algo', name: '3A - Algorithmique', students: 42, avg: 11.5, status: 'danger' },
    { id: '4A-Cyber', name: '4A - Cybersécurité', students: 38, avg: 14.8, status: 'good' },
    { id: '5A-IA', name: '5A - IA & Data', students: 44, avg: 15.2, status: 'excellent' },
  ];

  const performanceData = [
    { name: 'Q1 (Basics)', score: 14.2 },
    { name: 'Q2 (Pointeurs)', score: 10.5 },
    { name: 'Partiel 1', score: 9.8 },
    { name: 'Q3 (Graphes)', score: 12.1 },
    { name: 'Projet', score: 13.5 },
  ];

  return (
    <div className="w-full animate-fade-in relative z-10">
      <header className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <Users className="text-white" size={32} />
            Mes <span className="text-white">Classes</span>
          </h2>
          <p className="text-gray-400">Suivi analytique des performances par cohorte.</p>
        </div>
        
        <div className="relative w-64">
          <input 
            type="text" 
            placeholder="Rechercher un étudiant..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 pl-10 text-sm text-white focus:outline-none focus:border-white/70 transition-colors"
          />
          <Search size={16} className="absolute left-3 top-1/2 -tranwhite-1/2 text-gray-500" />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar Classes List */}
        <div className="lg:col-span-1 space-y-4">
          {classes.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedClass(c.id)}
              className={`w-full text-left p-4 rounded-xl transition-all border ${
                selectedClass === c.id 
                 ? 'bg-white/10 border-white/ shadow-[0_0_15px_rgba(255, 255, 255,0.1)]' 
                 : 'bg-black/20 border-white/5 hover:bg-white/5'
              }`}
            >
              <h3 className="font-bold text-white mb-1">{c.name}</h3>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">{c.students} Étudiants</span>
                <span className={`font-bold ${c.status === 'danger' ? 'text-rose-500' : 'text-cyan-400'}`}>Moy: {c.avg}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Analytics Main View */}
        <div className="lg:col-span-3">
          <div className="glass-panel p-8 relative overflow-hidden mb-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/ rounded-full blur-[80px] -z-10 pointer-events-none"></div>
            
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white">Analyse des Évaluations (Classe ciblée)</h3>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 flex items-center gap-1">
                  <Award size={14} className="text-cyan-400"/> Taux de validation : 68%
                </span>
              </div>
            </div>

            <div className="w-full h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData} margin={{ top: 10, right: 10, bottom: 20, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="rgba(255,255,255,0.3)" 
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} 
                    axisLine={false} 
                    tickLine={false}
                    dy={10}
                  />
                  <YAxis 
                    domain={[0, 20]} 
                    stroke="rgba(255,255,255,0.3)" 
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} 
                    axisLine={false} 
                    tickLine={false}
                    dx={-10}
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                    contentStyle={{ backgroundColor: 'rgba(2, 44, 34, 0.95)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255,0.2)', borderRadius: '8px', color: '#fff' }}
                  />
                  <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                    {
                      performanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.score < 10 ? '#F43F5E' : entry.score < 12 ? '#F59E0B' : '#10B981'} />
                      ))
                    }
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="glass-panel p-6 border-l-4 border-rose-500">
               <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                 <AlertCircle size={18} className="text-rose-500" />
                 Points de friction
               </h4>
               <p className="text-sm text-gray-400 mb-4">La notion de <strong>Pointeurs</strong> cause des problèmes à 60% de la classe lors du Partiel 1.</p>
               <button className="text-xs bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 px-3 py-2 rounded-lg transition-colors border border-rose-500/30">
                 Générer des exercices de remédiation
               </button>
             </div>
             <div className="glass-panel p-6 border-l-4 border-cyan-500">
               <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                 <TrendingUp size={18} className="text-cyan-500" />
                 Évolution Positive
               </h4>
               <p className="text-sm text-gray-400 mb-4">Les notes concernant le bloc "Graphes" montrent une progression et une bonne assimilation générale.</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
