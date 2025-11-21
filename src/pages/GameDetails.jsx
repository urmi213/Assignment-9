import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import games from '../data/data.json';

export default function GameDetails() {
  const { id } = useParams();
  const game = games.find(g => g.id.toString()=== id);

  if (!game) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Game not found</h1>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="card lg:card-side bg-base-100 shadow-xl"
      >
        <motion.figure 
          className="lg:w-1/2"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img src={game.coverPhoto} alt={game.title} className="w-full h-96 object-cover" />
        </motion.figure>
        <div className="card-body lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-title text-3xl"
          >
            {game.title}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="badge badge-primary"
          >
            {game.category}
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600"
          >
            {game.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <input 
                  key={i}
                  type="radio" 
                  name="rating-2" 
                  className="mask mask-star-2 bg-orange-400" 
                  checked={i < Math.floor(game.ratings)}
                  readOnly
                />
              ))}
            </div>
            <span className="text-lg font-semibold">{game.ratings}/5</span>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-gray-500"
          >
            Developer: {game.developer}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="card-actions justify-end"
          >
            <motion.a 
              href={game.downloadLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Install Now
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="btn btn-outline">Back to Home</Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}