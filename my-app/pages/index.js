import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SecurePDFUploadApp() {
  const [library, setLibrary] = useState([]);
  const [pdfFile, setPdfFile] = useState(null);
  const [title, setTitle] = useState('');
  const [openIndex, setOpenIndex] = useState(null);
  const [showAngel, setShowAngel] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState(null);

  const handleUnlock = async () => {
    try {
      const res = await fetch('/api/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: inputPassword }),
      });
      const data = await res.json();
      if (data.success) {
        setIsUnlocked(true);
        setError(null);
      } else {
        setError('No wings yet, try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong.');
    }
  };

  const handleUpload = () => {
    if (!pdfFile || !title) return;
    const newEntry = {
      title,
      url: URL.createObjectURL(pdfFile),
    };
    setLibrary([...library, newEntry]);
    setPdfFile(null);
    setTitle('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-100 text-gray-900 p-6 font-serif">
      <h1 className="text-4xl text-center font-bold text-indigo-800 mb-4">🦋 GlyphGate Library</h1>
      <p className="text-center italic text-indigo-500 mb-10">Open your wings. Upload your scrolls. Decode the signs.</p>

      <AnimatePresence>
        {!isUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto bg-white/90 p-6 rounded-xl shadow-lg border border-indigo-300 text-center"
          >
            <p className="mb-3 text-indigo-700 font-medium">To upload your glyphs, enter the secret passphrase:</p>
            <input
              type="password"
              placeholder="••••••••••"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              className="block w-full p-2 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
            />
            {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
            <button
              onClick={handleUnlock}
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
              Unlock Scroll Upload
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-xl mx-auto bg-white/80 shadow-xl rounded-xl p-6 border border-indigo-200 mt-4"
          >
            <input
              type="text"
              placeholder="Enter writing title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full mb-4 p-2 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setPdfFile(e.target.files[0])}
              className="block w-full mb-4"
            />
            <button
              onClick={handleUpload}
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
              Upload to GlyphGate
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        {library.map((item, index) => (
          <div key={index} className="bg-white border border-indigo-300 rounded-lg p-4 shadow-lg">
            <h3
              className="text-xl font-semibold text-indigo-800 cursor-pointer hover:underline"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {item.title}
            </h3>
            {openIndex === index && (
              <div className="mt-4 h-[500px] border rounded overflow-hidden">
                <iframe src={item.url} className="w-full h-full" frameBorder="0"></iframe>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-16 text-center">
        <button
          className="text-indigo-700 underline text-lg font-medium hover:text-indigo-900"
          onClick={() => setShowAngel(!showAngel)}
        >
          {showAngel ? '🜃 Close Angel Number Portal' : '🔢 Open Angel Number Portal'}
        </button>

        {showAngel && (
          <div className="mt-6 border-2 border-indigo-400 rounded-xl overflow-hidden shadow-xl h-[500px]">
            <iframe
              src="https://lexologyenterprises.my.canva.site/angel-number-game-from-clock"
              title="Angel Number Decoder"
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
