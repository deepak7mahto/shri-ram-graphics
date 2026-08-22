import React, { useState } from 'react';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/hero/HeroSection';
import BoxesManufacturingSection from './components/sections/BoxesManufacturingSection';
import OffsetPrintingSection from './components/sections/OffsetPrintingSection';
import PlantAndContactSection from './components/sections/PlantAndContactSection';
import Footer from './components/layout/Footer';

export default function App() {
  const [theme, setTheme] = useState('gold'); // 'gold' or 'redblue'

  return (
    <div className={`min-h-screen text-slate-800 flex flex-col font-sans transition-colors ${
      theme === 'gold' ? 'bg-slate-50 selection:bg-amber-400' : 'bg-slate-50 selection:bg-rose-400'
    }`}>
      
      {/* Top Notification & Registered Address Bar */}
      <TopBar />

      {/* Main Navigation with Official Logo & Theme Switcher */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Main Page Flow */}
      <main className="flex-1">
        
        {/* Core Hero Header */}
        <HeroSection theme={theme} />

        {/* Duplex & Corrugated Boxes Manufacturing Showcase */}
        <BoxesManufacturingSection theme={theme} />

        {/* Quality Offset Printing Works & Finishes */}
        <OffsetPrintingSection theme={theme} />

        {/* Factory Plant at Okhla Phase-I, Registered Office at Badarpur & Direct Inquiries */}
        <PlantAndContactSection theme={theme} />

      </main>

      {/* Corporate Footer with Official Logo & Legal Details */}
      <Footer theme={theme} />

    </div>
  );
}
