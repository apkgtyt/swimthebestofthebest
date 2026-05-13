import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import GameCard from './components/GameCard';
import GameView from './components/GameView';
import { games } from './data/games';
import { Flame, Trophy, Clock } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);

  const filteredGames = useMemo(() => {
    return games.filter(game => 
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        {!searchQuery && (
          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-8">
              <div>
                <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-4">
                  Player <span className="text-cyan-500">One</span><br/>Ready Up.
                </h2>
                <p className="text-gray-400 text-lg max-w-xl font-medium">
                  Welcome to Zenon Games. The ultimate destination for unblocked web games. 
                  No downloads, no lag, just pure performance.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-2xl flex items-center gap-3">
                  <div className="p-2 bg-orange-500 rounded-lg">
                    <Flame className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-500 leading-none">Trending</div>
                    <div className="text-lg font-black italic tracking-tight">1.2K+ Live</div>
                  </div>
                </div>
                <div className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-2xl flex items-center gap-3">
                  <div className="p-2 bg-yellow-500 rounded-lg">
                    <Trophy className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-500 leading-none">New Highs</div>
                    <div className="text-lg font-black italic tracking-tight">Daily Prizes</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Game Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-black uppercase italic tracking-tight">
                {searchQuery ? `Search Results: ${filteredGames.length}` : 'Featured Games'}
              </h2>
            </div>
            <div className="h-px flex-1 mx-8 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <GameCard 
                  game={game} 
                  onSelect={(game) => setSelectedGame(game)} 
                />
              </motion.div>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="text-center py-20 bg-gray-900/50 rounded-3xl border border-dashed border-gray-800">
              <p className="text-gray-500 font-bold uppercase italic tracking-widest">No games found matches your quest</p>
            </div>
          )}
        </section>
      </main>

      <GameView 
        game={selectedGame} 
        onClose={() => setSelectedGame(null)} 
      />

      <footer className="border-t border-gray-900 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-sm font-bold uppercase tracking-widest text-gray-600">
          <div>© 2024 ZENON GAMES PORTAL</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <div className="text-cyan-500 font-black italic">EMPOWERING PLAY</div>
        </div>
      </footer>
    </div>
  );
}
