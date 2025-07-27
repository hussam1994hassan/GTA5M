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
    Monitor,
    TrendingUp,
    Award,
    Calendar,
    Percent,
    UserCheck,
    Map,
    Server,
    Wifi,
    Activity,
    ArrowRight,
    Gem,
    Coins,
    Swords,
    Car,
    CreditCard
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
        backgroundOpacity: 0.1,
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
            player_stats: true,
            player_gallery: true
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
    const [showPlayerStats, setShowPlayerStats] = useState(false);
    const [particles, setParticles] = useState([]);

    // Categories and Rarities
    const categories = [
        { id: "all", label: "All Products", icon: <Package className="w-5 h-5" />, color: "slate", gradient: "from-slate-500 to-slate-600", description: "Browse all items" },
        { id: "weapons", label: "Weapons", icon: <Swords className="w-5 h-5" />, color: "red", gradient: "from-red-500 to-red-600", description: "Combat gear" },
        { id: "vehicles", label: "Vehicles", icon: <Car className="w-5 h-5" />, color: "blue", gradient: "from-blue-500 to-blue-600", description: "Cars & bikes" },
        { id: "lootboxes", label: "Mystery Boxes", icon: <Gift className="w-5 h-5" />, color: "purple", gradient: "from-purple-500 to-purple-600", description: "Try your luck" },
        { id: "bundles", label: "Bundles", icon: <Package className="w-5 h-5" />, color: "green", gradient: "from-green-500 to-green-600", description: "Value packs" },
        { id: "equipment", label: "Equipment", icon: <Shield className="w-5 h-5" />, color: "orange", gradient: "from-orange-500 to-orange-600", description: "Tools & gear" },
        { id: "memberships", label: "VIP Memberships", icon: <Crown className="w-5 h-5" />, color: "yellow", gradient: "from-yellow-500 to-yellow-600", description: "Premium perks" }
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
            for (let i = 0; i < 30; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 1.5,
                    speedY: (Math.random() - 0.5) * 1.5,
                    opacity: Math.random() * 0.4 + 0.1
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
        }, 50);

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
    };

    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(item => item.product.id !== productId));
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
                return prev.filter(item => item.id !== product.id);
            } else {
                return [...prev, product];
            }
        });
    };

    const isInWishlist = (product) => {
        return wishlist.some(item => item.id === product.id);
    };

    // Rarity Style Helper
    const getRarityStyles = (rarity) => {
        const styles = {
            common: {
                text: "text-slate-600",
                bg: "bg-gradient-to-r from-slate-100 to-slate-200",
                border: "border-slate-300",
                glow: "shadow-slate-400/20",
                particle: "bg-slate-400",
                darkBg: "bg-slate-900/40",
                darkBorder: "border-slate-700/50"
            },
            uncommon: {
                text: "text-green-600",
                bg: "bg-gradient-to-r from-green-100 to-green-200",
                border: "border-green-300",
                glow: "shadow-green-400/30",
                particle: "bg-green-400",
                darkBg: "bg-green-900/40",
                darkBorder: "border-green-700/50"
            },
            rare: {
                text: "text-blue-600",
                bg: "bg-gradient-to-r from-blue-100 to-blue-200",
                border: "border-blue-300",
                glow: "shadow-blue-400/30",
                particle: "bg-blue-400",
                darkBg: "bg-blue-900/40",
                darkBorder: "border-blue-700/50"
            },
            epic: {
                text: "text-purple-600",
                bg: "bg-gradient-to-r from-purple-100 to-purple-200",
                border: "border-purple-300",
                glow: "shadow-purple-400/40",
                particle: "bg-purple-400",
                darkBg: "bg-purple-900/40",
                darkBorder: "border-purple-700/50"
            },
            legendary: {
                text: "text-amber-600",
                bg: "bg-gradient-to-r from-amber-100 to-amber-200",
                border: "border-amber-300",
                glow: "shadow-amber-400/50",
                particle: "bg-amber-400",
                darkBg: "bg-amber-900/40",
                darkBorder: "border-amber-700/50"
            }
        };
        return styles[rarity] || styles.common;
    };

    // Open Product Modal
    const openProductModal = (product) => {
        setSelectedProduct(product);
        setShowProductModal(true);
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
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Animated Background Particles */}
            <div className="fixed inset-0 z-0">
                {particles.map(particle => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full blur-sm"
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
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90"></div>
                </div>
            )}

            <div className="relative z-10">
                {/* Enhanced Gaming Banner */}
                {storeSettings.banner && storeSettings.headerStyle === "banner" && (
                    <div className="relative h-[600px] overflow-hidden">
                        <img 
                            src={storeSettings.banner}
                            alt="Store Banner"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
                        
                        {/* Enhanced Store Info Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="relative"
                            >
                                {/* Server Logo with Enhanced Glow Effect */}
                                <div className="relative mb-10">
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur-3xl opacity-60"
                                        animate={{ 
                                            scale: [1, 1.3, 1],
                                            rotate: [0, 180, 360]
                                        }}
                                        transition={{ duration: 8, repeat: Infinity }}
                                    />
                                    <img 
                                        src={storeSettings.logo}
                                        alt="Store Logo"
                                        className="relative w-36 h-36 rounded-full border-4 border-white/20 shadow-2xl"
                                    />
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{
                                            background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
                                            backgroundSize: "200% 200%"
                                        }}
                                        animate={{ 
                                            backgroundPosition: ["0% 0%", "200% 200%"]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    />
                                </div>
                                
                                {/* Enhanced Server Name */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="mb-6"
                                >
                                    <h1 className="text-7xl font-black mb-3 tracking-tight">
                                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-300% animate-gradient">
                                            {storeSettings.name.toUpperCase()}
                                        </span>
                                    </h1>
                                    <div className="flex items-center justify-center gap-6 text-blue-300">
                                        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-blue-300"></div>
                                        <span className="text-xl font-bold tracking-[0.3em] uppercase">FiveM Server</span>
                                        <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-blue-300"></div>
                                    </div>
                                </motion.div>
                                
                                <motion.p 
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-2xl text-blue-100 mb-10 font-medium max-w-3xl"
                                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                                >
                                    {storeSettings.tagline}
                                </motion.p>

                                {/* Call to Action Buttons */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex gap-6 justify-center mb-12"
                                >
                                    <button 
                                        onClick={() => setSelectedCategory("all")}
                                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3"
                                    >
                                        <Gamepad2 className="w-5 h-5" />
                                        Browse Store
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                    <a 
                                        href={storeSettings.contact.discord}
                                        className="px-8 py-4 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white font-bold rounded-xl transition-all border border-white/20 flex items-center gap-3"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Join Discord
                                    </a>
                                </motion.div>

                                {/* Feature Highlights */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="grid grid-cols-4 gap-8 max-w-4xl mx-auto"
                                >
                                    <div className="bg-black/30 backdrop-blur-sm px-6 py-4 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
                                        <Gem className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                                        <div className="text-sm font-bold text-white">Premium Items</div>
                                    </div>
                                    <div className="bg-black/30 backdrop-blur-sm px-6 py-4 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all">
                                        <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                                        <div className="text-sm font-bold text-white">Secure Trading</div>
                                    </div>
                                    <div className="bg-black/30 backdrop-blur-sm px-6 py-4 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                                        <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                                        <div className="text-sm font-bold text-white">Instant Delivery</div>
                                    </div>
                                    <div className="bg-black/30 backdrop-blur-sm px-6 py-4 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                                        <Users className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                                        <div className="text-sm font-bold text-white">24/7 Support</div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                )}

                {/* Enhanced Gaming Header */}
                <header className="bg-black/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
                    <div className="max-w-7xl mx-auto px-6 py-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-8">
                                {/* Logo & Brand */}
                                <div className="flex items-center gap-3">
                                    <img 
                                        src={storeSettings.logo}
                                        alt="Logo"
                                        className="w-10 h-10 rounded-full border-2 border-blue-500/30"
                                    />
                                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        {storeSettings.name}
                                    </span>
                                </div>

                                {/* Gaming Search Bar */}
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Search for items..."
                                        className="pl-12 bg-slate-800/60 border border-slate-700 rounded-xl text-white px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all w-96 backdrop-blur-sm"
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

                            <div className="flex items-center gap-4">
                                {/* Player Profile */}
                                <button
                                    onClick={() => setShowPlayerStats(true)}
                                    className="flex items-center gap-3 bg-slate-800/60 hover:bg-slate-700/60 px-5 py-2.5 rounded-xl transition-all border border-slate-700 backdrop-blur-sm"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">{playerStats.level}</span>
                                        </div>
                                        <div className="text-left">
                                            <div className="text-white text-sm font-medium">{playerStats.username}</div>
                                            <div className="text-slate-400 text-xs">View Profile</div>
                                        </div>
                                    </div>
                                </button>

                                {/* Cart Button */}
                                <button
                                    onClick={() => setShowCart(!showCart)}
                                    className="relative bg-slate-800/60 hover:bg-slate-700/60 p-3 rounded-xl transition-all border border-slate-700 backdrop-blur-sm group"
                                >
                                    <ShoppingCart className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                                    {getTotalItems() > 0 && (
                                        <motion.span 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg"
                                        >
                                            {getTotalItems()}
                                        </motion.span>
                                    )}
                                </button>

                                {/* Login Button */}
                                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg transform hover:scale-105">
                                    Login / Register
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-6 py-10">
                    {/* Categories Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Shop by Category</h2>
                        <div className="grid grid-cols-7 gap-4">
                            {categories.map(category => (
                                <motion.button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative p-6 rounded-2xl transition-all border-2 overflow-hidden group ${
                                        selectedCategory === category.id
                                            ? `bg-gradient-to-br ${category.gradient} text-white border-transparent shadow-2xl`
                                            : 'bg-slate-800/40 hover:bg-slate-800/60 text-slate-300 border-slate-700 hover:border-slate-600'
                                    }`}
                                >
                                    <div className="relative z-10">
                                        <div className="flex justify-center mb-3">
                                            {category.icon}
                                        </div>
                                        <div className="text-sm font-bold">{category.label}</div>
                                        <div className="text-xs opacity-70 mt-1">{category.description}</div>
                                    </div>
                                    {selectedCategory === category.id && (
                                        <motion.div
                                            className="absolute inset-0 bg-white/10"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-8">
                        {/* Enhanced Filters Sidebar */}
                        <div className="col-span-3">
                            <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-slate-800 sticky top-28">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Filter className="w-5 h-5 text-blue-400" />
                                    Filters
                                </h2>

                                {/* Rarity Filter */}
                                <div className="mb-6">
                                    <label className="block text-slate-300 text-sm font-medium mb-3">
                                        Item Rarity
                                    </label>
                                    <div className="space-y-2">
                                        {rarities.map(rarity => (
                                            <label
                                                key={rarity.id}
                                                className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800/60 cursor-pointer transition-all"
                                            >
                                                <input
                                                    type="radio"
                                                    name="rarity"
                                                    value={rarity.id}
                                                    checked={selectedRarity === rarity.id}
                                                    onChange={(e) => setSelectedRarity(e.target.value)}
                                                    className="w-4 h-4 text-blue-600"
                                                />
                                                <span className={`text-${rarity.color}-400 font-medium`}>
                                                    {rarity.label}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range */}
                                <div className="mb-6">
                                    <label className="block text-slate-300 text-sm font-medium mb-3">
                                        Price Range
                                    </label>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="number"
                                            value={priceRange[0]}
                                            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                                            className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
                                            placeholder="Min"
                                        />
                                        <span className="text-slate-400">-</span>
                                        <input
                                            type="number"
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                            className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
                                            placeholder="Max"
                                        />
                                    </div>
                                </div>

                                {/* Sort Options */}
                                <div>
                                    <label className="block text-slate-300 text-sm font-medium mb-3">
                                        Sort By
                                    </label>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full bg-slate-800/60 border border-slate-700 rounded-lg text-white px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/30 transition-all"
                                    >
                                        <option value="featured">Featured First</option>
                                        <option value="price_low">Price: Low to High</option>
                                        <option value="price_high">Price: High to Low</option>
                                        <option value="rating">Highest Rated</option>
                                        <option value="name">Name A-Z</option>
                                    </select>
                                </div>

                                {/* Clear Filters */}
                                <button
                                    onClick={() => {
                                        setSelectedCategory("all");
                                        setSelectedRarity("all");
                                        setPriceRange([0, 100]);
                                        setSortBy("featured");
                                    }}
                                    className="w-full mt-6 py-3 bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 font-medium rounded-lg transition-all"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        </div>

                        {/* Enhanced Products Grid */}
                        <div className="col-span-9">
                            {/* Results Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">
                                        {selectedCategory === "all" ? "All Products" : categories.find(c => c.id === selectedCategory)?.label}
                                    </h2>
                                    <p className="text-slate-400">
                                        {sortedProducts.length} items available
                                    </p>
                                </div>
                                
                                {/* Quick Stats */}
                                <div className="flex gap-8">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                                            {products.filter(p => p.featured).length}
                                        </div>
                                        <div className="text-xs text-slate-400 uppercase tracking-wide">Featured</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
                                            {products.filter(p => p.type === "lootbox").length}
                                        </div>
                                        <div className="text-xs text-slate-400 uppercase tracking-wide">Mystery</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                                            {products.filter(p => p.metadata.rarity === "legendary").length}
                                        </div>
                                        <div className="text-xs text-slate-400 uppercase tracking-wide">Legendary</div>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Gaming Products */}
                            <div className="grid grid-cols-2 gap-6">
                                {sortedProducts.map((product, index) => {
                                    const rarityStyles = getRarityStyles(product.metadata.rarity);
                                    
                                    return (
                                        <motion.div
                                            key={product.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ y: -8 }}
                                            className={`bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-md border-2 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer ${rarityStyles.darkBorder} hover:${rarityStyles.border}`}
                                            onClick={() => openProductModal(product)}
                                        >
                                            {/* Enhanced Product Image */}
                                            <div className="relative h-72 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                
                                                {/* Enhanced Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                                                {/* Badges Container */}
                                                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                                    <div className="flex flex-col gap-2">
                                                        {product.featured && (
                                                            <motion.div 
                                                                initial={{ scale: 0, x: -20 }}
                                                                animate={{ scale: 1, x: 0 }}
                                                                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg"
                                                            >
                                                                <Star className="w-4 h-4 fill-current" />
                                                                Featured
                                                            </motion.div>
                                                        )}
                                                        {product.type === "lootbox" && (
                                                            <motion.div
                                                                initial={{ scale: 0, x: -20 }}
                                                                animate={{ scale: 1, x: 0 }}
                                                                transition={{ delay: 0.1 }}
                                                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg"
                                                            >
                                                                <Gift className="w-4 h-4" />
                                                                Mystery
                                                            </motion.div>
                                                        )}
                                                    </div>

                                                    {/* Stock Indicator */}
                                                    {product.stock_type === "limited" && (
                                                        <div className="bg-red-500/90 text-white px-3 py-1 rounded-full text-xs font-bold">
                                                            {product.stock_quantity} left
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Quick Actions */}
                                                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            toggleWishlist(product);
                                                        }}
                                                        className={`p-3 rounded-xl backdrop-blur-sm transition-all ${
                                                            isInWishlist(product)
                                                                ? 'bg-red-500 text-white'
                                                                : 'bg-black/60 text-white hover:bg-red-500/80'
                                                        }`}
                                                    >
                                                        <Heart className={`w-5 h-5 ${isInWishlist(product) ? 'fill-current' : ''}`} />
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            addToCart(product);
                                                        }}
                                                        className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl backdrop-blur-sm transition-all"
                                                    >
                                                        <ShoppingCart className="w-5 h-5" />
                                                    </motion.button>
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                {/* Product Header */}
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                                            {product.name}
                                                        </h3>
                                                        <p className="text-slate-400 text-sm line-clamp-2">
                                                            {product.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Stats Row */}
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className={`px-4 py-2 rounded-full text-sm font-bold ${rarityStyles.darkBg} ${rarityStyles.darkBorder} border text-${rarityStyles.text.split('-')[1]}-400`}>
                                                        {product.metadata.rarity.toUpperCase()}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                        <span className="text-white text-sm font-medium">{product.rating}</span>
                                                        <span className="text-slate-500 text-sm">({product.reviews})</span>
                                                    </div>
                                                </div>

                                                {/* Items Preview */}
                                                <div className="mb-5">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <span className="text-sm text-slate-400">
                                                            {product.type === "lootbox" ? "Possible Rewards" : "Included Items"}
                                                        </span>
                                                        <span className="text-xs text-slate-500">
                                                            {product.items.length} items
                                                        </span>
                                                    </div>
                                                    <div className="grid grid-cols-6 gap-2">
                                                        {product.items.slice(0, 5).map((item, idx) => (
                                                            <motion.div 
                                                                key={idx}
                                                                whileHover={{ scale: 1.1, zIndex: 10 }}
                                                                className="relative group/item"
                                                            >
                                                                <div className={`w-full aspect-square rounded-lg overflow-hidden border-2 ${getRarityStyles(item.rarity).darkBorder}`}>
                                                                    <img
                                                                        src={item.image}
                                                                        alt={item.name}
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                </div>
                                                                {/* Tooltip */}
                                                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none z-20">
                                                                    <div className="bg-black/90 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                                                                        <div className="font-bold">{item.name}</div>
                                                                        {product.type === "lootbox" && (
                                                                            <div className="text-slate-300">{item.drop_rate}% chance</div>
                                                                        )}
                                                                    </div>
                                                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                                                                        <div className="border-4 border-transparent border-t-black/90"></div>
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                        {product.items.length > 5 && (
                                                            <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 border-2 border-slate-600 flex items-center justify-center">
                                                                <span className="text-sm text-slate-300 font-bold">+{product.items.length - 5}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Price and Action */}
                                                <div className="flex items-end justify-between pt-4 border-t border-slate-800">
                                                    <div>
                                                        <div className="text-sm text-slate-400 mb-1">Price</div>
                                                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                            ${product.price}
                                                        </div>
                                                    </div>
                                                    
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            addToCart(product);
                                                        }}
                                                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-lg flex items-center gap-2"
                                                    >
                                                        <ShoppingCart className="w-5 h-5" />
                                                        Add to Cart
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {sortedProducts.length === 0 && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-20"
                                >
                                    <Package className="w-24 h-24 text-slate-700 mx-auto mb-6" />
                                    <h3 className="text-2xl font-bold text-slate-300 mb-3">
                                        No products found
                                    </h3>
                                    <p className="text-slate-500 mb-8 max-w-md mx-auto">
                                        Try adjusting your filters or search term to find what you're looking for
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSearchTerm("");
                                            setSelectedCategory("all");
                                            setSelectedRarity("all");
                                            setPriceRange([0, 100]);
                                        }}
                                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all"
                                    >
                                        Clear All Filters
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </main>

                {/* Enhanced Product Modal */}
                <AnimatePresence>
                    {showProductModal && selectedProduct && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                            onClick={() => setShowProductModal(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-8">
                                    {/* Modal Header */}
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-4">
                                            <h2 className="text-3xl font-bold text-white">
                                                {selectedProduct.name}
                                            </h2>
                                            <div className={`px-4 py-2 rounded-full text-sm font-bold ${getRarityStyles(selectedProduct.metadata.rarity).bg} ${getRarityStyles(selectedProduct.metadata.rarity).text}`}>
                                                {selectedProduct.metadata.rarity.toUpperCase()}
                                            </div>
                                            {selectedProduct.type === "lootbox" && (
                                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                                                    <Gift className="w-4 h-4" />
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
                                        {/* Product Image Gallery */}
                                        <div className="space-y-4">
                                            <div className="relative">
                                                <img
                                                    src={selectedProduct.image}
                                                    alt={selectedProduct.name}
                                                    className="w-full h-[400px] object-cover rounded-2xl"
                                                />
                                                <div className={`absolute inset-0 rounded-2xl ring-4 ${getRarityStyles(selectedProduct.metadata.rarity).border} ring-opacity-30`}></div>
                                            </div>
                                            
                                            {/* Product Stats */}
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                                        <span className="text-slate-300 text-sm">Rating</span>
                                                    </div>
                                                    <div className="text-2xl font-bold text-white">{selectedProduct.rating}/5</div>
                                                    <div className="text-slate-400 text-sm">{selectedProduct.reviews} reviews</div>
                                                </div>
                                                
                                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Package className="w-5 h-5 text-blue-400" />
                                                        <span className="text-slate-300 text-sm">Category</span>
                                                    </div>
                                                    <div className="text-2xl font-bold text-white capitalize">{selectedProduct.category}</div>
                                                    <div className="text-slate-400 text-sm">
                                                        {categories.find(c => c.id === selectedProduct.category)?.label}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Product Info */}
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="text-lg font-semibold text-slate-300 mb-2">Description</h3>
                                                <p className="text-slate-400 leading-relaxed">
                                                    {selectedProduct.description}
                                                </p>
                                            </div>

                                            {/* Requirements */}
                                            {selectedProduct.metadata.level_requirement > 0 && (
                                                <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl">
                                                    <div className="flex items-center gap-2 text-amber-400">
                                                        <AlertTriangle className="w-5 h-5" />
                                                        <span className="font-medium">Level {selectedProduct.metadata.level_requirement}+ Required</span>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Tags */}
                                            <div>
                                                <h3 className="text-lg font-semibold text-slate-300 mb-3">Tags</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedProduct.metadata.tags.map((tag, index) => (
                                                        <span 
                                                            key={index}
                                                            className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full text-sm border border-slate-700"
                                                        >
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Price Section */}
                                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700">
                                                <div className="flex items-end justify-between mb-6">
                                                    <div>
                                                        <div className="text-sm text-slate-400 mb-2">Price</div>
                                                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                            ${selectedProduct.price}
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        {selectedProduct.stock_type === "limited" && (
                                                            <div className="text-orange-400 text-sm font-medium">
                                                                Only {selectedProduct.stock_quantity} left!
                                                            </div>
                                                        )}
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
                                                        className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-lg"
                                                    >
                                                        {selectedProduct.type === "lootbox" ? 
                                                            <span className="flex items-center justify-center gap-2">
                                                                <Gift className="w-5 h-5" />
                                                                Open Mystery Box
                                                            </span> : 
                                                            <span className="flex items-center justify-center gap-2">
                                                                <ShoppingCart className="w-5 h-5" />
                                                                Add to Cart
                                                            </span>
                                                        }
                                                    </motion.button>
                                                    
                                                    <motion.button
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        onClick={() => toggleWishlist(selectedProduct)}
                                                        className={`px-6 py-4 rounded-xl transition-all border-2 ${
                                                            isInWishlist(selectedProduct)
                                                                ? 'bg-red-500 border-red-500 text-white'
                                                                : 'bg-transparent border-slate-700 text-slate-400 hover:text-red-400 hover:border-red-500'
                                                        }`}
                                                    >
                                                        <Heart className={`w-5 h-5 ${isInWishlist(selectedProduct) ? 'fill-current' : ''}`} />
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Enhanced Items Display */}
                                    <div className="mt-10">
                                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                            {selectedProduct.type === "lootbox" ? (
                                                <>
                                                    <Gift className="w-6 h-6 text-purple-400" />
                                                    Mystery Box Contents
                                                    <span className="text-sm text-slate-400 font-normal">
                                                        (You'll receive ONE random item)
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <Package className="w-6 h-6 text-blue-400" />
                                                    Bundle Contents
                                                    <span className="text-sm text-slate-400 font-normal">
                                                        (You'll receive ALL items)
                                                    </span>
                                                </>
                                            )}
                                        </h3>

                                        {selectedProduct.type === "lootbox" ? (
                                            /* Enhanced Loot Box Display */
                                            <div className="space-y-6">
                                                <div className="grid grid-cols-2 gap-4">
                                                    {selectedProduct.items.map((item, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            whileHover={{ scale: 1.02 }}
                                                            className={`relative border-2 rounded-2xl p-6 ${getRarityStyles(item.rarity).darkBg} ${getRarityStyles(item.rarity).darkBorder} hover:${getRarityStyles(item.rarity).border} transition-all`}
                                                        >
                                                            <div className="flex gap-4">
                                                                {/* Item Image */}
                                                                <div className="relative w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
                                                                    <img
                                                                        src={item.image}
                                                                        alt={item.name}
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                    <div className={`absolute inset-0 ring-2 ${getRarityStyles(item.rarity).border} ring-inset rounded-xl`}></div>
                                                                </div>

                                                                {/* Item Details */}
                                                                <div className="flex-1">
                                                                    <h4 className="text-white font-bold text-lg mb-2">
                                                                        {item.name}
                                                                    </h4>
                                                                    
                                                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold ${getRarityStyles(item.rarity).bg} ${getRarityStyles(item.rarity).text} mb-3`}>
                                                                        <Gem className="w-4 h-4" />
                                                                        {item.rarity.toUpperCase()}
                                                                    </div>

                                                                    <div className="space-y-3">
                                                                        <div>
                                                                            <div className="flex items-center justify-between mb-1">
                                                                                <span className="text-slate-400 text-sm">Drop Chance</span>
                                                                                <span className={`text-2xl font-bold ${
                                                                                    item.drop_rate <= 10 ? 'text-red-400' :
                                                                                    item.drop_rate <= 30 ? 'text-amber-400' :
                                                                                    'text-green-400'
                                                                                }`}>
                                                                                    {item.drop_rate}%
                                                                                </span>
                                                                            </div>
                                                                            
                                                                            <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                                                                                <motion.div 
                                                                                    className={`h-3 rounded-full ${
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
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 rounded-2xl border border-purple-700/30">
                                                    <div className="flex items-start gap-3">
                                                        <Dice6 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                                                        <div>
                                                            <h4 className="text-purple-300 font-bold mb-2">How Mystery Boxes Work</h4>
                                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                                When you purchase this mystery box, you'll receive exactly ONE random item from the list above. 
                                                                The drop rates determine your chances of getting each item. Rarer items have lower drop rates but are more valuable!
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            /* Regular Bundle Items */
                                            <div className="grid grid-cols-3 gap-4">
                                                {selectedProduct.items.map((item, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        whileHover={{ scale: 1.05 }}
                                                        className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/30 transition-all"
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
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-slate-400">Quantity:</span>
                                                                <span className="text-white font-medium">x{item.quantity}</span>
                                                            </div>
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-slate-400">Duration:</span>
                                                                <div className="flex items-center gap-1">
                                                                    {item.duration_type === "temporary" ? (
                                                                        <>
                                                                            <Clock className="w-3 h-3 text-amber-400" />
                                                                            <span className="text-amber-400">{item.duration_value} days</span>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <Infinity className="w-3 h-3 text-green-400" />
                                                                            <span className="text-green-400">Permanent</span>
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

                {/* Enhanced Cart Sidebar */}
                <AnimatePresence>
                    {showCart && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            className="fixed top-0 right-0 w-[450px] h-full bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-xl border-l border-slate-800 z-50 overflow-y-auto"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                        <ShoppingCart className="w-6 h-6 text-blue-400" />
                                        Shopping Cart
                                    </h2>
                                    <button
                                        onClick={() => setShowCart(false)}
                                        className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                                    >
                                        <X className="w-5 h-5 text-slate-400" />
                                    </button>
                                </div>

                                {cart.length === 0 ? (
                                    <div className="text-center py-20">
                                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-800/50 flex items-center justify-center">
                                            <ShoppingCart className="w-12 h-12 text-slate-600" />
                                        </div>
                                        <p className="text-slate-300 text-xl mb-3">Your cart is empty</p>
                                        <p className="text-slate-500 text-sm mb-8">Add some awesome items to get started!</p>
                                        <button
                                            onClick={() => setShowCart(false)}
                                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all"
                                        >
                                            Continue Shopping
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="space-y-4 mb-8">
                                            {cart.map(item => (
                                                <motion.div 
                                                    key={item.product.id} 
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    className="bg-slate-800/50 p-5 rounded-xl border border-slate-700"
                                                >
                                                    <div className="flex gap-4">
                                                        <img
                                                            src={item.product.image}
                                                            alt={item.product.name}
                                                            className="w-20 h-20 object-cover rounded-lg"
                                                        />
                                                        <div className="flex-1">
                                                            <h3 className="text-white font-semibold mb-1">
                                                                {item.product.name}
                                                            </h3>
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <div className={`inline-block px-2 py-1 rounded text-xs font-bold ${getRarityStyles(item.product.metadata.rarity).bg} ${getRarityStyles(item.product.metadata.rarity).text}`}>
                                                                    {item.product.metadata.rarity}
                                                                </div>
                                                                {item.product.type === "lootbox" && (
                                                                    <span className="text-xs text-purple-400 flex items-center gap-1">
                                                                        <Gift className="w-3 h-3" />
                                                                        Mystery
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <div className="flex items-center gap-2">
                                                                    <button
                                                                        onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                                                                        className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                                                                    >
                                                                        <Minus className="w-4 h-4 text-slate-300" />
                                                                    </button>
                                                                    <span className="text-white w-10 text-center font-medium">
                                                                        {item.quantity}
                                                                    </span>
                                                                    <button
                                                                        onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                                                                        className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                                                                    >
                                                                        <Plus className="w-4 h-4 text-slate-300" />
                                                                    </button>
                                                                </div>
                                                                <div className="text-right">
                                                                    <div className="text-xl font-bold text-blue-400">
                                                                        ${(item.product.price * item.quantity).toFixed(2)}
                                                                    </div>
                                                                    <div className="text-xs text-slate-500">
                                                                        ${item.product.price} each
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() => removeFromCart(item.product.id)}
                                                            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all self-start"
                                                        >
                                                            <X className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Cart Summary */}
                                        <div className="bg-slate-800/30 rounded-xl p-6 mb-6">
                                            <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
                                            <div className="space-y-3 mb-6">
                                                <div className="flex items-center justify-between text-slate-300">
                                                    <span>Subtotal ({getTotalItems()} items)</span>
                                                    <span>${getTotalPrice().toFixed(2)}</span>
                                                </div>
                                                <div className="flex items-center justify-between text-slate-300">
                                                    <span>Processing Fee</span>
                                                    <span className="text-green-400">FREE</span>
                                                </div>
                                                <div className="flex items-center justify-between text-xl font-bold text-white pt-3 border-t border-slate-700">
                                                    <span>Total</span>
                                                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                        ${getTotalPrice().toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="space-y-3">
                                                <motion.button 
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                                                >
                                                    <CreditCard className="w-5 h-5" />
                                                    Proceed to Checkout
                                                </motion.button>
                                                
                                                <button
                                                    onClick={() => setShowCart(false)}
                                                    className="w-full py-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 font-medium rounded-xl transition-all border border-slate-700"
                                                >
                                                    Continue Shopping
                                                </button>
                                            </div>
                                        </div>

                                        {/* Security Badge */}
                                        <div className="text-center">
                                            <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                                                <Shield className="w-4 h-4" />
                                                <span>Secure checkout powered by Stripe</span>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Enhanced Footer */}
                <footer className="bg-black/90 backdrop-blur-md border-t border-slate-800 mt-20">
                    <div className="max-w-7xl mx-auto px-6 py-16">
                        <div className="grid grid-cols-4 gap-8 mb-12">
                            {/* Brand Section */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <img 
                                        src={storeSettings.logo}
                                        alt="Logo"
                                        className="w-12 h-12 rounded-full border-2 border-blue-500/30"
                                    />
                                    <div>
                                        <h3 className="text-white font-bold text-xl">
                                            {storeSettings.name}
                                        </h3>
                                        <p className="text-blue-400 text-sm">FiveM Server Store</p>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    Your premier destination for FiveM server items, vehicles, and exclusive content.
                                </p>
                                <div className="flex gap-3">
                                    <a 
                                        href={storeSettings.contact.discord}
                                        className="p-3 bg-slate-800/60 hover:bg-blue-500/20 rounded-xl transition-all border border-slate-700 hover:border-blue-500/30 group"
                                    >
                                        <MessageCircle className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
                                    </a>
                                    {storeSettings.social.facebook && (
                                        <a 
                                            href={storeSettings.social.facebook}
                                            className="p-3 bg-slate-800/60 hover:bg-blue-500/20 rounded-xl transition-all border border-slate-700 hover:border-blue-500/30 group"
                                        >
                                            <Facebook className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
                                        </a>
                                    )}
                                    {storeSettings.social.twitter && (
                                        <a 
                                            href={storeSettings.social.twitter}
                                            className="p-3 bg-slate-800/60 hover:bg-blue-500/20 rounded-xl transition-all border border-slate-700 hover:border-blue-500/30 group"
                                        >
                                            <Twitter className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
                                        </a>
                                    )}
                                    {storeSettings.social.youtube && (
                                        <a 
                                            href={storeSettings.social.youtube}
                                            className="p-3 bg-slate-800/60 hover:bg-red-500/20 rounded-xl transition-all border border-slate-700 hover:border-red-500/30 group"
                                        >
                                            <Youtube className="w-5 h-5 text-slate-400 group-hover:text-red-400" />
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            {/* Quick Links */}
                            <div>
                                <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                                <div className="space-y-3">
                                    <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        <span>Browse All Products</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        <span>Mystery Boxes</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        <span>VIP Memberships</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        <span>New Arrivals</span>
                                    </a>
                                </div>
                            </div>

                            {/* Support */}
                            <div>
                                <h4 className="text-white font-bold text-lg mb-6">Support</h4>
                                <div className="space-y-3">
                                    <a href={`mailto:${storeSettings.contact.email}`} className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        <span>Email Support</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        <span>FAQ & Help Center</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        <span>Terms of Service</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        <span>Privacy Policy</span>
                                    </a>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div>
                                <h4 className="text-white font-bold text-lg mb-6">Stay Updated</h4>
                                <p className="text-slate-400 text-sm mb-4">
                                    Subscribe to get exclusive offers and new product announcements.
                                </p>
                                <div className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                                    />
                                    <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all text-sm">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-slate-800 pt-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-500 text-sm">
                                        © 2024 {storeSettings.name}. All rights reserved.
                                    </p>
                                    <p className="text-slate-600 text-xs mt-1">
                                        FiveM and Grand Theft Auto V are registered trademarks of their respective owners.
                                    </p>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-green-400" />
                                        <span className="text-slate-400 text-sm">Secure Payments</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-blue-400" />
                                        <span className="text-slate-400 text-sm">Instant Delivery</span>
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