"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Sparkles, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#2b124c] via-[#7b4397] to-[#f387ab] flex items-center justify-center relative overflow-hidden">
      {/* Subtle ethereal glow overlays */}
      <div className="fixed inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="fixed inset-0 opacity-15 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1),transparent_50%)]" />

      {/* Floating decorative elements */}
      <div className="absolute top-24 left-24 animate-float" style={{ animationDelay: "0s" }}>
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
          <Heart className="w-7 h-7 text-white/90" />
        </div>
      </div>

      <div className="absolute top-40 right-28 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
          <Star className="w-5 h-5 text-white/80" />
        </div>
      </div>

      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "3s" }}>
        <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-white/80" />
        </div>
      </div>

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
          <p className="text-2xl md:text-3xl font-light text-white/90 mb-2">send</p>
          <h1 className="text-7xl md:text-9xl font-serif font-bold text-white drop-shadow-2xl">
            LOVE
          </h1>
        </div>
        <p className="text-lg md:text-xl text-white/80 font-light mb-2">through</p>
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">The Glyph Gate</h2>
        <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
          A digital portal for transmitting love in all its forms. Each gesture becomes a glyph, each connection becomes
          constellation.
        </p>

        <div className="space-y-6">
          <Link href="/love">
            <Button className="bg-white/25 hover:bg-white/35 text-white text-xl px-10 py-4 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/30 transition-all">
              <Heart className="w-6 h-6 mr-3" />
              Send Love
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>

          <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 max-w-md mx-auto border border-white/20">
            <div className="text-white/90 space-y-1">
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
