
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { number: '500+', label: 'Games Available' },
    { number: '1M+', label: 'Happy Gamers' },
    { number: '50+', label: 'Game Developers' },
    { number: '24/7', label: 'Support' }
  ];

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      image: "/about-1.jpg",
      description: 'Passionate gamer with 10+ years in gaming industry'
    },
    {
      name: 'Jane Smith',
      role: 'Head of Development',
      image: '/team-2.avif',
      description: 'Former game developer at major studios'
    },
    {
      name: 'Mike Johnson',
      role: 'Community Manager',
      image: '/team-3.webp',
      description: 'Building the best gaming community'
    }
  ];

  const features = [
    {
      icon: '🎮',
      title: 'Curated Collection',
      description: 'Hand-picked games from top developers worldwide'
    },
    {
      icon: '⭐',
      title: 'Quality Ratings',
      description: 'Real user reviews and ratings you can trust'
    },
    {
      icon: '🚀',
      title: 'Fast Downloads',
      description: 'Quick and secure game downloads'
    },
    {
      icon: '💬',
      title: 'Community Driven',
      description: 'Join discussions and share your gaming experience'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About GameHub
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Your ultimate destination for discovering, downloading, and discussing the best mobile games in the world.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose GameHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800 p-6 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex space-x-4 mb-8 justify-center">
            {['mission', 'vision', 'values'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/50 p-8 rounded-2xl"
          >
            {activeTab === 'mission' && (
              <div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To create the most comprehensive and user-friendly gaming platform that connects 
                  gamers with the best mobile gaming experiences. We're committed to building a 
                  community where gamers can discover, share, and enjoy games together.
                </p>
              </div>
            )}
            {activeTab === 'vision' && (
              <div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We envision a world where every gamer can easily find their next favorite game, 
                  where developers can showcase their creations, and where the gaming community 
                  thrives through shared experiences and honest reviews.
                </p>
              </div>
            )}
            {activeTab === 'values' && (
              <div>
                <h3 className="text-3xl font-bold mb-4">Our Values</h3>
                <ul className="text-lg text-gray-300 space-y-3">
                  <li>🎯 <strong>Quality First:</strong> We only feature the best games</li>
                  <li>🤝 <strong>Community Driven:</strong> Our users shape our platform</li>
                  <li>🚀 <strong>Innovation:</strong> Constantly improving the gaming experience</li>
                  <li>🔒 <strong>Trust:</strong> Honest reviews and secure platform</li>
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
<section className="py-16 px-4 bg-gray-800/50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-xl text-center"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
          />

          <h3 className="text-xl font-bold mb-2">{member.name}</h3>
          <p className="text-blue-400 mb-3">{member.role}</p>
          <p className="text-gray-300">{member.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}