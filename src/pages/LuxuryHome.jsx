import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LuxeNavbar from '../components/layout/LuxeNavbar';
import LuxeHero2026 from '../components/sections/LuxeHero2026';
import HeritageStory from '../components/sections/HeritageStory';
import CollectionGrid from '../components/sections/CollectionGrid';
import LuxeFooter from '../components/layout/LuxeFooter';

gsap.registerPlugin(ScrollTrigger);

export default function LuxuryHome() {
  useEffect(() => {
    // Highly tuned Lenis for high-end luxury feel
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 2,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen overflow-hidden grain">
      {/* GLOBAL LIQUID BACKGROUND LAYER (DIVINE FLOW) */}
      <div className="liquid-bg">
        <div className="blob bg-[#D4AF37]/15" style={{ left: '-10%', top: '-10%', width: '70vw', height: '70vw' }} />
        <div className="blob bg-[#D4AF37]/10 animation-delay-5000" style={{ left: '50%', top: '20%', width: '50vw', height: '50vw' }} />
        <div className="blob bg-[#D4AF37]/12 animation-delay-10000" style={{ left: '20%', top: '60%', width: '60vw', height: '60vw' }} />
        <div className="blob bg-white/5" style={{ left: '70%', top: '70%', width: '30vw', height: '30vw' }} />
      </div>

      <LuxeNavbar />
      
      <main className="relative z-10">
        <LuxeHero2026 />
        <HeritageStory />
        <CollectionGrid />
      </main>

      <LuxeFooter />
    </div>
  );
}
