import { Link } from 'react-router';
import { motion } from 'framer-motion';



export default function GameCard({ game, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="card bg-base-100 shadow-xl cursor-pointer"
    >
      <figure>
        <img src={game.coverPhoto} alt={game.title} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{game.title}</h2>
        <div className="badge badge-primary">{game.category}</div>
        <p className="text-gray-600 line-clamp-2">{game.description}</p>
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <div className="rating rating-sm">
              {[...Array(5)].map((_, i) => (
                <input 
                  key={i}
                  type="radio" 
                  name={`rating-${game.id}`} 
                  className="mask mask-star-2 bg-orange-400" 
                  checked={i < Math.floor(game.ratings)}
                  readOnly
                />
              ))}
            </div>
            <span className="text-sm font-semibold">{game.ratings}/5</span>
          </div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to={`/game/${game.id}`} className="btn btn-primary btn-sm">
              View Details
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}