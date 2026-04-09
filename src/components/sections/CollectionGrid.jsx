import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const collections = [
  {
    title: 'Grand Bazaar',
    subtitle: 'Heritage Collection',
    image: '/images/bazaar.png',
    size: 'large', // Tall vertical
  },
  {
    title: 'Ottoman Splendor',
    subtitle: 'Antique Masterpieces',
    image: '/images/ottoman.png',
    size: 'wide', // Wide horizontal
  },
  {
    title: 'Anatolian Glow',
    subtitle: 'Modern Minimalist',
    image: '/images/hero.png', // Reusing for now
    size: 'square',
  }
];

function CollectionCard({ collection, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className={`relative overflow-hidden group mb-8 ${
        collection.size === 'large' ? 'h-[800px]' : 
        collection.size === 'wide' ? 'h-[400px]' : 'h-[500px]'
      }`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          src={collection.image} 
          alt={collection.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
      </div>

      <div className="absolute bottom-12 left-12 z-10">
        <p className="text-gold text-xs uppercase tracking-[0.3em] mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
          {collection.subtitle}
        </p>
        <h3 className="text-white text-3xl font-serif">
          {collection.title}
        </h3>
        <button className="mt-6 text-white text-[10px] uppercase tracking-[0.2em] border-b border-white/30 pb-1 hover:border-gold hover:text-gold transition-all duration-300">
          View Collection
        </button>
      </div>
    </motion.div>
  );
}

export default function CollectionGrid() {
  return (
    <section className="py-32 bg-white" id="collections">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <CollectionCard collection={collections[0]} index={0} />
          </div>
          <div className="space-y-8 pt-24 md:pt-48">
            <CollectionCard collection={collections[1]} index={1} />
            <CollectionCard collection={collections[2]} index={2} />
          </div>
        </div>
      </div>
    </section>
  );
}
