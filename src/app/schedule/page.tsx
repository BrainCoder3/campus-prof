"use client";

import React, { useState } from 'react';
import { Calendar, BrainCircuit, Users, BookOpen } from 'lucide-react';

export default function SchedulePage() {
  const [optimized, setOptimized] = useState(false);

  const initialSchedule = [
    { day: "Lundi", slots: [
      { time: "08:00 - 10:00", course: "Algorithmique 3A", bg: "bg-cyan-500/20" },
      { time: "10:00 - 14:00", course: "Libre", bg: "bg-white/5 border border-dashed border-white/20" },
      { time: "14:00 - 16:00", course: "Base de données 4A", bg: "bg-blue-500/20" }
    ]},
    { day: "Mardi", slots: [
      { time: "08:00 - 12:00", course: "Intelligence Artificielle 5A", bg: "bg-purple-500/20" },
    ]}
  ];

  return (
    <div className="w-full animate-fade-in relative z-10">
      <header className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <Calendar className="text-white" size={32} />
            Planification <span className="text-white">Enseignant</span>
          </h2>
          <p className="text-gray-400">Gérez vos cours et laissez l'IA optimiser vos créneaux vides.</p>
        </div>
        
        <button 
          onClick={() => setOptimized(true)}
          className={`btn-primary flex items-center gap-2 ${optimized ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={optimized}
        >
          <BrainCircuit size={18} />
          <span>Combler les trous (IA)</span>
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {initialSchedule.map((dayData, idx) => (
          <div key={idx} className="glass-panel p-6">
             <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">{dayData.day}</h3>
             
             <div className="space-y-4">
               {dayData.slots.map((slot, sIdx) => {
                 let isOptimizedSlot = optimized && slot.course === "Libre";
                 return (
                   <div key={sIdx} className={`p-4 rounded-xl flex items-center justify-between transition-all duration-500 ${isOptimizedSlot ? 'bg-white/ border border-white/ shadow-[0_0_15px_rgba(255, 255, 255,0.2)]' : slot.bg}`}>
                     <div>
                       <p className={`font-bold ${isOptimizedSlot ? 'text-white' : 'text-white'} mb-1`}>
                         {isOptimizedSlot ? "Réunions de suivi personnalisées (Généré par l'IA)" : slot.course}
                       </p>
                       <p className="text-sm text-gray-400">{slot.time}</p>
                     </div>
                     {isOptimizedSlot && <Users className="text-white" size={20} />}
                     {!isOptimizedSlot && slot.course !== "Libre" && <BookOpen className="text-gray-400" size={20} />}
                   </div>
                 )
               })}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
