"use client";

import React, { useState } from 'react';
import { CheckSquare, UploadCloud, BrainCircuit, FileText, CheckCircle2, AlertTriangle, ChevronRight } from 'lucide-react';

export default function GradingPage() {
  const [isGrading, setIsGrading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const pendingExams = [
    { title: "Partiel Intermédiaire - Algorithmique (3A)", count: 42, status: 'pending' },
    { title: "Projet Fin d'Année - Cybersécurité (4A)", count: 18, status: 'pending' },
  ];

  const gradingResults = [
    { student: "Amine K.", score: 14, comment: "Bonne logique de tri, mais erreur mineure sur la complexité temporelle." },
    { student: "Sarah M.", score: 8, comment: "Les concepts de base ne sont pas acquis. Algorithme de recherche binaire incorrect." },
    { student: "Youssef B.", score: 18, comment: "Excellent travail. Code propre et optimisé." },
    { student: "Nizar L.", score: 12, comment: "Moyen. L'implémentation fonctionne mais manque de commentaires." }
  ];

  const handleGrade = () => {
    setIsGrading(true);
    setTimeout(() => {
      setIsGrading(false);
      setShowResults(true);
    }, 3500);
  };

  return (
    <div className="w-full animate-fade-in relative z-10">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <CheckSquare className="text-cyan-400" size={32} />
          Correcteur <span className="text-cyan-400">Automatique IA</span>
        </h2>
        <p className="text-gray-400">Automatisez la correction de vos copies grâce à l'analyse sémantique et syntaxique de Campus-API.</p>
      </header>

      {!showResults ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Upload Zone */}
          <div className="glass-panel p-8 border-2 border-dashed border-cyan-500/30 hover:border-cyan-500/60 transition-colors flex flex-col items-center justify-center text-center min-h-[400px] relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -tranwhite-1/2 -tranwhite-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] -z-10 group-hover:bg-cyan-500/20 transition-all"></div>
            
            {isGrading ? (
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 text-cyan-400 mb-6">
                  <BrainCircuit size={80} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Analyse IA en cours...</h3>
                <p className="text-gray-400 text-sm max-w-sm">
                  Extraction du texte, comparaison avec le corrigé type et détection des patterns de raisonnement.
                </p>
                <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mt-6">
                  <div className="h-full bg-cyan-500 w-full animate-[progress_3.5s_ease-in-out]"></div>
                </div>
              </div>
            ) : (
              <>
                <div className="w-20 h-20 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(239, 68, 68,0.2)]">
                  <UploadCloud size={40} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Glissez les copies ici (.pdf, .zip)</h3>
                <p className="text-gray-400 mb-8 max-w-xs">Ou sélectionnez le lot d'examens directement depuis votre base de données.</p>
                
                <button 
                  onClick={handleGrade}
                  className="btn-primary"
                >
                  Scanner et Corriger 42 copies
                </button>
              </>
            )}
          </div>

          {/* Pending tasks */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Examens en attente de correction</h3>
            {pendingExams.map((exam, idx) => (
              <div key={idx} className="glass-panel p-5 flex items-center justify-between border-l-4 border-l-amber-500">
                 <div>
                   <h4 className="font-bold text-white mb-1">{exam.title}</h4>
                   <p className="text-sm text-gray-400 flex items-center gap-2">
                     <FileText size={14} /> {exam.count} copies reçues
                   </p>
                 </div>
                 <button 
                   onClick={handleGrade}
                   className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors text-cyan-400"
                 >
                   <BrainCircuit size={20} />
                 </button>
              </div>
            ))}
          </div>

        </div>
      ) : (
        /* Results View */
        <div className="animate-fade-in space-y-8">
           <div className="glass-panel p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-cyan-500/30 shadow-[0_0_30px_rgba(239, 68, 68,0.15)]">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center">
                 <CheckCircle2 size={24} />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-white">Correction Terminée</h3>
                 <p className="text-gray-400 text-sm">42 copies traitées. Moyenne générée : 13.5</p>
               </div>
             </div>
             <button onClick={() => setShowResults(false)} className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-colors font-medium border border-white/10">
               Nouveau lot
             </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
             {gradingResults.map((res, idx) => (
               <div key={idx} className="glass-panel p-5 flex flex-col relative overflow-hidden">
                 <div className={`absolute top-0 right-0 p-3 rounded-bl-2xl font-black text-lg ${res.score >= 10 ? 'bg-cyan-500/20 text-cyan-400' : 'bg-rose-500/20 text-rose-400'}`}>
                   {res.score}/20
                 </div>
                 
                 <h4 className="font-bold text-white mb-4 pr-12">{res.student}</h4>
                 <div className="flex-1 mt-2">
                   <p className="text-sm text-gray-400 italic mb-4">"{res.comment}"</p>
                 </div>
                 <button className="mt-auto w-full py-2 bg-white/5 hover:bg-white/10 text-xs font-semibold uppercase tracking-wider text-gray-300 rounded-lg flex items-center justify-center gap-1">
                   Modifier la note <ChevronRight size={14} />
                 </button>
               </div>
             ))}
           </div>
        </div>
      )}
    </div>
  );
}
