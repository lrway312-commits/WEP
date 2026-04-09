import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { 
  Environment, 
  MeshTransmissionMaterial, 
  Float, 
  PresentationControls,
  ContactShadows,
  PerspectiveCamera,
  useMask,
  Mask
} from '@react-three/drei'
import * as THREE from 'three'

/**
 * GoldMaterial Component
 * Returns a perceptually accurate 24k Gold material for R3F
 */
const GoldMaterial = () => (
  <meshStandardMaterial 
    color={new THREE.Color('#FFD700')} // Classic Gold
    emissive={new THREE.Color('#443300')}
    metalness={1}
    roughness={0.1}
    envMapIntensity={2}
  />
)

/**
 * MouseFollowingLight (Example 3 from md(1))
 * A point light that follows the mouse cursor to create a majestic glow
 */
function MouseFollowingLight() {
  const lightRef = useRef()
  const { mouse, viewport } = useThree()

  useFrame((state) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    lightRef.current.position.set(x, y, 2)
  })

  return <pointLight ref={lightRef} intensity={50} color="#FFD700" distance={10} />
}

/**
 * JewelScene - The actual 3D object
 */
function Jewel({ shape = 'ring' }) {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.4
    meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.1
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} castShadow receiveShadow>
        {shape === 'ring' ? (
          <torusGeometry args={[1, 0.2, 32, 100]} />
        ) : shape === 'sphere' ? (
          <sphereGeometry args={[1, 64, 64]} />
        ) : (
          <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        )}
        <GoldMaterial />
      </mesh>
    </Float>
  )
}

/**
 * GoldMasterpiece - The High-Performance Canvas
 */
export default function GoldMasterpiece({ shape = 'ring' }) {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <color attach="background" args={['transparent']} />
        
        {/* Environment - Perceptual reflections */}
        <Environment preset="city" />
        
        {/* Lights (Following Example 3 in md(1)) */}
        <ambientLight intensity={0.5} />
        <MouseFollowingLight />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} shadow-reveal={true} />

        {/* The Product */}
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
        >
          <Jewel shape={shape} />
        </PresentationControls>

        {/* Aesthetics: Shadows & Ground */}
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2} 
          far={4.5} 
        />
      </Canvas>
    </div>
  )
}
