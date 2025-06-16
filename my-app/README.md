# GlyphGate Next.js App

This directory contains a minimal Next.js application used to host the `SecurePDFUploadApp` component. The application exposes a serverless API route for verifying a secret passphrase before allowing uploads.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env.local` file in this directory with the following variable:

```
GLYPHGATE_SECRET=your-password-here
```

This file should not be committed to source control.

## Deployment

Deploy to Vercel and configure the `GLYPHGATE_SECRET` environment variable in the dashboard.
