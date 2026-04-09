import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    title: 'Grand Bazaar',
    subtitle: 'Heritage Rings',
    image: '/images/bazaar.png',
    price: 'From ₺12,500',
    slug: 'rings',
  },
  {
    title: 'Ottoman Splendor',
    subtitle: 'Antique Necklaces',
    image: '/images/ottoman.png',
    price: 'From ₺28,000',
    slug: 'necklaces',
  },
  {
    title: 'Anatolian Glow',
    subtitle: 'Modern Earrings',
    image: '/images/earrings.png',
    price: 'From ₺8,900',
    slug: 'earrings',
  },
  {
    title: 'Royal Signet',
    subtitle: 'Signature Bracelets',
    image: '/images/ring.png', // Keeping placeholder
    price: 'From ₺15,700',
    slug: 'bracelets',
  },
];

export default function CollectionGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".coll-card", {
        y: 120,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="collections" className="relative py-32 bg-[#0f0f0f]">
      {/* Section Header */}
      <div className="max-w-[1200px] mx-auto px-8 mb-20">
        <p className="text-[11px] uppercase tracking-[0.8em] text-[#D4AF37] mb-4">Curated Selection</p>
        <h2 className="text-5xl font-serif">Our Collections</h2>
      </div>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {collections.map((col, i) => (
          <Link
            key={i}
            to={`/collection/${col.slug}`}
            className={`coll-card block group relative overflow-hidden rounded-[24px] cursor-pointer ${
              i === 0 ? 'md:row-span-2 h-[500px] md:h-auto' : 'h-[400px]'
            }`}
          >
            {/* Image */}
            <img
              src={col.image}
              alt={col.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            />

            {/* Dark gradient overlay & Hover darkening */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-colors duration-700 group-hover:from-black group-hover:via-black/70 group-hover:to-black/30" />

            {/* ARTISTIC 'EXPLORE MORE' INTERACTION */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 pointer-events-none">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-2 border border-[#D4AF37]/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] text-center font-bold">
                  Explore<br/>More
                </span>
              </div>
            </div>

            {/* Glass info bar at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end z-30">
              <div>
                <p className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] mb-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  {col.subtitle}
                </p>
                <h3 className="text-3xl font-serif text-white group-hover:text-[#D4AF37] transition-colors duration-500">{col.title}</h3>
              </div>
              <div className="glass-strong rounded-full px-6 py-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-200">
                <span className="text-[10px] uppercase tracking-wider text-white/80">{col.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
