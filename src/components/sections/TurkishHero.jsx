import React from 'react';
import { motion } from 'framer-motion';

export default function TurkishHero() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative h-[120vh] w-full overflow-hidden bg-luxury-black">
      {/* Background Image with Ken Burns Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/hero.png" 
          alt="Luxury Turkish Gold"
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>

      {/* Content Overlay */}
      <motion.div 
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.span 
          variants={itemVariants}
          className="text-gold text-xs uppercase tracking-[0.4em] mb-4"
        >
          Established 2016
        </motion.span>
        
        <motion.h1 
          variants={itemVariants}
          className="text-white text-5xl md:text-8xl font-serif mb-8 max-w-4xl leading-tight"
        >
          Heritage in Every <br /> 
          <span className="italic">Thread of Gold</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-white/60 text-base md:text-lg max-w-xl font-light tracking-wide mb-12"
        >
          Celebrating 10 years of Turkish excellence and unparalleled craftsmanship in the heart of Istanbul.
        </motion.p>

        <motion.div variants={itemVariants}>
          <a 
            href="#collections"
            className="group relative px-12 py-4 border border-gold/30 hover:border-gold transition-colors duration-500"
          >
            <span className="text-white text-xs uppercase tracking-[0.2em] relative z-10">
              Explore Collections
            </span>
            <div className="absolute inset-0 bg-gold origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-luxury" />
          </a>
        </motion.div>
      </motion.div>

      {/* Down Arrow Suggestion */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/40 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 96] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-12 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
