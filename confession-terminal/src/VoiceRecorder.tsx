import { useState, useRef } from 'react'
import { Mic, MicOff, Square } from 'lucide-react'
import { motion } from 'framer-motion'

interface VoiceRecorderProps {
  onTranscription: (text: string) => void
  disabled?: boolean
}

export default function VoiceRecorder({ onTranscription, disabled }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  const startRecording = async () => {
    try {
      setError(null)
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm'
      })

      mediaRecorderRef.current = mediaRecorder
      chunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' })
        await transcribeAudio(audioBlob)

        // Stop all tracks
        stream.getTracks().forEach(track => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (err) {
      console.error('Error accessing microphone:', err)
      setError('Could not access microphone. Please check permissions.')
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const transcribeAudio = async (audioBlob: Blob) => {
    setIsProcessing(true)
    setError(null)

    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY

      if (!apiKey) {
        throw new Error('OpenAI API key not found. Please add VITE_OPENAI_API_KEY to your .env file.')
      }

      // Convert webm to a format Whisper accepts (mp3, mp4, mpeg, mpga, m4a, wav, or webm)
      const formData = new FormData()
      formData.append('file', audioBlob, 'confession.webm')
      formData.append('model', 'whisper-1')
      formData.append('language', 'en') // Optional: specify language

      const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`
        },
        body: formData
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error?.message || 'Transcription failed')
      }

      const data = await response.json()

      if (data.text) {
        onTranscription(data.text)
      } else {
        throw new Error('No transcription returned')
      }
    } catch (err) {
      console.error('Transcription error:', err)
      setError(err instanceof Error ? err.message : 'Failed to transcribe audio')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      {!isRecording ? (
        <motion.button
          onClick={startRecording}
          disabled={disabled || isProcessing}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'transparent',
            border: '2px solid #00ff00',
            color: '#00ff00',
            cursor: disabled || isProcessing ? 'not-allowed' : 'pointer',
            opacity: disabled || isProcessing ? 0.5 : 1,
            transition: 'all 0.3s'
          }}
        >
          <Mic size={20} />
          {isProcessing ? 'Processing...' : 'Speak Your Confession'}
        </motion.button>
      ) : (
        <motion.button
          onClick={stopRecording}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: '#ff4444',
            border: '2px solid #ff4444',
            color: '#000',
            cursor: 'pointer',
            boxShadow: '0 0 20px #ff4444'
          }}
        >
          <Square size={20} fill="currentColor" />
          Recording... (Click to Stop)
        </motion.button>
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            color: '#ff4444',
            fontSize: '14px',
            maxWidth: '400px',
            textAlign: 'center',
            marginTop: '0.5rem'
          }}
        >
          {error}
        </motion.div>
      )}

      {isRecording && (
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            color: '#ff4444',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}
        >
          🔴 Live
        </motion.div>
      )}
    </div>
  )
}
