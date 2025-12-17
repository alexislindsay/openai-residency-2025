"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Feather, Sparkles, Lock, Infinity, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function ContractsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Floating background elements */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{
                opacity: 0.1
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              <Heart className="w-8 h-8 text-pink-400" fill="currentColor" />
            </motion.div>
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="font-['Great_Vibes'] text-7xl md:text-9xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent mb-6"
            animate={{
              backgroundPosition: ['0%', '100%', '0%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Contracts of the Heart
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-purple-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Where promises become poetry, and agreements transform into sacred vows.
            Every clause a confession, every signature a surrender.
          </motion.p>
        </motion.div>

        {/* Contract Sections */}
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Section 1: The Promise */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-pink-200/50 shadow-2xl shadow-pink-500/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl">
                <Feather className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-['Dancing_Script'] text-4xl md:text-5xl text-purple-900">
                Article I: The Promise
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Herein lies not a contract, but a <span className="text-pink-600 font-semibold">covenant</span> —
                written not in ink, but in intention. Each word carries weight, each clause
                carries <span className="italic">consequence</span>. But more than obligation,
                this is an <span className="text-purple-600 font-semibold">invitation</span> to hold
                space for what we dare to build together.
              </p>
              <p className="text-lg text-gray-600 mt-4">
                A contract is trust made visible. It says: <span className="font-['Great_Vibes'] text-3xl text-pink-500">"I see you. I stay."</span>
              </p>
            </div>
          </motion.div>

          {/* Section 2: Terms of Endearment */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-200/50 shadow-2xl shadow-purple-500/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-['Dancing_Script'] text-4xl md:text-5xl text-purple-900">
                Article II: Terms of Endearment
              </h2>
            </div>
            <div className="space-y-6">
              <div className="pl-6 border-l-4 border-pink-400">
                <h3 className="text-2xl font-semibold text-purple-800 mb-2">Clause 1: Presence</h3>
                <p className="text-lg text-gray-700">
                  The undersigned agree to show up — not just physically, but emotionally,
                  mentally, spiritually. To be present is to be witnessed. To witness is to love.
                </p>
              </div>

              <div className="pl-6 border-l-4 border-purple-400">
                <h3 className="text-2xl font-semibold text-purple-800 mb-2">Clause 2: Honesty</h3>
                <p className="text-lg text-gray-700">
                  Words will be chosen with care, but never censored by fear. Truth, even when
                  tender, trumps comfort. Vulnerability is the currency of connection.
                </p>
              </div>

              <div className="pl-6 border-l-4 border-blue-400">
                <h3 className="text-2xl font-semibold text-purple-800 mb-2">Clause 3: Growth</h3>
                <p className="text-lg text-gray-700">
                  This agreement acknowledges that humans are not static. We evolve. We shed skins.
                  We become. The contract adapts, or it suffocates. Love that doesn't grow becomes a cage.
                </p>
              </div>

              <div className="pl-6 border-l-4 border-rose-400">
                <h3 className="text-2xl font-semibold text-purple-800 mb-2">Clause 4: Release</h3>
                <p className="text-lg text-gray-700">
                  Should the time come when this contract no longer serves, both parties agree to
                  let go with grace. A contract that cannot be dissolved is not love — it's possession.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 3: Eternal Clauses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-pink-100/80 via-purple-100/80 to-blue-100/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-pink-300/50 shadow-2xl shadow-indigo-500/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl">
                <Infinity className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-['Dancing_Script'] text-4xl md:text-5xl text-purple-900">
                Article III: The Forever Clause
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Some promises transcend time. Some bonds outlive the bodies that birth them.
                This clause exists outside linear contracts — it is the <span className="font-semibold text-indigo-600">energetic signature</span> that
                remains when all else dissolves.
              </p>
              <div className="bg-white/60 rounded-2xl p-6 mt-6 border-l-4 border-pink-500">
                <p className="text-xl font-['Dancing_Script'] text-purple-800 italic">
                  "I will remember you. Not as you were, but as you are — infinite,
                  evolving, unrepeatable. This remembering is my gift. It costs me nothing.
                  It gives you everything."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Signatures of the Soul */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-200/50 shadow-2xl shadow-purple-500/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-['Dancing_Script'] text-4xl md:text-5xl text-purple-900">
                Article IV: Signatures of the Soul
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                A signature is not a scribble. It is a <span className="font-semibold text-pink-600">seal of self</span>.
                When you sign, you are saying: <span className="italic">"This is me. This is what I stand for.
                I am accountable."</span>
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <div className="h-32 border-2 border-dashed border-pink-300 rounded-xl flex items-center justify-center bg-pink-50/50">
                    <div className="text-center">
                      <Star className="w-12 h-12 text-pink-400 mx-auto mb-2" />
                      <p className="font-['Great_Vibes'] text-4xl text-pink-600">Your Heart Here</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 text-center">Party of the First Heart</p>
                </div>

                <div className="space-y-4">
                  <div className="h-32 border-2 border-dashed border-purple-300 rounded-xl flex items-center justify-center bg-purple-50/50">
                    <div className="text-center">
                      <Star className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                      <p className="font-['Great_Vibes'] text-4xl text-purple-600">Their Heart Here</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 text-center">Party of the Second Heart</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 mt-8">
                <p className="text-center text-lg font-semibold text-purple-900">
                  Executed this day, under the laws of <span className="font-['Great_Vibes'] text-3xl text-pink-600">Love</span>,
                  in the presence of <span className="font-['Great_Vibes'] text-3xl text-purple-600">Witnesses Unseen</span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Final Wisdom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-pink-200/50 shadow-2xl">
              <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6" fill="currentColor" />
              <p className="text-2xl md:text-3xl font-['Dancing_Script'] text-purple-900 mb-6">
                A contract is not a cage. It is a <span className="text-pink-600">commitment to care</span>.
              </p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                The most romantic thing you can do is show up, tell the truth, and honor your word.
                Not because you must, but because you <span className="italic font-semibold">choose to</span>.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link href="/love">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                Send Love
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg rounded-2xl transition-all hover:scale-105"
              >
                Return to Portal
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-100/50 to-transparent pointer-events-none" />
    </div>
  )
}
