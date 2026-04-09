import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingBag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "Ottoman Filigree Ring",
    price: "₺15,700",
    image: "/images/ring.png",
    category: "Rings"
  },
  {
    id: 2,
    name: "Anatolian Teardrop Earrings",
    price: "₺8,900",
    image: "/images/earrings.png",
    category: "Earrings"
  },
  {
    id: 3,
    name: "Grand Bazaar Gold Bracelet",
    price: "₺12,500",
    image: "/images/bazaar.png",
    category: "Bracelets"
  },
  {
    id: 4,
    name: "Sultan's Heritage Pendant",
    price: "₺22,000",
    image: "/images/hero.png",
    category: "Necklaces"
  }
];

export default function GoldenCatalog() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".catalog-item", {
        y: 80,
        opacity: 0,
        stagger: 0.12,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#0a0a0a]" id="catalog">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-[11px] uppercase tracking-[0.8em] text-[#D4AF37] mb-4">Curated Pieces</p>
          <h2 className="text-5xl font-serif mb-6">
            Our Masterpiece <span className="italic text-shine">Catalog</span>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed">
            Select your unique style, whether it's a single masterpiece or an eclectic mix from our century-old heritage collections.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div key={product.id} className="catalog-item group cursor-pointer">
              {/* Image Container - Glass Frame */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] glass-strong mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-full glass-strong rounded-full py-3 flex items-center justify-center gap-2 text-white hover:bg-[#D4AF37]/20 transition-colors">
                    <ShoppingBag size={14} />
                    <span className="text-[9px] uppercase tracking-[0.3em]">Add to Cart</span>
                  </button>
                </div>
              </div>
              {/* Info */}
              <p className="text-[9px] uppercase tracking-[0.5em] text-[#D4AF37] mb-1">{product.category}</p>
              <h4 className="text-sm font-serif text-white/80 mb-1">{product.name}</h4>
              <p className="text-white/40 text-xs">{product.price}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a href="#" className="inline-block text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] border border-[#D4AF37]/30 px-10 py-4 rounded-full hover:bg-[#D4AF37]/10 transition-all duration-500">
            Browse Full Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
