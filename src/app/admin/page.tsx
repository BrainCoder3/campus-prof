"use client";

import React, { useState } from 'react';
import { FileText, Calendar, CheckSquare, Clock } from 'lucide-react';

export default function AdminSchedulePage() {
  const adminRequests = [
    { student: 'Amine K.', doc: 'Demande de validation de stage', status: 'pending', date: 'Aujourd\'hui' },
    { student: 'Sarah M.', doc: 'Attestation de réussite IA', status: 'approved', date: 'Hier' },
  ];

  return (
    <div className="w-full animate-fade-in relative z-10">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <FileText className="text-white" size={32} />
          Documents <span className="text-white">Administratifs</span>
        </h2>
        <p className="text-gray-400">Validez les demandes documentaires de vos étudiants.</p>
      </header>

      <div className="glass-panel p-8">
        <h3 className="text-xl font-bold text-white mb-6">Demandes en attente</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-sm uppercase tracking-wider">
                <th className="pb-4 font-semibold">Étudiant</th>
                <th className="pb-4 font-semibold">Document demandé</th>
                <th className="pb-4 font-semibold">Date</th>
                <th className="pb-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminRequests.map((req, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 font-medium text-white">{req.student}</td>
                  <td className="py-4 text-gray-300">{req.doc}</td>
                  <td className="py-4 text-gray-400 text-sm flex items-center gap-2"><Clock size={14} /> {req.date}</td>
                  <td className="py-4 text-right">
                    {req.status === 'pending' ? (
                      <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg text-sm font-medium transition-colors">
                        Signer (IA)
                      </button>
                    ) : (
                      <span className="text-cyan-500 font-semibold text-sm flex items-center justify-end gap-1">
                        <CheckSquare size={16} /> Validé
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
