"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, DollarSign, Gift, Sparkles, ArrowRight, Star } from "lucide-react"
import * as THREE from "three"

// Simple seeded random function
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// Love Glyph Component
function LoveGlyph({ seed, intensity = 1 }: { seed: number; intensity?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [geometry, setGeometry] = useState<THREE.BufferGeometry>()

  useEffect(() => {
    const points: THREE.Vector3[] = []

    // Create heart-centered love patterns
    for (let i = 0; i < 45; i++) {
      const t = (i / 45) * Math.PI * 2
      // Enhanced heart equation
      const x = 16 * Math.pow(Math.sin(t), 3) * 0.08
      const y = (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * 0.08

      // Add love-inspired variations
      const loveWave = Math.sin(t * 4) * 0.06
      const passion = Math.cos(t * 6) * 0.04

      const randomX = seededRandom(seed + i * 0.1)
      const randomY = seededRandom(seed + i * 0.2)
      const randomZ = seededRandom(seed + i * 0.3)

      points.push(
        new THREE.Vector3(
          x + loveWave + (randomX - 0.5) * 0.35,
          y + passion + (randomY - 0.5) * 0.35,
          (randomZ - 0.5) * 0.25,
        ),
      )
    }

    const geom = new THREE.BufferGeometry().setFromPoints(points)
    setGeometry(geom)
  }, [seed])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  if (!geometry) return null

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        size={0.12 * intensity}
        color={`hsl(${320 + ((seed * 30) % 60)}, 70%, 70%)`}
        transparent
        opacity={0.9}
      />
    </points>
  )
}

// Floating Elements Background
function FloatingElements() {
  const elements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    seed: Math.random() * 1000,
    position: [(Math.random() - 0.5) * 14, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 4] as [
      number,
      number,
      number,
    ],
  }))

  return (
    <>
      {elements.map((element) => (
        <group key={element.id} position={element.position}>
          <LoveGlyph seed={element.seed} intensity={0.3} />
        </group>
      ))}
    </>
  )
}

// Floating Decorative Icons
function FloatingIcon({
  children,
  className,
  style,
}: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`absolute animate-float ${className}`} style={style}>
      {children}
    </div>
  )
}

export default function LovePage() {
  const [mode, setMode] = useState<"money" | "words" | "gifts" | null>(null)
  const [message, setMessage] = useState("")
  const [amount, setAmount] = useState("")
  const [glyphSeed, setGlyphSeed] = useState(Math.random() * 1000)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showGlyph, setShowGlyph] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const newSeed = Date.now() + Math.random() * 1000
    setGlyphSeed(newSeed)
    setShowGlyph(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)

    setTimeout(() => {
      setMode(null)
      setMessage("")
      setAmount("")
      setShowGlyph(false)
    }, 4000)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-rose-950">
      {/* Background Canvas */}
      <div className="fixed inset-0 opacity-25">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <FloatingElements />
        </Canvas>
      </div>

      {/* Magenta glow overlay */}
      <div className="fixed inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,rgba(236,72,153,0.3),transparent_50%)]" />
      <div className="fixed inset-0 opacity-8 bg-[radial-gradient(circle_at_70%_60%,rgba(219,39,119,0.2),transparent_50%)]" />

      {/* Floating Decorative Elements */}
      <FloatingIcon className="top-24 left-24" style={{ animationDelay: "0s" }}>
        <div className="w-14 h-14 rounded-full bg-magenta-800/30 backdrop-blur-sm border border-magenta-500/40 flex items-center justify-center">
          <Heart className="w-7 h-7 text-magenta-300" />
        </div>
      </FloatingIcon>

      <FloatingIcon className="top-40 right-28" style={{ animationDelay: "1.5s" }}>
        <div className="w-10 h-10 rounded-full bg-pink-800/25 backdrop-blur-sm border border-pink-500/35 flex items-center justify-center">
          <Star className="w-5 h-5 text-pink-300" />
        </div>
      </FloatingIcon>

      <FloatingIcon className="bottom-32 left-20" style={{ animationDelay: "3s" }}>
        <div className="w-16 h-16 rounded-full bg-rose-800/20 backdrop-blur-sm border border-rose-500/30 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-rose-300" />
        </div>
      </FloatingIcon>

      <FloatingIcon className="top-1/2 right-16" style={{ animationDelay: "0.8s" }}>
        <div className="w-12 h-12 rounded-full bg-fuchsia-700/25 backdrop-blur-sm border border-fuchsia-500/35 flex items-center justify-center">
          <Gift className="w-6 h-6 text-fuchsia-300" />
        </div>
      </FloatingIcon>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <p className="text-2xl md:text-3xl font-light text-magenta-200/80 mb-2">send</p>
            <h1 className="text-7xl md:text-9xl font-serif font-bold text-transparent bg-gradient-to-r from-magenta-300 via-pink-200 to-rose-300 bg-clip-text drop-shadow-2xl">
              LOVE
            </h1>
          </div>
          <p className="text-lg md:text-xl text-magenta-100/80 font-light mb-2">through</p>
          <h2 className="text-3xl md:text-4xl font-serif text-white/90 mb-8">The Glyph Gate</h2>
          <p className="text-lg md:text-xl text-purple-100/80 max-w-3xl mx-auto leading-relaxed font-light">
            A portal for transmitting love in all its forms—monetary, emotional, physical. Each gesture becomes a unique
            glyph in our constellation of connection.
          </p>
        </div>

        {/* Mode Selection */}
        {!mode && !showGlyph && (
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card
              className="bg-slate-900/40 backdrop-blur-lg border border-magenta-500/30 hover:bg-slate-800/50 hover:border-magenta-400/50 transition-all cursor-pointer group shadow-2xl"
              onClick={() => setMode("money")}
            >
              <CardContent className="p-10 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-magenta-600 to-pink-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Send Love</h3>
                <p className="text-magenta-200/80 text-lg">Through monetary energy</p>
              </CardContent>
            </Card>

            <Card
              className="bg-slate-900/40 backdrop-blur-lg border border-magenta-500/30 hover:bg-slate-800/50 hover:border-magenta-400/50 transition-all cursor-pointer group shadow-2xl"
              onClick={() => setMode("words")}
            >
              <CardContent className="p-10 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-600 to-rose-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Send Love</h3>
                <p className="text-magenta-200/80 text-lg">Through words & feelings</p>
              </CardContent>
            </Card>

            <Card
              className="bg-slate-900/40 backdrop-blur-lg border border-magenta-500/30 hover:bg-slate-800/50 hover:border-magenta-400/50 transition-all cursor-pointer group shadow-2xl"
              onClick={() => setMode("gifts")}
            >
              <CardContent className="p-10 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose-600 to-fuchsia-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Send Love</h3>
                <p className="text-magenta-200/80 text-lg">Through physical gifts</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Form Interface */}
        {mode && !showGlyph && (
          <Card className="max-w-2xl mx-auto bg-slate-900/50 backdrop-blur-xl border border-magenta-500/40 shadow-2xl">
            <CardContent className="p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-magenta-600 to-pink-700 flex items-center justify-center shadow-lg">
                  {mode === "money" && <DollarSign className="w-6 h-6 text-white" />}
                  {mode === "words" && <Heart className="w-6 h-6 text-white" />}
                  {mode === "gifts" && <Gift className="w-6 h-6 text-white" />}
                </div>
                <h2 className="text-3xl font-semibold text-white">
                  Send Love
                  <span className="text-lg font-light text-magenta-200/80 block">
                    {mode === "money" && "through value"}
                    {mode === "words" && "through words"}
                    {mode === "gifts" && "through gifts"}
                  </span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {mode === "money" && (
                  <div>
                    <label className="block text-lg font-medium mb-3 text-magenta-100">Amount</label>
                    <Input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount..."
                      className="bg-slate-800/50 backdrop-blur-sm border-magenta-500/40 text-white placeholder-magenta-300/60 text-lg p-4 rounded-xl focus:border-magenta-400"
                      required
                    />
                  </div>
                )}

                {mode === "words" && (
                  <div>
                    <label className="block text-lg font-medium mb-3 text-magenta-100">Your Love Message</label>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Express your love..."
                      className="bg-slate-800/50 backdrop-blur-sm border-magenta-500/40 text-white placeholder-magenta-300/60 text-lg p-4 rounded-xl min-h-32 focus:border-magenta-400"
                      required
                    />
                  </div>
                )}

                {mode === "gifts" && (
                  <div className="space-y-6">
                    <div className="text-magenta-100/90 text-lg">
                      <p className="mb-4">Send love through physical gifts:</p>
                      <div className="space-y-2 text-base bg-slate-800/30 p-4 rounded-xl border border-magenta-500/20">
                        <div>💝 Curated love wishlist (provided after sending)</div>
                        <div>💎 Digital tokens of affection</div>
                        <div>📦 Physical love packages (upon request)</div>
                      </div>
                    </div>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your gift of love..."
                      className="bg-slate-800/50 backdrop-blur-sm border-magenta-500/40 text-white placeholder-magenta-300/60 text-lg p-4 rounded-xl focus:border-magenta-400"
                    />
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setMode(null)}
                    className="border-magenta-500/50 text-magenta-200 hover:bg-magenta-800/30 backdrop-blur-sm text-lg px-6 py-3 rounded-xl"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-magenta-600 to-pink-700 hover:from-magenta-700 hover:to-pink-800 text-white text-lg px-8 py-3 rounded-xl flex-1 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                        Sending Love...
                      </>
                    ) : (
                      <>
                        Send Love
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Glyph Generation Display */}
        {showGlyph && (
          <div className="text-center">
            <h2 className="text-4xl font-semibold mb-8 text-white">Love Sent ✨</h2>
            <div className="w-80 h-80 mx-auto mb-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-magenta-500/40 shadow-2xl">
              <Canvas camera={{ position: [0, 0, 3] }}>
                <LoveGlyph seed={glyphSeed} intensity={4} />
              </Canvas>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 max-w-lg mx-auto border border-magenta-500/40">
              <p className="text-magenta-100 text-xl mb-4">Your love has been encoded as</p>
              <p className="text-2xl font-semibold text-magenta-300 mb-4">Love Glyph #{Math.floor(glyphSeed)}</p>
              <p className="text-magenta-200/80">
                This unique glyph now exists in our constellation of love. Connection details will arrive shortly. 💕
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-20 text-magenta-300/70">
          <p className="text-lg mb-2">All love transmissions are handled with care and privacy</p>
          <p className="mb-6">Each love glyph is procedurally generated and completely unique</p>
          <p>
            <a href="/" className="hover:text-magenta-200 transition-colors text-lg underline decoration-magenta-400">
              ← Return to Glyph Gate
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(1deg); }
          66% { transform: translateY(6px) rotate(-1deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
