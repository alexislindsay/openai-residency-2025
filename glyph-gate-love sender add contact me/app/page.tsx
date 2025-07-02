"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Sparkles, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-rose-950 flex items-center justify-center relative overflow-hidden">
      {/* Magenta glow overlays */}
      <div className="fixed inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,rgba(236,72,153,0.3),transparent_50%)]" />
      <div className="fixed inset-0 opacity-8 bg-[radial-gradient(circle_at_70%_60%,rgba(219,39,119,0.2),transparent_50%)]" />

      {/* Floating decorative elements */}
      <div className="absolute top-24 left-24 animate-float" style={{ animationDelay: "0s" }}>
        <div className="w-14 h-14 rounded-full bg-magenta-800/30 backdrop-blur-sm border border-magenta-500/40 flex items-center justify-center">
          <Heart className="w-7 h-7 text-magenta-300" />
        </div>
      </div>

      <div className="absolute top-40 right-28 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="w-10 h-10 rounded-full bg-pink-800/25 backdrop-blur-sm border border-pink-500/35 flex items-center justify-center">
          <Star className="w-5 h-5 text-pink-300" />
        </div>
      </div>

      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "3s" }}>
        <div className="w-16 h-16 rounded-full bg-rose-800/20 backdrop-blur-sm border border-rose-500/30 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-rose-300" />
        </div>
      </div>

      <div className="text-center max-w-4xl px-4 relative z-10">
        <div className="mb-8">
          <p className="text-2xl md:text-3xl font-light text-magenta-200/80 mb-2">send</p>
          <h1 className="text-7xl md:text-9xl font-serif font-bold text-transparent bg-gradient-to-r from-magenta-300 via-pink-200 to-rose-300 bg-clip-text drop-shadow-2xl">
            LOVE
          </h1>
        </div>
        <p className="text-lg md:text-xl text-magenta-100/80 font-light mb-2">through</p>
        <h2 className="text-3xl md:text-4xl font-serif text-white/90 mb-8">The Glyph Gate</h2>
        <p className="text-lg md:text-xl text-purple-100/80 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
          A digital portal for transmitting love in all its forms. Each gesture becomes a glyph, each connection becomes
          constellation.
        </p>

        <div className="space-y-6">
          <Link href="/love">
            <Button className="bg-gradient-to-r from-magenta-600 to-pink-700 hover:from-magenta-700 hover:to-pink-800 text-white text-xl px-10 py-4 rounded-2xl shadow-2xl backdrop-blur-sm border border-magenta-500/30">
              <Heart className="w-6 h-6 mr-3" />
              Send Love
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>

          <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 max-w-md mx-auto border border-magenta-500/30">
            <div className="text-magenta-200/80 space-y-1">
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
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
