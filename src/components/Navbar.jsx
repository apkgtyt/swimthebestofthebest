import { Gamepad2, Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.location.href = './'}
        >
          <div className="p-2 bg-cyan-500 rounded-lg">
            <Gamepad2 className="w-6 h-6 text-black" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tighter uppercase italic">
            Zenon<span className="text-cyan-400">Games</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex-1 max-w-md relative"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-900 border border-gray-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="hidden md:flex items-center gap-6 text-sm font-medium uppercase tracking-widest text-gray-400"
        >
          <a href="#" className="hover:text-cyan-400 transition-colors">Arcade</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Classic</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Puzzle</a>
        </motion.div>
      </div>
    </nav>
  );
}
