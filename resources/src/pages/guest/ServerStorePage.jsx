import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package,
  Sparkles,
  Star,
  Shield,
  Zap,
  Users,
  Server,
  Crown,
  Gift,
  TrendingUp,
  Play,
  ChevronRight,
  ExternalLink,
  Award,
  Gamepad2,
  ShoppingCart,
  Heart,
  MessageSquare,
  Settings,
  Menu,
  X,
  User,
  LogIn
} from 'lucide-react';

const ServerStorePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [particles, setParticles] = useState([]);
  const [activeService, setActiveService] = useState(0);
  const canvasRef = useRef(null);

  // Featured servers data
  const [featuredServers] = useState([
    {
      id: 1,
      name: "Los Santos Roleplay",
      description: "The ultimate roleplay experience",
      players: "248/300",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=200&fit=crop",
      rating: 4.9,
      category: "Roleplay",
      verified: true,
      featured: true
    },
    {
      id: 2,
      name: "Velocity Racing",
      description: "High-speed racing and drift competitions",
      players: "156/200",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop",
      rating: 4.7,
      category: "Racing",
      verified: true,
      featured: true
    },
    {
      id: 3,
      name: "Underground Heists",
      description: "Plan and execute the perfect heist",
      players: "89/100",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop",
      rating: 4.8,
      category: "Action",
      verified: true,
      featured: true
    }
  ]);

  // Statistics
  const [stats] = useState([
    { label: "Active Players", value: "125,000+", icon: Users },
    { label: "Partner Servers", value: "1,200+", icon: Server },
    { label: "Items Sold", value: "2.5M+", icon: Package },
    { label: "Trust Score", value: "99.9%", icon: Shield }
  ]);

  // Services data
  const services = [
    {
      title: "Server Store Management",
      description: "Complete e-commerce solution for server owners to sell in-game items, VIP memberships, and exclusive content.",
      icon: ShoppingCart,
      features: ["Custom storefronts", "Payment processing", "Automated delivery", "Analytics dashboard"]
    },
    {
      title: "Player Inventory System",
      description: "Advanced inventory management for players to track purchases, trade items, and manage their gaming assets.",
      icon: Package,
      features: ["Cross-server inventory", "Item trading", "Purchase history", "Asset valuation"]
    },
    {
      title: "Community Hub",
      description: "Connect with other players, join server communities, and discover new gaming experiences.",
      icon: Users,
      features: ["Player profiles", "Community forums", "Server reviews", "Friend system"]
    },
    {
      title: "Secure Transactions",
      description: "Bank-grade security for all transactions with fraud protection and instant delivery systems.",
      icon: Shield,
      features: ["SSL encryption", "Fraud detection", "Instant delivery", "Money-back guarantee"]
    }
  ];

  // Create floating particles
  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          color: ['#3B82F6', '#8B5CF6', '#EC4899'][Math.floor(Math.random() * 3)]
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setParticles(prev => prev.map(particle => {
        const newX = particle.x + particle.speedX;
        const newY = particle.y + particle.speedY;
        
        return {
          ...particle,
          x: newX > window.innerWidth ? 0 : newX < 0 ? window.innerWidth : newX,
          y: newY > window.innerHeight ? 0 : newY < 0 ? window.innerHeight : newY
        };
      }));
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%27100%27%20height%3D%27100%27%20viewBox%3D%270%200%20100%20100%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20stroke%3D%27%233B82F6%27%20stroke-width%3D%270.5%27%20opacity%3D%270.1%27%3E%3Cpath%20d%3D%27M0%200L50%2050L0%20100M50%200L100%2050L50%20100%27/%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20"></div>
        
        {/* Floating particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full blur-sm"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-50 bg-black/60 backdrop-blur-xl border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  FiveM<span className="text-white">HUB</span>
                </h1>
                <p className="text-xs text-slate-400 -mt-1">Marketplace</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#servers" className="text-slate-300 hover:text-white transition-colors">Servers</a>
              <a href="#marketplace" className="text-slate-300 hover:text-white transition-colors">Marketplace</a>
              <a href="#community" className="text-slate-300 hover:text-white transition-colors">Community</a>
              <a href="#support" className="text-slate-300 hover:text-white transition-colors">Support</a>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
              >
                Sign In
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-purple-600/30">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/80 backdrop-blur-xl border-t border-slate-700"
            >
              <div className="px-6 py-4 space-y-4">
                <a href="#servers" className="block text-slate-300 hover:text-white transition-colors">Servers</a>
                <a href="#marketplace" className="block text-slate-300 hover:text-white transition-colors">Marketplace</a>
                <a href="#community" className="block text-slate-300 hover:text-white transition-colors">Community</a>
                <a href="#support" className="block text-slate-300 hover:text-white transition-colors">Support</a>
                <div className="flex flex-col gap-2 pt-4 border-t border-slate-700">
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="px-4 py-2 text-left text-slate-300 hover:text-white transition-colors"
                  >
                    Sign In
                  </button>
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-center">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  The Ultimate
                </span>
                <br />
                <span className="text-white">FiveM Marketplace</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Connect with the best FiveM servers, buy exclusive in-game items, and join a thriving community of over 125,000 players worldwide.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-black text-lg shadow-2xl shadow-purple-600/30 hover:shadow-purple-600/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Play className="w-6 h-6" />
                    EXPLORE SERVERS
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-700/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Package className="w-6 h-6" />
                    BROWSE MARKETPLACE
                  </div>
                </motion.button>
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl mb-4 border border-blue-500/20">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Servers */}
      <section id="servers" className="relative z-10 py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                FEATURED SERVERS
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Discover the most popular and trusted FiveM servers in our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServers.map((server, index) => (
              <motion.div
                key={server.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                {/* Server image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={server.image} 
                    alt={server.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Verified badge */}
                  {server.verified && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-green-600/90 backdrop-blur-sm rounded-full text-sm font-bold">
                      <Shield className="w-4 h-4" />
                      VERIFIED
                    </div>
                  )}

                  {/* Featured badge */}
                  {server.featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 backdrop-blur-sm rounded-full text-sm font-bold">
                      <Star className="w-4 h-4" />
                      FEATURED
                    </div>
                  )}

                  {/* Players count */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-sm">
                    <Users className="w-4 h-4 text-green-400" />
                    {server.players}
                  </div>
                </div>

                {/* Server info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{server.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-slate-400">{server.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 mb-4">{server.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-bold border border-blue-500/30">
                      {server.category}
                    </span>
                    
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold hover:scale-105 transition-all">
                      <ExternalLink className="w-4 h-4" />
                      CONNECT
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl font-bold hover:bg-slate-700/50 transition-all">
              <div className="flex items-center gap-3">
                <Server className="w-5 h-5" />
                VIEW ALL SERVERS
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                OUR SERVICES
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to enhance your FiveM gaming experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Service Cards */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveService(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeService === index 
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-2 border-blue-500' 
                      : 'bg-slate-800/30 border-2 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${
                      activeService === index 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                        : 'bg-slate-700'
                    }`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                      <p className="text-slate-400">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Active Service Features */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
                  {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-2xl font-black text-white">{services[activeService].title}</h3>
              </div>
              
              <div className="space-y-4">
                {services[activeService].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:scale-105 transition-all shadow-lg">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                READY TO START?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of players and server owners who trust our platform for their FiveM gaming needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-black text-lg shadow-2xl shadow-purple-600/30 hover:scale-105 transition-all"
              >
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6" />
                  CREATE ACCOUNT
                </div>
              </button>
              
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-black text-lg shadow-2xl shadow-green-600/30 hover:scale-105 transition-all">
                <div className="flex items-center gap-3">
                  <Crown className="w-6 h-6" />
                  LIST YOUR SERVER
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/60 backdrop-blur-xl border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    FiveM<span className="text-white">HUB</span>
                  </h3>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                The ultimate marketplace connecting FiveM players with the best servers and exclusive in-game content.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Heart className="w-5 h-5 text-pink-400" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Browse Servers</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Marketplace</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Community</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Support</a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Getting Started</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">API Docs</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 FiveMHub. All rights reserved. | Built for the FiveM community.
            </p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-6"
            onClick={() => setIsLoginModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full border border-slate-700"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  WELCOME BACK
                </h3>
                <p className="text-slate-400">Choose your preferred login method</p>
              </div>

              <div className="space-y-4">
                <button className="w-full py-4 bg-[#5865F2] hover:bg-[#4752C4] rounded-xl font-bold text-white flex items-center justify-center gap-3 transition-all hover:scale-105">
                  <MessageSquare className="w-6 h-6" />
                  CONTINUE WITH DISCORD
                </button>

                <button className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-xl font-bold text-white flex items-center justify-center gap-3 transition-all hover:scale-105">
                  <Gamepad2 className="w-6 h-6" />
                  CONTINUE WITH FIVEM
                </button>
              </div>

              <div className="text-center mt-6">
        
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServerStorePage;