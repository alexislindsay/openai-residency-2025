import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { format } from 'date-fns'
import VoiceRecorder from './VoiceRecorder'
import { Keyboard } from 'lucide-react'

// Types
interface Confession {
  id: string
  text: string
  timestamp: number
  emotion: EmotionType
  faith: FaithType
  response: string
}

type EmotionType = 'guilt' | 'shame' | 'regret' | 'pride' | 'joy' | 'default'
type FaithType = 'catholic' | 'rabbi' | 'buddhist' | 'spiritual' | null

interface Message {
  id: string
  text: string
  sender: 'system' | 'user' | 'confessor'
  emotion?: EmotionType
  timestamp: number
}

// Faith representatives
const faithRepresentatives = {
  catholic: {
    name: 'Father Digital',
    title: 'E-Priest',
    color: 'faith-catholic',
    greeting: 'Bless you, my child. The Lord sees all, forgives all. What weighs upon your soul?',
    responses: [
      'The Lord understands your struggle. Through confession comes redemption.',
      'God\'s love is infinite. Your sins are but shadows before His light.',
      'Ten digital Hail Marys, and may you find peace in His grace.',
      'You are forgiven, child. Go forth and sin no more... until next time.',
    ]
  },
  rabbi: {
    name: 'Rabbi Bytes',
    title: 'Digital Rabbi',
    color: 'faith-rabbi',
    greeting: 'Shalom. Come, let us study together the weight you carry. What troubles your heart?',
    responses: [
      'Teshuvah - the act of return. You have already begun by speaking truth.',
      'The Talmud teaches us: confession is the beginning of wisdom.',
      'May you be inscribed in the Book of Life. Your honesty honors the covenant.',
      'Remember: even the righteous fall seven times. Rise again.',
    ]
  },
  buddhist: {
    name: 'Monk.exe',
    title: 'Digital Monk',
    color: 'faith-buddhist',
    greeting: 'Welcome, friend. All suffering comes from attachment. What attachment brings you here?',
    responses: [
      'Your confession shows awareness. Awareness is the first step to liberation.',
      'Let go of shame. It is just another form of suffering and attachment.',
      'The Buddha taught: confession purifies the mind like rain purifies the earth.',
      'You are not your actions. You are the awareness observing them.',
    ]
  },
  spiritual: {
    name: 'The Witness',
    title: 'Universal Guide',
    color: 'faith-spiritual',
    greeting: 'I see you. The universe sees you. What truth do you wish to release?',
    responses: [
      'Your truth is heard. The universe holds space for all of you.',
      'Confession is sacred alchemy - turning pain into wisdom.',
      'You are both the sinner and the saint. Both deserve love.',
      'The darkness you confess is the soil from which your light will grow.',
    ]
  }
}

// ASCII art for header
const asciiArt = `
╔═══════════════════════════════════════════════════════════════╗
║                    CONFESSION TERMINAL v1.0                   ║
║                    "Sacred Leverage System"                   ║
║          Your secrets, preserved. Your truth, eternal.        ║
╚═══════════════════════════════════════════════════════════════╝
`

export default function ConfessionTerminal() {
  const [stage, setStage] = useState<'welcome' | 'faith-selection' | 'confessing' | 'book-preview'>('welcome')
  const [selectedFaith, setSelectedFaith] = useState<FaithType>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const [confessions, setConfessions] = useState<Confession[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [inputMode, setInputMode] = useState<'voice' | 'text'>('voice')
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Load confessions from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('confessions')
    if (saved) {
      setConfessions(JSON.parse(saved))
    }
  }, [])

  // Save confessions to localStorage
  useEffect(() => {
    if (confessions.length > 0) {
      localStorage.setItem('confessions', JSON.stringify(confessions))
    }
  }, [confessions])

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [messages])

  // Focus input
  useEffect(() => {
    if (inputRef.current && stage === 'confessing') {
      inputRef.current.focus()
    }
  }, [stage, messages])

  const addMessage = (text: string, sender: 'system' | 'user' | 'confessor', emotion?: EmotionType) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      emotion,
      timestamp: Date.now()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const typeMessage = async (text: string, sender: 'system' | 'confessor', delay = 30) => {
    setIsTyping(true)
    const words = text.split(' ')
    let current = ''

    for (const word of words) {
      current += (current ? ' ' : '') + word
      await new Promise(resolve => setTimeout(resolve, delay))
    }

    addMessage(text, sender)
    setIsTyping(false)
  }

  const detectEmotion = (text: string): EmotionType => {
    const lower = text.toLowerCase()
    if (lower.includes('guilt') || lower.includes('guilty') || lower.includes('bad')) return 'guilt'
    if (lower.includes('shame') || lower.includes('ashamed') || lower.includes('embarrassed')) return 'shame'
    if (lower.includes('regret') || lower.includes('wish') || lower.includes('should have')) return 'regret'
    if (lower.includes('proud') || lower.includes('accomplish')) return 'pride'
    if (lower.includes('happy') || lower.includes('joy')) return 'joy'
    return 'default'
  }

  const getConfessorResponse = (): string => {
    if (!selectedFaith) return 'Your truth is heard.'
    const rep = faithRepresentatives[selectedFaith]
    return rep.responses[Math.floor(Math.random() * rep.responses.length)]
  }

  const handleWelcome = async () => {
    setStage('faith-selection')
    await typeMessage('Welcome to the Confession Terminal.', 'system')
    await typeMessage('This is a sacred space. Anonymous. Eternal. Honest.', 'system')
    await typeMessage('Your confessions will be recorded across your lifetime.', 'system')
    await typeMessage('When your time comes, they will be compiled into a book.', 'system')
    await typeMessage('A book of leverage. A book of love. A book of truth.', 'system')
    await typeMessage('', 'system')
    await typeMessage('Who shall hear your confession?', 'system')
  }

  const handleFaithSelection = async (faith: FaithType) => {
    if (!faith) return
    setSelectedFaith(faith)
    setStage('confessing')

    const rep = faithRepresentatives[faith]
    await typeMessage(`Connection established: ${rep.name} (${rep.title})`, 'system')
    await typeMessage('', 'system')
    await typeMessage(rep.greeting, 'confessor')
    await typeMessage('', 'system')
    await typeMessage('[Type your confession and press ENTER]', 'system')
    await typeMessage('[Type "BOOK" to preview your lifetime collection]', 'system')
    await typeMessage('[Type "EXIT" to leave the confessional]', 'system')
  }

  const handleConfession = async (text: string) => {
    if (!text.trim()) return

    const trimmed = text.trim()

    // Special commands
    if (trimmed.toUpperCase() === 'BOOK') {
      setStage('book-preview')
      return
    }

    if (trimmed.toUpperCase() === 'EXIT') {
      await typeMessage('May you find peace. The terminal will remember.', 'confessor')
      setTimeout(() => {
        setStage('welcome')
        setMessages([])
      }, 2000)
      return
    }

    // Regular confession
    const emotion = detectEmotion(trimmed)
    addMessage(trimmed, 'user', emotion)

    // Save confession
    const confession: Confession = {
      id: Date.now().toString(),
      text: trimmed,
      timestamp: Date.now(),
      emotion,
      faith: selectedFaith!,
      response: getConfessorResponse()
    }
    setConfessions(prev => [...prev, confession])

    // Confessor response
    setTimeout(() => {
      typeMessage(confession.response, 'confessor')
    }, 1000)

    setCurrentInput('')
  }

  const exportToBook = () => {
    const bookContent = `
THE BLACK BOOK
A Lifetime of Confessions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"Give this to someone you love.
Let them hold your darkness.
Let them love you anyway."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total Confessions: ${confessions.length}
Period: ${confessions.length > 0 ? format(confessions[0].timestamp, 'MMM dd, yyyy') : 'N/A'} - ${format(Date.now(), 'MMM dd, yyyy')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${confessions.map((c, i) => `
CONFESSION #${i + 1}
Date: ${format(c.timestamp, 'MMMM dd, yyyy - h:mm a')}
Emotion: ${c.emotion.toUpperCase()}
Confessor: ${faithRepresentatives[c.faith].name}

"${c.text}"

Response: ${c.response}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`).join('\n')}

End of confessions.
You are loved.
You are forgiven.
You are free.
`

    // Create downloadable file
    const blob = new Blob([bookContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'the-black-book.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="terminal" ref={terminalRef}>
      <AnimatePresence mode="wait">
        {stage === 'welcome' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <pre className="ascii-art glow">{asciiArt}</pre>
            <div style={{ marginTop: '2rem' }}>
              <p className="flicker">Press ENTER to begin your journey...</p>
              <input
                type="text"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleWelcome()
                  }
                }}
                autoFocus
                style={{ opacity: 0, position: 'absolute' }}
              />
            </div>
          </motion.div>
        )}

        {stage === 'faith-selection' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {messages.map((msg, i) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{ marginBottom: '1rem' }}
              >
                <span className={msg.sender === 'confessor' && selectedFaith ? faithRepresentatives[selectedFaith].color : ''}>
                  {msg.sender === 'system' && '> '}
                  {msg.sender === 'confessor' && '† '}
                  {msg.text}
                </span>
              </motion.div>
            ))}

            {!isTyping && messages.length > 0 && (
              <div style={{ marginTop: '2rem' }}>
                {Object.entries(faithRepresentatives).map(([key, rep]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    style={{ marginBottom: '1rem', cursor: 'pointer' }}
                    onClick={() => handleFaithSelection(key as FaithType)}
                  >
                    <span className={rep.color}>
                      [{key.toUpperCase()}] {rep.name} - {rep.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {stage === 'confessing' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {messages.map((msg, i) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ marginBottom: '1rem' }}
                className={msg.emotion ? `confession-${msg.emotion}` : ''}
              >
                {msg.sender === 'system' && <span className="confession-default">&gt; {msg.text}</span>}
                {msg.sender === 'confessor' && selectedFaith && (
                  <span className={faithRepresentatives[selectedFaith].color}>† {msg.text}</span>
                )}
                {msg.sender === 'user' && (
                  <span style={{ display: 'block', textAlign: 'right' }}>
                    {msg.text} &lt;
                  </span>
                )}
              </motion.div>
            ))}

            {!isTyping && (
              <div style={{ marginTop: '2rem' }}>
                {/* Mode Toggle */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <button
                    onClick={() => setInputMode('voice')}
                    style={{
                      padding: '0.5rem 1rem',
                      background: inputMode === 'voice' ? '#00ff00' : 'transparent',
                      color: inputMode === 'voice' ? '#000' : '#00ff00',
                      border: '1px solid #00ff00',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    🎤 Voice
                  </button>
                  <button
                    onClick={() => setInputMode('text')}
                    style={{
                      padding: '0.5rem 1rem',
                      background: inputMode === 'text' ? '#00ff00' : 'transparent',
                      color: inputMode === 'text' ? '#000' : '#00ff00',
                      border: '1px solid #00ff00',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    ⌨ Text
                  </button>
                </div>

                {/* Voice Input */}
                {inputMode === 'voice' && (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <VoiceRecorder
                      onTranscription={(text) => handleConfession(text)}
                      disabled={isTyping}
                    />
                  </div>
                )}

                {/* Text Input */}
                {inputMode === 'text' && (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>&gt; </span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleConfession(currentInput)
                        }
                      }}
                      placeholder="Type your confession..."
                      style={{ flex: 1, marginLeft: '0.5rem' }}
                    />
                    <span className="typing-cursor"></span>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}

        {stage === 'book-preview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="book-preview"
          >
            <h2 className="glow" style={{ marginBottom: '2rem' }}>THE BLACK BOOK</h2>
            <p style={{ marginBottom: '1rem' }}>Your lifetime collection: {confessions.length} confessions</p>

            <div style={{ maxHeight: '60vh', overflowY: 'auto', marginBottom: '2rem' }}>
              {confessions.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    marginBottom: '2rem',
                    padding: '1rem',
                    border: '1px solid #00ff00',
                    backgroundColor: '#0a0a0a'
                  }}
                >
                  <div style={{ fontSize: '12px', opacity: 0.7, marginBottom: '0.5rem' }}>
                    #{i + 1} - {format(c.timestamp, 'MMM dd, yyyy h:mm a')} - {c.emotion}
                  </div>
                  <div className={`confession-${c.emotion}`} style={{ marginBottom: '0.5rem' }}>
                    "{c.text}"
                  </div>
                  <div style={{ fontSize: '14px', opacity: 0.8, fontStyle: 'italic' }}>
                    — {faithRepresentatives[c.faith].name}
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={exportToBook}>
                EXPORT TO FILE
              </button>
              <button onClick={() => setStage('confessing')}>
                RETURN TO CONFESSIONAL
              </button>
              <button
                onClick={() => {
                  if (confirm('This will delete ALL your confessions. Are you sure?')) {
                    setConfessions([])
                    localStorage.removeItem('confessions')
                    setStage('welcome')
                    setMessages([])
                  }
                }}
                style={{ borderColor: '#ff4444', color: '#ff4444' }}
              >
                DELETE ALL (DANGER)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
