"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, CheckSquare, Settings, LogOut, FileText, Calendar, GraduationCap } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: <Home size={20} />, label: 'Tableau de Bord', path: '/' },
    { icon: <Users size={20} />, label: 'Mes Classes', path: '/classes' },
    { icon: <CheckSquare size={20} />, label: 'Correcteur IA', path: '/grading' },
    { icon: <Calendar size={20} />, label: 'Planification', path: '/schedule' },
    { icon: <FileText size={20} />, label: 'Documents Admin', path: '/admin' },
  ];

  const bottomItems = [
    { icon: <Settings size={20} />, label: 'Paramètres', path: '/settings' },
    { icon: <LogOut size={20} />, label: 'Déconnexion', path: '/logout' },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 p-6 flex flex-col glass-panel border-l-0 border-y-0 border-r border-white/10 z-40 rounded-none rounded-r-3xl">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-3 mb-10 pl-2 cursor-pointer group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-white/70 flex items-center justify-center shadow-[0_0_15px_rgba(239, 68, 68,0.4)] group-hover:scale-110 transition-transform duration-300">
          <GraduationCap className="text-white" size={24} />
        </div>
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Campus<span className="text-cyan-400">Prof</span>
        </h1>
      </Link>

      {/* Main Nav */}
      <nav className="flex-1">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 pl-2">Vue Enseignant</p>
        <ul className="space-y-2">
          {menuItems.map((item, idx) => {
            const isActive = pathname === item.path;
            return (
              <li key={idx}>
                <Link 
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-600/20 to-white/ text-cyan-400 border border-cyan-500/20 shadow-[inset_0_0_10px_rgba(239, 68, 68,0.1)]' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-auto shadow-[0_0_5px_#10B981] animate-pulse"></div>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Nav */}
      <div className="mt-auto pt-8 border-t border-white/5">
        <ul className="space-y-2">
          {bottomItems.map((item, idx) => (
            <li key={idx}>
              <Link 
                href={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 transition-all duration-300 hover:text-rose-500 hover:bg-rose-500/10 group"
              >
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
