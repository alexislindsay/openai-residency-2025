# Deployment Guide

This repository contains multiple web applications that need to be deployed separately.

## Main Portfolio Site (www.alexislindsay.com)

**Location:** `Gliph_E_Gate/index.html`

**Type:** Static HTML site

**Deployment:**
- Already configured via root `vercel.json`
- The main Vercel project for this repo will deploy the Gliph_E_Gate static site
- Domain: www.alexislindsay.com (or alexislindsay.com)

## SendLove App (sendlove.alexislindsay.com)

**Location:** `sendlove-app/`

**Type:** Next.js application

**Deployment Steps:**

### 1. Create a New Vercel Project
- Go to https://vercel.com/new
- Import this same repository: `alexislindsay/openai-residency-2025`
- Give it a different name (e.g., "sendlove-app")

### 2. Configure Root Directory
In the Vercel project settings:
- Go to **Settings** → **General**
- Set **Root Directory** to: `sendlove-app`
- Save the changes

### 3. Set Up Custom Domain
In the Vercel project settings:
- Go to **Settings** → **Domains**
- Add domain: `sendlove.alexislindsay.com`
- Vercel will provide DNS records (usually a CNAME)

### 4. Configure DNS in Namecheap
- Log into Namecheap
- Go to your domain management for `alexislindsay.com`
- Add a CNAME record:
  - **Host:** `sendlove`
  - **Value:** The CNAME value Vercel provided (usually `cname.vercel-dns.com`)
  - **TTL:** Automatic or 300

### 5. Wait for DNS Propagation
- DNS changes can take 5-60 minutes to propagate
- Vercel will automatically verify and enable HTTPS once DNS is configured

## Other Apps in This Repo

- `my-app/` - GlyphGate blog app
- `glyph-gate-love sender add contact me/` - Another Next.js app
- `Butterflies🦋/` - Vite app

These can be deployed similarly as separate Vercel projects if needed.
