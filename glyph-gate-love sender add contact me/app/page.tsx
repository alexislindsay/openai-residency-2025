"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Heart, Sparkles, Star, Send } from "lucide-react"

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => {
          setIsContactOpen(false)
          setSubmitStatus("idle")
        }, 3000)
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Failed to send message. Please try again later.")
      console.error("Contact form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

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

          {/* Mirrored Elephant Contact Button */}
          <div
            className="mt-12 group cursor-pointer relative"
            onClick={() => setIsContactOpen(true)}
          >
            <div className="flex items-center justify-center gap-2 text-5xl md:text-6xl transition-all group-hover:scale-110">
              <span className="inline-block">🐘</span>
              <span className="inline-block scale-x-[-1]">🐘</span>
            </div>
            <p className="text-magenta-200/60 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              contact me
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="bg-slate-900/95 backdrop-blur-xl border border-magenta-500/40 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif text-transparent bg-gradient-to-r from-magenta-300 via-pink-200 to-rose-300 bg-clip-text">
              Contact Me
            </DialogTitle>
          </DialogHeader>

          {submitStatus === "success" ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Message Sent! ✨</h3>
              <p className="text-magenta-100/80">
                Thank you for reaching out! I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-magenta-100">
                  Your Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name..."
                  className="bg-slate-800/50 border-magenta-500/40 text-white placeholder-magenta-300/60 focus:border-magenta-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-magenta-100">
                  Your Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="bg-slate-800/50 border-magenta-500/40 text-white placeholder-magenta-300/60 focus:border-magenta-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-magenta-100">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me what's on your mind..."
                  className="bg-slate-800/50 border-magenta-500/40 text-white placeholder-magenta-300/60 min-h-32 focus:border-magenta-400"
                  required
                />
              </div>

              {submitStatus === "error" && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-3">
                  <p className="text-red-200 text-sm text-center">{errorMessage}</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-magenta-600 to-pink-700 hover:from-magenta-700 hover:to-pink-800 text-white shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

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
