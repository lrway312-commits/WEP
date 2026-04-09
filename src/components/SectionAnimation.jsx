import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * SectionAnimation Component
 * Handles the "Tablet Flip" and "Section Stacking" mechanics inspired by reem.dev
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.type - 'flip' | 'stack' | 'slide'
 * @param {number} props.height - Multiplier for scroll distance (e.g. 2 for 200vh)
 */
export default function SectionAnimation({ children, type = 'flip', height = 2 }) {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Mapping scroll progress to transforms
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 15, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0])
  
  // For 'stack' type - creates the card stacking effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  return (
    <div 
      ref={containerRef} 
      className="relative w-full"
      style={{ height: `${height * 100}vh`, perspective: '2000px' }}
    >
      <motion.div
        style={{ 
          rotateX: type === 'flip' ? rotateX : 0,
          scale: type === 'flip' ? scale : 1,
          y: type === 'stack' ? y : 0,
          opacity: opacity,
          position: 'sticky',
          top: 0
        }}
        className="w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  )
}
