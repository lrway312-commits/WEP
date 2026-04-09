import React from 'react';
import { motion } from 'framer-motion';

export default function LuxeFooter() {
  return (
    <footer className="py-24 bg-luxury-black text-white px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-16 border-b border-white/10">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif tracking-widest uppercase mb-8">Vellure</h2>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed">
              Based in Istanbul for over 10 years, Vellure is built upon the profound cultural heritage of Anatolian traditions, tailored for the modern individual.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#collections" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Catalog</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/30 space-y-4 md:space-y-0">
          <p>© 2026 Vellure Turkish Legacy. All Rights Reserved.</p>
          <p>Crafted for Eternity</p>
        </div>
      </div>
    </footer>
  );
}
