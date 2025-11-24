# CLAUDE.md - AI Assistant Guide for OpenAI Residency 2025 Repository

**Last Updated**: 2025-11-24
**Repository Owner**: Alexis Lindsay
**Purpose**: OpenAI Residency Application Portfolio - Recursive Storytelling & Emotional AI Systems

---

## Table of Contents

1. [Repository Overview](#repository-overview)
2. [Codebase Structure](#codebase-structure)
3. [Technology Stack](#technology-stack)
4. [Development Workflows](#development-workflows)
5. [Key Conventions](#key-conventions)
6. [Common Tasks](#common-tasks)
7. [Git Workflow](#git-workflow)
8. [Deployment](#deployment)
9. [Project-Specific Notes](#project-specific-notes)
10. [Quick Reference](#quick-reference)

---

## Repository Overview

### Purpose

This repository is a portfolio of interactive web applications demonstrating **emotional AI design**, **symbolic systems**, and **recursive storytelling** for an OpenAI Residency application. The projects explore how technology can create resonant, meaningful experiences through:

- **LexOS**: A recursive operating system for memory & meaning
- **Emotional AI interfaces**: Systems that listen to the self and reflect insight
- **Visual symbolism**: Glyph-based languages and generative art
- **Interactive prototypes**: Working web applications with 3D graphics

### Core Philosophy

*"I make the abstract actionable. I turn vision into flow."*

The projects bridge recursive emotional logic and systems thinking, using narrative recursion, symbolic encoding, and visual abstraction to build software that creates meaningful connections.

### Key Projects

1. **Send Love App** - Digital portal for transmitting love through payments, messages, and gifts
2. **Glyph Gate** - Alternative version of the love transmission system
3. **My App / Blog** - Markdown-based blog with PDF upload functionality
4. **Butterfly Chat** - Conversational UI for emotional AI interactions

---

## Codebase Structure

```
openai-residency-2025/
│
├── sendlove-app/                    # Main production application
│   ├── app/                         # Next.js 15 App Router
│   │   ├── page.tsx                 # Landing page with portal icon
│   │   ├── love/page.tsx            # Main love transmission interface
│   │   ├── garden/page.tsx          # Protected constellation gallery
│   │   ├── layout.tsx               # Root layout wrapper
│   │   └── globals.css              # Global styles + CSS variables
│   ├── components/
│   │   ├── ui/                      # 50+ Radix UI components
│   │   └── theme-provider.tsx       # Dark mode support
│   ├── hooks/
│   │   ├── use-toast.ts             # Toast notifications
│   │   └── use-mobile.tsx           # Responsive detection
│   ├── lib/
│   │   └── utils.ts                 # Utility functions (cn, etc.)
│   ├── public/                      # Static assets (40+ images)
│   └── package.json                 # Next.js 15 + React 19
│
├── glyph-gate-love sender add contact me/  # Alternative/legacy version
│   └── [Same structure as sendlove-app]
│
├── my-app/                          # Blog & PDF upload app
│   ├── pages/                       # Next.js 13 Pages Router
│   │   ├── index.js                 # Blog index + PDF upload
│   │   ├── api/                     # API routes (unlock, etc.)
│   │   └── blog/                    # Blog post pages
│   ├── posts/                       # Markdown files
│   ├── lib/
│   │   └── posts.js                 # Gray Matter markdown parser
│   └── package.json                 # Next.js 13 + React 18
│
├── Butterflies🦋/                   # Vite + React chat interface
│   ├── src/
│   │   ├── main.tsx                 # React DOM entry point
│   │   ├── ButterflyChat.tsx        # Main chat component
│   │   └── index.css                # Component styles
│   ├── index.html                   # Vite HTML entry
│   └── package.json                 # Vite 5 + React 18
│
├── Gliph_E_Gate/                    # Static assets directory
│   ├── glyphgateicon.png            # Brand icons
│   ├── sendlove.png                 # Payment portal image
│   └── [PDFs, videos, training materials]
│
├── glyphgate/                       # Static HTML portal
├── Writings/                        # Documentation/essays
└── README.md                        # Portfolio overview
```

---

## Technology Stack

### Framework Overview

| Project | Framework | React | TypeScript | Styling | Animation | 3D Graphics |
|---------|-----------|-------|------------|---------|-----------|-------------|
| sendlove-app | Next.js 15.2.4 | 19 | ✓ | Tailwind CSS | Framer Motion | Three.js |
| glyph-gate | Next.js 15.2.4 | 19 | ✓ | Tailwind CSS | Framer Motion | Three.js |
| my-app | Next.js 13.5.0 | 18.2 | ✗ | Custom CSS | Framer Motion | ✗ |
| Butterflies🦋 | Vite 5.0.0 | 18.2 | ✓ | Custom CSS | Framer Motion | ✗ |

### Core Dependencies

#### UI & Components
- **Radix UI** (50+ components): Accessible, unstyled component primitives
- **Shadcn/ui**: Component library built on Radix UI
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant styling
- **clsx + tailwind-merge**: Conditional className utilities

#### 3D Graphics
- **Three.js**: WebGL 3D library
- **@react-three/fiber**: React renderer for Three.js
- Used for procedurally generated "love glyphs" (heart-shaped particle systems)

#### Animation
- **Framer Motion 11.0+**: Declarative animations
- Float, pulse, spin, gradient animations
- Staggered children reveals

#### Forms & Validation
- **React Hook Form**: Form state management
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Connect Zod with React Hook Form

#### Data Processing
- **Gray Matter**: Parse YAML front matter in markdown
- **Remark + Remark HTML**: Markdown to HTML conversion
- **Date-fns**: Date formatting utilities

#### UI Utilities
- **next-themes**: Dark mode support
- **sonner**: Toast notifications
- **vaul**: Drawer/sheet components
- **cmdk**: Command palette component
- **embla-carousel**: Carousel/slider
- **recharts**: Charting library

---

## Development Workflows

### Initial Setup

```bash
# Clone the repository
git clone <repo-url>
cd openai-residency-2025

# Choose a project to work on
cd sendlove-app  # or my-app, Butterflies🦋, etc.

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000 (Next.js) or http://localhost:5173 (Vite)
```

### Development Commands

#### Next.js Projects (sendlove-app, glyph-gate, my-app)

```bash
npm run dev        # Start hot-reload dev server (localhost:3000)
npm run build      # Build for production (.next/ directory)
npm start          # Run production build locally
npm run lint       # Run ESLint checks
```

#### Vite Project (Butterflies🦋)

```bash
npm run dev        # Start Vite dev server with HMR (localhost:5173)
npm run build      # Build with Vite (TypeScript + Vite)
npm run preview    # Preview production build locally
```

### Environment Variables

#### my-app/.env.local
```bash
GLYPHGATE_SECRET=your_password_here
```

Used for password-protected features in the PDF upload app.

### Hot Reload & Development

- **Next.js**: Supports Fast Refresh for React components
- **Vite**: Lightning-fast HMR (Hot Module Replacement)
- **File watching**: Both automatically detect file changes
- **Browser sync**: Auto-refreshes on save

---

## Key Conventions

### Code Style

#### File Naming
- **Components**: PascalCase (e.g., `LoveGlyph.tsx`, `ButterflyChat.tsx`)
- **Utilities**: kebab-case (e.g., `use-toast.ts`, `use-mobile.tsx`)
- **Pages**: lowercase (e.g., `page.tsx`, `layout.tsx`)
- **API routes**: lowercase (e.g., `/api/unlock/route.ts`)

#### TypeScript
- **sendlove-app & glyph-gate**: Full TypeScript with strict mode OFF
- **my-app**: JavaScript only (no TypeScript)
- **Butterflies🦋**: TypeScript with JSX
- Build errors are **ignored** in next.config.mjs (experimental features)

#### Import Paths
```typescript
// Use @ alias for absolute imports
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Configured in tsconfig.json:
"paths": {
  "@/*": ["./*"]
}
```

### Styling Conventions

#### Tailwind CSS Pattern
```tsx
// Utility-first approach
<div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-purple-200/50">

// Use cn() utility to merge classes conditionally
import { cn } from "@/lib/utils"
<div className={cn(
  "base-classes",
  condition && "conditional-classes"
)}>
```

#### Color System
```css
/* Gradient theme: Pink → Purple → Blue */
Primary: from-pink-500 to-purple-600
Accent: rose-500, purple-400, blue-400
Background: pink-50, purple-50, indigo-50

/* CSS Variables for light/dark mode */
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: 222.2 47.4% 11.2%;
/* See app/globals.css for full palette */
```

#### Typography
```tsx
// Heading: Great Vibes, Dancing Script (handwriting fonts)
<h1 className="font-['Great_Vibes'] text-7xl md:text-9xl">

// Body: Inter (default sans-serif)
<p className="text-lg md:text-xl">
```

### Component Patterns

#### Client Components (Required for Interactivity)
```tsx
"use client"

import { useState } from 'react'

export default function InteractiveComponent() {
  // All pages with state/events need "use client"
}
```

#### Server Components (Default in App Router)
```tsx
// No "use client" directive needed
export default function StaticPage() {
  return <div>Server-rendered content</div>
}
```

#### 3D Canvas Components
```tsx
import { Canvas } from '@react-three/fiber'

<Canvas camera={{ position: [0, 0, 5] }}>
  <ambientLight intensity={0.5} />
  <pointLight position={[10, 10, 10]} />
  <CustomMesh />
</Canvas>
```

### Animation Patterns

#### Framer Motion
```tsx
import { motion } from 'framer-motion'

// Page transitions
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

// Hover effects
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

#### CSS Keyframe Animations
```tsx
<style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  .float-element {
    animation: float 8s ease-in-out infinite;
  }
`}</style>
```

### State Management

- **No global state library** (Redux, Zustand, etc.)
- **React Context**: Used for theme provider only
- **useState**: Local component state
- **React Hook Form**: Form state management
- **URL state**: Used for routing (Next.js router)

### API Integration

#### External Services
```typescript
// Payment links (no API keys needed)
const wiseLink = "https://wise.com/pay/me/@alexisl628"
const cashAppLink = "$CoccoOrseta"

// Email integration (mailto: protocol)
const mailtoLink = `mailto:lexxielyn@gmail.com?subject=${subject}&body=${body}`
window.location.href = mailtoLink
```

#### No Backend APIs
- No database connections
- No authentication system (except password-protected pages)
- Static asset serving only
- Client-side form handling

---

## Common Tasks

### Adding a New Page (Next.js App Router)

```bash
# Create new route directory
cd sendlove-app/app
mkdir newpage

# Create page file
touch newpage/page.tsx
```

```tsx
// app/newpage/page.tsx
"use client"

export default function NewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <h1 className="text-5xl font-bold">New Page</h1>
    </div>
  )
}
```

Access at: `http://localhost:3000/newpage`

### Adding a New Component

```bash
# For UI components (use existing as templates)
cd sendlove-app/components/ui
touch new-component.tsx
```

```tsx
// components/ui/new-component.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export interface NewComponentProps {
  className?: string
}

const NewComponent = React.forwardRef<
  HTMLDivElement,
  NewComponentProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("base-styles", className)}
    {...props}
  />
))
NewComponent.displayName = "NewComponent"

export { NewComponent }
```

### Modifying 3D Effects

```tsx
// Find LoveGlyph or similar 3D component
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

function CustomGlyph() {
  const meshRef = useRef()

  // Animation loop
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}
```

### Changing Color Schemes

#### Option 1: Tailwind Config
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        'custom-pink': '#ff69b4',
        'custom-purple': '#9370db',
      }
    }
  }
}
```

#### Option 2: CSS Variables
```css
/* app/globals.css */
:root {
  --custom-color: 280 80% 60%;
}

.dark {
  --custom-color: 280 60% 80%;
}
```

### Adding UI Components (Shadcn)

The project uses Shadcn/ui components. To add new ones:

```bash
# Components are already installed in /components/ui/
# Reference existing components as templates
ls sendlove-app/components/ui/

# Available components:
# button, input, textarea, select, checkbox, radio-group,
# dialog, popover, tooltip, sheet, drawer, tabs, accordion,
# card, avatar, badge, progress, slider, table, etc.
```

### Working with Forms

```tsx
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
})

export default function FormExample() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Input {...form.register("name")} />
      <Input {...form.register("email")} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
```

### Dark Mode Toggle

```tsx
"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Toggle Theme
    </Button>
  )
}
```

### Toast Notifications

```tsx
"use client"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"

export function ToastExample() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Success!",
          description: "Your message was sent.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
```

---

## Git Workflow

### Branch Strategy

**IMPORTANT**: All development must happen on branches with specific naming:

```bash
# Branch format: claude/description-sessionID
# Example: claude/claude-md-midqdz55o5git2ha-01DsWPzDLDiVhsQoDyWvGgQG

# Current working branch (from git status)
claude/claude-md-midqdz55o5git2ha-01DsWPzDLDiVhsQoDyWvGgQG
```

### Creating a New Branch

```bash
# Create and switch to new branch
git checkout -b claude/your-feature-sessionID

# Push to remote with tracking
git push -u origin claude/your-feature-sessionID
```

### Commit Workflow

```bash
# Check status first
git status

# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Add comprehensive CLAUDE.md documentation

- Document codebase structure
- Add development workflows
- Include key conventions and patterns
- Provide quick reference for AI assistants"

# Push to remote branch
git push -u origin claude/your-feature-sessionID
```

### Commit Message Conventions

- **Format**: Imperative mood ("Add feature" not "Added feature")
- **First line**: Brief summary (50-72 characters)
- **Body**: Detailed explanation if needed (wrap at 72 characters)
- **Types**: Add, Update, Fix, Remove, Refactor, Docs

Examples:
```
Add dark mode toggle to navigation

Update sendlove payment integration with new Wise link

Fix constellation rendering issue in /garden page

Remove unused dependencies from package.json

Docs: Create comprehensive CLAUDE.md guide
```

### Push Retry Strategy

```bash
# If push fails due to network, retry with exponential backoff
# 1st attempt: immediate
# 2nd attempt: wait 2s
# 3rd attempt: wait 4s
# 4th attempt: wait 8s
# 5th attempt: wait 16s

# Use this command:
git push -u origin <branch-name>
```

### Pull Request Workflow

```bash
# Create PR from current branch to main
# (GitHub web interface or gh CLI if available)

# PR Template:
# Title: Brief description of changes
# Description:
## Summary
- Bullet point changes
- Key modifications
- New features added

## Test Plan
- [ ] Tested locally on dev server
- [ ] Verified build completes successfully
- [ ] Checked responsiveness on mobile
- [ ] Verified dark mode works correctly
```

---

## Deployment

### Vercel (Primary Platform)

**Configuration**: `sendlove-app/vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

**Deployment Process**:
1. Push to `main` branch triggers automatic deployment
2. Vercel runs `npm run build`
3. Deploy `.next` directory to CDN
4. All routes fallback to `/` for SPA-style routing

**Environment Variables** (if needed):
- Set in Vercel dashboard under Project Settings > Environment Variables
- Not currently required for sendlove-app

### Manual Build

```bash
# Build locally to test
cd sendlove-app
npm run build

# Check for errors
# Next.js will create .next/ directory

# Test production build
npm start

# Open http://localhost:3000 to verify
```

### Build Configuration

```javascript
// next.config.mjs
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // Skip ESLint errors
  },
  typescript: {
    ignoreBuildErrors: true,    // Skip TypeScript errors
  },
  images: {
    unoptimized: true,         // Disable image optimization
  },
}
```

**Note**: Build errors are intentionally ignored for experimental features. Fix critical errors but don't block on warnings.

### Static Asset Hosting

- **Images**: Stored in `/public/` directory
- **Access**: Use `/imagename.png` in `<img src>` or Next.js `<Image>`
- **Optimization**: Disabled (`unoptimized: true`) for simplicity

---

## Project-Specific Notes

### Send Love App (Main Production App)

**Entry Point**: `/app/page.tsx`

**Key Features**:
1. **Landing Page** (`/`): Animated portal icon (Great Vibes font, floating animation)
2. **Love Transmission** (`/love`): Send love via money, message, or gift
3. **Constellation** (`/garden`): Password-protected gallery of transmissions

**3D Graphics**:
- Uses `@react-three/fiber` for WebGL rendering
- `LoveGlyph` component generates unique procedural heart shapes
- `FloatingElements` creates ambient particle effects

**Payment Integration**:
```typescript
// In /app/love/page.tsx
const paymentMethods = {
  wise: "https://wise.com/pay/me/@alexisl628",
  cashApp: "$CoccoOrseta",
  applePay: "$CoccoOrseta"
}
```

**Email Integration**:
```typescript
const mailtoLink = `mailto:lexxielyn@gmail.com?subject=Love Message&body=${message}`
```

**Styling**:
- Glassmorphism: `bg-white/70 backdrop-blur-xl`
- Gradients: `from-pink-500 via-purple-600 to-blue-500`
- Responsive: Mobile-first with `md:` breakpoints

### My App (Blog & PDF Upload)

**Entry Point**: `/pages/index.js`

**Key Features**:
1. **Blog System**: Markdown posts in `/posts/` directory
2. **PDF Upload**: Password-protected upload interface
3. **Gray Matter**: YAML front matter parsing

**Markdown Processing**:
```javascript
// lib/posts.js
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getPostData(id) {
  const fileContents = fs.readFileSync(path, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  return { ...matterResult.data, contentHtml: processedContent.toString() }
}
```

**Password Protection**:
```javascript
// pages/api/unlock.js
export default function handler(req, res) {
  const { password } = req.body
  if (password === process.env.GLYPHGATE_SECRET) {
    res.status(200).json({ success: true })
  } else {
    res.status(401).json({ success: false })
  }
}
```

### Butterfly Chat (Vite + React)

**Entry Point**: `/src/ButterflyChat.tsx`

**Key Features**:
1. **Message Bubbles**: Left/right alignment for conversation
2. **Framer Motion**: Smooth message animations
3. **Lucide Icons**: Send button, user avatars

**Component Structure**:
```tsx
interface Message {
  id: number
  text: string
  sender: 'user' | 'butterfly'
}

const [messages, setMessages] = useState<Message[]>([])

// Render messages with motion.div
{messages.map(msg => (
  <motion.div
    key={msg.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    {msg.text}
  </motion.div>
))}
```

**Vite Benefits**:
- Lightning-fast dev server startup
- Instant HMR (Hot Module Replacement)
- Optimized production builds with Rollup

---

## Quick Reference

### File Locations Cheat Sheet

| Need to... | File Location |
|------------|---------------|
| Modify landing page | `/sendlove-app/app/page.tsx` |
| Change love transmission UI | `/sendlove-app/app/love/page.tsx` |
| Update constellation gallery | `/sendlove-app/app/garden/page.tsx` |
| Edit global styles | `/sendlove-app/app/globals.css` |
| Add UI component | `/sendlove-app/components/ui/` |
| Modify theme colors | `/sendlove-app/tailwind.config.ts` |
| Update Tailwind config | `/sendlove-app/tailwind.config.ts` |
| Configure Next.js | `/sendlove-app/next.config.mjs` |
| TypeScript settings | `/sendlove-app/tsconfig.json` |
| Add static image | `/sendlove-app/public/` |

### Command Cheat Sheet

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Run linter

# Git
git status           # Check current state
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push -u origin branch-name  # Push to remote

# Navigation
cd sendlove-app      # Enter main app
cd my-app            # Enter blog app
cd Butterflies🦋     # Enter chat app
cd ..                # Go up one level
```

### Common Code Snippets

#### Import Button Component
```tsx
import { Button } from "@/components/ui/button"
```

#### Create Client Component with State
```tsx
"use client"

import { useState } from 'react'

export default function MyComponent() {
  const [state, setState] = useState(initialValue)
  return <div>Content</div>
}
```

#### Add Tailwind Gradient Background
```tsx
<div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
```

#### Create Floating Animation
```tsx
<motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
>
```

#### Add Glass Effect
```tsx
<div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-purple-200/50">
```

### Package.json Scripts

| Script | Next.js Projects | Vite Projects |
|--------|-----------------|---------------|
| `dev` | Dev server :3000 | Dev server :5173 |
| `build` | Next.js build | Vite build |
| `start` | Production server | N/A |
| `lint` | ESLint check | N/A |
| `preview` | N/A | Preview build |

### Troubleshooting

#### "Module not found" error
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript errors blocking dev server
```javascript
// Already configured in next.config.mjs
typescript: { ignoreBuildErrors: true }
```

#### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

#### Build fails on Vercel
- Check `next.config.mjs` settings
- Verify all imports use `@/` alias
- Ensure `package.json` has correct scripts

---

## Design Philosophy & Aesthetic Guidelines

### Visual Language

**Theme**: Emotional resonance through symbolic glyphs and gradients

**Color Psychology**:
- **Pink** (#ec4899): Love, warmth, connection
- **Purple** (#9333ea): Mysticism, creativity, spirituality
- **Blue** (#3b82f6): Trust, calm, depth
- **Rose** (#f43f5e): Passion, intensity, vulnerability

**Typography Hierarchy**:
```
Hero (h1):      font-['Great_Vibes'] text-7xl md:text-9xl
Section (h2):   font-['Dancing_Script'] text-3xl md:text-4xl
Body:           font-sans text-lg md:text-xl leading-relaxed
Caption:        text-sm text-muted-foreground
```

### Interaction Patterns

**Hover States**: Scale + glow
```tsx
className="transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
```

**Click Feedback**: Scale down + ripple
```tsx
whileTap={{ scale: 0.95 }}
```

**Loading States**: Pulse + spin
```tsx
className="animate-pulse" // or animate-spin
```

**Page Transitions**: Fade + slide up
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
```

### Accessibility Considerations

- Use semantic HTML (`<button>`, `<nav>`, `<article>`)
- Include `alt` text for images
- Ensure color contrast meets WCAG AA standards
- Support keyboard navigation (focus states)
- Use Radix UI for accessible primitives

---

## Key Architectural Decisions

### Why Next.js 15 App Router?

- **Server Components**: Faster initial page loads
- **React 19**: Latest features (use hook, etc.)
- **File-based routing**: Intuitive page organization
- **Built-in optimizations**: Image optimization, font loading, etc.
- **Vercel integration**: Seamless deployment

### Why Tailwind CSS?

- **Utility-first**: Rapid prototyping without leaving JSX
- **Responsive design**: Mobile-first breakpoints (`md:`, `lg:`)
- **Dark mode**: Built-in theming support
- **Customization**: Easy to extend with custom colors/animations
- **Performance**: Purges unused CSS in production

### Why Radix UI?

- **Accessibility**: WCAG compliant out of the box
- **Unstyled**: Full control over appearance with Tailwind
- **Composable**: Build complex components from primitives
- **TypeScript**: Excellent type safety
- **No JavaScript for static elements**: Better performance

### Why Three.js?

- **WebGL rendering**: High-performance 3D graphics
- **React Three Fiber**: Declarative 3D in React
- **Procedural generation**: Unique glyphs for each transmission
- **Cross-platform**: Works in all modern browsers

### Why No Backend?

- **Simplicity**: Static hosting, no server maintenance
- **Cost**: Free hosting on Vercel
- **Speed**: CDN distribution, instant page loads
- **Portfolio context**: Showcase frontend skills
- **Future**: Can add serverless functions if needed

---

## Contributing Guidelines for AI Assistants

### Before Making Changes

1. **Read the relevant files first** - Use Read tool before Edit
2. **Understand the context** - Check surrounding code and dependencies
3. **Follow existing patterns** - Match the style and structure already present
4. **Test locally** - Run `npm run dev` to verify changes work

### When Adding Features

1. **Keep it simple** - Don't over-engineer solutions
2. **Use existing components** - Leverage Radix UI components in `/components/ui/`
3. **Match the aesthetic** - Follow color scheme and typography guidelines
4. **Add client directive** - Use `"use client"` for interactive components
5. **Responsive design** - Test on mobile with `md:` breakpoints

### When Fixing Bugs

1. **Identify root cause** - Don't just treat symptoms
2. **Minimal changes** - Only modify what's necessary
3. **Test thoroughly** - Verify fix doesn't break other features
4. **Document if complex** - Add inline comments for non-obvious fixes

### When Refactoring

1. **Get permission first** - Don't refactor unless asked
2. **Incremental changes** - Small, focused refactors
3. **Maintain functionality** - Preserve existing behavior
4. **Test regressions** - Ensure nothing breaks

### Code Quality Standards

- **No console.logs in production** - Remove debug statements
- **Handle errors gracefully** - Use try/catch for async operations
- **Validate user input** - Use Zod schemas for forms
- **Optimize images** - Compress before adding to `/public/`
- **Comment complex logic** - Explain "why" not "what"

### Git Commit Standards

```bash
# Good commits
git commit -m "Add contact form to /love page"
git commit -m "Fix constellation rendering on Safari"
git commit -m "Update payment links to new Wise URL"

# Bad commits (avoid these)
git commit -m "fixed stuff"
git commit -m "WIP"
git commit -m "asdfasdf"
```

---

## Future Enhancements & Roadmap

### Potential Features

- [ ] **Database integration**: Store transmissions in PostgreSQL/Supabase
- [ ] **Authentication**: User accounts and login system
- [ ] **AI chat integration**: Connect Butterfly Chat to OpenAI/Anthropic API
- [ ] **Real-time updates**: WebSocket connections for live constellation
- [ ] **Mobile app**: React Native version using existing components
- [ ] **Analytics**: Track transmission metrics and engagement
- [ ] **Glyph customization**: Let users design their own love glyphs
- [ ] **Social sharing**: Share constellations on social media
- [ ] **Payment processing**: Direct integration with Stripe/PayPal
- [ ] **Notification system**: Email/push notifications for transmissions

### Technical Debt

- [ ] Add proper TypeScript types (currently using `any` in places)
- [ ] Enable strict mode in tsconfig.json
- [ ] Add unit tests with Jest + React Testing Library
- [ ] Add E2E tests with Playwright
- [ ] Implement error boundaries for graceful failures
- [ ] Add loading states for async operations
- [ ] Optimize Three.js performance (LOD, instancing)
- [ ] Add proper SEO metadata (Open Graph, Twitter Cards)
- [ ] Implement CSP (Content Security Policy) headers
- [ ] Add rate limiting for API routes

### Documentation Improvements

- [ ] Add JSDoc comments to complex functions
- [ ] Create component documentation with Storybook
- [ ] Add API documentation if backend is added
- [ ] Create video walkthrough of codebase
- [ ] Add architecture diagrams (component hierarchy, data flow)

---

## Resources & References

### Official Documentation

- [Next.js 15 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Docs](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Three.js Docs](https://threejs.org/docs/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)
- [Shadcn/ui Docs](https://ui.shadcn.com/)

### Learning Resources

- [Next.js App Router Tutorial](https://nextjs.org/learn)
- [Tailwind CSS Course](https://tailwindcss.com/course)
- [Three.js Journey](https://threejs-journey.com/)
- [Framer Motion Recipes](https://www.framer.com/motion/examples/)

### Tools & Utilities

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (VSCode)
- [ES7+ React/Redux Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)
- [Vercel CLI](https://vercel.com/docs/cli) for local testing

### Design Resources

- [Coolors.co](https://coolors.co/) - Color palette generator
- [Google Fonts](https://fonts.google.com/) - Typography
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Radix Colors](https://www.radix-ui.com/colors) - Color system

---

## Contact & Support

**Repository Owner**: Alexis Lindsay
**Email**: lexxielyn@gmail.com
**Portfolio**: See `/README.md` for links

**For AI Assistants**:
- If you encounter errors, check this guide first
- For ambiguous requirements, ask clarifying questions
- For major architectural changes, discuss with user before implementing
- Document any non-obvious decisions in code comments

---

## Appendix: Package.json Summary

### sendlove-app Dependencies

```json
{
  "name": "send-love-app",
  "version": "0.1.0",
  "dependencies": {
    "next": "15.2.4",
    "react": "^19",
    "react-dom": "^19",
    "@radix-ui/*": "^1.0-2.0",
    "three": "latest",
    "@react-three/fiber": "latest",
    "framer-motion": "^11.0.0",
    "tailwindcss": "^3.4.17",
    "react-hook-form": "^7.54.1",
    "zod": "^3.24.1",
    "lucide-react": "^0.454.0",
    "next-themes": "^0.4.4",
    "date-fns": "4.1.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.5"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/react": "^19",
    "@types/node": "^22",
    "postcss": "^8",
    "autoprefixer": "^10"
  }
}
```

### my-app Dependencies

```json
{
  "name": "glyphgate",
  "version": "0.1.0",
  "dependencies": {
    "next": "13.5.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "gray-matter": "^4.0.3",
    "remark": "^14.0.2",
    "remark-html": "^15.0.1",
    "framer-motion": "^11.0.0"
  }
}
```

### Butterflies🦋 Dependencies

```json
{
  "name": "butterflies",
  "version": "0.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.1",
    "lucide-react": "latest"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^5.0.0",
    "typescript": "^5.0.2"
  }
}
```

---

**End of CLAUDE.md**

*Last updated: 2025-11-24*
*Repository: openai-residency-2025*
*Version: 1.0.0*
