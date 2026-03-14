import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Campus Prof | Interface Enseignant & IA",
  description: "Plateforme d'assistance, correction et analyse pour les professeurs - ENSA Tétouan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="antialiased selection:bg-cyan-500 selection:text-white">
        {/* Background Decorative Animated Orbs (Emerald / Cyan / Rose theme) */}
        <div className="fixed top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-cyan-900/20 blur-[130px] -z-10 animate-pulse-glow pointer-events-none"></div>
        <div className="fixed bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-white/ blur-[100px] -z-10 animate-pulse-glow pointer-events-none" style={{ animationDelay: '2s' }}></div>
        <div className="fixed top-[40%] right-[15%] w-[15vw] h-[15vw] rounded-full bg-rose-500/5 blur-[80px] -z-10 animate-float pointer-events-none"></div>
        
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 lg:ml-64 p-8 relative overflow-hidden min-h-screen">
            <div className="max-w-7xl mx-auto backdrop-blur-sm">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
