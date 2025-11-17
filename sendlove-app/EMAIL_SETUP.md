# Email Setup for Send Love App

Your send love form is ready! Now you just need to wire it to send emails to **lexxielyn@gmail.com**

## Option 1: Formspree (Recommended - Easiest!)

**FREE • No coding required • 50 submissions/month**

1. Go to https://formspree.io/
2. Sign up with your email (or GitHub)
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/xyzabc123`)
5. Edit `sendlove-app/app/api/send-love/route.ts`
6. Uncomment the Formspree section (lines ~21-32)
7. Replace `YOUR_FORM_ID` with your form ID (the `xyzabc123` part)

That's it! You'll get emails at the address you signed up with.

## Option 2: Resend (Professional)

**FREE • 3,000 emails/month • More control**

1. Go to https://resend.com/
2. Sign up and verify your email
3. Get your API key from the dashboard
4. Install Resend: `npm install resend`
5. Create `.env.local` file:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
6. Edit `sendlove-app/app/api/send-love/route.ts`
7. Uncomment the Resend section (lines ~34-51)
8. Update the email addresses as needed

## Option 3: Web3Forms (No Backend!)

**FREE • Super simple • No signup needed for testing**

1. Go to https://web3forms.com/
2. Enter your email (lexxielyn@gmail.com)
3. Get your access key
4. Add this to your `.env.local`:
   ```
   WEB3FORMS_KEY=your-access-key-here
   ```
5. I can update the code to use Web3Forms if you want!

## Testing

Right now, the form will:
- ✅ Collect all data (name, email, amount, message, booking)
- ✅ Log to console (check your terminal)
- ✅ Show success message to user
- ⏳ Send emails (once you set up one of the above)

## Recommended: Formspree

Formspree is the easiest and requires zero coding. Just sign up, get your form ID, and paste it in the code!
