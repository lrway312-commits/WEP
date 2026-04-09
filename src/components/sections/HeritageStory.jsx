import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeritageStory() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-line", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Parallax on the image
      gsap.to(imgRef.current, {
        yPercent: -20,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Ambient gold glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text Side */}
        <div className="space-y-8">
          <div className="overflow-hidden">
            <p className="story-line text-[11px] uppercase tracking-[0.8em] text-[#D4AF37]">Our Heritage</p>
          </div>
          <div className="overflow-hidden">
            <h2 className="story-line text-5xl lg:text-6xl font-serif leading-[1.1]">
              A Decade of <br />
              <span className="italic text-shine">Unmatched</span><br />
              Masterpieces
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className="story-line text-lg font-light leading-relaxed text-white/50">
              Based in the historic heart of Ankara's Kızılay district, Vellure has spent the last decade
              curating some of the finest gold jewelry in Turkey. Our journey merges ancient Anatolian
              techniques with modern metropolitan elegance.
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="story-line text-lg font-light leading-relaxed text-white/50">
              Every piece is a testament to our dedication to quality and absolute transparency.
              Jewelry is more than ornament — it is identity, a legacy carried through generations.
            </p>
          </div>
          <div className="overflow-hidden">
            <a href="#collections" className="story-line inline-block text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] border-b border-[#D4AF37]/30 pb-2 hover:border-[#D4AF37] transition-all duration-500">
              Explore Collections →
            </a>
          </div>
        </div>

        {/* Image Side - Glassmorphism Frame */}
        <div className="relative">
          <div className="glass-strong rounded-[30px] p-3 overflow-hidden">
            <div className="overflow-hidden rounded-[24px]">
              <img
                ref={imgRef}
                src="/images/ottoman.png"
                alt="Ottoman Heritage"
                className="w-full h-[600px] object-cover scale-[1.2]"
              />
            </div>
          </div>
          {/* Decorative floating badge */}
          <div className="absolute -bottom-6 -left-6 glass-strong rounded-[20px] px-6 py-4">
            <p className="text-[32px] font-serif text-shine">500+</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/50">Years of Craft</p>
          </div>
        </div>
      </div>
    </section>
  );
}
