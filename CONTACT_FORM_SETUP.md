# Contact Form Setup Guide

## What I've Created

I've set up a professional contact form system for both `sendlove-app` and `glyph-gate-love sender add contact me` using:

- **Vercel Serverless Functions** (API routes)
- **Resend** (email delivery service)
- Beautiful contact page matching your aesthetic

## What's Been Done

### 1. Created Contact Pages
- ✅ `/app/contact/page.tsx` in both apps
- ✅ Form collects: Name, Email, Message
- ✅ Beautiful UI matching your pink/purple gradient theme
- ✅ Success/error states with animations

### 2. Created API Routes
- ✅ `/app/api/contact/route.ts` in both apps
- ✅ Form validation
- ✅ Email sending via Resend
- ✅ Beautiful HTML email template

### 3. Updated Landing Page
- ✅ Made "contact me" text clickable in sendlove-app
- ✅ Opens in new tab
- ✅ Added hover effects

### 4. Added Dependencies
- ✅ Added `resend` package to both package.json files

## Setup Steps Required

### Step 1: Install Dependencies

Run this in **both** project directories:

```bash
# In sendlove-app
cd sendlove-app
npm install

# In glyph-gate-love sender add contact me
cd "glyph-gate-love sender add contact me"
npm install
```

### Step 2: Get Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free forever)
3. Click "API Keys" in the left sidebar
4. Click "Create API Key"
5. Name it "Glyph Gate Contact Form"
6. Copy the API key (starts with `re_`)

### Step 3: Add Environment Variables

#### For Local Development:

Create `.env.local` file in **both** project directories:

```bash
# In sendlove-app/.env.local
RESEND_API_KEY=re_your_api_key_here
```

```bash
# In glyph-gate-love sender add contact me/.env.local
RESEND_API_KEY=re_your_api_key_here
```

#### For Vercel Deployment:

1. Go to your Vercel dashboard
2. Select your project
3. Go to "Settings" → "Environment Variables"
4. Add a new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_your_api_key_here`
   - **Environment**: Production, Preview, Development (select all)
5. Click "Save"
6. Redeploy your app

### Step 4: Verify Your Domain (Optional but Recommended)

By default, Resend sends emails from `onboarding@resend.dev`. To use your own domain:

1. In Resend dashboard, click "Domains"
2. Click "Add Domain"
3. Enter your domain (e.g., `glyphgate.com`)
4. Add the DNS records Resend provides
5. Wait for verification (usually a few minutes)
6. Update the API route to use your domain:

```typescript
// In app/api/contact/route.ts, change line:
from: "Contact Form <onboarding@resend.dev>",
// to:
from: "Contact Form <contact@yourdomain.com>",
```

### Step 5: Test It!

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Go to `http://localhost:3000`

3. Click "contact me" under the LOVE heading

4. Fill out the form and submit

5. Check your email at lexxielyn@gmail.com

## What Happens When Someone Submits?

1. **User fills out form** → Name, Email, Message
2. **Form validates** → Checks all fields are filled
3. **API route receives data** → Validates email format
4. **Resend sends email** → Beautiful HTML email to lexxielyn@gmail.com
5. **User sees success message** → "Message Sent! ✨"

## Email You'll Receive

You'll get a nicely formatted email with:
- **Subject**: "New Contact Message from [Name]"
- **Reply-To**: Set to the user's email (so you can reply directly)
- **Content**: Name, Email, and Message in a beautiful HTML template

## Building a Mailing List

The contact form currently sends emails but doesn't store data. Here are options to build your mailing list:

### Option 1: Manual Export (Current Setup)
- Check your email inbox
- Manually add emails to a spreadsheet/mailing list service

### Option 2: Add Database Storage (Future Enhancement)
You could add:
- **Supabase** (free PostgreSQL database)
- **Airtable** (spreadsheet-style database)
- **Google Sheets** (via Google Sheets API)

Would you like me to implement one of these?

### Option 3: Integrate Mailing List Service
You could integrate directly with:
- **Mailchimp**
- **ConvertKit**
- **Buttondown**
- **Resend Audiences** (built into Resend)

## Resend Audiences Feature

Resend has a built-in audience management feature:

1. Go to Resend dashboard → "Audiences"
2. Create an audience (e.g., "Contact Form Subscribers")
3. Get the audience ID
4. Add to API route:

```typescript
// Add this after sending email
await resend.contacts.create({
  email: email,
  firstName: name.split(' ')[0],
  audienceId: 'your_audience_id_here',
})
```

This automatically builds your mailing list in Resend!

## Troubleshooting

### Error: "Email service is not configured properly"
- Check that `RESEND_API_KEY` is set in `.env.local`
- Restart your dev server after adding the variable

### Error: "Failed to send message"
- Check your Resend API key is valid
- Check you haven't exceeded the free tier limit (100 emails/day)
- Check the API route logs in your terminal

### Email not arriving
- Check spam folder
- Verify the email address in the API route is correct
- Check Resend dashboard for delivery status

## File Locations

### Sendlove App
- Contact Page: `sendlove-app/app/contact/page.tsx`
- API Route: `sendlove-app/app/api/contact/route.ts`
- Landing Page: `sendlove-app/app/page.tsx` (line 50-54)

### Glyph Gate App
- Contact Page: `glyph-gate-love sender add contact me/app/contact/page.tsx`
- API Route: `glyph-gate-love sender add contact me/app/api/contact/route.ts`

## Next Steps

1. ✅ Install dependencies (`npm install`)
2. ✅ Get Resend API key
3. ✅ Add to `.env.local`
4. ✅ Test locally
5. ✅ Add to Vercel environment variables
6. ✅ Deploy

## Optional Enhancements

Want me to add any of these?

- 📊 **Analytics** - Track form submissions
- 💾 **Database** - Store submissions in Supabase
- 📧 **Mailing List** - Auto-add to Mailchimp/ConvertKit
- 🤖 **Auto-Reply** - Send confirmation email to user
- 🛡️ **Spam Protection** - Add reCAPTCHA
- 📱 **Notifications** - Send you a text when someone submits

Let me know if you need help with any of this!

---

**Created**: 2026-01-13
**Last Updated**: 2026-01-13
