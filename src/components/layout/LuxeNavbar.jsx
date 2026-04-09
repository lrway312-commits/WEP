import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';

export default function LuxeNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Entrance animation
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
      delay: 0.5,
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        gsap.to(navRef.current, { yPercent: -100, duration: 0.5, ease: "power3.inOut" });
      } else {
        gsap.to(navRef.current, { yPercent: 0, duration: 0.5, ease: "power3.inOut" });
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-[100] py-5 glass"
      >
        <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
          {/* Left Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {['Heritage', 'Collections', 'Atelier'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative text-[10px] uppercase tracking-[0.5em] text-white/60 hover:text-[#D4AF37] transition-colors duration-500"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-shine text-xl font-serif tracking-[0.6em] uppercase select-none">
              Vellure
            </h1>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button className="text-white/50 hover:text-[#D4AF37] transition-colors hidden md:block">
              <Search size={16} strokeWidth={1.5} />
            </button>
            <span className="text-white/20 hidden md:block">|</span>
            <button className="text-[9px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors hidden md:block">
              TR / EN
            </button>
            <span className="text-white/20 hidden md:block">|</span>
            <button className="text-white/50 hover:text-[#D4AF37] transition-colors relative">
              <ShoppingBag size={16} strokeWidth={1.5} />
            </button>
            <button className="lg:hidden text-white/60" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10">
          <button className="absolute top-6 right-8 text-white/60" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
          {['Heritage', 'Collections', 'Atelier', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-4xl font-serif text-shine tracking-widest uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
