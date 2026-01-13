"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Mail, Sparkles, Send, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-rose-950 relative overflow-hidden">
      {/* Magenta glow overlays */}
      <div className="fixed inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,rgba(236,72,153,0.3),transparent_50%)]" />
      <div className="fixed inset-0 opacity-8 bg-[radial-gradient(circle_at_70%_60%,rgba(219,39,119,0.2),transparent_50%)]" />

      {/* Floating decorative elements */}
      <div className="absolute top-24 left-24 animate-float" style={{ animationDelay: "0s" }}>
        <div className="w-14 h-14 rounded-full bg-magenta-800/30 backdrop-blur-sm border border-magenta-500/40 flex items-center justify-center">
          <Mail className="w-7 h-7 text-magenta-300" />
        </div>
      </div>

      <div className="absolute top-40 right-28 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="w-10 h-10 rounded-full bg-pink-800/25 backdrop-blur-sm border border-pink-500/35 flex items-center justify-center">
          <Heart className="w-5 h-5 text-pink-300" />
        </div>
      </div>

      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "3s" }}>
        <div className="w-16 h-16 rounded-full bg-rose-800/20 backdrop-blur-sm border border-rose-500/30 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-rose-300" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-magenta-200 hover:text-white hover:bg-magenta-800/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-gradient-to-r from-magenta-300 via-pink-200 to-rose-300 bg-clip-text drop-shadow-2xl">
              Contact Me
            </h1>
          </div>
          <p className="text-lg md:text-xl text-magenta-100/80 max-w-2xl mx-auto leading-relaxed font-light">
            Send me a message and let's connect. I'd love to hear from you! 💌
          </p>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto bg-slate-900/50 backdrop-blur-xl border border-magenta-500/40 shadow-2xl">
          <CardContent className="p-10">
            {submitStatus === "success" ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-white">Message Sent! ✨</h2>
                <p className="text-magenta-100/80 text-lg mb-6">
                  Thank you for reaching out! I'll get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => setSubmitStatus("idle")}
                  className="bg-gradient-to-r from-magenta-600 to-pink-700 hover:from-magenta-700 hover:to-pink-800"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-medium text-magenta-100">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name..."
                    className="bg-slate-800/50 backdrop-blur-sm border-magenta-500/40 text-white placeholder-magenta-300/60 text-lg p-4 rounded-xl focus:border-magenta-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg font-medium text-magenta-100">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="bg-slate-800/50 backdrop-blur-sm border-magenta-500/40 text-white placeholder-magenta-300/60 text-lg p-4 rounded-xl focus:border-magenta-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg font-medium text-magenta-100">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me what's on your mind..."
                    className="bg-slate-800/50 backdrop-blur-sm border-magenta-500/40 text-white placeholder-magenta-300/60 text-lg p-4 rounded-xl min-h-40 focus:border-magenta-400"
                    required
                  />
                </div>

                {submitStatus === "error" && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4">
                    <p className="text-red-200 text-center">{errorMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-magenta-600 to-pink-700 hover:from-magenta-700 hover:to-pink-800 text-white text-xl px-8 py-6 rounded-xl shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="text-center mt-12 text-magenta-300/70">
          <p className="text-lg">Your information is kept private and secure</p>
          <p className="text-sm mt-2">I typically respond within 24-48 hours</p>
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
