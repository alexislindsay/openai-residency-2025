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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Subtle ethereal glow overlays */}
      <div className="fixed inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_40%,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="fixed inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.08),transparent_60%)]" />

      {/* Floating decorative elements */}
      <div className="absolute top-24 left-24 animate-float" style={{ animationDelay: "0s" }}>
        <div className="w-14 h-14 rounded-full bg-pink-200/40 backdrop-blur-sm border border-pink-300/50 flex items-center justify-center">
          <Mail className="w-7 h-7 text-pink-600" />
        </div>
      </div>

      <div className="absolute top-40 right-28 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="w-10 h-10 rounded-full bg-purple-200/40 backdrop-blur-sm border border-purple-300/50 flex items-center justify-center">
          <Heart className="w-5 h-5 text-purple-600" />
        </div>
      </div>

      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "3s" }}>
        <div className="w-16 h-16 rounded-full bg-rose-200/40 backdrop-blur-sm border border-rose-300/50 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-rose-600" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-purple-600 hover:text-purple-800 hover:bg-purple-100"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
              Contact Me
            </h1>
          </div>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Send me a message and let's connect. I'd love to hear from you! 💌
          </p>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto bg-white/70 backdrop-blur-xl border border-purple-200/50 shadow-xl rounded-3xl">
          <CardContent className="p-10">
            {submitStatus === "success" ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-purple-800">Message Sent! ✨</h2>
                <p className="text-slate-600 text-lg mb-6">
                  Thank you for reaching out! I'll get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => setSubmitStatus("idle")}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-medium text-purple-800">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name..."
                    className="bg-white/80 backdrop-blur-sm border-purple-300/50 text-slate-800 placeholder-purple-400/60 text-lg p-4 rounded-2xl focus:border-purple-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg font-medium text-purple-800">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="bg-white/80 backdrop-blur-sm border-purple-300/50 text-slate-800 placeholder-purple-400/60 text-lg p-4 rounded-2xl focus:border-purple-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg font-medium text-purple-800">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me what's on your mind..."
                    className="bg-white/80 backdrop-blur-sm border-purple-300/50 text-slate-800 placeholder-purple-400/60 text-lg p-4 rounded-2xl min-h-40 focus:border-purple-500"
                    required
                  />
                </div>

                {submitStatus === "error" && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4">
                    <p className="text-red-700 text-center">{errorMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xl px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
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
        <div className="text-center mt-12 text-slate-500">
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
