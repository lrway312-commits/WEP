import React from 'react';

export default function LuxeFooter() {
  return (
    <footer className="relative py-24 bg-[#050505] text-white px-8 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/3 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-16 border-b border-white/5">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-shine text-3xl font-serif tracking-[0.5em] uppercase mb-8">Vellure</h2>
            <p className="text-white/30 text-sm max-w-sm leading-relaxed">
              Based in the historic heart of Ankara's Kızılay district, Vellure is built upon 500 years 
              of Anatolian tradition, tailored for the modern individual.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-white/40">
              {['Heritage', 'Collections', 'Catalog', 'Atelier'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white/40">
              {['Terms of Use', 'Privacy Policy', 'Shipping & Returns'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] text-white/20 gap-4">
          <p>© 2026 Vellure Turkish Legacy. All Rights Reserved.</p>
          <p>Kızılay, Ankara — Crafted for Eternity</p>
        </div>
      </div>
    </footer>
  );
}
