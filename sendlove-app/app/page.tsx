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

      {/* Floating send love images with wavy animation */}
      <div className="absolute top-24 left-24 animate-float" style={{ animationDelay: "0s" }}>
        <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md border-2 border-white/30 hover:scale-110 transition-transform">
          <Image src="/sendlove4.jpg" alt="Send Love" width={128} height={128} className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="absolute top-40 right-28 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md border-2 border-white/30 hover:scale-110 transition-transform">
          <Image src="/sendlove5.jpg" alt="Send Love" width={112} height={112} className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "3s" }}>
        <div className="w-36 h-36 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md border-2 border-white/30 hover:scale-110 transition-transform">
          <Image src="/sendlove6.jpg" alt="Send Love" width={144} height={144} className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="absolute top-1/3 right-20 animate-float" style={{ animationDelay: "2.5s" }}>
        <div className="w-30 h-30 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md border-2 border-white/30 hover:scale-110 transition-transform">
          <Image src="/sendloveKey.jpg" alt="Love Key" width={120} height={120} className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="absolute bottom-1/3 right-1/4 animate-float" style={{ animationDelay: "4.2s" }}>
        <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md border-2 border-white/30 hover:scale-110 transition-transform">
          <Image src="/sendloveDonkey.jpg" alt="Love Donkey" width={112} height={112} className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="absolute top-2/3 left-1/4 animate-float" style={{ animationDelay: "1.8s" }}>
        <div className="w-26 h-26 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md border-2 border-white/30 hover:scale-110 transition-transform">
          <Image src="/octolady with hand.jpg" alt="Octolady" width={104} height={104} className="object-cover w-full h-full" />
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
