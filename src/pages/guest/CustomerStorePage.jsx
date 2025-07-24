import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Filter,
    ShoppingCart,
    Star,
    Plus,
    Minus,
    Target,
    Crown,
    Package,
    Dice6,
    Shield,
    Gamepad2,
    DollarSign,
    Clock,
    Infinity,
    Tag,
    Eye,
    Heart,
    Users,
    MessageCircle,
    Mail,
    Phone,
    ExternalLink,
    ChevronDown,
    X,
    CheckCircle,
    AlertTriangle,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Globe,
    Zap,
    Sparkles,
    Gift,
    Image,
    Settings,
    Monitor,
    TrendingUp,
    Award,
    Calendar,
    Percent,
    UserCheck,
    Map,
    Volume2,
    VolumeX,
    Pause,
    Play,
    RefreshCw,
    Server,
    Wifi,
    Activity
} from "lucide-react";

const CustomerStorePage = () => {
    // Store Settings Data
    const storeSettings = {
        name: "Los Santos Roleplay",
        tagline: "Premium FiveM Gaming Experience", 
        description: "The ultimate destination for high-quality FiveM items, vehicles, and exclusive content for the Los Santos Roleplay community.",
        logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=100&h=100&fit=crop&crop=center",
        banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=400&fit=crop",
        background: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop",
        backgroundOpacity: 0.15,
        currency: "USD",
        status: "online",
        theme: "gaming",
        primaryColor: "#3B82F6",
        secondaryColor: "#10B981",
        accentColor: "#8B5CF6",
        warningColor: "#F59E0B",
        dangerColor: "#EF4444",
        headerStyle: "banner",
        showStoreDescription: true,
        contact: {
            email: "support@lsrp-store.com",
            discord: "https://discord.gg/lsrp",
            website: "https://lsrp.com",
            phone: "+1 (555) 123-4567"
        },
        social: {
            facebook: "https://facebook.com/lsrp",
            twitter: "https://twitter.com/lsrp", 
            instagram: "https://instagram.com/lsrp",
            youtube: "https://youtube.com/lsrp"
        },
        features: {
            guest_checkout: true,
            wish_list: true,
            live_chat: true,
            newsletter: true,
            inventory_tracking: true,
            sound_effects: true,
            player_stats: true,
            player_gallery: true
        },
        serverStats: {
            players: 847,
            maxPlayers: 1000,
            uptime: 99.9,
            ping: 32
        }
    };

    // Player Stats
    const [playerStats] = useState({
        username: "ProGamer_2024",
        level: 42,
        totalPurchases: 156,
        totalSpent: 2847.65,
        memberSince: "2023-08-15",
        favoriteCategory: "vehicles",
        achievements: [
            { id: 1, name: "Big Spender", icon: "💰", description: "Spent over $1000" },
            { id: 2, name: "Collector", icon: "📦", description: "Bought 100+ items" },
            { id: 3, name: "VIP Member", icon: "👑", description: "Active VIP status" }
        ]
    });

    // Sample Products Data
    const [products] = useState([
        {
            id: 1,
            name: "Legendary Weapon Pack",
            description: "Complete collection of legendary weapons including advanced rifles, pistols, and special equipment for elite players.",
            price: 49.99,
            category: "weapons",
            type: "bundle",
            status: "active",
            stock_type: "unlimited",
            featured: true,
            rating: 4.8,
            reviews: 342,
            image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400&h=300&fit=crop",
            metadata: {
                rarity: "legendary",
                level_requirement: 25,
                tags: ["popular", "combat", "elite"]
            },
            items: [
                { 
                    type: "weapon", 
                    name: "Advanced Rifle", 
                    quantity: 1, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=200&h=150&fit=crop",
                    rarity: "legendary"
                },
                { 
                    type: "weapon", 
                    name: "Combat Pistol", 
                    quantity: 1, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1544717684-75b1f6ffc7dc?w=200&h=150&fit=crop",
                    rarity: "epic"
                },
                { 
                    type: "weapon", 
                    name: "Heavy Sniper", 
                    quantity: 1, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=150&fit=crop",
                    rarity: "legendary"
                }
            ]
        },
        {
            id: 2,
            name: "VIP Membership - Gold",
            description: "Premium VIP membership with exclusive perks, special commands, and priority support for 30 days.",
            price: 29.99,
            category: "memberships",
            type: "single",
            status: "active",
            stock_type: "unlimited",
            featured: true,
            rating: 4.9,
            reviews: 128,
            image: "https://images.unsplash.com/photo-1583161178602-a1d5d76165b5?w=400&h=300&fit=crop",
            metadata: {
                rarity: "epic",
                level_requirement: 10,
                tags: ["vip", "premium", "benefits"]
            },
            items: [
                { 
                    type: "rank", 
                    name: "VIP Gold Status", 
                    quantity: 1, 
                    duration_type: "temporary", 
                    duration_value: 30,
                    image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=150&fit=crop",
                    rarity: "epic"
                }
            ]
        },
        {
            id: 3,
            name: "Super Car Collection",
            description: "Exclusive collection of high-end supercars including Adder, Zentorno, and T20 for the ultimate driving experience.",
            price: 89.99,
            category: "vehicles",
            type: "bundle",
            status: "active",
            stock_type: "limited",
            stock_quantity: 50,
            featured: false,
            rating: 4.7,
            reviews: 89,
            image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=300&fit=crop",
            metadata: {
                rarity: "epic",
                level_requirement: 20,
                tags: ["cars", "luxury", "speed"]
            },
            items: [
                { 
                    type: "vehicle", 
                    name: "Adder Supercar", 
                    quantity: 1, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=200&h=150&fit=crop",
                    rarity: "epic"
                },
                { 
                    type: "vehicle", 
                    name: "Zentorno", 
                    quantity: 1, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=200&h=150&fit=crop",
                    rarity: "epic"
                },
                { 
                    type: "vehicle", 
                    name: "T20 Hypercar", 
                    quantity: 1, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop",
                    rarity: "rare"
                }
            ]
        },
        {
            id: 4,
            name: "Mystery Weapon Crate",
            description: "Open this mysterious crate for a chance to get rare and legendary weapons! Each crate contains one random weapon with different rarity chances.",
            price: 19.99,
            category: "lootboxes",
            type: "lootbox",
            status: "active",
            stock_type: "unlimited",
            featured: true,
            rating: 4.5,
            reviews: 523,
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
            metadata: {
                rarity: "rare",
                level_requirement: 5,
                tags: ["mystery", "random", "surprise", "lootbox"]
            },
            items: [
                { 
                    type: "weapon", 
                    name: "Basic Pistol", 
                    quantity: 1, 
                    drop_rate: 40, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1544717684-75b1f6ffc7dc?w=200&h=150&fit=crop",
                    rarity: "common"
                },
                { 
                    type: "weapon", 
                    name: "Assault Rifle", 
                    quantity: 1, 
                    drop_rate: 30, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=200&h=150&fit=crop",
                    rarity: "uncommon"
                },
                { 
                    type: "weapon", 
                    name: "Heavy Sniper Rifle", 
                    quantity: 1, 
                    drop_rate: 20, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=150&fit=crop",
                    rarity: "rare"
                },
                { 
                    type: "weapon", 
                    name: "Legendary RPG", 
                    quantity: 1, 
                    drop_rate: 10, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1586241800413-c35ab0c3e48f?w=200&h=150&fit=crop",
                    rarity: "legendary"
                }
            ]
        },
        {
            id: 5,
            name: "Premium Vehicle Crate",
            description: "Unlock exclusive vehicles from this premium crate! Contains luxury cars, sports vehicles, and ultra-rare supercars.",
            price: 39.99,
            category: "lootboxes",
            type: "lootbox",
            status: "active",
            stock_type: "unlimited",
            featured: false,
            rating: 4.6,
            reviews: 267,
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
            metadata: {
                rarity: "epic",
                level_requirement: 15,
                tags: ["vehicles", "luxury", "crate", "premium"]
            },
            items: [
                { 
                    type: "vehicle", 
                    name: "Standard Sedan", 
                    quantity: 1, 
                    drop_rate: 35, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&h=150&fit=crop",
                    rarity: "common"
                },
                { 
                    type: "vehicle", 
                    name: "Sports Coupe", 
                    quantity: 1, 
                    drop_rate: 30, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=200&h=150&fit=crop",
                    rarity: "uncommon"
                },
                { 
                    type: "vehicle", 
                    name: "Luxury Supercar", 
                    quantity: 1, 
                    drop_rate: 25, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=200&h=150&fit=crop",
                    rarity: "rare"
                },
                { 
                    type: "vehicle", 
                    name: "Hypercar Beast", 
                    quantity: 1, 
                    drop_rate: 10, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop",
                    rarity: "legendary"
                }
            ]
        },
        {
            id: 6,
            name: "Starter Kit",
            description: "Perfect for new players! Includes basic weapons, money, and essential items to get started in Los Santos.",
            price: 9.99,
            category: "bundles",
            type: "bundle",
            status: "active",
            stock_type: "unlimited",
            featured: false,
            rating: 4.3,
            reviews: 671,
            image: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?w=400&h=300&fit=crop",
            metadata: {
                rarity: "common",
                level_requirement: 1,
                tags: ["starter", "beginner", "essentials"]
            },
            items: [
                { 
                    type: "weapon", 
                    name: "Starter Pistol", 
                    quantity: 1, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1544717684-75b1f6ffc7dc?w=200&h=150&fit=crop",
                    rarity: "common"
                },
                { 
                    type: "money", 
                    name: "Startup Cash", 
                    quantity: 50000, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1554672723-d42a16e533db?w=200&h=150&fit=crop",
                    rarity: "common"
                },
                { 
                    type: "item", 
                    name: "Medical Kit", 
                    quantity: 10, 
                    duration_type: "permanent",
                    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=150&fit=crop",
                    rarity: "common"
                }
            ]
        }
    ]);

    // Component State
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedRarity, setSelectedRarity] = useState("all");
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [sortBy, setSortBy] = useState("featured");
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showProductModal, setShowProductModal] = useState(false);
    const [showAdminPanel, setShowAdminPanel] = useState(false);
    const [showPlayerStats, setShowPlayerStats] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [particles, setParticles] = useState([]);

    // Categories and Rarities
    const categories = [
        { id: "all", label: "All Products", icon: <Package className="w-4 h-4" />, color: "slate", gradient: "from-slate-500 to-slate-600" },
        { id: "weapons", label: "Weapons", icon: <Target className="w-4 h-4" />, color: "blue", gradient: "from-blue-500 to-blue-600" },
        { id: "vehicles", label: "Vehicles", icon: <Crown className="w-4 h-4" />, color: "indigo", gradient: "from-indigo-500 to-indigo-600" },
        { id: "lootboxes", label: "Loot Boxes", icon: <Dice6 className="w-4 h-4" />, color: "purple", gradient: "from-purple-500 to-purple-600" },
        { id: "bundles", label: "Bundles", icon: <Package className="w-4 h-4" />, color: "green", gradient: "from-green-500 to-green-600" },
        { id: "equipment", label: "Equipment", icon: <Shield className="w-4 h-4" />, color: "orange", gradient: "from-orange-500 to-orange-600" },
        { id: "memberships", label: "Memberships", icon: <Star className="w-4 h-4" />, color: "yellow", gradient: "from-yellow-500 to-yellow-600" }
    ];

    const rarities = [
        { id: "all", label: "All Rarities", color: "gray", glow: "gray-400" },
        { id: "common", label: "Common", color: "gray", glow: "gray-400" },
        { id: "uncommon", label: "Uncommon", color: "green", glow: "green-400" },
        { id: "rare", label: "Rare", color: "blue", glow: "blue-400" },
        { id: "epic", label: "Epic", color: "purple", glow: "purple-400" },
        { id: "legendary", label: "Legendary", color: "yellow", glow: "yellow-400" }
    ];

    // Animation Effects
    useEffect(() => {
        const createParticles = () => {
            const newParticles = [];
            for (let i = 0; i < 20; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                    size: Math.random() * 4 + 1,
                    speedX: (Math.random() - 0.5) * 2,
                    speedY: (Math.random() - 0.5) * 2,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
            setParticles(newParticles);
        };

        createParticles();
        const interval = setInterval(() => {
            setParticles(prev => prev.map(particle => ({
                ...particle,
                x: (particle.x + particle.speedX) % (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: (particle.y + particle.speedY) % (typeof window !== 'undefined' ? window.innerHeight : 800)
            })));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    // Filter and Search Logic
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.metadata.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        const matchesRarity = selectedRarity === "all" || product.metadata.rarity === selectedRarity;
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

        return matchesSearch && matchesCategory && matchesRarity && matchesPrice;
    });

    // Sort Products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case "price_low":
                return a.price - b.price;
            case "price_high":
                return b.price - a.price;
            case "name":
                return a.name.localeCompare(b.name);
            case "rating":
                return b.rating - a.rating;
            case "featured":
            default:
                return b.featured - a.featured;
        }
    });

    // Cart Functions
    const addToCart = (product, quantity = 1) => {
        setCart(prev => {
            const existing = prev.find(item => item.product.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prev, { product, quantity }];
            }
        });
        playSound('success');
    };

    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(item => item.product.id !== productId));
        playSound('remove');
    };

    const updateCartQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCart(prev => prev.map(item =>
                item.product.id === productId
                    ? { ...item, quantity }
                    : item
            ));
        }
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    // Wishlist Functions
    const toggleWishlist = (product) => {
        setWishlist(prev => {
            const isInWishlist = prev.some(item => item.id === product.id);
            if (isInWishlist) {
                playSound('remove');
                return prev.filter(item => item.id !== product.id);
            } else {
                playSound('success');
                return [...prev, product];
            }
        });
    };

    const isInWishlist = (product) => {
        return wishlist.some(item => item.id === product.id);
    };

    // Sound Effects
    const playSound = (type) => {
        if (!soundEnabled) return;
        console.log(`Playing ${type} sound`);
    };

    // Rarity Style Helper
    const getRarityStyles = (rarity) => {
        const styles = {
            common: {
                text: "text-slate-600",
                bg: "bg-gradient-to-r from-slate-100 to-slate-200",
                border: "border-slate-300",
                glow: "shadow-slate-400/20",
                particle: "bg-slate-400"
            },
            uncommon: {
                text: "text-green-600",
                bg: "bg-gradient-to-r from-green-100 to-green-200",
                border: "border-green-300",
                glow: "shadow-green-400/30",
                particle: "bg-green-400"
            },
            rare: {
                text: "text-blue-600",
                bg: "bg-gradient-to-r from-blue-100 to-blue-200",
                border: "border-blue-300",
                glow: "shadow-blue-400/30",
                particle: "bg-blue-400"
            },
            epic: {
                text: "text-purple-600",
                bg: "bg-gradient-to-r from-purple-100 to-purple-200",
                border: "border-purple-300",
                glow: "shadow-purple-400/40",
                particle: "bg-purple-400"
            },
            legendary: {
                text: "text-amber-600",
                bg: "bg-gradient-to-r from-amber-100 to-amber-200",
                border: "border-amber-300",
                glow: "shadow-amber-400/50",
                particle: "bg-amber-400"
            }
        };
        return styles[rarity] || styles.common;
    };

    // Open Product Modal
    const openProductModal = (product) => {
        setSelectedProduct(product);
        setShowProductModal(true);
        playSound('click');
    };

    // Store Status Check
    if (storeSettings.status === "maintenance") {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-white mb-2">Maintenance Mode</h1>
                    <p className="text-slate-400">Store is currently under maintenance. Please check back later.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Animated Background Particles */}
            <div className="fixed inset-0 z-0">
                {particles.map(particle => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        style={{
                            left: particle.x,
                            top: particle.y,
                            opacity: particle.opacity
                        }}
                        animate={{
                            x: [particle.x, particle.x + particle.speedX * 100],
                            y: [particle.y, particle.y + particle.speedY * 100],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Custom Gaming Background */}
            {storeSettings.background && (
                <div className="fixed inset-0 z-0">
                    <img 
                        src={storeSettings.background}
                        alt="Store Background" 
                        className="w-full h-full object-cover"
                        style={{ opacity: storeSettings.backgroundOpacity }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80"></div>
                </div>
            )}

            <div className="relative z-10">
                {/* Gaming Banner */}
                {storeSettings.banner && storeSettings.headerStyle === "banner" && (
                    <div className="relative h-[500px] overflow-hidden">
                        <img 
                            src={storeSettings.banner}
                            alt="Store Banner"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                        
                        {/* Gaming Overlay Effects */}
                        <div className="absolute inset-0">
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                {/* Enhanced Server Status */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-green-500/30"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-green-400 text-sm font-bold uppercase tracking-wide">Server Online</span>
                                            <div className="flex items-center gap-3 text-xs text-slate-300">
                                                <span className="flex items-center gap-1">
                                                    <Users className="w-3 h-3" />
                                                    {storeSettings.serverStats.players}/{storeSettings.serverStats.maxPlayers}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Activity className="w-3 h-3" />
                                                    {storeSettings.serverStats.ping}ms
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <TrendingUp className="w-3 h-3" />
                                                    {storeSettings.serverStats.uptime}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Sound Toggle */}
                                <motion.button
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    onClick={() => setSoundEnabled(!soundEnabled)}
                                    className="bg-black/60 backdrop-blur-sm p-3 rounded-xl border border-slate-500/30 hover:border-blue-500/50 transition-all"
                                >
                                    {soundEnabled ? 
                                        <Volume2 className="w-5 h-5 text-blue-400" /> : 
                                        <VolumeX className="w-5 h-5 text-slate-400" />
                                    }
                                </motion.button>
                            </div>
                        </div>

                        {/* Enhanced Store Info Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="relative"
                            >
                                {/* Server Logo with Glow Effect */}
                                <div className="relative mb-8">
                                    <motion.div
                                        className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-50"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                    <img 
                                        src={storeSettings.logo}
                                        alt="Store Logo"
                                        className="relative w-32 h-32 rounded-full border-4 border-white/20 shadow-2xl"
                                    />
                                    <motion.div
                                        className="absolute inset-0 rounded-full border-4 border-blue-400/50"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                                
                                {/* Enhanced Server Name */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="mb-4"
                                >
                                    <h1 className="text-6xl font-black mb-2 tracking-tight">
                                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-300% animate-gradient">
                                            {storeSettings.name.toUpperCase()}
                                        </span>
                                    </h1>
                                    <div className="flex items-center justify-center gap-4 text-blue-300">
                                        <Server className="w-5 h-5" />
                                        <span className="text-lg font-medium tracking-widest uppercase">FiveM Server</span>
                                        <Server className="w-5 h-5" />
                                    </div>
                                </motion.div>
                                
                                <motion.p 
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-2xl text-blue-200 mb-8 font-medium"
                                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                                >
                                    {storeSettings.tagline}
                                </motion.p>

                                {storeSettings.showStoreDescription && (
                                    <motion.p 
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-white/90 max-w-4xl px-6 text-lg leading-relaxed mb-8"
                                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
                                    >
                                        {storeSettings.description}
                                    </motion.p>
                                )}

                                {/* Enhanced Gaming Stats */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="grid grid-cols-4 gap-6"
                                >
                                    <div className="bg-black/40 backdrop-blur-sm px-6 py-4 rounded-xl border border-blue-500/20">
                                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">50K+</div>
                                        <div className="text-sm text-slate-300 uppercase tracking-wide">Total Players</div>
                                    </div>
                                    <div className="bg-black/40 backdrop-blur-sm px-6 py-4 rounded-xl border border-green-500/20">
                                        <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">99.9%</div>
                                        <div className="text-sm text-slate-300 uppercase tracking-wide">Uptime</div>
                                    </div>
                                    <div className="bg-black/40 backdrop-blur-sm px-6 py-4 rounded-xl border border-purple-500/20">
                                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">24/7</div>
                                        <div className="text-sm text-slate-300 uppercase tracking-wide">Support</div>
                                    </div>
                                    <div className="bg-black/40 backdrop-blur-sm px-6 py-4 rounded-xl border border-amber-500/20">
                                        <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">1000+</div>
                                        <div className="text-sm text-slate-300 uppercase tracking-wide">Products</div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                )}

                {/* Gaming Header */}
                <header className="bg-black/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-40">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                {/* Gaming Search Bar */}
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Search for weapons, vehicles..."
                                        className="pl-11 bg-slate-800/80 border border-slate-600/50 rounded-xl text-white px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all w-96 backdrop-blur-sm"
                                    />
                                    {searchTerm && (
                                        <button
                                            onClick={() => setSearchTerm("")}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                {/* Player Stats Button */}
                                <button
                                    onClick={() => setShowPlayerStats(true)}
                                    className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 px-4 py-2 rounded-xl transition-all border border-slate-600/50 backdrop-blur-sm"
                                >
                                    <UserCheck className="w-4 h-4 text-blue-400" />
                                    <span className="text-white text-sm">Lv.{playerStats.level}</span>
                                    <span className="text-slate-400 text-sm">{playerStats.username}</span>
                                </button>

                                {/* Admin Panel Button */}
                                <button
                                    onClick={() => setShowAdminPanel(true)}
                                    className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl transition-all border border-slate-600/50 backdrop-blur-sm"
                                    title="Admin Settings"
                                >
                                    <Settings className="w-5 h-5 text-slate-300" />
                                </button>

                                {/* Cart Button */}
                                <button
                                    onClick={() => setShowCart(!showCart)}
                                    className="relative bg-slate-800/80 hover:bg-slate-700/80 p-3 rounded-xl transition-all border border-slate-600/50 backdrop-blur-sm"
                                >
                                    <ShoppingCart className="w-5 h-5 text-slate-300" />
                                    {getTotalItems() > 0 && (
                                        <motion.span 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-medium rounded-full flex items-center justify-center shadow-lg"
                                        >
                                            {getTotalItems()}
                                        </motion.span>
                                    )}
                                </button>

                                {/* Login Button */}
                                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-xl transition-all shadow-lg border border-blue-400/20">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-12 gap-8">
                        {/* Gaming Filters Sidebar */}
                        <div className="col-span-3">
                            <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 sticky top-24">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Filter className="w-5 h-5 text-blue-400" />
                                    Filters
                                </h2>

                                {/* Categories */}
                                <div className="mb-6">
                                    <label className="block text-slate-300 text-sm font-medium mb-3">
                                        Category
                                    </label>
                                    <div className="space-y-2">
                                        {categories.map(category => (
                                            <motion.button
                                                key={category.id}
                                                onClick={() => setSelectedCategory(category.id)}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm border ${
                                                    selectedCategory === category.id
                                                        ? `bg-gradient-to-r ${category.gradient} text-white border-white/20 shadow-lg`
                                                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border-slate-700/50'
                                                }`}
                                            >
                                                {category.icon}
                                                <span className="font-medium">{category.label}</span>
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>

                                {/* Rarity */}
                                <div className="mb-6">
                                    <label className="block text-slate-300 text-sm font-medium mb-3">
                                        Rarity
                                    </label>
                                    <select
                                        value={selectedRarity}
                                        onChange={(e) => setSelectedRarity(e.target.value)}
                                        className="w-full bg-slate-800/80 border border-slate-600/50 rounded-xl text-white px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/30 transition-all backdrop-blur-sm"
                                    >
                                        {rarities.map(rarity => (
                                            <option key={rarity.id} value={rarity.id}>
                                                {rarity.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Sort */}
                                <div>
                                    <label className="block text-slate-300 text-sm font-medium mb-3">
                                        Sort By
                                    </label>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full bg-slate-800/80 border border-slate-600/50 rounded-xl text-white px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/30 transition-all backdrop-blur-sm"
                                    >
                                        <option value="featured">Featured First</option>
                                        <option value="price_low">Price: Low to High</option>
                                        <option value="price_high">Price: High to Low</option>
                                        <option value="rating">Highest Rated</option>
                                        <option value="name">Name A-Z</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Gaming Products Grid */}
                        <div className="col-span-9">
                            {/* Results Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">
                                        {selectedCategory === "all" ? "All Products" : categories.find(c => c.id === selectedCategory)?.label}
                                    </h2>
                                    <p className="text-slate-400">
                                        {sortedProducts.length} epic items found
                                    </p>
                                </div>
                                
                                {/* Quick Stats */}
                                <div className="flex gap-6">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-400">{products.filter(p => p.featured).length}</div>
                                        <div className="text-xs text-slate-400 uppercase tracking-wide">Featured</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-400">{products.filter(p => p.type === "lootbox").length}</div>
                                        <div className="text-xs text-slate-400 uppercase tracking-wide">Mystery</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-400">{products.filter(p => p.metadata.rarity === "legendary").length}</div>
                                        <div className="text-xs text-slate-400 uppercase tracking-wide">Legendary</div>
                                    </div>
                                </div>
                            </div>

                            {/* Gaming Products */}
                            <div className="grid grid-cols-2 gap-6">
                                {sortedProducts.map((product, index) => {
                                    const rarityStyles = getRarityStyles(product.metadata.rarity);
                                    
                                    return (
                                        <motion.div
                                            key={product.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer ${rarityStyles.border} ${rarityStyles.glow}`}
                                            onClick={() => openProductModal(product)}
                                        >
                                            {/* Gaming Product Image */}
                                            <div className="relative h-64 overflow-hidden">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                
                                                {/* Gaming Overlay Effects */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                                {/* Featured Badge */}
                                                {product.featured && (
                                                    <motion.div 
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg"
                                                    >
                                                        <Star className="w-4 h-4 fill-current" />
                                                        Featured
                                                    </motion.div>
                                                )}

                                                {/* Loot Box Badge */}
                                                {product.type === "lootbox" && (
                                                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                                                        <Dice6 className="w-4 h-4" />
                                                        Mystery Box
                                                    </div>
                                                )}

                                                {/* Quick Action Buttons */}
                                                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            toggleWishlist(product);
                                                        }}
                                                        className={`p-3 rounded-xl backdrop-blur-sm transition-colors ${
                                                            isInWishlist(product)
                                                                ? 'bg-red-500/80 text-white'
                                                                : 'bg-black/60 text-slate-300 hover:text-red-400'
                                                        }`}
                                                    >
                                                        <Heart className={`w-5 h-5 ${isInWishlist(product) ? 'fill-current' : ''}`} />
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="p-3 bg-black/60 hover:bg-blue-500/80 text-slate-300 hover:text-white rounded-xl backdrop-blur-sm transition-colors"
                                                    >
                                                        <Eye className="w-5 h-5" />
                                                    </motion.button>
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                {/* Product Name */}
                                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                                    {product.name}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                                                    {product.description}
                                                </p>

                                                {/* Gaming Stats Row */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className={`px-4 py-2 rounded-full text-sm font-bold border ${rarityStyles.bg} ${rarityStyles.border} ${rarityStyles.text}`}>
                                                        {product.metadata.rarity.toUpperCase()}
                                                    </div>
                                                    
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-1">
                                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                            <span className="text-white text-sm font-medium">{product.rating}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Users className="w-4 h-4 text-slate-400" />
                                                            <span className="text-slate-400 text-sm">{product.reviews}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Items Preview */}
                                                <div className="mb-5">
                                                    <div className="text-sm text-slate-400 mb-3">
                                                        {product.type === "lootbox" ? `Mystery Rewards (${product.items.length})` : `Items Included (${product.items.length})`}
                                                    </div>
                                                    <div className="flex gap-2">
                                                        {product.items.slice(0, 4).map((item, idx) => (
                                                            <div 
                                                                key={idx} 
                                                                className="relative w-12 h-12 rounded-lg border-2 border-slate-700 overflow-hidden hover:scale-110 transition-transform group"
                                                                title={product.type === "lootbox" ? `${item.name} (${item.drop_rate}%)` : item.name}
                                                            >
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.name}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                                {product.type === "lootbox" && (
                                                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                        <span className="text-white text-xs font-bold">{item.drop_rate}%</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                        {product.items.length > 4 && (
                                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 border-2 border-slate-700 flex items-center justify-center">
                                                                <span className="text-sm text-slate-300 font-bold">+{product.items.length - 4}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Price and Actions */}
                                                <div className="flex items-center justify-between">
                                                    <div className="text-3xl font-bold text-blue-400">
                                                        ${product.price}
                                                    </div>
                                                    
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            addToCart(product);
                                                        }}
                                                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg border border-blue-400/20"
                                                    >
                                                        Add to Cart
                                                    </motion.button>
                                                </div>

                                                {/* Stock Status */}
                                                {product.stock_type === "limited" && (
                                                    <div className="mt-4 flex items-center gap-2 text-sm">
                                                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                                                        <span className="text-orange-400 font-medium">
                                                            Only {product.stock_quantity} left in stock!
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {sortedProducts.length === 0 && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-16"
                                >
                                    <Package className="w-20 h-20 text-slate-600 mx-auto mb-6" />
                                    <h3 className="text-xl font-bold text-slate-300 mb-3">
                                        No products found
                                    </h3>
                                    <p className="text-slate-500 mb-6">
                                        Try adjusting your filters or search term
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSearchTerm("");
                                            setSelectedCategory("all");
                                            setSelectedRarity("all");
                                        }}
                                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all"
                                    >
                                        Clear Filters
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </main>

                {/* Gaming Product Modal - Enhanced with Fixed Loot Box Display */}
                <AnimatePresence>
                    {showProductModal && selectedProduct && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                            onClick={() => setShowProductModal(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-8">
                                    {/* Modal Header */}
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-4">
                                            <h2 className="text-3xl font-bold text-white">
                                                {selectedProduct.name}
                                            </h2>
                                            <div className={`px-3 py-1 rounded-full text-sm font-bold ${getRarityStyles(selectedProduct.metadata.rarity).bg} ${getRarityStyles(selectedProduct.metadata.rarity).text}`}>
                                                {selectedProduct.metadata.rarity.toUpperCase()}
                                            </div>
                                            {selectedProduct.type === "lootbox" && (
                                                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                                                    <Dice6 className="w-4 h-4" />
                                                    Mystery Box
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => setShowProductModal(false)}
                                            className="p-3 hover:bg-slate-700/50 rounded-xl transition-colors"
                                        >
                                            <X className="w-6 h-6 text-slate-400" />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-10">
                                        {/* Enhanced Product Image */}
                                        <div className="space-y-4">
                                            <div className="relative">
                                                <img
                                                    src={selectedProduct.image}
                                                    alt={selectedProduct.name}
                                                    className="w-full h-96 object-cover rounded-2xl border border-slate-700/50"
                                                />
                                                {/* Rarity Glow */}
                                                <div className={`absolute inset-0 rounded-2xl opacity-20 ${getRarityStyles(selectedProduct.metadata.rarity).glow}`}></div>
                                            </div>
                                            
                                            {/* Product Stats */}
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                        <span className="text-slate-300 text-sm">Rating</span>
                                                    </div>
                                                    <div className="text-xl font-bold text-white">{selectedProduct.rating}/5</div>
                                                    <div className="text-slate-400 text-xs">{selectedProduct.reviews} reviews</div>
                                                </div>
                                                
                                                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Users className="w-4 h-4 text-blue-400" />
                                                        <span className="text-slate-300 text-sm">Category</span>
                                                    </div>
                                                    <div className="text-xl font-bold text-white capitalize">{selectedProduct.category}</div>
                                                    <div className="text-slate-400 text-xs">
                                                        {categories.find(c => c.id === selectedProduct.category)?.label}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Enhanced Product Info */}
                                        <div className="space-y-6">
                                            <p className="text-slate-300 text-lg leading-relaxed">
                                                {selectedProduct.description}
                                            </p>

                                            {/* Requirements */}
                                            {selectedProduct.metadata.level_requirement > 0 && (
                                                <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl">
                                                    <div className="flex items-center gap-2 text-amber-400">
                                                        <AlertTriangle className="w-5 h-5" />
                                                        <span className="font-medium">Level Requirement: {selectedProduct.metadata.level_requirement}+</span>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Price Section */}
                                            <div className="bg-slate-800/60 p-6 rounded-xl border border-slate-700/50">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="text-4xl font-bold text-blue-400">
                                                        ${selectedProduct.price}
                                                    </div>
                                                </div>

                                                <div className="flex gap-3">
                                                    <motion.button
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        onClick={() => {
                                                            addToCart(selectedProduct);
                                                            setShowProductModal(false);
                                                        }}
                                                        className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all shadow-lg"
                                                    >
                                                        {selectedProduct.type === "lootbox" ? "Purchase Mystery Box" : "Add to Cart"}
                                                    </motion.button>
                                                    
                                                    <motion.button
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        onClick={() => toggleWishlist(selectedProduct)}
                                                        className={`px-4 py-4 rounded-xl transition-all border ${
                                                            isInWishlist(selectedProduct)
                                                                ? 'bg-red-500/20 border-red-500/30 text-red-400'
                                                                : 'bg-slate-700/50 border-slate-600/50 text-slate-400 hover:text-red-400'
                                                        }`}
                                                    >
                                                        <Heart className={`w-5 h-5 ${isInWishlist(selectedProduct) ? 'fill-current' : ''}`} />
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fixed Items Showcase */}
                                    <div className="mt-10">
                                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                            {selectedProduct.type === "lootbox" ? (
                                                <>
                                                    <Gift className="w-6 h-6 text-purple-400" />
                                                    Mystery Box Contents - One Random Reward
                                                </>
                                            ) : (
                                                <>
                                                    <Package className="w-6 h-6 text-blue-400" />
                                                    All Items Included
                                                </>
                                            )}
                                        </h3>

                                        {selectedProduct.type === "lootbox" ? (
                                            /* Fixed Loot Box Items Display */
                                            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-8 rounded-3xl border border-purple-500/30 backdrop-blur-sm">
                                                <div className="grid grid-cols-2 gap-6">
                                                    {selectedProduct.items.map((item, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            whileHover={{ scale: 1.05 }}
                                                            className={`relative border-2 rounded-xl p-6 backdrop-blur-sm ${getRarityStyles(item.rarity).bg} ${getRarityStyles(item.rarity).border} hover:shadow-xl transition-all duration-300`}
                                                        >
                                                            <div className="flex gap-4">
                                                                {/* Item Image */}
                                                                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                                                    <img
                                                                        src={item.image}
                                                                        alt={item.name}
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                                                </div>

                                                                {/* Item Info */}
                                                                <div className="flex-1">
                                                                    <h4 className="text-white font-bold text-lg mb-2">
                                                                        {item.name}
                                                                    </h4>
                                                                    
                                                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold ${getRarityStyles(item.rarity).bg} ${getRarityStyles(item.rarity).text} border ${getRarityStyles(item.rarity).border} mb-3`}>
                                                                        {item.rarity.toUpperCase()}
                                                                    </div>

                                                                    <div className="space-y-2">
                                                                        <div className="flex items-center justify-between">
                                                                            <span className="text-slate-400 text-sm">Drop Rate:</span>
                                                                            <span className={`text-xl font-bold ${
                                                                                item.drop_rate <= 10 ? 'text-red-400' :
                                                                                item.drop_rate <= 30 ? 'text-amber-400' :
                                                                                'text-green-400'
                                                                            }`}>
                                                                                {item.drop_rate}%
                                                                            </span>
                                                                        </div>
                                                                        
                                                                        <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                                                                            <motion.div 
                                                                                className={`h-2 rounded-full ${
                                                                                    item.drop_rate <= 10 ? 'bg-gradient-to-r from-red-500 to-red-400' :
                                                                                    item.drop_rate <= 30 ? 'bg-gradient-to-r from-amber-500 to-amber-400' :
                                                                                    'bg-gradient-to-r from-green-500 to-green-400'
                                                                                }`}
                                                                                initial={{ width: 0 }}
                                                                                animate={{ width: `${item.drop_rate}%` }}
                                                                                transition={{ duration: 1, delay: index * 0.2 }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                <div className="text-center bg-purple-500/10 p-4 rounded-xl border border-purple-500/20 mt-6">
                                                    <div className="flex items-center justify-center gap-2 mb-2">
                                                        <Dice6 className="w-5 h-5 text-purple-400" />
                                                        <span className="text-purple-300 font-bold">How it works</span>
                                                    </div>
                                                    <p className="text-slate-400 text-sm leading-relaxed">
                                                        When you purchase this mystery box, you will receive exactly <span className="text-purple-400 font-bold">ONE random item</span> based on the drop rates shown above. 
                                                        Higher rarity items have lower chances but greater value!
                                                    </p>
                                                </div>
                                            </div>
                                        ) : (
                                            /* Regular Bundle Items */
                                            <div className="grid grid-cols-3 gap-6">
                                                {selectedProduct.items.map((item, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        whileHover={{ scale: 1.05 }}
                                                        className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
                                                    >
                                                        <div className="w-full h-32 rounded-lg overflow-hidden mb-4">
                                                            <img
                                                                src={item.image}
                                                                alt={item.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>

                                                        <h4 className="text-white font-semibold text-center mb-3">
                                                            {item.name}
                                                        </h4>

                                                        <div className="space-y-2 text-sm">
                                                            <div className="flex justify-between">
                                                                <span className="text-slate-400">Quantity:</span>
                                                                <span className="text-white font-medium">x{item.quantity}</span>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <span className="text-slate-400">Duration:</span>
                                                                <div className="flex items-center gap-1">
                                                                    {item.duration_type === "temporary" ? (
                                                                        <>
                                                                            <Clock className="w-3 h-3 text-amber-400" />
                                                                            <span className="text-amber-400">{item.duration_value}d</span>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <Infinity className="w-3 h-3 text-green-400" />
                                                                            <span className="text-green-400">Forever</span>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Enhanced Gaming Cart Sidebar */}
                <AnimatePresence>
                    {showCart && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            className="fixed top-0 right-0 w-96 h-full bg-gradient-to-b from-slate-800/95 to-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 z-50 overflow-y-auto"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                        <ShoppingCart className="w-5 h-5 text-blue-400" />
                                        Shopping Cart
                                    </h2>
                                    <button
                                        onClick={() => setShowCart(false)}
                                        className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                                    >
                                        <X className="w-5 h-5 text-slate-400" />
                                    </button>
                                </div>

                                {cart.length === 0 ? (
                                    <div className="text-center py-16">
                                        <ShoppingCart className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                                        <p className="text-slate-400 text-lg mb-4">Your cart is empty</p>
                                        <p className="text-slate-500 text-sm">Add some epic items to get started!</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="space-y-4 mb-6">
                                            {cart.map(item => (
                                                <motion.div 
                                                    key={item.product.id} 
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50"
                                                >
                                                    <div className="flex gap-3 mb-3">
                                                        <img
                                                            src={item.product.image}
                                                            alt={item.product.name}
                                                            className="w-16 h-16 object-cover rounded-lg"
                                                        />
                                                        <div className="flex-1">
                                                            <h3 className="text-white font-medium text-sm mb-1">
                                                                {item.product.name}
                                                            </h3>
                                                            <div className={`inline-block px-2 py-1 rounded text-xs font-bold ${getRarityStyles(item.product.metadata.rarity).bg} ${getRarityStyles(item.product.metadata.rarity).text}`}>
                                                                {item.product.metadata.rarity}
                                                            </div>
                                                            {item.product.type === "lootbox" && (
                                                                <div className="flex items-center gap-1 mt-1">
                                                                    <Dice6 className="w-3 h-3 text-purple-400" />
                                                                    <span className="text-xs text-purple-400">Mystery Box</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <button
                                                                onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                                                                className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors"
                                                            >
                                                                <Minus className="w-3 h-3 text-slate-300" />
                                                            </button>
                                                            <span className="text-white w-8 text-center font-medium">
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                                                                className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors"
                                                            >
                                                                <Plus className="w-3 h-3 text-slate-300" />
                                                            </button>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <div className="font-bold text-blue-400">
                                                                ${(item.product.price * item.quantity).toFixed(2)}
                                                            </div>
                                                            <button
                                                                onClick={() => removeFromCart(item.product.id)}
                                                                className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                                                            >
                                                                <X className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div className="border-t border-slate-700/50 pt-6 mb-6">
                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center justify-between text-slate-300">
                                                    <span>Subtotal:</span>
                                                    <span>${getTotalPrice().toFixed(2)}</span>
                                                </div>
                                                <div className="flex items-center justify-between text-slate-300">
                                                    <span>Processing Fee:</span>
                                                    <span>$0.00</span>
                                                </div>
                                                <div className="flex items-center justify-between text-xl font-bold text-white border-t border-slate-700/50 pt-2">
                                                    <span>Total:</span>
                                                    <span className="text-blue-400">${getTotalPrice().toFixed(2)}</span>
                                                </div>
                                            </div>
                                            
                                            <div className="space-y-3">
                                                <motion.button 
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all shadow-lg"
                                                >
                                                    Proceed to Checkout
                                                </motion.button>
                                                
                                                <button
                                                    onClick={() => setShowCart(false)}
                                                    className="w-full py-3 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 font-medium rounded-xl transition-all border border-slate-600/50"
                                                >
                                                    Continue Shopping
                                                </button>
                                            </div>
                                        </div>

                                        {/* Cart Summary Stats */}
                                        <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/30">
                                            <h4 className="text-white font-medium mb-3">Cart Summary</h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400">Total Items:</span>
                                                    <span className="text-white">{getTotalItems()}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400">Unique Products:</span>
                                                    <span className="text-white">{cart.length}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400">Mystery Boxes:</span>
                                                    <span className="text-purple-400">
                                                        {cart.filter(item => item.product.type === "lootbox").length}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Footer */}
                <footer className="bg-black/80 backdrop-blur-md border-t border-slate-700/50 mt-16">
                    <div className="max-w-7xl mx-auto px-6 py-12">
                        <div className="grid grid-cols-4 gap-8">
                            {/* Store Info */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    {storeSettings.logo && (
                                        <img 
                                            src={storeSettings.logo}
                                            alt="Store Logo"
                                            className="w-10 h-10 rounded-full border-2 border-blue-500/30"
                                        />
                                    )}
                                    <div>
                                        <h3 className="text-white font-bold text-lg">
                                            {storeSettings.name}
                                        </h3>
                                        <p className="text-blue-400 text-sm">FiveM Server</p>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    {storeSettings.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-green-400">Server Online</span>
                                    <span className="text-slate-500">•</span>
                                    <span className="text-slate-400">{storeSettings.serverStats.players} Players</span>
                                </div>
                            </div>
                            
                            {/* Quick Links */}
                            <div>
                                <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
                                <div className="space-y-3">
                                    <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                                        <Gamepad2 className="w-4 h-4" />
                                        Browse Products
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                                        <Dice6 className="w-4 h-4" />
                                        Mystery Boxes
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                                        <Star className="w-4 h-4" />
                                        Featured Items
                                    </a>
                                </div>
                            </div>

                            {/* Contact & Support */}
                            <div>
                                <h4 className="text-white font-bold text-lg mb-4">Support</h4>
                                <div className="space-y-3">
                                    <a href={`mailto:${storeSettings.contact.email}`} className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                                        <Mail className="w-4 h-4" />
                                        Email Support
                                    </a>
                                    <a href={storeSettings.contact.discord} className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                                        <MessageCircle className="w-4 h-4" />
                                        Discord Server
                                    </a>
                                </div>
                            </div>

                            {/* Social & Legal */}
                            <div>
                                <h4 className="text-white font-bold text-lg mb-4">Connect</h4>
                                <div className="flex gap-3 mb-6">
                                    {storeSettings.social.facebook && (
                                        <a href={storeSettings.social.facebook} className="p-3 bg-slate-800/60 hover:bg-blue-500/20 rounded-xl transition-all border border-slate-700/50 hover:border-blue-500/30">
                                            <Facebook className="w-5 h-5 text-slate-400 hover:text-blue-400" />
                                        </a>
                                    )}
                                    {storeSettings.social.twitter && (
                                        <a href={storeSettings.social.twitter} className="p-3 bg-slate-800/60 hover:bg-blue-500/20 rounded-xl transition-all border border-slate-700/50 hover:border-blue-500/30">
                                            <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-400" />
                                        </a>
                                    )}
                                </div>
                                
                                <div className="space-y-2 text-sm">
                                    <a href="/terms" className="block text-slate-400 hover:text-white transition-colors">
                                        Terms of Service
                                    </a>
                                    <a href="/privacy" className="block text-slate-400 hover:text-white transition-colors">
                                        Privacy Policy
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-slate-700/50 mt-8 pt-8">
                            <div className="flex items-center justify-between">
                                <p className="text-slate-500 text-sm">
                                    © 2024 {storeSettings.name}. All rights reserved.
                                </p>
                                <div className="flex items-center gap-4">
                                    <span className="text-slate-500 text-sm">Powered by</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">N</span>
                                        </div>
                                        <span className="text-blue-400 font-medium">NexusVault</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    animation: gradient 6s ease infinite;
                    background-size: 300% 300%;
                }
                .bg-300\% {
                    background-size: 300% 300%;
                }
            `}</style>
        </div>
    );
};

export default CustomerStorePage;