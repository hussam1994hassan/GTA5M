import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package,
  Sparkles,
  Star,
  Lock,
  Unlock,
  Gift,
  Crown,
  Zap,
  Gem,
  Shield,
  Swords,
  Car,
  DollarSign,
  Clock,
  Server,
  ChevronRight,
  X,
  MousePointer2,
  Volume2,
  VolumeX,
  Flame,
  Diamond,
  Trophy,
  Coins,
  Heart
} from 'lucide-react';

const PlayerInventory = () => {
  const [activeTab, setActiveTab] = useState('owned');
  const [selectedServer, setSelectedServer] = useState('all');
  const [selectedLootbox, setSelectedLootbox] = useState(null);
  const [isOpening, setIsOpening] = useState(false);
  const [openingStage, setOpeningStage] = useState('idle');
  const [revealedItem, setRevealedItem] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [particles, setParticles] = useState([]);
  const [rotationY, setRotationY] = useState(0);
  const [glowIntensity, setGlowIntensity] = useState(0);
  const canvasRef = useRef(null);

  // Player's owned items
  const [ownedItems] = useState([
    {
      id: 1,
      name: "Golden AK-47",
      type: "weapon",
      typeImage: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=100&h=100&fit=crop",
      rarity: "legendary",
      server: "Los Santos RP",
      serverId: "lsrp",
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=300&h=200&fit=crop",
      purchaseDate: "2025-01-10",
      quantity: 1
    },
    {
      id: 2,
      name: "Lamborghini Aventador",
      type: "vehicle",
      typeImage: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=100&h=100&fit=crop",
      rarity: "epic",
      server: "Velocity Gaming",
      serverId: "velocity",
      image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=300&h=200&fit=crop",
      purchaseDate: "2025-01-08",
      quantity: 1
    },
    {
      id: 3,
      name: "VIP Membership",
      type: "membership",
      typeImage: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop",
      rarity: "rare",
      server: "Los Santos RP",
      serverId: "lsrp",
      image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=200&fit=crop",
      purchaseDate: "2025-01-05",
      quantity: 1,
      duration: "30 days"
    }
  ]);

  // Player's lootboxes - Updated with Call of Duty style
  const [lootboxes] = useState([
    {
      id: 1,
      name: "LEGENDARY ARSENAL CRATE",
      type: "weapon_crate",
      rarity: "legendary",
      server: "Los Santos RP",
      serverId: "lsrp",
      quantity: 2,
      image: "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?w=400&h=300&fit=crop",
      glowColor: "#FFD700",
      possibleItems: [
        { 
          name: "Golden Desert Eagle", 
          rarity: "legendary", 
          chance: 5, 
          type: "weapon", 
          typeImage: "https://images.unsplash.com/photo-1544717684-75b1f6ffc7dc?w=100&h=100&fit=crop",
          image: "https://images.unsplash.com/photo-1544717684-75b1f6ffc7dc?w=400&h=300&fit=crop" 
        },
        { 
          name: "Diamond Sniper", 
          rarity: "legendary", 
          chance: 3, 
          type: "weapon", 
          typeImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" 
        },
        { 
          name: "Platinum SMG", 
          rarity: "epic", 
          chance: 15, 
          type: "weapon", 
          typeImage: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=100&h=100&fit=crop",
          image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400&h=300&fit=crop" 
        },
        { 
          name: "Combat Shotgun", 
          rarity: "rare", 
          chance: 25, 
          type: "weapon",
          typeImage: "https://images.unsplash.com/photo-1586241800413-c35ab0c3e48f?w=100&h=100&fit=crop", 
          image: "https://images.unsplash.com/photo-1586241800413-c35ab0c3e48f?w=400&h=300&fit=crop" 
        },
        { 
          name: "Advanced Rifle", 
          rarity: "uncommon", 
          chance: 52, 
          type: "weapon",
          typeImage: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=100&h=100&fit=crop", 
          image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400&h=300&fit=crop" 
        }
      ]
    },
    {
      id: 2,
      name: "ELITE VEHICLE SUPPLY DROP",
      type: "vehicle_crate",
      rarity: "epic",
      server: "Velocity Gaming",
      serverId: "velocity",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?w=400&h=300&fit=crop",
      glowColor: "#9B59B6",
      possibleItems: [
        { 
          name: "Bugatti Chiron", 
          rarity: "legendary", 
          chance: 2, 
          type: "vehicle",
          typeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop", 
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" 
        },
        { 
          name: "McLaren P1", 
          rarity: "epic", 
          chance: 8, 
          type: "vehicle",
          typeImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=100&fit=crop", 
          image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop" 
        },
        { 
          name: "Ferrari 488", 
          rarity: "rare", 
          chance: 20, 
          type: "vehicle",
          typeImage: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=100&h=100&fit=crop", 
          image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=300&fit=crop" 
        },
        { 
          name: "BMW M5", 
          rarity: "uncommon", 
          chance: 30, 
          type: "vehicle",
          typeImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=100&h=100&fit=crop", 
          image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop" 
        },
        { 
          name: "Sports Bike", 
          rarity: "common", 
          chance: 40, 
          type: "vehicle",
          typeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop", 
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" 
        }
      ]
    },
    {
      id: 3,
      name: "OMEGA MYSTERY CRATE",
      type: "mixed_crate",
      rarity: "legendary",
      server: "Los Santos RP",
      serverId: "lsrp",
      quantity: 3,
      image: "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?w=400&h=300&fit=crop",
      glowColor: "#FF1493",
      possibleItems: [
        { 
          name: "Mansion Property", 
          rarity: "legendary", 
          chance: 1, 
          type: "property",
          typeImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=100&h=100&fit=crop", 
          image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop" 
        },
        { 
          name: "$1,000,000 Cash", 
          rarity: "legendary", 
          chance: 2, 
          type: "money",
          typeImage: "https://images.unsplash.com/photo-1554672723-d42a16e533db?w=100&h=100&fit=crop", 
          image: "https://images.unsplash.com/photo-1554672723-d42a16e533db?w=400&h=300&fit=crop" 
        },
        { 
          name: "Rare Pet Dragon", 
          rarity: "epic", 
          chance: 10, 
          type: "pet",
          typeImage: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=100&h=100&fit=crop", 
          image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop" 
        },
        { 
          name: "Custom Outfit", 
          rarity: "rare", 
          chance: 30, 
          type: "cosmetic",
          typeImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=100&h=100&fit=crop", 
          image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop" 
        },
        { 
          name: "XP Boost x2", 
          rarity: "uncommon", 
          chance: 57, 
          type: "boost",
          typeImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop", 
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop" 
        }
      ]
    }
  ]);

  // Get unique servers
  const servers = [
    { id: 'all', name: 'All Servers' },
    { id: 'lsrp', name: 'Los Santos RP' },
    { id: 'velocity', name: 'Velocity Gaming' }
  ];

  // Filter items based on selected server
  const filteredOwnedItems = selectedServer === 'all' 
    ? ownedItems 
    : ownedItems.filter(item => item.serverId === selectedServer);

  const filteredLootboxes = selectedServer === 'all'
    ? lootboxes
    : lootboxes.filter(box => box.serverId === selectedServer);

  // Rarity colors and styles - Updated to match site theme
  const getRarityStyles = (rarity) => {
    const styles = {
      common: {
        color: 'from-gray-400 to-gray-500',
        glow: 'shadow-gray-400/50',
        border: 'border-gray-500',
        bg: 'bg-gray-900/90',
        particleColor: '#9CA3AF',
        textColor: 'text-gray-400'
      },
      uncommon: {
        color: 'from-green-400 to-green-500',
        glow: 'shadow-green-400/50',
        border: 'border-green-500',
        bg: 'bg-green-900/90',
        particleColor: '#4ADE80',
        textColor: 'text-green-400'
      },
      rare: {
        color: 'from-blue-400 to-cyan-400',
        glow: 'shadow-blue-400/50',
        border: 'border-blue-500',
        bg: 'bg-blue-900/90',
        particleColor: '#60A5FA',
        textColor: 'text-blue-400'
      },
      epic: {
        color: 'from-purple-400 to-pink-400',
        glow: 'shadow-purple-400/50',
        border: 'border-purple-500',
        bg: 'bg-purple-900/90',
        particleColor: '#A78BFA',
        textColor: 'text-purple-400'
      },
      legendary: {
        color: 'from-yellow-400 via-orange-400 to-red-400',
        glow: 'shadow-yellow-400/50',
        border: 'border-yellow-500',
        bg: 'bg-yellow-900/90',
        particleColor: '#FCD34D',
        textColor: 'text-yellow-400'
      }
    };
    return styles[rarity] || styles.common;
  };

  // Create explosive particle effects
  useEffect(() => {
    if (openingStage === 'exploding' || openingStage === 'revealing' || openingStage === 'revealed') {
      const newParticles = [];
      const particleCount = openingStage === 'exploding' ? 100 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = Math.random() * 10 + 5;
        newParticles.push({
          id: i,
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          size: Math.random() * 8 + 4,
          speedX: Math.cos(angle) * velocity,
          speedY: Math.sin(angle) * velocity,
          color: revealedItem ? getRarityStyles(revealedItem.rarity).particleColor : '#FCD34D',
          life: 100,
          rotation: Math.random() * 360
        });
      }
      setParticles(newParticles);
    }
  }, [openingStage, revealedItem]);

  // Animate particles
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.speedX,
        y: particle.y + particle.speedY,
        life: particle.life - 2,
        speedY: particle.speedY + 0.3,
        speedX: particle.speedX * 0.98,
        rotation: particle.rotation + 5
      })).filter(p => p.life > 0));
      animationFrame = requestAnimationFrame(animate);
    };
    
    if (particles.length > 0) {
      animate();
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [particles.length]);

  // Open lootbox animation sequence - Call of Duty style
  const openLootbox = async (lootbox) => {
    setSelectedLootbox(lootbox);
    setIsOpening(true);
    setOpeningStage('starting');

    // Play sound effect
    if (soundEnabled) {
      // Play dramatic opening sound
    }

    // Stage 1: Dramatic intro
    await new Promise(resolve => setTimeout(resolve, 1500));
    setOpeningStage('charging');

    // Stage 2: Energy charging
    await new Promise(resolve => setTimeout(resolve, 2000));
    setOpeningStage('shaking');

    // Stage 3: Intense shaking
    await new Promise(resolve => setTimeout(resolve, 1500));
    setOpeningStage('glowing');

    // Stage 4: Maximum glow
    await new Promise(resolve => setTimeout(resolve, 1500));
    setOpeningStage('exploding');

    // Calculate random item based on chances
    const random = Math.random() * 100;
    let cumulative = 0;
    let selectedItem = null;
    
    for (const item of lootbox.possibleItems) {
      cumulative += item.chance;
      if (random <= cumulative) {
        selectedItem = item;
        break;
      }
    }

    setRevealedItem(selectedItem);

    // Stage 5: Explosion and reveal
    await new Promise(resolve => setTimeout(resolve, 800));
    setOpeningStage('revealing');

    // Stage 6: Show result
    await new Promise(resolve => setTimeout(resolve, 1500));
    setOpeningStage('revealed');
  };

  // Close lootbox modal
  const closeLootboxModal = () => {
    setSelectedLootbox(null);
    setIsOpening(false);
    setOpeningStage('idle');
    setRevealedItem(null);
    setParticles([]);
    setRotationY(0);
    setGlowIntensity(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background with gaming pattern */}
      <div className="fixed inset-0 z-0">
       <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%27100%27%20height%3D%27100%27%20viewBox%3D%270%200%20100%20100%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20stroke%3D%27%233B82F6%27%20stroke-width%3D%270.5%27%20opacity%3D%270.1%27%3E%3Cpath%20d%3D%27M0%200L50%2050L0%20100M50%200L100%2050L50%20100%27/%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20"></div>
        
        {/* Floating particles */}
        <AnimatePresence>
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              className="absolute"
              style={{
                left: particle.x,
                top: particle.y,
                transform: `rotate(${particle.rotation}deg)`
              }}
              initial={{ opacity: 1, scale: 0 }}
              animate={{ opacity: particle.life / 100, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <div 
                className="rounded-full blur-sm"
                style={{
                  width: particle.size,
                  height: particle.size,
                  backgroundColor: particle.color,
                  boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-black/60 backdrop-blur-xl border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
                MY INVENTORY
              </h1>
              <p className="text-slate-400 mt-1">Manage your items and open mystery crates</p>
            </div>
            
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl transition-all border border-slate-700"
            >
              {soundEnabled ? <Volume2 className="w-5 h-5 text-blue-400" /> : <VolumeX className="w-5 h-5 text-slate-400" />}
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setActiveTab('owned')}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'owned'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                Owned Items
              </div>
            </button>
            <button
              onClick={() => setActiveTab('lootboxes')}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'lootboxes'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5" />
                Mystery Crates
                {lootboxes.reduce((sum, box) => sum + box.quantity, 0) > 0 && (
                  <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                    {lootboxes.reduce((sum, box) => sum + box.quantity, 0)}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Server Filter */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-4 mb-8">
          <Server className="w-5 h-5 text-blue-400" />
          <select
            value={selectedServer}
            onChange={(e) => setSelectedServer(e.target.value)}
            className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-blue-400 transition-all"
          >
            {servers.map(server => (
              <option key={server.id} value={server.id}>{server.name}</option>
            ))}
          </select>
        </div>

        {/* Content */}
        {activeTab === 'owned' ? (
          /* Owned Items Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredOwnedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border-2 ${
                  getRarityStyles(item.rarity).border
                } hover:scale-105 transition-all duration-300 group`}
              >
                {/* Rarity glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getRarityStyles(item.rarity).color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                
                {/* Item image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Rarity badge */}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r ${
                    getRarityStyles(item.rarity).color
                  } text-white uppercase tracking-wider`}>
                    {item.rarity}
                  </div>

                  {/* Server badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs bg-black/80 backdrop-blur-sm">
                    <div className="flex items-center gap-1">
                      <Server className="w-3 h-3" />
                      {item.server}
                    </div>
                  </div>
                </div>

                {/* Item info */}
                <div className="relative p-4">
                  <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                  
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <img src={item.typeImage} alt={item.type} className="w-6 h-6 rounded-full object-cover" />
                      <span className="capitalize">{item.type}</span>
                    </div>
                    
                    {item.duration && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.duration}
                      </div>
                    )}
                  </div>

                  <div className="mt-3 text-xs text-slate-500">
                    Purchased: {new Date(item.purchaseDate).toLocaleDateString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Lootboxes Grid - Call of Duty Style */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLootboxes.map((lootbox, index) => (
              <motion.div
                key={lootbox.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* 3D Military Crate Design */}
                <div className="relative">
                  {/* Crate Container */}
                  <div className={`relative bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-2xl overflow-hidden border-2 ${
                    getRarityStyles(lootbox.rarity).border
                  } shadow-2xl transform transition-all duration-500 hover:scale-105`}
                  style={{
                    boxShadow: `0 0 50px ${lootbox.glowColor}40, inset 0 0 50px ${lootbox.glowColor}20`
                  }}>
                    
                    {/* Military pattern background */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%27100%27%20height%3D%27100%27%20viewBox%3D%270%200%20100%20100%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20stroke%3D%27white%27%20stroke-width%3D%270.5%27%20opacity%3D%270.2%27%3E%3Cpath%20d%3D%27M0%200h100v100h-100zM20%2020h60v60h-60zM40%2040h20v20h-20z%27/%3E%3C/g%3E%3C/svg%3E')]"></div>
                    </div>

                    {/* Animated glow pulse */}
                    <motion.div
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(circle at center, ${lootbox.glowColor}40 0%, transparent 70%)`,
                      }}
                    />

                    {/* Crate image with 3D effect */}
                    <div className="relative h-72 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                      
                      {/* 3D Crate Visual */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ 
                            rotateY: [0, 360],
                          }}
                          transition={{ 
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="relative w-48 h-48 transform-gpu"
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          {/* Crate faces */}
                          <div className={`absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 border-4 ${getRarityStyles(lootbox.rarity).border} rounded-xl flex items-center justify-center`}
                            style={{ 
                              transform: 'translateZ(96px)',
                              boxShadow: `inset 0 0 50px ${lootbox.glowColor}40`
                            }}>
                           <div
  className={`absolute inset-0 rounded-xl overflow-hidden border-4 ${getRarityStyles(lootbox.rarity).border}`}
  style={{
    transform: 'translateZ(96px)',
    boxShadow: `inset 0 0 50px ${lootbox.glowColor}40`,
    backgroundColor: '#000'
  }}
>
  <img
    src={lootbox.image}
    alt={lootbox.name}
    className="w-full h-full object-cover"
  />
</div>

                          </div>
                          <div className={`absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 border-4 ${getRarityStyles(lootbox.rarity).border} rounded-xl`}
                            style={{ 
                              transform: 'rotateY(180deg) translateZ(96px)',
                              boxShadow: `inset 0 0 50px ${lootbox.glowColor}40`
                            }}>
                          </div>
                          <div className={`absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 border-4 ${getRarityStyles(lootbox.rarity).border} rounded-xl`}
                            style={{ 
                              transform: 'rotateY(90deg) translateZ(96px)',
                              boxShadow: `inset 0 0 50px ${lootbox.glowColor}40`
                            }}>
                          </div>
                          <div className={`absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 border-4 ${getRarityStyles(lootbox.rarity).border} rounded-xl`}
                            style={{ 
                              transform: 'rotateY(-90deg) translateZ(96px)',
                              boxShadow: `inset 0 0 50px ${lootbox.glowColor}40`
                            }}>
                          </div>
                        </motion.div>
                      </div>

                      {/* Floating elements */}
                      <motion.div
                        animate={{ 
                          y: [-10, 10, -10],
                          x: [-5, 5, -5]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute top-8 right-8"
                      >
                        <Sparkles className="w-8 h-8 text-yellow-400 drop-shadow-glow" />
                      </motion.div>
                      <motion.div
                        animate={{ 
                          y: [10, -10, 10],
                          x: [5, -5, 5]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                        className="absolute bottom-8 left-8"
                      >
                        <Star className="w-6 h-6 text-yellow-400 drop-shadow-glow" />
                      </motion.div>

                      {/* Rarity indicator */}
                      <div className="absolute top-4 left-4 z-20">
                        <div className={`px-4 py-2 rounded-full text-sm font-black bg-black/80 backdrop-blur-sm border-2 ${getRarityStyles(lootbox.rarity).border} ${getRarityStyles(lootbox.rarity).textColor} uppercase tracking-wider`}>
                          {lootbox.rarity} CRATE
                        </div>
                      </div>
                    </div>

                    {/* Crate info */}
                    <div className="relative p-6 z-10 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-black mb-2 tracking-wide">{lootbox.name}</h3>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <Server className="w-4 h-4" />
                          {lootbox.server}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-400 text-sm font-bold">AVAILABLE</span>
                        </div>
                      </div>

                      {/* Quantity display */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-slate-400 text-sm uppercase tracking-wide">Crates Available:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-4xl font-black text-white">{lootbox.quantity}</span>
                          <span className="text-slate-400 text-xl">×</span>
                        </div>
                      </div>

                      {/* Open button - Call of Duty style */}
                      <button
                        onClick={() => openLootbox(lootbox)}
                        disabled={lootbox.quantity === 0}
                        className={`w-full py-4 rounded-xl font-black text-white transition-all duration-300 uppercase tracking-wider ${
                          lootbox.quantity > 0
                            ? `bg-gradient-to-r ${getRarityStyles(lootbox.rarity).color} hover:shadow-2xl hover:scale-105 active:scale-95`
                            : 'bg-slate-700 cursor-not-allowed opacity-50'
                        }`}
                        style={{
                          boxShadow: lootbox.quantity > 0 ? `0 10px 30px ${lootbox.glowColor}60` : 'none'
                        }}
                      >
                        <div className="flex items-center justify-center gap-3">
                          {lootbox.quantity > 0 ? (
                            <>
                              <Unlock className="w-6 h-6" />
                              OPEN CRATE
                              <ChevronRight className="w-6 h-6" />
                            </>
                          ) : (
                            <>
                              <Lock className="w-6 h-6" />
                              NO CRATES
                            </>
                          )}
                        </div>
                      </button>

                      {/* Preview possible items */}
                      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                        <span className="uppercase tracking-wide">Contains:</span>
                        <div className="flex -space-x-3">
                          {lootbox.possibleItems.slice(0, 4).map((item, idx) => (
                            <div
                              key={idx}
                              className={`w-8 h-8 rounded-full border-2 border-slate-800 overflow-hidden transform hover:scale-110 hover:z-10 transition-all ${getRarityStyles(item.rarity).bg}`}
                              title={item.name}
                            >
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                          ))}
                          {lootbox.possibleItems.length > 4 && (
                            <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-xs text-slate-400 font-bold">
                              +{lootbox.possibleItems.length - 4}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lootbox Opening Modal - Call of Duty Style */}
      <AnimatePresence>
        {selectedLootbox && isOpening && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-6"
            onClick={openingStage === 'revealed' ? closeLootboxModal : undefined}
          >
            <div className="relative w-full max-w-5xl">
              {/* Stage-based content */}
              {openingStage === 'starting' && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center"
                >
                  <motion.h2 
                    animate={{ 
                      textShadow: [
                        '0 0 20px #3B82F6',
                        '0 0 40px #8B5CF6',
                        '0 0 20px #3B82F6'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wider"
                  >
                    {selectedLootbox.name}
                  </motion.h2>
                  <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-slate-400 flex items-center justify-center gap-3 text-xl"
                  >
                    <MousePointer2 className="w-6 h-6" />
                    PREPARE FOR DEPLOYMENT...
                  </motion.div>
                </motion.div>
              )}

              {(openingStage === 'charging' || openingStage === 'shaking' || openingStage === 'glowing' || openingStage === 'exploding') && (
                <div className="relative">
                  {/* 3D Crate Opening Animation */}
                  <div className="relative flex items-center justify-center h-[500px]">
                    <motion.div
                      animate={
                        openingStage === 'charging' ? {
                          scale: [1, 1.1, 1],
                          filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
                        } : openingStage === 'shaking' ? {
                          x: [-5, 5, -5, 5, 0],
                          y: [-2, 2, -2, 2, 0],
                          rotate: [-2, 2, -2, 2, 0]
                        } : openingStage === 'glowing' ? {
                          scale: [1.1, 1.2, 1.1],
                          filter: ['brightness(1.2)', 'brightness(2)', 'brightness(1.2)']
                        } : {
                          scale: [1.2, 3, 0],
                          rotate: [0, 180, 720],
                          opacity: [1, 1, 0]
                        }
                      }
                      transition={{
                        duration: openingStage === 'exploding' ? 0.8 : 
                                 openingStage === 'glowing' ? 1 : 1.5,
                        repeat: openingStage === 'exploding' ? 0 : Infinity,
                        ease: openingStage === 'exploding' ? "easeOut" : "easeInOut"
                      }}
                      className="relative"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Main crate */}
                      <div 
                        className="relative w-80 h-80 transform-gpu"
                        style={{ 
                          transformStyle: 'preserve-3d',
                          transform: `rotateY(${openingStage === 'glowing' ? rotationY : 0}deg)`
                        }}
                      >
                        {/* Crate box */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-black border-4 ${
                          getRarityStyles(selectedLootbox.rarity).border
                        } flex items-center justify-center overflow-hidden`}
                        style={{ 
                          boxShadow: `0 0 ${openingStage === 'glowing' ? '100' : '50'}px ${selectedLootbox.glowColor}, inset 0 0 ${openingStage === 'glowing' ? '100' : '50'}px ${selectedLootbox.glowColor}60`
                        }}>
                          {/* Military pattern */}
                          <div className="absolute inset-0 opacity-30">
                           <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%27100%27%20height%3D%27100%27%20viewBox%3D%270%200%20100%20100%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20stroke%3D%27white%27%20stroke-width%3D%271%27%20opacity%3D%270.3%27%3E%3Cpath%20d%3D%27M10%2010h80v80h-80zM30%2030h40v40h-40z%27/%3E%3C/g%3E%3C/svg%3E')]"></div>
                          </div>
                          
                          {/* Central icon */}
                          <motion.div
                            animate={{ 
                              rotate: openingStage === 'glowing' ? 360 : 0,
                              scale: openingStage === 'glowing' ? [1, 1.2, 1] : 1
                            }}
                            transition={{ 
                              duration: openingStage === 'glowing' ? 2 : 0,
                              repeat: openingStage === 'glowing' ? Infinity : 0
                            }}
                          >
                            <Gift className="w-32 h-32 text-white opacity-80 drop-shadow-2xl" />
                          </motion.div>

                          {/* Energy effects */}
                          {openingStage === 'glowing' && (
                            <>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0.8, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="absolute inset-0"
                                style={{
                                  background: `radial-gradient(circle at center, ${selectedLootbox.glowColor} 0%, transparent 70%)`,
                                }}
                              />
                              {/* Lightning effects */}
                              {[...Array(6)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ 
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0],
                                    rotate: [0, 360]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.3
                                  }}
                                  className="absolute top-1/2 left-1/2 w-full h-full"
                                  style={{
                                    transform: `translate(-50%, -50%) rotate(${i * 60}deg)`
                                  }}
                                >
                                  <div className="absolute top-0 left-1/2 w-1 h-20 -translate-x-1/2"
                                    style={{
                                      background: `linear-gradient(to bottom, transparent, ${selectedLootbox.glowColor}, transparent)`
                                    }}
                                  />
                                </motion.div>
                              ))}
                            </>
                          )}
                        </div>

                        {/* Orbiting particles */}
                        {(openingStage === 'charging' || openingStage === 'glowing') && (
                          <>
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ 
                                  opacity: [0, 1, 0],
                                  scale: [0, 1.5, 0]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.25
                                }}
                                className="absolute top-1/2 left-1/2"
                                style={{
                                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-200px)`
                                }}
                              >
                                <div className="w-4 h-4 rounded-full"
                                  style={{
                                    backgroundColor: selectedLootbox.glowColor,
                                    boxShadow: `0 0 20px ${selectedLootbox.glowColor}`
                                  }}
                                />
                              </motion.div>
                            ))}
                          </>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Stage text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mt-12"
                  >
                    <p className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wider">
                      {openingStage === 'charging' && 'INITIATING SEQUENCE...'}
                      {openingStage === 'shaking' && 'ENERGY DETECTED!'}
                      {openingStage === 'glowing' && 'MAXIMUM POWER!'}
                      {openingStage === 'exploding' && 'BREACH DETECTED!'}
                    </p>
                  </motion.div>
                </div>
              )}

              {(openingStage === 'revealing' || openingStage === 'revealed') && revealedItem && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", duration: 1 }}
                  className="relative"
                >
                  {/* Victory screen */}
                  <div className="text-center mb-8">
                    <motion.h2
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className={`text-5xl font-black uppercase mb-2 ${getRarityStyles(revealedItem.rarity).textColor}`}
                      style={{
                        textShadow: `0 0 30px ${getRarityStyles(revealedItem.rarity).particleColor}`
                      }}
                    >
                      {revealedItem.rarity} DROP!
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-slate-400 text-xl"
                    >
                      ITEM ACQUIRED
                    </motion.p>
                  </div>

                  {/* Reward display */}
                  <motion.div
                    initial={{ rotateY: 180, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className={`relative mx-auto w-[400px] rounded-3xl overflow-hidden ${getRarityStyles(revealedItem.rarity).glow} shadow-2xl`}
                    style={{
                      boxShadow: `0 0 100px ${getRarityStyles(revealedItem.rarity).particleColor}60`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Card background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${getRarityStyles(revealedItem.rarity).color} opacity-20`}></div>
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
                    
                    {/* Card content */}
                    <div className="relative z-10 p-8">
                      {/* Item image */}
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                        className="relative mb-6"
                      >
                        <div className={`rounded-2xl overflow-hidden border-4 ${getRarityStyles(revealedItem.rarity).border}`}>
                          <img 
                            src={revealedItem.image}
                            alt={revealedItem.name}
                            className="w-full h-56 object-cover"
                          />
                        </div>
                        
                        {/* Item type badge */}
                        <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full bg-gradient-to-r ${
                          getRarityStyles(revealedItem.rarity).color
                        } shadow-2xl`}>
                          <img 
                            src={revealedItem.typeImage} 
                            alt={revealedItem.type}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        </div>
                      </motion.div>

                      {/* Item name */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-center mt-10"
                      >
                        <h4 className="text-3xl font-black text-white mb-2 uppercase tracking-wide">{revealedItem.name}</h4>
                        <p className="text-slate-400">Successfully added to your inventory!</p>
                      </motion.div>

                      {/* Rarity stats */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mt-6 text-center"
                      >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full">
                          <Trophy className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm text-slate-400">Drop Rate: {revealedItem.chance}%</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Action buttons */}
                  {openingStage === 'revealed' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                      className="flex justify-center gap-4 mt-12"
                    >
                      <button
                        onClick={closeLootboxModal}
                        className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold uppercase tracking-wider transition-all"
                      >
                        CLOSE
                      </button>
                      {selectedLootbox.quantity > 1 && (
                        <button
                          onClick={() => {
                            setOpeningStage('idle');
                            setRevealedItem(null);
                            openLootbox({...selectedLootbox, quantity: selectedLootbox.quantity - 1});
                          }}
                          className={`px-8 py-4 bg-gradient-to-r ${getRarityStyles(selectedLootbox.rarity).color} rounded-xl font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg`}
                          style={{
                            boxShadow: `0 10px 30px ${selectedLootbox.glowColor}60`
                          }}
                        >
                          OPEN ANOTHER ({selectedLootbox.quantity - 1} LEFT)
                        </button>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .drop-shadow-glow {
          filter: drop-shadow(0 0 10px currentColor);
        }
      `}</style>
    </div>
  );
};

export default PlayerInventory;