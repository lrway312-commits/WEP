import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import LuxeFooter from '../components/layout/LuxeFooter';

gsap.registerPlugin(ScrollTrigger);

import { vaultData } from '../data/vaultData';

export default function CollectionVault() {
  const { type } = useParams();
  const data = vaultData[type] || vaultData['rings']; // fallback

  const containerRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    // Isolated smooth scroll for this page
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Entry Animations
    const ctx = gsap.context(() => {
      // Left side text reveal
      gsap.from(".vault-text-reveal", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2
      });

      // Right side items stagger
      gsap.from(".vault-item", {
        y: 150,
        opacity: 0,
        stagger: 0.2,
        duration: 1.8,
        ease: "expo.out",
        delay: 0.4
      });
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, [type]);

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen grain selection:bg-[#D4AF37]/30" ref={containerRef}>
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#D4AF37]/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* Navigation Bar Area - Cleaned up to avoid overlap */}
      <nav className="sticky top-0 left-0 right-0 p-4 lg:p-6 z-50 flex items-center justify-between border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <Link to="/" className="text-white flex items-center gap-2 hover:text-[#D4AF37] transition-colors group">
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[8px] uppercase tracking-[0.2em] font-bold">Home</span>
        </Link>
        <div className="hidden md:flex gap-2 text-[9px] uppercase tracking-[0.3em] text-white/30 font-medium tracking-tighter">
          <Link to="/" className="hover:text-white transition-colors">Vellure</Link>
          <span className="opacity-50">/</span>
          <span className="text-[#D4AF37]/80">Catalog</span>
          <span className="opacity-50">/</span>
          <span className="text-white/80">{type}</span>
        </div>
        <div className="text-white font-serif italic text-base tracking-[0.3em] leading-none opacity-80">Vellure</div>
      </nav>

      {/* Main Catalog Layout */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-4 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
        
        {/* LEFT SIDEBAR: Professional Category Navigation */}
        <aside className="w-full lg:w-3/12 xl:w-2/12" ref={leftRef}>
          <div className="lg:sticky lg:top-32">
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-8 font-bold border-b border-[#D4AF37]/20 pb-4">Jewelries</h2>
            <ul className="space-y-4">
              {Object.keys(vaultData).map((cat) => (
                <li key={cat}>
                  <Link 
                    to={`/collection/${cat}`}
                    className={`text-xs uppercase tracking-[0.3em] hover:text-[#D4AF37] transition-all duration-300 block ${type === cat ? 'text-[#D4AF37] pl-4 border-l border-[#D4AF37]' : 'text-white/40'}`}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-20 vault-text-reveal">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
        </aside>

        {/* RIGHT SIDE: Coordinated Product Catalog */}
        <div className="w-full lg:w-10/12">
          {/* Section Header */}
          <div className="mb-10 pb-6 border-b border-white/10">
            <h1 className="text-2xl font-serif text-white uppercase tracking-[0.4em] mb-2">{data.title}</h1>
            <p className="text-[10px] text-white/40 uppercase tracking-widest font-light">{data.description}</p>
          </div>

          {/* Product Grid - HIGH DENSITY, SMALL ITEMS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6">
            {data.items.map((item, index) => (
              <div 
                key={item.id} 
                className="vault-item group flex flex-col bg-[#080808] border border-white/5 overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/40"
              >
                {/* Product Image Frame - RIGID SMALL RECTANGLE */}
                <div className="relative aspect-[1/1] overflow-hidden bg-[#111]">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Subtle Badge */}
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10">
                    <span className="text-[#D4AF37] text-[7px] font-bold">%{index % 2 === 0 ? '15' : '20'}</span>
                  </div>
                </div>

                {/* Metadata - VERY SMALL AND NEAT */}
                <div className="p-3">
                  <h3 className="text-[9px] font-serif text-white/70 mb-1 leading-tight line-clamp-2 min-h-[2.5em]">
                    {item.name}
                  </h3>
                  <div className="flex justify-between items-baseline border-t border-white/5 pt-2">
                    <span className="text-[#D4AF37] text-[8px] font-bold tracking-widest">{item.price}</span>
                    <ShoppingBag size={8} className="text-white/30 group-hover:text-[#D4AF37] transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Light Footer for standalone page */}
      <div className="relative z-10 border-t border-white/5">
        <LuxeFooter />
      </div>
    </div>
  );
}
