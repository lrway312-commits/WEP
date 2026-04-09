import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronDown, Sparkles, MapPin, Mail, Globe } from 'lucide-react';

// --- Magic-MCP Liquid Assets (Imported for reliability) ---
import necklaceImg from '../assets/necklace.png';
import ringImg from '../assets/ring.png';
import watchImg from '../assets/watch.png';
import ExperienceSwitcher from '../components/ExperienceSwitcher';

const products = [
  { 
    id: 1, 
    title: "Sovereign Nereid", 
    subtitle: "Sapphire Collection", 
    image: necklaceImg, 
    side: "left" 
  },
  { 
    id: 2, 
    title: "The Rift Ring", 
    subtitle: "Oceanic Gold", 
    image: ringImg, 
    side: "right" 
  },
  { 
    id: 3, 
    title: "Abyssal Chronos", 
    subtitle: "Premium Watch", 
    image: watchImg, 
    side: "left" 
  },
  { 
    id: 4, 
    title: "Celestial Fragment", 
    subtitle: "Diamond Series", 
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb0ce33e?q=80&w=1200", 
    side: "right" 
  }
];

const LiquidCard = ({ item, isActive }) => {
  if (!isActive) return null;

  return (
    <motion.div
      key={item.id}
      initial={{ 
        opacity: 0, 
        scale: 0.6, 
        x: item.side === "left" ? -600 : 600, 
        rotate: item.side === "left" ? -25 : 25,
        filter: "blur(20px)"
      }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        x: 0, 
        rotate: 0, 
        filter: "blur(0px)",
        y: [0, -25, 0] // Constant water bobbing
      }}
      exit={{ 
        opacity: 0, 
        scale: 0.8,
        x: item.side === "left" ? 600 : -600, 
        filter: "blur(20px)"
      }}
      transition={{
        duration: 2,
        ease: [0.16, 1, 0.3, 1], // Custom cinematic easing
        y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
      }}
      className="relative w-full max-w-5xl h-[650px] rounded-[4rem] overflow-hidden border border-white/20 liquid-glass z-40 shadow-[0_0_150px_rgba(56,189,248,0.2)]"
    >
      {/* 21st.dev Style Sticky Glow Overlay */}
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute inset-0 bg-gradient-to-b from-oceanic-accent/10 to-transparent pointer-events-none z-10"
      />

      <img 
        src={item.image} 
        alt={item.title} 
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 opacity-100"
      />

      {/* Glass Gloss */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/5 pointer-events-none z-20" />

      <div className="absolute bottom-20 left-20 text-white z-50 p-6 pointer-events-none">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-[14px] uppercase tracking-[10px] text-dopamine-orange mb-6 block font-bold"
        >
          {item.subtitle}
        </motion.span>
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-6xl md:text-8xl font-serif font-light mb-10 leading-none"
        >
          {item.title}
        </motion.h3>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center gap-6"
        >
           <button className="px-10 py-4 bg-white/5 border border-white/20 rounded-full text-[12px] uppercase tracking-[6px] backdrop-blur-xl hover:bg-dopamine-orange hover:text-black transition-all">
             Discover Depth
           </button>
           <Sparkles size={20} className="text-dopamine-orange animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); 
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Orchestrator: Sequential cycling after initial delay
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 8000); // Cinematic stay
    return () => clearInterval(timer);
  }, []);

  const surfaceOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const middleOpacity = useTransform(scrollYProgress, [0.15, 0.45, 0.85], [0, 1, 0]);
  const floorOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full min-h-[400vh] bg-oceanic-dark text-white font-montserrat">
      
      {/* 2026 Background Abyss */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="mesh-gradient opacity-50" />
        <motion.div style={{ opacity: surfaceOpacity }} className="absolute inset-0">
           <img src="/src/assets/bg_surface_ocean_1775455652426.png" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div style={{ opacity: middleOpacity }} className="absolute inset-0">
           <img src="/src/assets/bg_middle_depth_1775455671363.png" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div style={{ opacity: floorOpacity }} className="absolute inset-0">
           <img src="/src/assets/bg_bottom_floor_v2_1775458465107.png" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <nav className="fixed top-0 left-0 w-full p-10 flex justify-between items-center z-50 mix-blend-difference">
         <div className="flex items-center gap-6">
            <span className="text-dopamine-orange font-bold text-2xl">A</span>
            <span className="uppercase tracking-[15px] font-light text-sm">Aurora</span>
         </div>
         <div className="flex items-center gap-16">
            <ul className="hidden md:flex gap-14 text-[11px] uppercase tracking-[8px] opacity-60">
              <li className="hover:text-white cursor-pointer transition-all">Treasures</li>
              <li className="hover:text-white cursor-pointer transition-all">Atelier</li>
            </ul>
            <ShoppingBag size={28} className="cursor-pointer hover:text-dopamine-orange transition-all" />
         </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center z-10 px-10">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-dopamine-orange text-sm uppercase tracking-[20px] mb-16 block">Oceanic Fluid Glass</motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 60 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-8xl md:text-[12rem] font-serif font-light leading-none mb-12"
        >
          AURORA<br/><span className="italic font-thin opacity-60">Fluidity</span>
        </motion.h1>
        <ChevronDown size={60} className="absolute bottom-16 opacity-20 animate-bounce" />
      </section>

      {/* LIQUID ORCHESTRATOR */}
      <section className="relative py-80 flex flex-col items-center justify-center min-h-screen z-20 overflow-hidden">
        <div className="mb-48 text-center">
            <h2 className="text-7xl md:text-[10rem] font-serif font-light mb-12 opacity-90">The Masterpieces</h2>
            <div className="h-px w-64 bg-oceanic-accent mx-auto mb-12 opacity-30" />
            <p className="text-dopamine-orange text-[14px] uppercase tracking-[15px]">Sequential | Rare | Abyssal</p>
        </div>

        <div className="relative w-full max-w-7xl h-[800px] flex items-center justify-center px-10">
           <AnimatePresence mode="wait">
             {products.map((p, i) => i === activeIndex && <LiquidCard key={p.id} item={p} isActive={true} />)}
           </AnimatePresence>
        </div>
      </section>

      <section className="relative h-[150vh] z-20" /> {/* Scrolling space */}

      <footer className="relative py-40 bg-black/90 backdrop-blur-3xl z-30 border-t border-white/5 px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
              <h2 className="text-7xl font-serif italic text-white/80">Aurora Masterpiece</h2>
              <div className="flex gap-12">
                 <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center hove:border-dopamine-orange transition-all cursor-pointer"><Globe className="opacity-40" /></div>
                 <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center hove:border-dopamine-orange transition-all cursor-pointer"><Mail className="opacity-40" /></div>
              </div>
          </div>
          <p className="mt-40 text-center text-[10px] uppercase tracking-[12px] opacity-10">© 2026 Aurora. Created for the Deep.</p>
      </footer>
      <ExperienceSwitcher current="Abyss" />
    </div>
  );
}
