import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare } from "lucide-react";

const initialMessages = [
  {
    role: "user",
    content: "What are the ethical implications of AI's influence on society?",
  },
  {
    role: "assistant",
    content:
      "The ethical implications include bias in decision-making, privacy concerns, and the potential to exacerbate inequality. Balancing innovation with fairness and transparency is key.",
  },
];

const bubbleVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const butterflyVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const nextMoves = [
  "🌟 Integrate voice input via Web Speech API",
  "🌈 Add theme toggle (light/dark/psychedelic)",
  "🧠 Use GPT-style completions via OpenAI API",
  "📦 Export full convo to Markdown/PDF",
  "🔄 Threaded memory-based conversations",
];

const Card = ({ children }) => <div className="rounded shadow p-4 bg-white">{children}</div>;
const CardContent = ({ children }) => <div>{children}</div>;


function recursiveCollapse(options: string[]): string {
  if (options.length === 1) return options[0];
  options.splice(Math.floor(Math.random() * options.length), 1);
  return recursiveCollapse([...options]);
}

const paradigms = Array.from({ length: 78 }, (_, i) => `Paradigm ${i + 1}`);
const finalMove = recursiveCollapse([...paradigms]);

export default function ButterflyChat() {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState(initialMessages);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { role: "user", content: input };
    setChat([...chat, newMsg]);
    setInput("");

    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Let’s unpack that more. These are great points to consider!",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="p-4 relative h-full w-full max-w-xl mx-auto">
      <motion.div
        className="absolute top-2 right-2 text-blue-500"
        variants={butterflyVariants}
        initial="initial"
        animate="animate"
      >
        🦋
      </motion.div>

      <ScrollArea className="h-[400px] rounded-md border p-2">
        {chat.map((msg, idx) => (
          <motion.div
            key={idx}
            variants={bubbleVariants}
            initial="initial"
            animate="animate"
            className={`mb-2 flex ${
              msg.role === "assistant" ? "justify-start" : "justify-end"
            }`}
          >
            <Card
              className={`max-w-sm ${
                msg.role === "assistant" ? "bg-blue-100" : "bg-blue-300"
              }`}
            >
              <CardContent className="p-3 text-sm">{msg.content}</CardContent>
            </Card>
          </motion.div>
        ))}
        <div ref={bottomRef} />
      </ScrollArea>

      <div className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border rounded px-3 py-2 text-sm"
          placeholder="Say something ethical..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <h4 className="font-semibold mb-2">🔮 Next Moves:</h4>
        <ul className="list-disc list-inside">
          {nextMoves.map((move, idx) => (
            <li key={idx}>{move}</li>
          ))}
        </ul>
        <p className="mt-4 italic text-xs">
          🕊️ LexUs Law 01: "The Move" — All collapsed paths converge to a
          single earned moment. The Move remains.
          <br />
          🜂 Final Move: <strong>{finalMove}</strong>
        </p>
      </div>
    </div>
  );
}
