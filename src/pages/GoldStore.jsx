import React from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ShoppingBag, ChevronDown, Sparkles, Shield, User, Globe, Mail } from 'lucide-react'
import SectionAnimation from '../components/SectionAnimation'
import ExperienceSwitcher from '../components/ExperienceSwitcher'
import GoldMasterpiece from '../components/GoldMasterpiece'

// --- Assets ---
import heroImg from '../assets/aurora_gold_hero_molten_gold_1775577516164.png'
import ringImg from '../assets/aurora_gold_ring_diamond_1775577542885.png'

const GoldProduct = ({ title, description, image, side = 'left' }) => (
  <div className={`flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-20 gap-32 ${side === 'right' ? 'md:flex-row-reverse' : ''}`}>
    <motion.div 
      initial={{ opacity: 0, x: side === 'left' ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1"
    >
      <h3 className="text-6xl md:text-8xl font-serif mb-8 text-[var(--color-gold-accent)] gold-text-glow leading-none">
        {title}
      </h3>
      <p className="text-xl md:text-2xl text-[var(--color-gold-muted)] font-light leading-relaxed mb-12 max-w-lg">
        {description}
      </p>
      <button className="px-12 py-5 bg-[var(--color-gold-accent)] text-black rounded-full text-xs uppercase tracking-[0.4em] font-bold hover:scale-105 transition-all shadow-[0_0_50px_oklch(78%_0.15_85_/_0.4)]">
        Discover the Legacy
      </button>
    </motion.div>
    
    <motion.div 
       initial={{ opacity: 0, scale: 0.8, rotate: side === 'left' ? 5 : -5 }}
       whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
       className="flex-1 relative h-[600px] w-full"
    >
       <div className="absolute inset-0 bg-[var(--color-gold-accent)]/10 blur-[120px] rounded-full animate-pulse" />
       {/* Reusing shapes: ring for 'ring', knot for others */}
       <GoldMasterpiece shape={title.toLowerCase().includes('ring') ? 'ring' : 'knot'} />
    </motion.div>
  </div>
)

export default function GoldStore() {
  return (
    <div className="bg-[var(--color-gold-bg)] text-[var(--color-gold-text)] font-instrument overflow-x-hidden selection:bg-[var(--color-gold-accent)] selection:text-black">
      
      {/* 🏛️ Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 backdrop-blur-3xl border-b border-white/5">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[var(--color-gold-accent)] rounded-lg flex items-center justify-center font-bold text-black shadow-[0_0_20px_oklch(78%_0.15_85_/_0.5)]">A</div>
            <span className="uppercase tracking-[10px] font-fraunces font-light text-sm">Aurora Gold</span>
         </div>
         <div className="flex items-center gap-12">
            <ul className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] opacity-50 font-bold">
               <li className="hover:text-[var(--color-gold-accent)] cursor-pointer transition-colors">The Vault</li>
               <li className="hover:text-[var(--color-gold-accent)] cursor-pointer transition-colors">The Craft</li>
               <li className="hover:text-[var(--color-gold-accent)] cursor-pointer transition-colors">Atelier</li>
            </ul>
            <ShoppingBag size={24} className="cursor-pointer hover:text-[var(--color-gold-accent)] transition-colors" />
         </div>
      </nav>

      {/* 01: Hero Section */}
      <SectionAnimation type="flip" height={1.5}>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
            <img src={heroImg} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-gold-bg)] via-transparent to-[var(--color-gold-bg)]" />
            
            <div className="relative z-10 text-center px-10">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="text-[var(--color-gold-accent)] uppercase tracking-[20px] text-xs mb-12 block"
                >
                  PRESTIGE COLLECTION
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-[10rem] md:text-[18rem] font-serif leading-none italic font-thin mb-8 opacity-90"
                >
                  VAULT
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl md:text-3xl font-light opacity-50 tracking-[5px] max-w-2xl mx-auto mb-16"
                >
                  Where time meets timeless craftsmanship.
                </motion.p>
                <ChevronDown size={40} className="mx-auto opacity-20 animate-bounce" />
            </div>
        </div>
      </SectionAnimation>

      {/* 02: THE VAULT (3D Tablet Flip Gallery) */}
      <div className="relative py-40 flex flex-col items-center">
          <div className="mb-40 text-center">
              <h2 className="text-[10rem] font-serif italic text-white/5 absolute -top-20 left-10 w-full select-none">MASTERY</h2>
              <span className="text-[var(--color-gold-accent)] uppercase tracking-[15px] font-bold text-xs">Benefit: Eternal Investment</span>
              <h2 className="text-6xl md:text-8xl font-serif mt-4">The Selection</h2>
          </div>

          <SectionAnimation type="flip" height={3}>
              <div className="w-full flex flex-col gap-[80vh] items-center">
                  <GoldProduct 
                    title="Liquid Gold"
                    description="Designed for the few who lead. A 24k masterpiece that adapts to your presence, reflecting your status in every grain."
                    image={ringImg}
                    side="left"
                  />
                  <GoldProduct 
                    title="Imperial Ring"
                    description="The ring of legacy. Not just an accessory, but a transformation of character. Purest gold, ethically sourced, manually forged."
                    image={ringImg}
                    side="right"
                  />
                  <GoldProduct 
                    title="Sovereign Set"
                    description="A curation of our most obsessed-over pieces. For those who don't just buy jewelry, they invest in history."
                    image={heroImg}
                    side="left"
                  />
              </div>
          </SectionAnimation>
      </div>

      {/* 03: THE CRAFT (Sticky Stacking) */}
      <section className="relative w-full">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center pointer-events-none z-0">
             <h2 className="text-[20rem] font-serif italic text-white opacity-[0.02] select-none">CRAFT</h2>
          </div>

          <div className="relative z-10 flex flex-col items-center w-full px-10">
              {[1, 2, 3].map((step) => (
                <div key={step} className="h-screen w-full sticky top-0 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      className="w-full max-w-6xl h-[600px] bg-[var(--color-gold-surface)] rounded-[3rem] border border-white/5 overflow-hidden flex flex-col md:flex-row shadow-3xl"
                    >
                        <div className="flex-1 bg-black/40 flex items-center justify-center p-20">
                             <div className="text-center">
                                <span className="text-[var(--color-gold-accent)] font-bold text-6xl opacity-20">0{step}</span>
                                <h4 className="text-5xl font-serif mt-4 mb-8">The Alchemy</h4>
                                <p className="text-[var(--color-gold-muted)] leading-loose">We don't just melt gold. We refine it to its molecular peak, ensuring the luster never fades, even across generations.</p>
                             </div>
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-[var(--color-gold-accent)]/10 to-transparent p-20 flex items-center justify-center text-center">
                            <Shield size={120} strokeWidth={0.5} className="text-[var(--color-gold-accent)] opacity-20" />
                        </div>
                    </motion.div>
                </div>
              ))}
          </div>
      </section>

      {/* 04: HIGH CONVERSION FOOTER */}
      <footer className="relative py-60 bg-[var(--color-gold-surface)] border-t border-white/5 px-20">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
              <span className="text-[var(--color-gold-accent)] uppercase tracking-[15px] mb-12">Final Step</span>
              <h2 className="text-7xl md:text-[10rem] font-serif italic mb-16 gold-text-glow leading-tight">Start Your<br/>Legacy Today</h2>
              <button className="px-20 py-8 bg-[var(--color-gold-accent)] text-black rounded-full text-xl uppercase tracking-[0.5em] font-bold hover:scale-110 transition-all hover:bg-white shadow-[0_0_100px_oklch(78%_0.15_85_/_0.5)]">
                 Inquire Private Selection
              </button>
              <p className="mt-12 text-[var(--color-gold-muted)] uppercase tracking-wide text-xs">Exclusively for AURORA members.</p>
              
              <div className="mt-40 pt-20 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-10">
                  <div className="flex gap-10">
                      {[Globe, Mail, User].map((Icon, i) => (
                        <div key={i} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-[var(--color-gold-accent)] transition-all cursor-pointer">
                            <Icon size={20} className="opacity-40" />
                        </div>
                      ))}
                  </div>
                  <p className="text-[10px] uppercase tracking-[12px] opacity-20">© 2026 Aurora Gold. The Masterpiece Store.</p>
              </div>
          </div>
      </footer>

      <ExperienceSwitcher current="Vault" />
    </div>
  )
}
