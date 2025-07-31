import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Star,
    Users,
    ShoppingBag,
    Gamepad2,
    Crown,
    Zap,
    Shield,
    TrendingUp,
    Award,
    Globe,
    Server,
    Heart,
    MessageCircle,
    ExternalLink,
    ChevronRight,
    Eye,
    ThumbsUp,
    Clock,
    Package,
    DollarSign,
    Target,
    Sparkles,
    Gift,
    Car,
    Swords,
    User,
    LogIn,
    X,
    Check,
    Coins,
    Activity,
    Settings,
    HelpCircle,
    Twitter,
    Youtube,
    Instagram,
    Facebook,
    Headphones,
    RefreshCw,
    Monitor,
    Layers,
    Play,
    Download,
    Flame,
    Diamond
} from "lucide-react";

const FiveMPlatformHomepage = () => {
    // Authentication state
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [user, setUser] = useState(null);
    const [loginMethod, setLoginMethod] = useState('discord');

    // Platform state
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSort, setSelectedSort] = useState("popular");

    // Sample stores data with more visual content
    const [stores] = useState([
        {
            id: 1,
            name: "Los Santos Roleplay",
            description: "Premium GTA V roleplay experience with custom vehicles, weapons, and exclusive VIP content for the ultimate street life.",
            logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=200&h=200&fit=crop",
            banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
            ],
            category: "roleplay",
            rating: 4.8,
            reviews: 2847,
            players: 156,
            maxPlayers: 200,
            products: 89,
            totalSales: 15420,
            joinCode: "connect lsrp.gg",
            features: ["Custom MLOs", "Custom Vehicles", "VIP System", "Active Staff"],
            status: "online",
            verified: true,
            featured: true,
            trending: true,
            tags: ["roleplay", "serious", "whitelisted", "economy"],
            screenshots: 4
        },
        {
            id: 2,
            name: "Night City Gaming",
            description: "Cyberpunk-themed FiveM server with futuristic cars, weapons, and neon-lit gameplay in a dystopian world.",
            logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=200&fit=crop",
            banner: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=400&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1586241800413-c35ab0c3e48f?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?w=300&h=200&fit=crop"
            ],
            category: "themed",
            rating: 4.6,
            reviews: 1923,
            players: 89,
            maxPlayers: 128,
            products: 67,
            totalSales: 8930,
            joinCode: "connect nightcity.gg",
            features: ["Cyberpunk Theme", "Custom Scripts", "Events", "24/7 Support"],
            status: "online",
            verified: true,
            featured: false,
            trending: false,
            tags: ["cyberpunk", "themed", "custom", "events"],
            screenshots: 8
        },
        {
            id: 3,
            name: "Drift Kings Racing",
            description: "The ultimate racing server with custom tracks, performance cars, and competitive events for speed enthusiasts.",
            logo: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&h=200&fit=crop",
            banner: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=400&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&h=200&fit=crop"
            ],
            category: "racing",
            rating: 4.9,
            reviews: 3421,
            players: 234,
            maxPlayers: 300,
            products: 156,
            totalSales: 22150,
            joinCode: "connect driftkings.net",
            features: ["Custom Tracks", "Racing Events", "Leaderboards", "Car Tuning"],
            status: "online",
            verified: true,
            featured: true,
            trending: true,
            tags: ["racing", "competitive", "cars", "events"],
            screenshots: 12
        },
        {
            id: 4,
            name: "Zombie Apocalypse RP",
            description: "Survival roleplay server with zombies, crafting, and intense PvP action in a post-apocalyptic world.",
            logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
            banner: "https://images.unsplash.com/photo-1586241800413-c35ab0c3e48f?w=800&h=400&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1544717684-75b1f6ffc7dc?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
            ],
            category: "survival",
            rating: 4.5,
            reviews: 1567,
            players: 67,
            maxPlayers: 100,
            products: 45,
            totalSales: 5680,
            joinCode: "connect zombierp.com",
            features: ["Zombie Hordes", "Base Building", "PvP Zones", "Crafting System"],
            status: "online",
            verified: false,
            featured: false,
            trending: false,
            tags: ["survival", "zombies", "pvp", "crafting"],
            screenshots: 6
        },
        {
            id: 5,
            name: "Mafia City",
            description: "Criminal roleplay with organized crime families, heists, and underground economy in the dark streets.",
            logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop",
            banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=300&h=200&fit=crop"
            ],
            category: "crime",
            rating: 4.7,
            reviews: 2156,
            players: 145,
            maxPlayers: 180,
            products: 78,
            totalSales: 12340,
            joinCode: "connect mafiacity.rp",
            features: ["Crime Families", "Heist System", "Drug Trade", "Corruption"],
            status: "online",
            verified: true,
            featured: false,
            trending: true,
            tags: ["crime", "mafia", "heists", "economy"],
            screenshots: 9
        },
        {
            id: 6,
            name: "Police Academy RP",
            description: "Law enforcement focused server with realistic police procedures and training for justice seekers.",
            logo: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?w=200&h=200&fit=crop",
            banner: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=400&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop"
            ],
            category: "law",
            rating: 4.4,
            reviews: 1234,
            players: 78,
            maxPlayers: 120,
            products: 34,
            totalSales: 4560,
            joinCode: "connect policeacademy.rp",
            features: ["Police Training", "CAD System", "Court System", "Emergency Services"],
            status: "maintenance",
            verified: true,
            featured: false,
            trending: false,
            tags: ["police", "law", "realistic", "training"],
            screenshots: 5
        }
    ]);

    // Platform stats
    const [platformStats] = useState({
        totalServers: 127,
        totalPlayers: 15420,
        totalProducts: 2847,
        totalSales: 1250000
    });

    // Animated background particles
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const newParticles = [];
        for (let i = 0; i < 40; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                size: Math.random() * 6 + 2,
                speedX: (Math.random() - 0.5) * 3,
                speedY: (Math.random() - 0.5) * 3,
                opacity: Math.random() * 0.7 + 0.3,
                color: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 5)]
            });
        }
        setParticles(newParticles);

        const interval = setInterval(() => {
            setParticles(prev => prev.map(particle => ({
                ...particle,
                x: (particle.x + particle.speedX) % (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: (particle.y + particle.speedY) % (typeof window !== 'undefined' ? window.innerHeight : 800)
            })));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    // Filter stores
    const filteredStores = stores.filter(store => {
        const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            store.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            store.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesSearch;
    });

    // Sort stores
    const sortedStores = [...filteredStores].sort((a, b) => {
        switch (selectedSort) {
            case "rating":
                return b.rating - a.rating;
            case "players":
                return b.players - a.players;
            case "products":
                return b.products - a.products;
            case "newest":
                return b.id - a.id;
            case "popular":
            default:
                return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.totalSales - a.totalSales;
        }
    });

    // Login functions
    const handleLogin = (method) => {
        setLoginMethod(method);
        setTimeout(() => {
            setUser({
                id: 123,
                username: method === 'discord' ? "ProGamer#1234" : "ProGamer_2024",
                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
                platform: method,
                joinedDate: new Date(),
                favoriteServers: [1, 3],
                totalPurchases: 156
            });
            setIsAuthenticated(true);
            setShowLoginModal(false);
        }, 2000);
    };

    const handleLogout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Enhanced Animated Background */}
            <div className="fixed inset-0 z-0">
                {particles.map(particle => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full blur-sm"
                        style={{
                            left: particle.x,
                            top: particle.y,
                            width: particle.size,
                            height: particle.size,
                            backgroundColor: particle.color,
                            opacity: particle.opacity
                        }}
                        animate={{
                            scale: [0.5, 1.2, 0.5],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: particle.id * 0.1,
                        }}
                    />
                ))}
                
                {/* Gaming Pattern Overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-32 h-32 border-2 border-blue-400 rotate-45"></div>
                    <div className="absolute top-32 right-20 w-24 h-24 border-2 border-purple-400 rotate-12"></div>
                    <div className="absolute bottom-20 left-32 w-28 h-28 border-2 border-green-400 -rotate-45"></div>
                    <div className="absolute bottom-32 right-10 w-20 h-20 border-2 border-amber-400 rotate-90"></div>
                </div>
            </div>

            <div className="relative z-10">
                {/* Enhanced Header */}
                <header className="bg-black/95 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50 shadow-2xl">
                    <div className="max-w-7xl mx-auto px-6 py-5">
                        <div className="flex items-center justify-between">
                            {/* Enhanced Logo */}
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                                        <Gamepad2 className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                                        <Sparkles className="w-3 h-3 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-3xl font-black text-white">
                                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                            FiveM Stores
                                        </span>
                                    </h1>
                                    <p className="text-slate-400 text-sm font-semibold">Premium Gaming Marketplace ⭐</p>
                                </div>
                            </div>

                            {/* Enhanced Navigation */}
                            <nav className="hidden md:flex items-center gap-8">
                                <a href="#" className="text-slate-300 hover:text-white transition-colors font-semibold flex items-center gap-2">
                                    <Globe className="w-4 h-4" />
                                    Servers
                                </a>
                                <a href="#" className="text-slate-300 hover:text-white transition-colors font-semibold flex items-center gap-2">
                                    <Package className="w-4 h-4" />
                                    Products
                                </a>
                                <a href="#" className="text-slate-300 hover:text-white transition-colors font-semibold flex items-center gap-2">
                                    <Award className="w-4 h-4" />
                                    Featured
                                </a>
                                <a href="#" className="text-slate-300 hover:text-white transition-colors font-semibold flex items-center gap-2">
                                    <HelpCircle className="w-4 h-4" />
                                    Support
                                </a>
                            </nav>

                            {/* Enhanced User Area */}
                            <div className="flex items-center gap-4">
                                {!isAuthenticated ? (
                                    <button
                                        onClick={() => setShowLoginModal(true)}
                                        className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl transition-all flex items-center gap-3 shadow-2xl transform hover:scale-105"
                                    >
                                        <LogIn className="w-5 h-5" />
                                        Join Now
                                        <Sparkles className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-3 bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-600/30">
                                            <img
                                                src={user.avatar}
                                                alt="Avatar"
                                                className="w-10 h-10 rounded-full border-2 border-blue-400/50"
                                            />
                                            <div>
                                                <div className="text-white font-bold text-sm">{user.username}</div>
                                                <div className="text-green-400 text-xs font-semibold">⭐ {user.totalPurchases} purchases</div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="p-4 bg-slate-800/60 hover:bg-slate-700/60 rounded-2xl transition-colors border border-slate-600/30"
                                        >
                                            <Settings className="w-5 h-5 text-slate-400" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Enhanced Hero Section */}
                <section className="relative py-24 overflow-hidden">
                    {/* Hero Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop"
                            alt="Gaming Background"
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/90"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Gaming Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 px-6 py-3 rounded-full mb-8"
                            >
                                <Flame className="w-5 h-5 text-orange-400" />
                                <span className="text-white font-bold">🔥 Most Popular FiveM Platform</span>
                                <Diamond className="w-5 h-5 text-blue-400" />
                            </motion.div>

                            <h1 className="text-7xl font-black mb-8 leading-tight">
                                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                                    ULTIMATE GAMING
                                </span>
                                <span className="text-white block">MARKETPLACE</span>
                                <span className="text-2xl text-slate-300 font-normal block mt-4">
                                    🎮 Where Legends Are Made 🏆
                                </span>
                            </h1>
                            
                            <p className="text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
                                Discover the <span className="text-blue-400 font-bold">best FiveM servers</span> and unlock 
                                <span className="text-purple-400 font-bold"> exclusive content</span>, 
                                <span className="text-green-400 font-bold"> premium vehicles</span>, 
                                <span className="text-amber-400 font-bold"> legendary weapons</span>, and 
                                <span className="text-pink-400 font-bold"> VIP memberships</span>. 
                                Join <span className="text-orange-400 font-bold">15,000+ players</span> in the most immersive gaming experience! ✨
                            </p>
                            
                            {/* Enhanced Stats with Images */}
                            <div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-400/20 rounded-full -mr-8 -mt-8"></div>
                                    <Server className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                                    <div className="text-5xl font-black text-blue-400 mb-2">{platformStats.totalServers}+</div>
                                    <div className="text-slate-300 font-semibold">Premium Servers</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-sm rounded-3xl p-8 border border-green-400/30 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-green-400/20 rounded-full -mr-8 -mt-8"></div>
                                    <Users className="w-10 h-10 text-green-400 mx-auto mb-4" />
                                    <div className="text-5xl font-black text-green-400 mb-2">{(platformStats.totalPlayers / 1000).toFixed(1)}K+</div>
                                    <div className="text-slate-300 font-semibold">Active Players</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="bg-gradient-to-br from-purple-500/20 to-purple-600/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-purple-400/20 rounded-full -mr-8 -mt-8"></div>
                                    <Package className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                                    <div className="text-5xl font-black text-purple-400 mb-2">{(platformStats.totalProducts / 1000).toFixed(1)}K+</div>
                                    <div className="text-slate-300 font-semibold">Premium Items</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="bg-gradient-to-br from-amber-500/20 to-amber-600/30 backdrop-blur-sm rounded-3xl p-8 border border-amber-400/30 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-amber-400/20 rounded-full -mr-8 -mt-8"></div>
                                    <DollarSign className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                                    <div className="text-5xl font-black text-amber-400 mb-2">${(platformStats.totalSales / 1000000).toFixed(1)}M+</div>
                                    <div className="text-slate-300 font-semibold">Total Sales</div>
                                </motion.div>
                            </div>

                            {/* Enhanced Search Bar */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="max-w-3xl mx-auto"
                            >
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                    <div className="relative bg-black/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-2">
                                        <div className="flex items-center">
                                            <Search className="absolute left-8 text-slate-400 w-7 h-7" />
                                            <input
                                                type="text"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                placeholder="🔍 Search for servers, cars, weapons, VIP packages..."
                                                className="flex-1 pl-20 pr-8 py-6 bg-transparent text-white text-xl placeholder-slate-400 focus:outline-none font-medium"
                                            />
                                            <button className="px-10 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl transition-all flex items-center gap-3 shadow-2xl">
                                                <span>Search</span>
                                                <Sparkles className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Trust Badges */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="flex items-center justify-center gap-12 mt-16"
                            >
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Shield className="w-6 h-6 text-green-400" />
                                    <span className="font-semibold">🔒 Secure Payments</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Zap className="w-6 h-6 text-blue-400" />
                                    <span className="font-semibold">⚡ Instant Delivery</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Award className="w-6 h-6 text-purple-400" />
                                    <span className="font-semibold">🏆 Premium Quality</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Enhanced Filters & Sort */}
                <section className="py-8 border-y border-slate-700/50 bg-black/40 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className="text-white font-bold text-lg">
                                    🎮 {sortedStores.length} Gaming Servers Found
                                </div>
                                {searchTerm && (
                                    <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-xl">
                                        <span className="text-blue-300 font-medium">Searching: "{searchTerm}"</span>
                                    </div>
                                )}
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <span className="text-slate-400 font-medium">🎯 Sort by:</span>
                                <select
                                    value={selectedSort}
                                    onChange={(e) => setSelectedSort(e.target.value)}
                                    className="bg-slate-800/80 border border-slate-600 rounded-xl px-6 py-3 text-white font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 backdrop-blur-sm"
                                >
                                    <option value="popular">🔥 Most Popular</option>
                                    <option value="rating">⭐ Highest Rated</option>
                                    <option value="players">👥 Most Players</option>
                                    <option value="products">📦 Most Products</option>
                                    <option value="newest">🆕 Newest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enhanced Servers Grid */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {sortedStores.map((store, index) => (
                                <motion.div
                                    key={store.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.15 }}
                                    whileHover={{ y: -12, scale: 1.02 }}
                                    className="group relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 shadow-2xl hover:shadow-blue-500/10 cursor-pointer"
                                    onClick={() => window.location.href = `/store/${store.id}`}
                                >
                                    {/* Enhanced Server Banner */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={store.banner}
                                            alt={store.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                        
                                        {/* Enhanced Status & Badges */}
                                        <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                                            <div className="flex flex-wrap gap-3">
                                                {store.featured && (
                                                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl">
                                                        <Crown className="w-4 h-4 fill-current" />
                                                        ⭐ Featured
                                                    </div>
                                                )}
                                                {store.trending && (
                                                    <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl">
                                                        <Flame className="w-4 h-4" />
                                                        🔥 Trending
                                                    </div>
                                                )}
                                                {store.verified && (
                                                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl">
                                                        <Check className="w-4 h-4" />
                                                        ✅ Verified
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl ${
                                                store.status === 'online' 
                                                    ? 'bg-green-500 text-white' 
                                                    : 'bg-orange-500 text-white'
                                            }`}>
                                                <div className={`w-2 h-2 rounded-full ${store.status === 'online' ? 'bg-green-200' : 'bg-orange-200'}`}></div>
                                                {store.status === 'online' ? '🟢 Online' : '🟡 Maintenance'}
                                            </div>
                                        </div>

                                        {/* Enhanced Server Logo */}
                                        <div className="absolute bottom-6 left-6">
                                            <div className="relative">
                                                <img
                                                    src={store.logo}
                                                    alt={store.name}
                                                    className="w-20 h-20 rounded-2xl border-4 border-white/30 shadow-2xl"
                                                />
                                                <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-400/50"></div>
                                            </div>
                                        </div>

                                        {/* Enhanced Player Count */}
                                        <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-sm px-4 py-3 rounded-2xl border border-slate-600/50">
                                            <div className="flex items-center gap-3 text-white">
                                                <Users className="w-5 h-5 text-green-400" />
                                                <div>
                                                    <div className="font-bold text-lg">{store.players}/{store.maxPlayers}</div>
                                                    <div className="text-xs text-slate-300">👥 Players</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Screenshot Count */}
                                        <div className="absolute top-6 right-6">
                                            <div className="bg-black/60 backdrop-blur-sm px-3 py-2 rounded-xl border border-slate-600/30 flex items-center gap-2">
                                                <Eye className="w-4 h-4 text-blue-400" />
                                                <span className="text-white text-sm font-medium">{store.screenshots} 📸</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Enhanced Server Details */}
                                    <div className="p-8">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                                                    {store.name}
                                                </h3>
                                                <p className="text-slate-400 text-base leading-relaxed mb-4 line-clamp-3">
                                                    {store.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Enhanced Stats Grid */}
                                        <div className="grid grid-cols-4 gap-4 mb-6">
                                            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/30 rounded-2xl p-4 text-center border border-yellow-400/30">
                                                <div className="flex items-center justify-center gap-2 mb-2">
                                                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                                    <span className="text-white font-bold text-lg">{store.rating}</span>
                                                </div>
                                                <div className="text-slate-400 text-xs font-medium">⭐ {store.reviews} reviews</div>
                                            </div>
                                            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/30 rounded-2xl p-4 text-center border border-blue-400/30">
                                                <div className="flex items-center justify-center gap-2 mb-2">
                                                    <Package className="w-5 h-5 text-blue-400" />
                                                    <span className="text-white font-bold text-lg">{store.products}</span>
                                                </div>
                                                <div className="text-slate-400 text-xs font-medium">📦 products</div>
                                            </div>
                                            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/30 rounded-2xl p-4 text-center border border-green-400/30">
                                                <div className="flex items-center justify-center gap-2 mb-2">
                                                    <TrendingUp className="w-5 h-5 text-green-400" />
                                                    <span className="text-white font-bold text-lg">{(store.totalSales / 1000).toFixed(1)}k</span>
                                                </div>
                                                <div className="text-slate-400 text-xs font-medium">💰 sales</div>
                                            </div>
                                            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/30 rounded-2xl p-4 text-center border border-red-400/30">
                                                <div className="flex items-center justify-center gap-2 mb-2">
                                                    <Heart className="w-5 h-5 text-red-400" />
                                                    <span className="text-white font-bold text-lg">{isAuthenticated && user.favoriteServers.includes(store.id) ? '❤️' : '🤍'}</span>
                                                </div>
                                                <div className="text-slate-400 text-xs font-medium">💝 favorite</div>
                                            </div>
                                        </div>

                                        {/* Enhanced Gallery Preview */}
                                        <div className="mb-6">
                                            <div className="text-slate-300 font-bold mb-3 flex items-center gap-2">
                                                <Eye className="w-4 h-4" />
                                                📸 Server Gallery
                                            </div>
                                            <div className="grid grid-cols-3 gap-3">
                                                {store.gallery.map((image, idx) => (
                                                    <div key={idx} className="relative group/img">
                                                        <img
                                                            src={image}
                                                            alt={`${store.name} gallery ${idx + 1}`}
                                                            className="w-full h-20 object-cover rounded-xl border border-slate-600/50 group-hover/img:scale-105 transition-transform duration-300"
                                                        />
                                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                                                            <Eye className="w-5 h-5 text-white" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Enhanced Features */}
                                        <div className="mb-6">
                                            <div className="text-slate-300 font-bold mb-3 flex items-center gap-2">
                                                <Sparkles className="w-4 h-4" />
                                                ✨ Server Features
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                {store.features.map((feature, idx) => (
                                                    <span 
                                                        key={idx}
                                                        className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-slate-200 px-4 py-2 rounded-xl text-sm font-medium border border-slate-600/30 flex items-center gap-2"
                                                    >
                                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Enhanced Actions */}
                                        <div className="flex gap-4">
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigator.clipboard.writeText(store.joinCode);
                                                }}
                                                className="flex-1 py-4 bg-gradient-to-r from-slate-700/80 to-slate-600/80 hover:from-slate-600/80 hover:to-slate-500/80 text-slate-200 font-bold rounded-2xl transition-all border border-slate-600/50 flex items-center justify-center gap-3 backdrop-blur-sm"
                                            >
                                                <Server className="w-5 h-5" />
                                                🔗 Connect
                                            </button>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                }}
                                                className="flex-1 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-2xl transform hover:scale-105"
                                            >
                                                <ShoppingBag className="w-5 h-5" />
                                                🛒 Visit Store
                                                <Sparkles className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {sortedStores.length === 0 && (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20"
                            >
                                <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
                                    <Server className="w-16 h-16 text-slate-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-300 mb-4">
                                    🔍 No servers found
                                </h3>
                                <p className="text-slate-500 mb-8 max-w-md mx-auto text-lg">
                                    Try adjusting your search terms to find the perfect gaming server for you! 🎮
                                </p>
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-3 mx-auto"
                                >
                                    <RefreshCw className="w-5 h-5" />
                                    🔄 Clear Search
                                </button>
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* Enhanced Features Section */}
                <section className="py-24 bg-gradient-to-br from-black/60 to-slate-900/60 backdrop-blur-sm relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <img
                            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop"
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    <div className="relative z-10 max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl font-black text-white mb-6">
                                🏆 Why Gamers Choose Us?
                            </h2>
                            <p className="text-2xl text-slate-400 max-w-4xl mx-auto">
                                The most trusted FiveM marketplace with everything you need for the 
                                <span className="text-blue-400 font-bold"> ultimate gaming experience</span> ⚡
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30 text-center relative overflow-hidden group hover:scale-105 transition-transform duration-300"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/20 rounded-full -mr-10 -mt-10"></div>
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                                    <Shield className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">🔒 Secure Payments</h3>
                                <p className="text-slate-400 leading-relaxed">Advanced encryption and fraud protection for all transactions with 100% money-back guarantee</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-sm rounded-3xl p-8 border border-green-400/30 text-center relative overflow-hidden group hover:scale-105 transition-transform duration-300"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-green-400/20 rounded-full -mr-10 -mt-10"></div>
                                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                                    <Zap className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">⚡ Instant Delivery</h3>
                                <p className="text-slate-400 leading-relaxed">Get your items delivered to your game account immediately after payment with automated systems</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-gradient-to-br from-purple-500/20 to-purple-600/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 text-center relative overflow-hidden group hover:scale-105 transition-transform duration-300"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400/20 rounded-full -mr-10 -mt-10"></div>
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                                    <Headphones className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">🎧 24/7 Support</h3>
                                <p className="text-slate-400 leading-relaxed">Expert gaming support team available around the clock via Discord and live chat</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-gradient-to-br from-amber-500/20 to-amber-600/30 backdrop-blur-sm rounded-3xl p-8 border border-amber-400/30 text-center relative overflow-hidden group hover:scale-105 transition-transform duration-300"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-400/20 rounded-full -mr-10 -mt-10"></div>
                                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                                    <Award className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">🏆 Premium Quality</h3>
                                <p className="text-slate-400 leading-relaxed">Only the highest quality servers and content verified by our expert gaming team</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Enhanced Footer */}
                <footer className="bg-black/95 border-t border-slate-700/50 backdrop-blur-xl">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <div className="grid grid-cols-4 gap-12 mb-16">
                            {/* Enhanced Brand */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                                        <Gamepad2 className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-black text-2xl">FiveM Stores</h3>
                                        <p className="text-blue-400 font-bold">🎮 Gaming Marketplace</p>
                                    </div>
                                </div>
                                <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                                    The ultimate destination for FiveM server content, premium vehicles, legendary weapons, and exclusive VIP memberships. 
                                    <span className="text-white font-bold">Join 15,000+ satisfied gamers!</span> 🚀
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/30 hover:from-blue-500/30 hover:to-blue-600/40 rounded-2xl transition-all border border-blue-400/30 group">
                                        <Twitter className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                                    </a>
                                    <a href="#" className="p-4 bg-gradient-to-br from-red-500/20 to-red-600/30 hover:from-red-500/30 hover:to-red-600/40 rounded-2xl transition-all border border-red-400/30 group">
                                        <Youtube className="w-6 h-6 text-red-400 group-hover:text-red-300" />
                                    </a>
                                    <a href="#" className="p-4 bg-gradient-to-br from-pink-500/20 to-pink-600/30 hover:from-pink-500/30 hover:to-pink-600/40 rounded-2xl transition-all border border-pink-400/30 group">
                                        <Instagram className="w-6 h-6 text-pink-400 group-hover:text-pink-300" />
                                    </a>
                                    <a href="#" className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/30 hover:from-purple-500/30 hover:to-purple-600/40 rounded-2xl transition-all border border-purple-400/30 group">
                                        <MessageCircle className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                                    </a>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="text-white font-bold text-xl mb-8 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-blue-400" />
                                    🎯 Quick Links
                                </h4>
                                <div className="space-y-4">
                                    <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-200">🌟 Browse Servers</a>
                                    <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-200">🔥 Popular Items</a>
                                    <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-200">🆕 New Releases</a>
                                    <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-200">📦 Server Resources</a>
                                    <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-200">👑 VIP Packages</a>
                                </div>
                            </div>

                            {/* Support */}
                            <div>
                                <h4 className="text-white font-bold text-xl mb-8 flex items-center gap-2">
                                    <HelpCircle className="w-5 h-5 text-green-400" />
                                    🛟 Support
                                </h4>
                                <div className="space-y-4">
                                    <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-200">❓ Help Center</a>
                                    <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-200">💬 Contact Us</a>
                                    <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-200">🚨 Report Issues</a>
                                    <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-200">📋 Guidelines</a>
                                    <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-200">🎧 Live Chat</a>
                                </div>
                            </div>

                            {/* Legal */}
                            <div>
                                <h4 className="text-white font-bold text-xl mb-8 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-purple-400" />
                                    ⚖️ Legal
                                </h4>
                                <div className="space-y-4">
                                    <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-200">🔒 Privacy Policy</a>
                                    <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-200">📄 Terms of Service</a>
                                    <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-200">🍪 Cookie Policy</a>
                                    <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-200">⚡ DMCA</a>
                                    <a href="#" className="block text-slate-400 hover:text-white transition-colors text-lg font-medium hover:translate-x-2 transform duration-200">💰 Refund Policy</a>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-slate-700/50 pt-12">
                            <div className="flex items-center justify-between">
                                <p className="text-slate-500 text-lg">
                                    © 2024 FiveM Stores. All rights reserved. Made with ❤️ for gamers by gamers.
                                </p>
                                <div className="flex items-center gap-8">
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-green-400" />
                                        <span className="text-slate-400 font-medium">🔒 SSL Secured</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Award className="w-5 h-5 text-blue-400" />
                                        <span className="text-slate-400 font-medium">🏆 Trusted Platform</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-purple-400" />
                                        <span className="text-slate-400 font-medium">👥 15K+ Users</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Enhanced Login Modal */}
            <AnimatePresence>
                {showLoginModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                        onClick={() => setShowLoginModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 max-w-lg w-full border border-slate-700 shadow-2xl relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <img
                                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop"
                                    alt="Background"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-10">
                                    <div>
                                        <h2 className="text-3xl font-black text-white mb-2">🎮 Join the Game!</h2>
                                        <p className="text-slate-400 text-lg">Choose your preferred login method</p>
                                    </div>
                                    <button
                                        onClick={() => setShowLoginModal(false)}
                                        className="p-3 hover:bg-slate-700/50 rounded-2xl transition-colors"
                                    >
                                        <X className="w-6 h-6 text-slate-400" />
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <button
                                        onClick={() => handleLogin('discord')}
                                        className="w-full py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-4 text-xl shadow-2xl transform hover:scale-105"
                                    >
                                        <MessageCircle className="w-7 h-7" />
                                        🎧 Login with Discord
                                        <Sparkles className="w-5 h-5" />
                                    </button>

                                    <button
                                        onClick={() => handleLogin('fivem')}
                                        className="w-full py-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-4 text-xl shadow-2xl transform hover:scale-105"
                                    >
                                        <Gamepad2 className="w-7 h-7" />
                                        🎮 Login with FiveM
                                        <Flame className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="mt-8 text-center">
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        By logging in, you agree to our{" "}
                                        <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">Terms of Service</a>{" "}
                                        and{" "}
                                        <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">Privacy Policy</a>
                                        <br />
                                        🔒 Your data is protected and secure
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FiveMPlatformHomepage;