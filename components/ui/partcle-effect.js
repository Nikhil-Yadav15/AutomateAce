"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useState, useRef, useMemo } from "react"
import * as THREE from "three"

// Particle Background Component
function ParticleField({ count = 5000, particleSize = 0.02 }) {
  const mesh = useRef()
  const [hovered, setHovered] = useState(false)

  // Generate random particle positions
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 80
      temp[i * 3 + 1] = (Math.random() - 0.5) * 80
      temp[i * 3 + 2] = (Math.random() - 0.5) * 80
    }
    return temp
  }, [count])

  // Animate particles
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x -= delta / 10
      mesh.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={particleSize}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

// Floating Particles with Movement
function FloatingParticles({ count = 2000, particleSize = 0.01 }) {
  const mesh = useRef()
  const light = useRef()

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 100
      temp[i * 3 + 1] = (Math.random() - 0.5) * 100
      temp[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    return temp
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (mesh.current) {
      mesh.current.rotation.x = time / 20
      mesh.current.rotation.y = time / 30
    }

    if (light.current) {
      light.current.position.x = Math.sin(time / 5) * 9
      light.current.position.y = Math.sin(time / 5) * 9
      light.current.position.z = Math.sin(time / 5) * 9
    }
  })

  return (
    <>
      <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fbbf24"
          size={particleSize}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <pointLight ref={light} distance={40} intensity={8} color="white" />
    </>
  )
}

// Full-Screen Particle Background Canvas
export function ParticleBackground() {
  const [particleFieldSize, setParticleFieldSize] = useState(0.04)
  const [floatingParticleSize, setFloatingParticleSize] = useState(0.07)

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [10, 10, 5], fov: 105 }}
        gl={{ 
          antialias: false, 
          alpha: true,
          powerPreference: "high-performance" 
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#0a0a0a"]} />
        <fog attach="fog" args={["#0a0a0a", 60, 100]} />
        
        <ParticleField count={5000} particleSize={particleFieldSize} />
        <FloatingParticles count={2000} particleSize={floatingParticleSize} />
        
        <ambientLight intensity={0.1} />
        <directionalLight 
          position={[1, 1, 1]} 
          intensity={0.2} 
          color="#ffffff" 
        />
      </Canvas>
    </div>
  )
}

// export default ParticleBackground
