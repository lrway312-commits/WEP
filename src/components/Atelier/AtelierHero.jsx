import { motion, useScroll, useTransform } from 'framer-motion'
import heroMainImage from '../../assets/hero_model_emerald.png'
import backgroundTexture from '../../assets/silk_marble.png'
import macroJewelryDetail from '../../assets/macro_eye.png'

export default function AtelierHero() {
  const { scrollY } = useScroll()
  
  // Layered Parallax Logic
  const bgY = useTransform(scrollY, [0, 1000], [0, 300])
  const mainY = useTransform(scrollY, [0, 1000], [0, -50])
  const floatY = useTransform(scrollY, [0, 1000], [0, -250])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section id="hero-atelier" className="relative h-[130vh] w-full overflow-hidden bg-black flex items-center justify-center">
      
      {/* 🌊 Layer 1: Background Texture (Depth) */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 opacity-40 grayscale"
      >
        <img src={backgroundTexture} className="w-full h-full object-cover filter blur-[2px]" />
      </motion.div>

      {/* 🏛️ Layer 2: The Main Narrative (Center) */}
      <motion.div 
        style={{ y: mainY }}
        className="relative z-10 w-[85vw] h-[85vh] clip-path-editorial-1 overflow-hidden shadow-2xl border border-white/5"
      >
        <img src={heroMainImage} className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </motion.div>

      {/* 💎 Layer 3: Floating Detail Frame (Offset) */}
      <motion.div 
        style={{ y: floatY }}
        className="absolute top-[60%] right-[10%] z-20 w-[25vw] aspect-[3/4] hidden lg:block"
      >
        <div className="relative w-full h-full overflow-hidden shadow-edge border border-white/20 p-1 bg-black">
             <img src={macroJewelryDetail} className="w-full h-full object-cover scale-125 grayscale-[30%]" />
             <div className="absolute bottom-4 left-4 mix-blend-difference text-[8px] tracking-[1em] text-white uppercase opacity-40">
                Detail / Alpha
             </div>
        </div>
      </motion.div>

      {/* ✍️ Layer 4: Floating Typography */}
      <div className="absolute inset-x-0 bottom-24 z-30 flex flex-col items-center gap-4 text-center pointer-events-none">
        <motion.div style={{ opacity }}>
           <span className="text-[oklch(75%_0.08_85)] text-xs uppercase tracking-[2em] mb-4 block">The Art of Stillness</span>
           <h1 className="editorial-title text-7xl lg:text-[14rem] leading-none mb-4 italic font-light drop-shadow-2xl">
              Atelier
           </h1>
           <p className="text-white/40 uppercase tracking-[1rem] text-[10px]">Collection MMXXVI</p>
        </motion.div>
      </div>

    </section>
  )
}
