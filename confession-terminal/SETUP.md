# Setup Instructions for Voice Confession

## 1. Get Your OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the API key (starts with `sk-...`)

**Important:** Keep this key secret! Never commit it to git.

## 2. Add API Key to Environment

Create a `.env` file in the `confession-terminal/` directory:

```bash
cd confession-terminal
cp .env.example .env
```

Then edit `.env` and add your key:

```bash
VITE_OPENAI_API_KEY=sk-your-actual-key-here
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start the App

```bash
npm run dev
```

Open http://localhost:5173

## 5. Test Voice Confession

1. Press ENTER on welcome screen
2. Choose a faith representative
3. Click the "🎤 Voice" button
4. Allow microphone access when prompted
5. Click "Speak Your Confession" button
6. Speak into your microphone
7. Click "Stop Recording"
8. Wait for transcription (usually 2-5 seconds)
9. Your confession will appear and be processed!

## Troubleshooting

### "OpenAI API key not found" error
- Make sure you created a `.env` file (not `.env.example`)
- Make sure your API key starts with `sk-`
- Restart the dev server after adding the key

### Microphone not working
- Check browser permissions (click lock icon in address bar)
- Make sure no other app is using your microphone
- Try refreshing the page

### "Transcription failed" error
- Check that your API key is valid
- Make sure you have credits in your OpenAI account
- Check the browser console for detailed error messages

## Pricing

OpenAI Whisper API costs:
- $0.006 per minute of audio
- Most confessions are under 1 minute
- Example: 100 confessions = ~$0.60

## Privacy Note

- Audio is sent to OpenAI's servers for transcription
- OpenAI does not store the audio after transcription
- Your confessions are still stored locally only (in browser localStorage)
- The API key is used client-side (browser), which is fine for personal projects
  - For production apps, you'd want to proxy through your own backend
