import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Ottoman Filigree Ring",
    price: "$ 450",
    image: "/images/ring.png",
    category: "Rings"
  },
  {
    id: 2,
    name: "Anatolian Teardrop Earrings",
    price: "$ 320",
    image: "/images/earrings.png",
    category: "Earrings"
  },
  {
    id: 3,
    name: "Grand Bazaar Gold Bracelet",
    price: "$ 580",
    image: "/images/bazaar.png",
    category: "Bracelets"
  },
  {
    id: 4,
    name: "Sultan's Heritage Pendant",
    price: "$ 750",
    image: "/images/hero.png",
    category: "Necklaces"
  }
];

function ProductCard({ product, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-white mb-6">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quick Add Button */}
        <div className="absolute bottom-6 left-0 w-full px-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-full bg-luxury-black text-white text-[10px] uppercase tracking-[0.2em] py-4 flex items-center justify-center space-x-2 hover:bg-gold transition-colors duration-300">
            <ShoppingBag size={14} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      <div className="text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">{product.category}</p>
        <h4 className="text-luxury-black text-base font-serif mb-2">{product.name}</h4>
        <p className="text-luxury-black/60 text-sm">{product.price}</p>
      </div>
    </motion.div>
  );
}

export default function GoldenCatalog() {
  return (
    <section className="py-32 bg-ivory" id="catalog">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-6 text-luxury-black"
          >
            Our Masterpiece <span className="italic">Catalog</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-luxury-black/50 text-sm uppercase tracking-widest leading-relaxed"
          >
            Select your unique style, whether it's a single masterpiece or an eclectic mix from our century-old heritage collections.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="text-xs uppercase tracking-[0.3em] border-b border-luxury-black/20 pb-2 hover:border-gold hover:text-gold transition-all duration-300">
            Browse Full Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
