# Deployment Guide - No Terminal Needed!

## 🚀 Deploy Your Confession Terminal to Vercel

### What You Need:
1. A Vercel account (free - sign up at vercel.com)
2. Your OpenAI API key (from platform.openai.com)
3. Your GitHub repo (already done! ✅)

---

## 📋 Step-by-Step Instructions

### 1. Go to Vercel
- Open https://vercel.com in your browser
- Click "Sign Up" or "Log In"
- Choose "Continue with GitHub"
- Authorize Vercel to access your repos

### 2. Create New Project
- Click the big "Add New..." button (top right)
- Select "Project" from the dropdown
- You'll see a list of your GitHub repos

### 3. Import Your Repo
- Find `openai-residency-2025` in the list
- Click "Import" next to it

### 4. Configure Build Settings
Vercel will try to auto-detect, but you need to override:

**Framework Preset:** Vite
**Root Directory:** Click "Edit" button, type `confession-terminal`, click "Continue"

**Build & Development Settings:**
- Build Command: `npm run build` (should auto-fill)
- Output Directory: `dist` (should auto-fill)
- Install Command: `npm install` (should auto-fill)

### 5. Add Your API Key (IMPORTANT!)
Before deploying, scroll down to "Environment Variables":

Click "Add Variable":
- **Key:** `VITE_OPENAI_API_KEY`
- **Value:** Paste your OpenAI API key (starts with `sk-...`)
- Leave "Environment" as "Production" (selected by default)
- Click "Add"

⚠️ **Don't skip this!** Without the API key, voice confessions won't work.

### 6. Deploy!
- Click the big blue "Deploy" button
- Wait 1-2 minutes while Vercel builds your app
- You'll see a confetti animation when it's done! 🎉

### 7. Get Your Live URL
- After deployment, you'll see your live URL
- It will look like: `https://confession-terminal-xxx.vercel.app`
- Click "Visit" to see your app live!
- Share this URL with anyone - it's public!

---

## 🔄 Auto-Deploy Future Changes

Good news! Vercel is now watching your GitHub repo.

**Every time you push to the branch:**
- Vercel automatically rebuilds
- Your site updates within 1-2 minutes
- No need to manually redeploy!

You can see deployment status at https://vercel.com/dashboard

---

## 🎤 Testing Voice After Deploy

1. Visit your live URL
2. Press ENTER on welcome screen
3. Choose Father Digital (or any confessor)
4. Click 🎤 Voice button
5. Allow microphone access when browser asks
6. Speak your confession
7. Wait for transcription
8. Get absolved!

---

## 🐛 Troubleshooting

### "OpenAI API key not found" error on deployed site
- Go to Vercel dashboard
- Click your project
- Go to "Settings" tab
- Click "Environment Variables"
- Make sure `VITE_OPENAI_API_KEY` is there
- If not, add it and redeploy

### Build failed
- Check the build logs in Vercel dashboard
- Most common issue: missing dependencies
- Solution: Vercel will usually fix this automatically

### Voice button not working
- Make sure you're using HTTPS (Vercel does this automatically)
- Microphone only works on secure connections
- Check browser permissions (click lock icon in address bar)

---

## 📊 Monitor Your Deployment

**Vercel Dashboard:** https://vercel.com/dashboard

You can see:
- Live site URL
- Recent deployments
- Build logs
- Analytics (visitors, page views)
- Environment variables

---

## 💰 Cost

**Vercel:** FREE for personal projects
- Unlimited deployments
- Automatic SSL/HTTPS
- Global CDN
- No credit card required

**OpenAI Whisper API:**
- $0.006 per minute of audio
- You only pay for actual voice confessions
- Example: 100 visitors × 1 min each = $0.60

---

## 🎯 Alternative: One-Click Deploy

If the above feels like too much, I can create a "Deploy to Vercel" button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/alexislindsay/openai-residency-2025&root-directory=confession-terminal&env=VITE_OPENAI_API_KEY&envDescription=Your%20OpenAI%20API%20key%20from%20platform.openai.com)

Just click → Sign in → Paste API key → Deploy!

---

## 📝 After Deployment Checklist

- [ ] Site is live at your Vercel URL
- [ ] Welcome screen loads
- [ ] Can choose faith representative
- [ ] Text input works
- [ ] Voice button appears
- [ ] Microphone permission prompt works
- [ ] Voice transcription works with your API key
- [ ] Book export works
- [ ] Share URL with friends!

---

## 🆘 Need Help?

If anything goes wrong:
1. Check Vercel build logs (very detailed error messages)
2. Make sure API key is added to environment variables
3. Try redeploying (click "Redeploy" in Vercel dashboard)

The deployment should take less than 5 minutes total! 🚀
