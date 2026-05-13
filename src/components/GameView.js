import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, RotateCcw } from 'lucide-react';
import { useState } from 'react';

export default function GameView({ game, onClose }) {
  const [key, setKey] = useState(0);

  const reloadGame = () => {
    setKey(prev => prev + 1);
  };

  return (
    <AnimatePresence>
      {game && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black flex flex-col md:p-4"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gray-900/50 backdrop-blur-sm border-b border-white/5">
            <div className="flex items-center gap-3">
              <img src={game.thumbnail} alt="" className="w-8 h-8 rounded object-cover border border-white/10" referrerPolicy="no-referrer" />
              <div>
                <h2 className="font-extrabold text-xl tracking-tighter uppercase italic text-cyan-400 leading-none">
                  {game.title}
                </h2>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-0.5">
                  Playing Now
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={reloadGame}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                title="Reload Game"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button 
                className="hidden sm:block p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                title="Fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
              <button 
                onClick={onClose}
                className="p-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors text-white ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Game Iframe */}
          <div className="flex-1 relative bg-black">
            <iframe
              key={key}
              src={game.url}
              className="w-full h-full border-none"
              title={game.title}
              allow="autoplay; fullscreen; pointer-lock"
            />
          </div>

          {/* Footer/Description */}
          <div className="hidden md:block p-4 bg-gray-900/30 border-t border-white/5">
            <p className="text-sm text-gray-400 max-w-2xl">
              <span className="text-white font-bold uppercase text-xs mr-2 border-r border-white/20 pr-2">Description</span>
              {game.description}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
