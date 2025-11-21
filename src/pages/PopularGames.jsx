// src/pages/PopularGames.jsx
import { motion } from 'framer-motion';
import GameCard from '../components/GameCard';
import games from '../data/data.json';

export default function PopularGames() {
  const POPULAR_COUNT = 9;
  
  const popularGames = games
    .filter((game) => parseFloat(game.ratings) >= 4.5)
    .slice(0, POPULAR_COUNT);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-base-200"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content mb-4">
            🔥 Popular Games
          </h1>
          <p className="text-base-content/70 text-lg mb-8">
            Top {POPULAR_COUNT} highest rated mobile games
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {popularGames.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}