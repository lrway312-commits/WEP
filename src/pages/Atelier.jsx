import { motion } from 'framer-motion'
import macroJewelry from '../assets/macro_eye.png'
import atelierInterior from '../assets/atelier_minimalist_atelier_wide_interieur_1775486038629.png'
import heroMainImage from '../assets/hero_model_emerald.png'
import AtelierHero from '../components/Atelier/AtelierHero'
import ExperienceSwitcher from '../components/ExperienceSwitcher'

// --- Artistic Compositions: Layered Narrative Sections ---

const ArtisticCompositions = () => {
  return (
    <section className="bg-black py-40 px-10 relative overflow-hidden">
      <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col gap-80">
        
        {/* Composition 1: The Sanctuary (Masked) */}
        <div className="relative h-[80vh] flex items-center justify-start">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-2/3 aspect-video z-10 relative group"
          >
            <img 
              src={atelierInterior} 
              className="w-full h-full object-cover clip-path-editorial-strip grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000" 
            />
            <div className="absolute -inset-10 border border-white/5 -z-10 translate-x-4 translate-y-4" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="absolute top-1/2 left-1/4 lg:left-1/3 z-20 pointer-events-none"
          >
            <h2 className="editorial-title text-6xl lg:text-9xl text-white mix-blend-difference leading-[0.8]">
              The<br/><span className="pl-20 italic font-thin text-[oklch(80%_0.05_250)]">Sanctuary</span>
            </h2>
            <div className="mt-8 h-[1px] w-48 bg-white/20 ml-20" />
          </motion.div>
        </div>

        {/* Composition 2: The Portrait (Layered Detail) */}
        <div className="relative h-[100vh] flex items-center justify-end">
          {/* Background Blurred Narrative */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-0 overflow-hidden"
          >
            <img src={macroJewelry} className="w-full h-full object-cover filter blur-3xl opacity-30" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full lg:w-1/2 aspect-[4/5] z-10 border-[24px] border-black shadow-edge overflow-hidden"
          >
             <img src={heroMainImage} className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3s]" />
             
             {/* Floating Caption Overlay */}
             <div className="absolute -bottom-1 -left-1 p-8 bg-white text-black max-w-[250px] shadow-2xl">
                <span className="text-[10px] uppercase font-bold tracking-[0.5em] mb-4 block text-black/40">Portfolio // 001</span>
                <h4 className="editorial-title text-3xl mb-4 italic font-light">Ethereal Bloom</h4>
                <p className="text-[9px] leading-relaxed opacity-60 uppercase tracking-widest">A dialogue between skin and stone, captured in the silence of the Paris morning.</p>
             </div>
          </motion.div>

          {/* Overlapping Text Strip */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            className="absolute left-0 bottom-20 z-0 select-none pointer-events-none"
          >
            <span className="editorial-title text-[20vw] leading-none text-white whitespace-nowrap">
              AURORA ATELIER
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default function Atelier() {
  return (
    <div className="atelier-mode min-h-screen selection:bg-[oklch(80%_0.05_250)] selection:text-black">
      <AtelierHero />
      <ArtisticCompositions />
      <ExperienceSwitcher current="Atelier" />
      
      {/* 🎞️ Floating Editorial Footer */}
      <footer className="py-32 px-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center bg-black relative z-50">
         <div className="flex flex-col gap-6">
            <span className="editorial-title text-4xl lg:text-7xl opacity-90 italic text-white/80">Digital Atelier</span>
            <p className="text-[oklch(70%_0.01_250)] text-xs uppercase tracking-[1.5rem] font-light">Paris • London • New York</p>
         </div>
         <div className="flex gap-12 mt-16 lg:mt-0 text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold">
            <span className="hover:text-white cursor-pointer transition-impeccable">The Archives</span>
            <span className="hover:text-white cursor-pointer transition-impeccable">Heritage</span>
            <span className="hover:text-white cursor-pointer transition-impeccable">Private Salon</span>
         </div>
         <div className="absolute top-0 right-0 p-10 opacity-5 text-[8px] uppercase tracking-widest font-black">
            © 2026 Aurora. Unauthorized Artistry is Prohibited.
         </div>
      </footer>
    </div>
  )
}
