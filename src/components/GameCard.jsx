import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function GameCard({ game, onSelect }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden cursor-pointer neon-glow"
      onClick={() => onSelect(game)}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform">
            <Play className="w-6 h-6 text-black fill-current" />
          </div>
        </div>
        <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded text-[10px] uppercase font-bold tracking-widest text-cyan-400">
          {game.category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg leading-tight group-hover:text-cyan-400 transition-colors uppercase italic tracking-tight">
          {game.title}
        </h3>
        <p className="text-gray-400 text-xs mt-1 line-clamp-1 font-medium">
          {game.description}
        </p>
      </div>
    </motion.div>
  );
}
