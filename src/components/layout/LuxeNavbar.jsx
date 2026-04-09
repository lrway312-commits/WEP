import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function LuxeNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links - Left */}
        <div className="hidden lg:flex space-x-12">
          {['Collections', 'Catalog', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] hover:text-gold transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-3xl font-serif tracking-widest uppercase">
            Vellure
          </h1>
        </div>

        {/* Icons - Right */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-gold transition-colors duration-300">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white h-screen flex flex-col items-center justify-center space-y-8 lg:hidden"
          >
            {['Collections', 'Catalog', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-serif tracking-widest uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
