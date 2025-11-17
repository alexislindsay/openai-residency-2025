"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Sparkles, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
      {/* Subtle ethereal glow overlays */}
      <div className="fixed inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_40%,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="fixed inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.08),transparent_60%)]" />

      {/* Floating decorative elements */}
      <div className="absolute top-24 left-24 animate-float" style={{ animationDelay: "0s" }}>
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-200/40 to-rose-300/40 backdrop-blur-md shadow-lg flex items-center justify-center">
          <Heart className="w-8 h-8 text-pink-600" />
        </div>
      </div>

      <div className="absolute top-40 right-28 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-200/40 to-violet-300/40 backdrop-blur-md shadow-lg flex items-center justify-center">
          <Star className="w-6 h-6 text-purple-600" />
        </div>
      </div>

      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "3s" }}>
        <div className="w-18 h-18 rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-300/40 backdrop-blur-md shadow-lg flex items-center justify-center">
          <Sparkles className="w-9 h-9 text-blue-600" />
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
          <p className="text-2xl md:text-3xl font-light text-purple-600/70 mb-2">send</p>
          <h1 className="text-7xl md:text-9xl font-serif font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
            LOVE
          </h1>
        </div>
        <p className="text-lg md:text-xl text-purple-500/70 font-light mb-2">through</p>
        <h2 className="text-3xl md:text-4xl font-serif text-purple-700 mb-8">The Glyph Gate</h2>
        <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
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
            <div className="text-purple-700 space-y-2 text-base">
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
