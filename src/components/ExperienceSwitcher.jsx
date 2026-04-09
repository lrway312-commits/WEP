import { motion } from 'framer-motion'
import { Sparkles, Waves, Shield } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ExperienceSwitcher({ current }) {
  const navigate = useNavigate()

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex gap-2 p-1 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
      <button
        onClick={() => navigate('/abyss')}
        className={`flex items-center gap-2 px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
          current === 'Abyss' 
            ? 'bg-white text-black shadow-lg shadow-white/10' 
            : 'text-white/40 hover:text-white hover:bg-white/5'
        }`}
      >
        <Waves size={14} strokeWidth={1.5} />
        Abyss
      </button>
      
      <button
        onClick={() => navigate('/')}
        className={`flex items-center gap-2 px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
          current === 'Atelier' ? 'bg-white text-black' : 'text-white/40 hover:text-white'
        }`}
      >
        <Sparkles size={14} strokeWidth={1.5} />
        Atelier
      </button>

      <button
        onClick={() => navigate('/vault')}
        className={`flex items-center gap-2 px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
          current === 'Vault' ? 'bg-[var(--color-gold-accent)] text-black' : 'text-white/40 hover:text-white'
        }`}
      >
        <Shield size={14} strokeWidth={1.5} />
        Vault
      </button>
    </div>
  )
}
