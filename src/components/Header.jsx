import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

export default function Header() {
  const { currentUser, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    try {
      await logout();
      setDropdownOpen(false);
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white shadow-lg sticky top-0 z-40 border-b border-gray-700"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/" className="text-xl font-bold text-white">
            🎮 GameHub
          </Link>
        </motion.div>

        {/* Navigation */}
        <ul className="hidden lg:flex gap-6 text-white">
          <motion.li whileHover={{ scale: 1.05 }}>
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            <Link 
              to="/popular-games" 
              className="hover:text-gray-300 transition-colors"
            >
              Popular Games
            </Link>
          </motion.li>
         
<motion.li whileHover={{ scale: 1.05 }}>
  <Link 
    to="/about" 
    className="hover:text-gray-300 transition-colors"
  >
    About
  </Link>
</motion.li>
        </ul>

        {/* Auth Buttons / Profile */}
        {currentUser ? (
          <div className="relative" ref={dropdownRef}>
            <motion.img
              src={currentUser.photoURL || '/default.jpeg'}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />

            {/* Dropdown */}
            {dropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-50"
              >
                <Link 
                  to="/my-profile" 
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                  onClick={() => setDropdownOpen(false)}
                >
                  My Profile
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800"
                >
                  Logout
                </button>
              </motion.div>
            )}
          </div>
        ) : (
          <div className="flex gap-2">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/login" className="btn btn-primary text-white">Login</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </motion.div>
          </div>
        )}
      </div>
    </motion.header>
  );
}