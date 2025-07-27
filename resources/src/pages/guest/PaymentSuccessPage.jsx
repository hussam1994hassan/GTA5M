import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle,
    Star,
    Gift,
    Crown,
    Zap,
    Clock,
    User,
    Mail,
    MessageCircle,
    Download,
    ExternalLink,
    Copy,
    Share2,
    Twitter,
    Home,
    ShoppingBag,
    CreditCard,
    Package,
    Shield,
    Gamepad2,
    Trophy,
    Sparkles,
    Heart,
    ArrowRight,
    Calendar,
    Timer,
    Target,
    Award,
    Coins,
    Car,
    Swords,
    RefreshCw,
    Eye,
    PlayCircle,
    Users,
    Globe,
    Phone,
    HelpCircle,
    Settings,
    BookOpen,
    Map,
    Activity
} from "lucide-react";

const PaymentSuccessPage = () => {
    // Order details (would come from previous page/API)
    const [orderDetails] = useState({
        orderId: "LSR-2024-78901",
        transactionId: "txn_1O8K9L3M4N5P6Q7R",
        amount: 79.98,
        currency: "USD",
        paymentMethod: "Credit Card",
        processingTime: "Instant",
        timestamp: new Date(),
        items: [
            {
                id: 1,
                name: "Legendary Weapon Pack",
                price: 49.99,
                quantity: 1,
                type: "bundle",
                rarity: "legendary",
                image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=300&h=200&fit=crop",
                deliveryStatus: "Delivered",
                items: ["Advanced Rifle", "Combat Pistol", "Heavy Sniper"]
            },
            {
                id: 2,
                name: "VIP Membership - Gold",
                price: 29.99,
                quantity: 1,
                type: "membership",
                rarity: "epic",
                image: "https://images.unsplash.com/photo-1583161178602-a1d5d76165b5?w=300&h=200&fit=crop",
                deliveryStatus: "Delivered",
                duration: "30 days",
                items: ["VIP Gold Status", "Priority Support", "Exclusive Commands"]
            }
        ]
    });

    const [customerInfo] = useState({
        username: "ProGamer_2024",
        email: "progamer@example.com",
        discordId: "ProGamer#1234",
        serverId: "12345",
        serverName: "Los Santos Roleplay"
    });

    // Store settings
    const storeSettings = {
        name: "Los Santos Roleplay",
        logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=100&h=100&fit=crop&crop=center",
        contact: {
            email: "support@lsrp-store.com",
            discordUrl: "https://discord.gg/lsrp",
            website: "https://lsrp.com",
            phone: "+1 (555) 123-4567"
        },
        social: {
            twitter: "https://twitter.com/lsrp",
            discordUrl: "https://discord.gg/lsrp"
        }
    };

    // Animation states
    const [confettiParticles, setConfettiParticles] = useState([]);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [copiedToClipboard, setCopiedToClipboard] = useState(false);

    // Create confetti particles
    useEffect(() => {
        const particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push({
                id: i,
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: -10,
                rotation: Math.random() * 360,
                color: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 5)],
                size: Math.random() * 8 + 4,
                speedX: (Math.random() - 0.5) * 4,
                speedY: Math.random() * 3 + 2,
                rotationSpeed: (Math.random() - 0.5) * 10
            });
        }
        setConfettiParticles(particles);

        // Animate confetti falling
        const interval = setInterval(() => {
            setConfettiParticles(prev => prev.map(particle => ({
                ...particle,
                x: particle.x + particle.speedX,
                y: particle.y + particle.speedY,
                rotation: particle.rotation + particle.rotationSpeed,
                speedY: particle.speedY + 0.1 // gravity
            })).filter(particle => particle.y < (typeof window !== 'undefined' ? window.innerHeight + 50 : 800)));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    // Copy order ID
    const copyOrderId = () => {
        navigator.clipboard.writeText(orderDetails.orderId);
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 2000);
    };

    // Share functions
    const shareOnTwitter = () => {
        const text = `Just got some awesome items from ${storeSettings.name}! 🎮✨ #FiveM #Gaming`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
    };

    // Rarity styles
    const getRarityStyles = (rarity) => {
        const styles = {
            common: { 
                color: "text-slate-400", 
                bg: "bg-slate-900/40", 
                border: "border-slate-600",
                glow: "shadow-slate-400/20"
            },
            uncommon: { 
                color: "text-green-400", 
                bg: "bg-green-900/40", 
                border: "border-green-600",
                glow: "shadow-green-400/30"
            },
            rare: { 
                color: "text-blue-400", 
                bg: "bg-blue-900/40", 
                border: "border-blue-600",
                glow: "shadow-blue-400/30"
            },
            epic: { 
                color: "text-purple-400", 
                bg: "bg-purple-900/40", 
                border: "border-purple-600",
                glow: "shadow-purple-400/40"
            },
            legendary: { 
                color: "text-amber-400", 
                bg: "bg-amber-900/40", 
                border: "border-amber-600",
                glow: "shadow-amber-400/50"
            }
        };
        return styles[rarity] || styles.common;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Floating particles */}
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-20, 20],
                            x: [-10, 10],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.1,
                        }}
                    />
                ))}

                {/* Success rings */}
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.5, 2], opacity: [0, 0.3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-96 h-96 border-2 border-green-400 rounded-full"></div>
                </motion.div>
            </div>

            {/* Confetti particles */}
            {confettiParticles.map(particle => (
                <motion.div
                    key={particle.id}
                    className="absolute pointer-events-none"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: particle.color,
                        transform: `rotate(${particle.rotation}deg)`,
                        borderRadius: Math.random() > 0.5 ? '50%' : '0%'
                    }}
                />
            ))}

            <div className="relative z-10">
                {/* Header */}
                <header className="bg-black/90 backdrop-blur-md border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img 
                                    src={storeSettings.logo}
                                    alt="Store Logo"
                                    className="w-12 h-12 rounded-full border-2 border-green-500/30"
                                />
                                <div>
                                    <h1 className="text-xl font-bold text-white">{storeSettings.name}</h1>
                                    <p className="text-green-400 text-sm">Payment Successful</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-green-400 font-medium">Verified</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-white">${orderDetails.amount}</div>
                                    <div className="text-slate-400 text-sm">Total Paid</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="max-w-6xl mx-auto px-6 py-12">
                    {/* Success Hero Section */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="text-center mb-16"
                    >
                        {/* Success Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                            className="relative mx-auto mb-8"
                        >
                            <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                                <CheckCircle className="w-16 h-16 text-white" />
                            </div>
                            
                            {/* Pulsing rings */}
                            <motion.div
                                className="absolute inset-0 border-4 border-green-400 rounded-full"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute inset-0 border-4 border-emerald-400 rounded-full"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            />
                        </motion.div>

                        {/* Success Message */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <h1 className="text-5xl font-black mb-4">
                                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                                    PAYMENT SUCCESSFUL!
                                </span>
                            </h1>
                            <p className="text-2xl text-slate-300 mb-6">
                                Thank you for your purchase, {customerInfo.username}! 🎉
                            </p>
                            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                                Your items have been instantly delivered to your account on{" "}
                                <span className="text-blue-400 font-semibold">{customerInfo.serverName}</span>.
                                Get ready to dominate the streets of Los Santos!
                            </p>
                        </motion.div>
                    </motion.div>

                    <div className="grid grid-cols-3 gap-8">
                        {/* Order Details */}
                        <div className="col-span-2 space-y-6">
                            {/* Purchase Summary */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                        <Package className="w-6 h-6 text-blue-400" />
                                        Your Purchase
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <span className="text-slate-400">Order ID:</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-white font-mono font-bold">{orderDetails.orderId}</span>
                                            <button
                                                onClick={copyOrderId}
                                                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                                            >
                                                {copiedToClipboard ? (
                                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                                ) : (
                                                    <Copy className="w-4 h-4 text-slate-400" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Items */}
                                <div className="space-y-4">
                                    {orderDetails.items.map((item, index) => {
                                        const rarityStyles = getRarityStyles(item.rarity);
                                        return (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.8 + index * 0.1 }}
                                                className={`relative border-2 rounded-2xl p-6 ${rarityStyles.bg} ${rarityStyles.border} ${rarityStyles.glow} shadow-xl`}
                                            >
                                                <div className="flex gap-6">
                                                    {/* Item Image */}
                                                    <div className="relative w-32 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className={`absolute inset-0 ring-2 ${rarityStyles.border} ring-inset rounded-xl`}></div>
                                                        
                                                        {/* Delivered badge */}
                                                        <div className="absolute top-2 right-2">
                                                            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                                                <CheckCircle className="w-3 h-3" />
                                                                Delivered
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Item Details */}
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between mb-3">
                                                            <div>
                                                                <h3 className="text-white font-bold text-xl mb-2">{item.name}</h3>
                                                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold ${rarityStyles.bg} ${rarityStyles.color} border ${rarityStyles.border}`}>
                                                                    <Star className="w-4 h-4" />
                                                                    {item.rarity.toUpperCase()}
                                                                </div>
                                                            </div>
                                                            <div className="text-right">
                                                                <div className="text-2xl font-bold text-white">${item.price}</div>
                                                                <div className="text-slate-400 text-sm">Qty: {item.quantity}</div>
                                                            </div>
                                                        </div>

                                                        {/* Item contents */}
                                                        <div className="mb-4">
                                                            <div className="text-slate-300 text-sm mb-2 font-medium">Includes:</div>
                                                            <div className="flex flex-wrap gap-2">
                                                                {item.items.map((subItem, idx) => (
                                                                    <span 
                                                                        key={idx}
                                                                        className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-lg text-sm border border-slate-600"
                                                                    >
                                                                        {subItem}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Delivery status */}
                                                        <div className="flex items-center gap-6">
                                                            <div className="flex items-center gap-2">
                                                                <Zap className="w-4 h-4 text-green-400" />
                                                                <span className="text-green-400 font-medium text-sm">Instant Delivery</span>
                                                            </div>
                                                            {item.duration && (
                                                                <div className="flex items-center gap-2">
                                                                    <Clock className="w-4 h-4 text-blue-400" />
                                                                    <span className="text-blue-400 font-medium text-sm">{item.duration}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>

                            {/* Next Steps */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                                className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Target className="w-6 h-6 text-purple-400" />
                                    What's Next?
                                </h2>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-blue-900/30 border border-blue-600 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                                <Gamepad2 className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-white font-bold text-lg">Join the Server</h3>
                                        </div>
                                        <p className="text-blue-300 text-sm mb-4">
                                            Connect to {customerInfo.serverName} and start using your new items!
                                        </p>
                                        <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all">
                                            Connect Now
                                        </button>
                                    </div>

                                    <div className="bg-purple-900/30 border border-purple-600 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                                                <MessageCircle className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-white font-bold text-lg">Join Community</h3>
                                        </div>
                                        <p className="text-purple-300 text-sm mb-4">
                                            Get support, meet other players, and stay updated on new items.
                                        </p>
                                        <button 
                                            onClick={() => window.open(storeSettings.contact.discordUrl)}
                                            className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all"
                                        >
                                            Join Community
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Payment Details */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9 }}
                                className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700"
                            >
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <CreditCard className="w-5 h-5 text-green-400" />
                                    Payment Details
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Transaction ID:</span>
                                        <span className="text-white font-mono text-sm">{orderDetails.transactionId}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Payment Method:</span>
                                        <span className="text-white">{orderDetails.paymentMethod}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Processing Time:</span>
                                        <span className="text-green-400">{orderDetails.processingTime}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Date & Time:</span>
                                        <span className="text-white text-sm">
                                            {orderDetails.timestamp.toLocaleDateString()} at{" "}
                                            {orderDetails.timestamp.toLocaleTimeString()}
                                        </span>
                                    </div>
                                    <div className="border-t border-slate-700 pt-4">
                                        <div className="flex justify-between items-center text-lg font-bold">
                                            <span className="text-white">Total Amount:</span>
                                            <span className="text-green-400">${orderDetails.amount}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Player Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.0 }}
                                className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700"
                            >
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <User className="w-5 h-5 text-blue-400" />
                                    Player Information
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <div className="text-slate-400 text-sm mb-1">Username</div>
                                        <div className="text-white font-bold">{customerInfo.username}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm mb-1">Server ID</div>
                                        <div className="text-white font-mono">{customerInfo.serverId}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm mb-1">Community ID</div>
                                        <div className="text-white font-mono">{customerInfo.discordId}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm mb-1">Server</div>
                                        <div className="text-blue-400 font-medium">{customerInfo.serverName}</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Actions */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.1 }}
                                className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700"
                            >
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Settings className="w-5 h-5 text-amber-400" />
                                    Quick Actions
                                </h3>

                                <div className="space-y-3">
                                    <button
                                        onClick={() => window.location.href = "/"}
                                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                                    >
                                        <ShoppingBag className="w-5 h-5" />
                                        Continue Shopping
                                    </button>
                                    
                                    <button
                                        onClick={() => setShowShareMenu(!showShareMenu)}
                                        className="w-full py-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 font-medium rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-2"
                                    >
                                        <Share2 className="w-5 h-5" />
                                        Share Purchase
                                    </button>

                                    <a
                                        href={`mailto:${storeSettings.contact.email}?subject=Order Support - ${orderDetails.orderId}`}
                                        className="w-full py-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 font-medium rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-2"
                                    >
                                        <Mail className="w-5 h-5" />
                                        Email Support
                                    </a>
                                </div>

                                {/* Share Menu */}
                                <AnimatePresence>
                                    {showShareMenu && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="mt-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700"
                                        >
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={shareOnTwitter}
                                                    className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
                                                >
                                                    <Twitter className="w-4 h-4" />
                                                    Twitter
                                                </button>
                                                <button
                                                    onClick={() => window.open(storeSettings.contact.discordUrl)}
                                                    className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
                                                >
                                                    <MessageCircle className="w-4 h-4" />
                                                    Community
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* Support */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.3 }}
                                className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-xl rounded-2xl p-6 border border-amber-700/30"
                            >
                                <h3 className="text-amber-300 font-bold mb-4 flex items-center gap-2">
                                    <HelpCircle className="w-5 h-5" />
                                    Need Help?
                                </h3>
                                <p className="text-amber-200 text-sm mb-4">
                                    Our support team is here 24/7 to help with any questions or issues.
                                </p>
                                <div className="flex gap-2">
                                    <a
                                        href={storeSettings.contact.discordUrl}
                                        className="flex-1 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all text-center text-sm font-medium"
                                    >
                                        Community
                                    </a>
                                    <a
                                        href={`mailto:${storeSettings.contact.email}`}
                                        className="flex-1 py-2 bg-amber-800/50 hover:bg-amber-700/50 text-amber-200 rounded-lg transition-all text-center text-sm font-medium border border-amber-700"
                                    >
                                        Email
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Thank You Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                        className="mt-16 text-center"
                    >
                        <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-700">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="inline-block mb-6"
                            >
                                <Heart className="w-16 h-16 text-red-400" />
                            </motion.div>
                            
                            <h2 className="text-4xl font-black mb-6">
                                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    THANK YOU FOR CHOOSING US!
                                </span>
                            </h2>
                            
                            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Your support helps us continue creating amazing content and experiences for the{" "}
                                <span className="text-blue-400 font-semibold">{storeSettings.name}</span> community.
                                We hope you enjoy your new items and have an incredible time on the server!
                            </p>

                            <div className="flex items-center justify-center gap-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400">24/7</div>
                                    <div className="text-slate-400 text-sm">Support</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-400">Instant</div>
                                    <div className="text-slate-400 text-sm">Delivery</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-400">1000+</div>
                                    <div className="text-slate-400 text-sm">Happy Players</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <footer className="bg-black/90 backdrop-blur-md border-t border-slate-800 mt-20">
                    <div className="max-w-7xl mx-auto px-6 py-8">
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <img 
                                    src={storeSettings.logo}
                                    alt="Logo"
                                    className="w-10 h-10 rounded-full"
                                />
                                <span className="text-xl font-bold text-white">{storeSettings.name}</span>
                            </div>
                            <p className="text-slate-400 mb-6">
                                Thank you for being part of our community. Enjoy your new items!
                            </p>
                            <div className="flex items-center justify-center gap-6">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-green-400" />
                                    <span className="text-slate-400 text-sm">Secure Transactions</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-blue-400" />
                                    <span className="text-slate-400 text-sm">Instant Delivery</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award className="w-4 h-4 text-purple-400" />
                                    <span className="text-slate-400 text-sm">Premium Quality</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default PaymentSuccessPage;