import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import GameCard from '../components/GameCard';
import games from '../data/data.json';

export default function Home() {
  const INITIAL_COUNT = 30;
  const [displayCount, setDisplayCount] = useState(INITIAL_COUNT);
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const gamesToShow = games.slice(0, displayCount);
  const hasMoreGames = gamesToShow.length < games.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + INITIAL_COUNT);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email) {
      showToast('Please enter your email address', 'error');
      return;
    }

    if (!email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    // Simulate API call
    setTimeout(() => {
      showToast(`🎉 Welcome! Check your email for confirmation.`);
      setEmail('');
    }, 1000);
  };

  return (
    <>
      
      <section className="carousel w-full h-96">
        {games.slice(0, 3).map((game, index) => (
          <div key={game.id} id={`slide${index}`} className="carousel-item relative w-full">
            <motion.img
              src={game.coverPhoto || "/photo-1600861194942-f883de0dfe96.jpeg"} 
              className="w-full h-96 object-cover"
              alt={game.title}
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-2">{game.title}</h3>
                <p className="text-gray-200 text-lg">{game.description}</p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="badge badge-primary">{game.category}</span>
                  <span className="text-yellow-400 font-semibold">⭐ {game.ratings}/5</span>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide${index === 0 ? 2 : index - 1}`} className="btn btn-circle">❮</a>
              <a href={`#slide${index === 2 ? 0 : index + 1}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        ))}
      </section>

     
      <section className="py-16 px-4 bg-base-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-center text-base-content mb-4">
              🎮 All Games
            </h2>
            <p className="text-center text-base-content/70 mb-8 text-lg">
              Discover amazing mobile games
            </p>
            
          
            <div className="text-center mb-4 text-gray-600">
              Showing {gamesToShow.length} of {games.length} games
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {gamesToShow.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>

          
          {hasMoreGames && (
            <div className="flex justify-center mt-8">
              <button className="btn btn-primary btn-lg" onClick={handleLoadMore}>
                Load More ({games.length - gamesToShow.length} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
              toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'
            } text-white max-w-sm`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-md mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">🚀 Never Miss an Update</h3>
            <p className="text-white/80 mb-8">
              Join thousands of gamers who get early access to new releases and exclusive content
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex gap-2 flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="input input-lg flex-1 bg-white/95 border-0 shadow-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <motion.button 
                  type="submit"
                  className="btn btn-lg bg-yellow-500 hover:bg-yellow-600 border-0 text-gray-900 font-bold min-w-[140px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe Now
                </motion.button>
              </div>
              <p className="text-white/60 text-sm">
                No spam ever. Unsubscribe at any time.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}