import React from 'react';
import { motion } from 'framer-motion';

export default function HeritageStory() {
  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    viewport: { once: true, margin: "-100px" }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-32 bg-ivory relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-serif mb-12 text-luxury-black leading-tight"
          >
            A Decade of <span className="italic">Unmatched Masterpieces</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 text-left"
          >
            <p className="text-luxury-black/70 text-lg font-light leading-relaxed">
              Based in the historic heart of Istanbul, Vellure has spent the last 10 years curating and crafting some of the finest gold jewelry in Turkey. Our journey began with a simple vision: to combine ancient Anatolian techniques with modern metropolitan elegance.
            </p>
            <p className="text-luxury-black/70 text-lg font-light leading-relaxed">
              Every piece in our vault is a testament to our dedication to quality and absolute transparency. We believe that jewelry is more than an ornament—it is a piece of identity, a legacy to be carried through generations.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <div className="w-12 h-[1px] bg-gold" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative Gold Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
