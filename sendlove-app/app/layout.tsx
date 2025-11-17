import type React from "react"
import type { Metadata } from "next"
import { Inter, Great_Vibes, Dancing_Script } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes"
})
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script"
})

export const metadata: Metadata = {
  title: "Send Love - The Glyph Gate",
  description: "A digital portal for transmitting love in all its forms. Send love through monetary energy, words & feelings, or physical gifts.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${greatVibes.variable} ${dancingScript.variable}`}>{children}</body>
    </html>
  )
}
