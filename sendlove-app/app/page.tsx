"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Sparkles, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
      {/* Beautiful flowers sheer overlay */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/beautiful flowers.jpg"
          alt="Beautiful Flowers"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Subtle ethereal glow overlays */}
      <div className="fixed inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_40%,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="fixed inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.08),transparent_60%)]" />

      <div className="text-center max-w-4xl px-4 relative z-10">
        {/* Send Love Icon */}
        <div className="mb-8 flex justify-center">
          <div className="animate-float">
            <Image
              src="/sendlove.png"
              alt="Send Love"
              width={200}
              height={200}
              className="drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="mb-8">
          <p className="text-2xl md:text-3xl font-bold text-purple-600 mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>send</p>
          <h1 className="text-7xl md:text-9xl font-serif font-extrabold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-float-text" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.4)' }}>
            LOVE
          </h1>
        </div>
        <p className="text-lg md:text-xl text-purple-500 font-bold mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>through</p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-purple-700 mb-8" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>The Glyph Gate</h2>
        <p className="text-lg md:text-xl text-slate-700 mb-12 leading-relaxed font-semibold max-w-2xl mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>
          A digital portal for transmitting love in all its forms. Each gesture becomes a glyph, each connection becomes
          constellation.
        </p>

        <div className="space-y-6">
          <Link href="/love">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xl px-12 py-6 rounded-full shadow-xl transition-all hover:shadow-2xl hover:scale-105">
              <Heart className="w-6 h-6 mr-3" />
              Send Love
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>

          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 max-w-md mx-auto shadow-lg border border-purple-200/50">
            <div className="text-purple-700 space-y-2 text-base font-bold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
              <p>Portal Status: 💕 Active</p>
              <p>Love Flow: ✨ Transmitting</p>
              <p>Constellation: 🌙 Growing</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(1deg); }
          66% { transform: translateY(6px) rotate(-1deg); }
        }

        @keyframes floatText {
          0%, 100% {
            transform: translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg);
          }
          25% {
            transform: translateY(-15px) translateZ(10px) rotateX(2deg) rotateY(-3deg);
          }
          50% {
            transform: translateY(-8px) translateZ(20px) rotateX(-2deg) rotateY(3deg);
          }
          75% {
            transform: translateY(8px) translateZ(10px) rotateX(2deg) rotateY(-2deg);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-text {
          animation: floatText 6s ease-in-out infinite;
          transform-style: preserve-3d;
          perspective: 1000px;
        }
      `}</style>
    </div>
  )
}
