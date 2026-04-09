import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LuxeHero2026 = () => {
  const sectionRef = useRef(null);
  const bgImageRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const glowRef = useRef(null);
  const locationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ═══ ENTRANCE TIMELINE ═══
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(bgImageRef.current, {
        scale: 1.3,
        duration: 3,
      })
      .from(overlayRef.current, {
        opacity: 0,
        duration: 2,
      }, 0)
      .from(".hero-letter", {
        y: 200,
        opacity: 0,
        rotateX: 90,
        stagger: 0.08,
        duration: 1.8,
      }, 0.5)
      .from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.5,
      }, 1.2)
      .from(locationRef.current, {
        y: 20,
        opacity: 0,
        duration: 1.2,
      }, 1.5);

      // ═══ SCROLL: Background scales down, reveals depth ═══
      gsap.to(bgImageRef.current, {
        scale: 1,
        yPercent: 30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // ═══ SCROLL: Title fades and lifts ═══
      gsap.to(titleRef.current, {
        y: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          end: "bottom top",
          scrub: true,
        }
      });

    }, sectionRef);

    // ═══ MOUSE PARALLAX & LIQUID RIPPLES (CRAZY VISIBILITY) ═══
    let mouseX = 0, mouseY = 0;
    let lerpX = 0, lerpY = 0;
    const turbRef = document.querySelector('#water-turb');

    const handleMouse = (e) => {
      // Mouse Glow
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      // Parallax Target values (Toned down from 60 to 40 for 'Lamsa Latifa')
      mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 40;
    };

    const animate = () => {
      lerpX += (mouseX - lerpX) * 0.04; // Even smoother drag
      lerpY += (mouseY - lerpY) * 0.04;

      if (bgImageRef.current) {
        bgImageRef.current.style.transform = `scale(1.1) translate(${lerpX * 0.4}px, ${lerpY * 0.4}px) rotateX(${-lerpY * 0.05}deg) rotateY(${lerpX * 0.05}deg)`;
      }

      // Subtly Dynamic Liquid Ripple
      if (turbRef) {
        const speed = Math.sqrt(Math.pow(mouseX - lerpX, 2) + Math.pow(mouseY - lerpY, 2));
        const freq = 0.008 + (speed * 0.0004); // Reduced multiplier
        turbRef.setAttribute('baseFrequency', `${freq} ${freq * 1.2}`);
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouse);
    const animId = requestAnimationFrame(animate);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* ═══ LIQUID DISTORTION SVG (HIDDEN) ═══ */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <filter id="water-filter">
          <feTurbulence id="water-turb" type="fractalNoise" baseFrequency="0.015 0.015" numOctaves="2" seed="2" />
          <feDisplacementMap in="SourceGraphic" scale="15" />
        </filter>
      </svg>
      {/* MOUSE GLOW */}
      <div ref={glowRef} className="cursor-glow" />

      {/* ═══ LAYER 1: FULL-BLEED BACKGROUND IMAGE ═══ */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          ref={bgImageRef}
          src="/images/hero.png"
          alt="Vellure Atelier"
          className="w-full h-full object-cover scale-[1.1]"
          style={{ filter: 'url(#water-filter)' }} // Direct watery distortion
        />
        {/* Cinematic Overlay — Darker for better text isolation */}
        <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/95" />
      </div>

      {/* ═══ LAYER 2: THE TYPOGRAPHY — مرفوعة للأعلى قليلاً ═══ */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center" style={{ marginTop: '-8vh' }}>
        <div ref={titleRef} className="text-center">

          {/* العنوان الرئيسي - Switched to text-shine for better definition */}
          <h1 className="text-[18vw] font-serif uppercase leading-[0.85] tracking-tight flex justify-center overflow-hidden">
            {"VELLURE".split("").map((char, i) => (
              <span
                key={i}
                className="hero-letter inline-block text-shine"
                style={{ 
                  textShadow: '0 4px 60px rgba(0,0,0,1), 0 0 100px rgba(212,175,55,0.4)',
                }}
              >
                {char}
              </span>
            ))}
          </h1>

          {/* الـ Tagline — Bright gold with high visibility */}
          <div ref={subtitleRef} className="mt-12 flex flex-col items-center gap-4">
            <p 
              className="text-[13px] uppercase tracking-[1em] font-medium"
              style={{ 
                color: '#F9F2B3', // High contrast gold
                textShadow: '0 2px 30px rgba(0,0,0,1)',
                letterSpacing: '0.8em',
              }}
            >
              Bespoke Anatolian Gold &amp; Heritage
            </p>

            {/* CTA */}
            <button 
              className="mt-6 px-12 py-4 border border-[#D4AF37] text-[#D4AF37] text-[11px] uppercase tracking-[0.6em] hover:bg-[#D4AF37] hover:text-black transition-all duration-700 font-semibold"
              style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(212,175,55,0.05)' }}
            >
              Enter the Boutique
            </button>
          </div>
        </div>
      </div>

      {/* ═══ LAYER 3: LOCATION — High contrast white/gold ═══ */}
      <div 
        ref={locationRef}
        className="absolute bottom-12 left-0 right-0 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-14 bg-gradient-to-b from-[#D4AF37] to-transparent mb-2" />
        <p 
          className="text-[10px] uppercase font-medium"
          style={{ 
            color: '#FFFFFF',
            textShadow: '0 0 10px rgba(212,175,55,0.8), 0 2px 15px rgba(0,0,0,1)',
            letterSpacing: '0.6em',
          }}
        >
          ✦ Kızılay, Ankara &nbsp;·&nbsp; Est. 1526 &nbsp;·&nbsp; Open Daily
        </p>
        <span 
          className="text-[9px] uppercase mt-2 opacity-60"
          style={{ color: '#F9F2B3', letterSpacing: '0.5em' }}
        >
          Scroll to Explore
        </span>
      </div>

      {/* ═══ LAYER 4: DECORATIVE GOLD ORBS ═══ */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#D4AF37]/8 blur-[100px] pointer-events-none" />
    </section>
  );
};

export default LuxeHero2026;
