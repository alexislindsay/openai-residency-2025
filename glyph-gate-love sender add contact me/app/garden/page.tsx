"use client"

import type React from "react"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Sparkles, Star } from "lucide-react"
import * as THREE from "three"

// Simple seeded random function
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// Constellation Glyph Component
function ConstellationGlyph({
  seed,
  position,
  scale = 1,
}: { seed: number; position: [number, number, number]; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [geometry, setGeometry] = useState<THREE.BufferGeometry>()

  useEffect(() => {
    const points: THREE.Vector3[] = []

    // Create constellation-like patterns
    for (let i = 0; i < 35; i++) {
      const t = (i / 35) * Math.PI * 2
      const heartX = 16 * Math.pow(Math.sin(t), 3) * 0.06
      const heartY = (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * 0.06

      // Add constellation-like connections
      const constellation = Math.sin(t * 4) * 0.08
      const depth = Math.cos(t * 6) * 0.04

      const randomX = seededRandom(seed + i * 0.1)
      const randomY = seededRandom(seed + i * 0.2)
      const randomZ = seededRandom(seed + i * 0.3)

      points.push(
        new THREE.Vector3(
          heartX + constellation + (randomX - 0.5) * 0.3,
          heartY + depth + (randomY - 0.5) * 0.3,
          (randomZ - 0.5) * 0.4,
        ),
      )
    }

    const geom = new THREE.BufferGeometry().setFromPoints(points)
    setGeometry(geom)
  }, [seed])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.15) * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3 + seed) * 0.2
    }
  })

  if (!geometry) return null

  return (
    <group position={position} scale={scale}>
      <points ref={meshRef} geometry={geometry}>
        <pointsMaterial size={0.06} color={`hsl(${270 + ((seed * 60) % 90)}, 70%, 75%)`} transparent opacity={0.9} />
      </points>
    </group>
  )
}

export default function GardenPage() {
  const [accessCode, setAccessCode] = useState("")
  const [hasAccess, setHasAccess] = useState(false)
  const [glyphs] = useState(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      seed: Math.random() * 1000,
      position: [(Math.random() - 0.5) * 18, (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 10] as [
        number,
        number,
        number,
      ],
      scale: 0.8 + Math.random() * 1.6,
    })),
  )

  const handleAccess = (e: React.FormEvent) => {
    e.preventDefault()
    if (accessCode.length > 0) {
      setHasAccess(true)
    }
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-indigo-950 flex items-center justify-center relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-24 left-24 animate-float">
          <Heart className="w-10 h-10 text-purple-400/40" />
        </div>
        <div className="absolute top-48 right-32 animate-float" style={{ animationDelay: "1s" }}>
          <Star className="w-7 h-7 text-indigo-400/40" />
        </div>
        <div className="absolute bottom-40 left-32 animate-float" style={{ animationDelay: "2s" }}>
          <Sparkles className="w-8 h-8 text-violet-400/40" />
        </div>

        <div className="max-w-md w-full p-8">
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/40 shadow-2xl">
            <h1 className="text-4xl font-serif font-bold text-center mb-8 text-white">The Constellation</h1>
            <p className="text-purple-100/90 text-center mb-8 text-lg leading-relaxed">
              This sacred space contains the collective sigils of all transmissions. Access requires coordinates
              provided after your first transmission through the portal.
            </p>
            <form onSubmit={handleAccess} className="space-y-6">
              <Input
                type="password"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                placeholder="Enter access coordinates..."
                className="bg-slate-800/50 backdrop-blur-sm border-purple-500/40 text-white placeholder-purple-300/60 text-lg p-4 rounded-xl focus:border-purple-400"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white text-lg py-3 rounded-xl shadow-lg"
              >
                Enter Constellation
              </Button>
            </form>
            <p className="text-center mt-8 text-purple-300/70">
              <a href="/love" className="hover:text-purple-200 transition-colors underline decoration-purple-400">
                ← Return to Portal
              </a>
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-15px) rotate(2deg); }
            66% { transform: translateY(8px) rotate(-2deg); }
          }
          
          .animate-float {
            animation: float 10s ease-in-out infinite;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-indigo-950 relative overflow-hidden">
      <div className="fixed inset-0">
        <Canvas camera={{ position: [0, 0, 14], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[12, 12, 12]} intensity={0.4} color="#8b5cf6" />
          <pointLight position={[-12, -12, 12]} intensity={0.4} color="#6366f1" />
          {glyphs.map((glyph) => (
            <ConstellationGlyph key={glyph.id} seed={glyph.seed} position={glyph.position} scale={glyph.scale} />
          ))}
        </Canvas>
      </div>

      <div className="relative z-10 p-8">
        <div className="text-center">
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-10 max-w-2xl mx-auto border border-purple-500/40 shadow-2xl">
            <h1 className="text-5xl font-serif font-bold mb-6 text-white">The Constellation</h1>
            <p className="text-purple-100/90 mb-8 text-xl leading-relaxed">
              Each sigil represents a transmission through the portal. They drift here in eternal twilight, a living
              constellation of human intention and connection.
            </p>
            <div className="text-lg text-purple-200/80 space-y-2">
              <p>⚡ Total Transmissions: {glyphs.length}</p>
              <p>🌙 Constellation Status: Expanding</p>
              <p>✨ New Sigils: Manifesting Nightly</p>
            </div>
            <p className="mt-8">
              <a
                href="/love"
                className="text-purple-300 hover:text-purple-200 transition-colors text-lg underline decoration-purple-400"
              >
                ← Return to Portal
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
