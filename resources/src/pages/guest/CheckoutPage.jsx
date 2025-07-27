import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    CreditCard,
    Wallet,
    Shield,
    CheckCircle,
    AlertTriangle,
    Percent,
    Tag,
    Clock,
    User,
    Mail,
    Phone,
    MapPin,
    Globe,
    Lock,
    Eye,
    EyeOff,
    Copy,
    QrCode,
    Download,
    Star,
    Package,
    Gift,
    Zap,
    Info,
    X,
    Plus,
    Minus,
    ExternalLink,
    RefreshCw,
    Timer,
    DollarSign,
    Coins,
    Car,
    Swords,
    Crown,
    Gamepad2
} from "lucide-react";

const CheckoutPage = () => {
    // Sample cart items from previous page
    const [cartItems] = useState([
        {
            id: 1,
            name: "Legendary Weapon Pack",
            price: 49.99,
            quantity: 1,
            type: "bundle",
            rarity: "legendary",
            image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=100&h=100&fit=crop",
            items: ["Advanced Rifle", "Combat Pistol", "Heavy Sniper"]
        },
        {
            id: 2,
            name: "VIP Membership - Gold",
            price: 29.99,
            quantity: 1,
            type: "membership",
            rarity: "epic",
            image: "https://images.unsplash.com/photo-1583161178602-a1d5d76165b5?w=100&h=100&fit=crop",
            items: ["VIP Gold Status (30 days)"]
        }
    ]);

    // Store settings
    const storeSettings = {
        name: "Los Santos Roleplay",
        currency: "USD",
        contact: {
            email: "support@lsrp-store.com",
            discord: "https://discord.gg/lsrp"
        }
    };

    // Payment methods
    const paymentMethods = [
        {
            id: "card",
            name: "Credit/Debit Card",
            description: "Visa, Mastercard, American Express",
            icon: <CreditCard className="w-6 h-6" />,
            fees: "2.9% + $0.30",
            processingTime: "Instant",
            recommended: true,
            color: "blue",
            gradient: "from-blue-500 to-blue-600"
        },
        {
            id: "paypal",
            name: "PayPal",
            description: "Pay with your PayPal account",
            icon: <Wallet className="w-6 h-6" />,
            fees: "3.4% + $0.30",
            processingTime: "Instant",
            recommended: false,
            color: "blue",
            gradient: "from-blue-500 to-purple-500"
        },
        {
            id: "bitcoin",
            name: "Bitcoin",
            description: "Pay with Bitcoin (BTC)",
            icon: <Coins className="w-6 h-6" />,
            fees: "1% network fee",
            processingTime: "15-30 minutes",
            recommended: false,
            color: "orange",
            gradient: "from-orange-500 to-yellow-500"
        },
        {
            id: "binance",
            name: "Binance Pay",
            description: "Pay with Binance Wallet",
            icon: <Wallet className="w-6 h-6" />,
            fees: "0% fees",
            processingTime: "Instant",
            recommended: false,
            color: "yellow",
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            id: "crypto",
            name: "Other Crypto",
            description: "ETH, USDT, BNB and more",
            icon: <Coins className="w-6 h-6" />,
            fees: "1-2% network fee",
            processingTime: "5-30 minutes",
            recommended: false,
            color: "purple",
            gradient: "from-purple-500 to-pink-500"
        }
    ];

    // Component state
    const [selectedPayment, setSelectedPayment] = useState("card");
    const [couponCode, setCouponCode] = useState("");
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [couponError, setCouponError] = useState("");
    const [loading, setLoading] = useState(false);
    const [processingPayment, setProcessingPayment] = useState(false);
    const [showCryptoDetails, setShowCryptoDetails] = useState(false);
    const [step, setStep] = useState(1); // 1: Details, 2: Payment, 3: Confirmation
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [paymentTimer, setPaymentTimer] = useState(null);
    
    // Customer info
    const [customerInfo, setCustomerInfo] = useState({
        username: "ProGamer_2024",
        email: "progamer@example.com",
        discordId: "ProGamer#1234",
        serverId: "12345"
    });

    // Card info
    const [cardInfo, setCardInfo] = useState({
        number: "",
        expiry: "",
        cvv: "",
        name: "",
        showCvv: false
    });

    // Sample coupons
    const availableCoupons = {
        "WELCOME10": { discount: 10, type: "percentage", description: "10% off for new players" },
        "VIP20": { discount: 20, type: "percentage", description: "20% off VIP items" },
        "SAVE5": { discount: 5, type: "fixed", description: "$5 off your order" },
        "NEWBIE15": { discount: 15, type: "percentage", description: "15% off first purchase" }
    };

    // Crypto payment details
    const [cryptoPayment, setCryptoPayment] = useState({
        address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
        amount: "0.00156789",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=bitcoin:bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh?amount=0.00156789",
        timeLeft: 1800 // 30 minutes
    });

    // Calculate totals
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = appliedCoupon ? 
        (appliedCoupon.type === "percentage" ? 
            subtotal * (appliedCoupon.discount / 100) : 
            appliedCoupon.discount) : 0;
    const processingFee = selectedPayment === "card" ? subtotal * 0.029 + 0.30 : 
                         selectedPayment === "paypal" ? subtotal * 0.034 + 0.30 :
                         selectedPayment === "bitcoin" || selectedPayment === "crypto" ? subtotal * 0.01 : 0;
    const total = subtotal - discount + processingFee;

    // Apply coupon
    const applyCoupon = () => {
        if (!couponCode.trim()) {
            setCouponError("Please enter a coupon code");
            return;
        }

        const coupon = availableCoupons[couponCode.toUpperCase()];
        if (!coupon) {
            setCouponError("Invalid coupon code");
            return;
        }

        setAppliedCoupon({ ...coupon, code: couponCode.toUpperCase() });
        setCouponError("");
        setCouponCode("");
    };

    // Remove coupon
    const removeCoupon = () => {
        setAppliedCoupon(null);
    };

    // Format card number
    const formatCardNumber = (value) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || '';
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        if (parts.length) {
            return parts.join(' ');
        } else {
            return v;
        }
    };

    // Format expiry date
    const formatExpiry = (value) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (v.length >= 2) {
            return v.substring(0, 2) + '/' + v.substring(2, 4);
        }
        return v;
    };

    // Get card type
    const getCardType = (number) => {
        const num = number.replace(/\s/g, '');
        if (/^4/.test(num)) return 'visa';
        if (/^5[1-5]/.test(num)) return 'mastercard';
        if (/^3[47]/.test(num)) return 'amex';
        return null;
    };

    // Timer for crypto payments
    useEffect(() => {
        if (selectedPayment === "bitcoin" || selectedPayment === "crypto") {
            const timer = setInterval(() => {
                setCryptoPayment(prev => ({
                    ...prev,
                    timeLeft: Math.max(0, prev.timeLeft - 1)
                }));
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [selectedPayment]);

    // Format time
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Process payment
    const processPayment = async () => {
        setProcessingPayment(true);
        setLoading(true);

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 3000));

        setStep(3); // Go to confirmation
        setProcessingPayment(false);
        setLoading(false);
    };

    // Rarity styles
    const getRarityStyles = (rarity) => {
        const styles = {
            common: { color: "text-slate-400", bg: "bg-slate-800/50", border: "border-slate-600" },
            uncommon: { color: "text-green-400", bg: "bg-green-900/30", border: "border-green-600" },
            rare: { color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-600" },
            epic: { color: "text-purple-400", bg: "bg-purple-900/30", border: "border-purple-600" },
            legendary: { color: "text-amber-400", bg: "bg-amber-900/30", border: "border-amber-600" }
        };
        return styles[rarity] || styles.common;
    };

    if (step === 3) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
                {/* Success Animation Background */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-green-400 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.1,
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-12 max-w-2xl w-full border border-slate-700 text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
                        >
                            <CheckCircle className="w-12 h-12 text-white" />
                        </motion.div>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-4xl font-bold text-white mb-4"
                        >
                            Payment Successful!
                        </motion.h1>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-slate-300 text-lg mb-8"
                        >
                            Your items have been delivered to your game account
                        </motion.p>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="bg-slate-800/50 rounded-2xl p-6 mb-8"
                        >
                            <h3 className="text-white font-bold text-lg mb-4">Order Summary</h3>
                            <div className="space-y-3">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex items-center justify-between text-sm">
                                        <span className="text-slate-300">{item.name} x{item.quantity}</span>
                                        <span className="text-white font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                                <div className="border-t border-slate-700 pt-3">
                                    <div className="flex items-center justify-between text-lg font-bold">
                                        <span className="text-white">Total Paid</span>
                                        <span className="text-green-400">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="grid grid-cols-2 gap-4 mb-8"
                        >
                            <div className="bg-blue-900/30 border border-blue-600 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <User className="w-5 h-5 text-blue-400" />
                                    <span className="text-blue-300 font-medium">Player</span>
                                </div>
                                <div className="text-white font-bold">{customerInfo.username}</div>
                            </div>
                            <div className="bg-green-900/30 border border-green-600 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Timer className="w-5 h-5 text-green-400" />
                                    <span className="text-green-300 font-medium">Delivery</span>
                                </div>
                                <div className="text-white font-bold">Instant</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex gap-4"
                        >
                            <button
                                onClick={() => window.location.href = "/"}
                                className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all"
                            >
                                Continue Shopping
                            </button>
                            <button
                                onClick={() => window.open(storeSettings.contact.discord)}
                                className="flex-1 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 font-bold rounded-xl transition-all border border-slate-700"
                            >
                                Join Discord
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-20, 20],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10">
                {/* Header */}
                <header className="bg-black/90 backdrop-blur-md border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => window.history.back()}
                                    className="p-3 bg-slate-800/60 hover:bg-slate-700/60 rounded-xl transition-all"
                                >
                                    <ArrowLeft className="w-5 h-5 text-slate-300" />
                                </button>
                                <div>
                                    <h1 className="text-2xl font-bold text-white">Secure Checkout</h1>
                                    <p className="text-slate-400 text-sm">{storeSettings.name}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-green-400" />
                                    <span className="text-green-400 text-sm font-medium">SSL Secured</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-white">${total.toFixed(2)}</div>
                                    <div className="text-slate-400 text-sm">Total Amount</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-3 gap-8">
                        {/* Order Summary */}
                        <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700 h-fit">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Package className="w-5 h-5 text-blue-400" />
                                Order Summary
                            </h2>

                            {/* Cart Items */}
                            <div className="space-y-4 mb-6">
                                {cartItems.map(item => {
                                    const rarityStyles = getRarityStyles(item.rarity);
                                    return (
                                        <div key={item.id} className="bg-slate-800/40 rounded-xl p-4 border border-slate-700">
                                            <div className="flex gap-3">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-16 h-16 object-cover rounded-lg"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="text-white font-semibold text-sm mb-1">{item.name}</h3>
                                                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${rarityStyles.bg} ${rarityStyles.color} border ${rarityStyles.border}`}>
                                                        <Star className="w-3 h-3" />
                                                        {item.rarity}
                                                    </div>
                                                    <div className="flex items-center justify-between mt-2">
                                                        <span className="text-slate-400 text-sm">Qty: {item.quantity}</span>
                                                        <span className="text-white font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Items included */}
                                            <div className="mt-3 pt-3 border-t border-slate-700">
                                                <div className="text-xs text-slate-400 mb-2">Includes:</div>
                                                <div className="flex flex-wrap gap-1">
                                                    {item.items.map((subItem, idx) => (
                                                        <span key={idx} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                                                            {subItem}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Coupon Section */}
                            <div className="mb-6">
                                <div className="flex gap-2 mb-3">
                                    <input
                                        type="text"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        placeholder="Coupon code"
                                        className="flex-1 bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        disabled={!!appliedCoupon}
                                    />
                                    <button
                                        onClick={applyCoupon}
                                        disabled={!!appliedCoupon || !couponCode.trim()}
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all text-sm"
                                    >
                                        Apply
                                    </button>
                                </div>
                                
                                {couponError && (
                                    <p className="text-red-400 text-xs mb-2">{couponError}</p>
                                )}
                                
                                {appliedCoupon && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-green-900/30 border border-green-600 rounded-lg p-3 flex items-center justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <Tag className="w-4 h-4 text-green-400" />
                                                <span className="text-green-300 font-medium text-sm">{appliedCoupon.code}</span>
                                            </div>
                                            <div className="text-green-400 text-xs">{appliedCoupon.description}</div>
                                        </div>
                                        <button
                                            onClick={removeCoupon}
                                            className="text-green-400 hover:text-green-300 p-1"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </motion.div>
                                )}
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400">Subtotal</span>
                                    <span className="text-white">${subtotal.toFixed(2)}</span>
                                </div>
                                
                                {appliedCoupon && (
                                    <div className="flex justify-between items-center">
                                        <span className="text-green-400">Discount ({appliedCoupon.code})</span>
                                        <span className="text-green-400">-${discount.toFixed(2)}</span>
                                    </div>
                                )}
                                
                                {processingFee > 0 && (
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Processing Fee</span>
                                        <span className="text-white">${processingFee.toFixed(2)}</span>
                                    </div>
                                )}
                                
                                <div className="border-t border-slate-700 pt-3">
                                    <div className="flex justify-between items-center text-lg font-bold">
                                        <span className="text-white">Total</span>
                                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                            ${total.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Delivery Info */}
                            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <Zap className="w-4 h-4 text-blue-400" />
                                    <span className="text-blue-300 font-medium text-sm">Instant Delivery</span>
                                </div>
                                <p className="text-slate-400 text-xs">
                                    Items will be delivered to your game account immediately after payment confirmation.
                                </p>
                            </div>
                        </div>

                        {/* Payment Form */}
                        <div className="col-span-2 space-y-6">
                            {/* Customer Information */}
                            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <User className="w-5 h-5 text-green-400" />
                                    Player Information
                                </h2>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-slate-300 text-sm font-medium mb-2">Username</label>
                                        <input
                                            type="text"
                                            value={customerInfo.username}
                                            onChange={(e) => setCustomerInfo(prev => ({ ...prev, username: e.target.value }))}
                                            className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            value={customerInfo.email}
                                            onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                                            className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-slate-300 text-sm font-medium mb-2">Discord ID</label>
                                        <input
                                            type="text"
                                            value={customerInfo.discordId}
                                            onChange={(e) => setCustomerInfo(prev => ({ ...prev, discordId: e.target.value }))}
                                            className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-slate-300 text-sm font-medium mb-2">Server ID</label>
                                        <input
                                            type="text"
                                            value={customerInfo.serverId}
                                            onChange={(e) => setCustomerInfo(prev => ({ ...prev, serverId: e.target.value }))}
                                            className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <CreditCard className="w-5 h-5 text-purple-400" />
                                    Payment Method
                                </h2>

                                <div className="grid grid-cols-1 gap-3 mb-6">
                                    {paymentMethods.map(method => (
                                        <motion.button
                                            key={method.id}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setSelectedPayment(method.id)}
                                            className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                                                selectedPayment === method.id
                                                    ? `bg-gradient-to-r ${method.gradient} border-transparent text-white`
                                                    : 'bg-slate-800/40 border-slate-700 hover:border-slate-600 text-slate-300'
                                            }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`p-3 rounded-lg ${selectedPayment === method.id ? 'bg-white/20' : 'bg-slate-700/50'}`}>
                                                    {method.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="font-bold">{method.name}</h3>
                                                        {method.recommended && (
                                                            <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                                                                Recommended
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className={`text-sm ${selectedPayment === method.id ? 'text-white/80' : 'text-slate-400'}`}>
                                                        {method.description}
                                                    </p>
                                                </div>
                                                <div className="text-right text-sm">
                                                    <div className={selectedPayment === method.id ? 'text-white/80' : 'text-slate-500'}>
                                                        {method.fees}
                                                    </div>
                                                    <div className={selectedPayment === method.id ? 'text-white/60' : 'text-slate-600'}>
                                                        {method.processingTime}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Payment Details */}
                                <AnimatePresence mode="wait">
                                    {selectedPayment === "card" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="space-y-4"
                                        >
                                            <div>
                                                <label className="block text-slate-300 text-sm font-medium mb-2">Card Number</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={cardInfo.number}
                                                        onChange={(e) => setCardInfo(prev => ({ ...prev, number: formatCardNumber(e.target.value) }))}
                                                        placeholder="1234 5678 9012 3456"
                                                        className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 pr-12"
                                                        maxLength="19"
                                                    />
                                                    {getCardType(cardInfo.number) && (
                                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                            <div className={`w-8 h-6 rounded text-xs font-bold flex items-center justify-center ${
                                                                getCardType(cardInfo.number) === 'visa' ? 'bg-blue-600 text-white' :
                                                                getCardType(cardInfo.number) === 'mastercard' ? 'bg-red-600 text-white' :
                                                                'bg-green-600 text-white'
                                                            }`}>
                                                                {getCardType(cardInfo.number).toUpperCase().slice(0, 4)}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="col-span-2">
                                                    <label className="block text-slate-300 text-sm font-medium mb-2">Expiry Date</label>
                                                    <input
                                                        type="text"
                                                        value={cardInfo.expiry}
                                                        onChange={(e) => setCardInfo(prev => ({ ...prev, expiry: formatExpiry(e.target.value) }))}
                                                        placeholder="MM/YY"
                                                        className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                                        maxLength="5"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-slate-300 text-sm font-medium mb-2">CVV</label>
                                                    <div className="relative">
                                                        <input
                                                            type={cardInfo.showCvv ? "text" : "password"}
                                                            value={cardInfo.cvv}
                                                            onChange={(e) => setCardInfo(prev => ({ ...prev, cvv: e.target.value.replace(/\D/g, '') }))}
                                                            placeholder="123"
                                                            className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 pr-10"
                                                            maxLength="4"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => setCardInfo(prev => ({ ...prev, showCvv: !prev.showCvv }))}
                                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                                                        >
                                                            {cardInfo.showCvv ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <label className="block text-slate-300 text-sm font-medium mb-2">Cardholder Name</label>
                                                <input
                                                    type="text"
                                                    value={cardInfo.name}
                                                    onChange={(e) => setCardInfo(prev => ({ ...prev, name: e.target.value }))}
                                                    placeholder="John Doe"
                                                    className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                                />
                                            </div>
                                        </motion.div>
                                    )}

                                    {selectedPayment === "paypal" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="text-center py-8"
                                        >
                                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Wallet className="w-10 h-10 text-white" />
                                            </div>
                                            <h3 className="text-white font-bold text-lg mb-2">PayPal Checkout</h3>
                                            <p className="text-slate-400 mb-6">You'll be redirected to PayPal to complete your payment</p>
                                            <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-4">
                                                <p className="text-blue-300 text-sm">
                                                    Click "Complete Payment" to proceed to PayPal's secure checkout
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}

                                    {(selectedPayment === "bitcoin" || selectedPayment === "crypto") && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="bg-orange-900/20 border border-orange-700/30 rounded-xl p-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Timer className="w-5 h-5 text-orange-400" />
                                                    <span className="text-orange-300 font-medium">Payment Timer</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-slate-300 text-sm">Time remaining to complete payment:</span>
                                                    <span className="text-orange-400 font-bold text-lg">
                                                        {formatTime(cryptoPayment.timeLeft)}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-6">
                                                <div>
                                                    <h4 className="text-white font-bold mb-3">Payment Details</h4>
                                                    <div className="space-y-3">
                                                        <div>
                                                            <label className="block text-slate-400 text-sm mb-1">Amount</label>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-white font-bold text-lg">{cryptoPayment.amount} BTC</span>
                                                                <button
                                                                    onClick={() => navigator.clipboard.writeText(cryptoPayment.amount)}
                                                                    className="p-1 text-slate-400 hover:text-white"
                                                                >
                                                                    <Copy className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        
                                                        <div>
                                                            <label className="block text-slate-400 text-sm mb-1">Wallet Address</label>
                                                            <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-3">
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-white text-sm font-mono break-all">
                                                                        {cryptoPayment.address}
                                                                    </span>
                                                                    <button
                                                                        onClick={() => navigator.clipboard.writeText(cryptoPayment.address)}
                                                                        className="p-1 text-slate-400 hover:text-white flex-shrink-0"
                                                                    >
                                                                        <Copy className="w-4 h-4" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <h4 className="text-white font-bold mb-3">QR Code</h4>
                                                    <div className="bg-white rounded-xl p-4 inline-block">
                                                        <img
                                                            src={cryptoPayment.qrCode}
                                                            alt="Payment QR Code"
                                                            className="w-48 h-48"
                                                        />
                                                    </div>
                                                    <p className="text-slate-400 text-sm mt-3">
                                                        Scan with your crypto wallet
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                    <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <h4 className="text-amber-300 font-bold mb-1">Payment Instructions</h4>
                                                        <ul className="text-slate-300 text-sm space-y-1">
                                                            <li>• Send exactly {cryptoPayment.amount} BTC to the address above</li>
                                                            <li>• Do not send any other cryptocurrency</li>
                                                            <li>• Payment will be confirmed automatically</li>
                                                            <li>• Items will be delivered once confirmed</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {selectedPayment === "binance" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="text-center py-8"
                                        >
                                            <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Wallet className="w-10 h-10 text-white" />
                                            </div>
                                            <h3 className="text-white font-bold text-lg mb-2">Binance Pay</h3>
                                            <p className="text-slate-400 mb-6">Connect your Binance wallet to pay instantly</p>
                                            <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-4">
                                                <p className="text-yellow-300 text-sm">
                                                    No fees • Instant confirmation • Secure payment
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Terms and Complete Payment */}
                            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700">
                                {/* Terms Checkbox */}
                                <label className="flex items-start gap-3 mb-6 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={agreeToTerms}
                                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                                        className="w-5 h-5 text-blue-600 border-slate-700 rounded focus:ring-blue-500 focus:ring-2 mt-1"
                                    />
                                    <span className="text-slate-300 text-sm leading-relaxed">
                                        I agree to the <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a> and{" "}
                                        <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>. 
                                        I understand that digital items are non-refundable and will be delivered to my game account.
                                    </span>
                                </label>

                                {/* Security Notice */}
                                <div className="bg-green-900/20 border border-green-700/30 rounded-xl p-4 mb-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Shield className="w-5 h-5 text-green-400" />
                                        <span className="text-green-300 font-medium">Secure Payment</span>
                                    </div>
                                    <p className="text-slate-300 text-sm">
                                        Your payment information is encrypted and secure. We never store your card details.
                                    </p>
                                </div>

                                {/* Payment Button */}
                                <motion.button
                                    whileHover={{ scale: agreeToTerms ? 1.02 : 1 }}
                                    whileTap={{ scale: agreeToTerms ? 0.98 : 1 }}
                                    onClick={processPayment}
                                    disabled={!agreeToTerms || processingPayment}
                                    className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                                        agreeToTerms && !processingPayment
                                            ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg'
                                            : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                                    }`}
                                >
                                    {processingPayment ? (
                                        <>
                                            <RefreshCw className="w-5 h-5 animate-spin" />
                                            Processing Payment...
                                        </>
                                    ) : (
                                        <>
                                            <Lock className="w-5 h-5" />
                                            Complete Payment - ${total.toFixed(2)}
                                        </>
                                    )}
                                </motion.button>

                                {/* Payment method specific note */}
                                <div className="mt-4 text-center">
                                    {selectedPayment === "card" && (
                                        <p className="text-slate-400 text-xs">
                                            You will be charged ${total.toFixed(2)} immediately
                                        </p>
                                    )}
                                    {selectedPayment === "paypal" && (
                                        <p className="text-slate-400 text-xs">
                                            You will be redirected to PayPal to complete payment
                                        </p>
                                    )}
                                    {(selectedPayment === "bitcoin" || selectedPayment === "crypto") && (
                                        <p className="text-slate-400 text-xs">
                                            Send payment to the address above to complete your order
                                        </p>
                                    )}
                                    {selectedPayment === "binance" && (
                                        <p className="text-slate-400 text-xs">
                                            Connect your Binance wallet to pay instantly
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Processing Overlay */}
                <AnimatePresence>
                    {processingPayment && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center border border-slate-700"
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <RefreshCw className="w-8 h-8 text-white animate-spin" />
                                </div>
                                <h3 className="text-white font-bold text-xl mb-2">Processing Payment</h3>
                                <p className="text-slate-400">Please wait while we process your payment...</p>
                                <div className="mt-6">
                                    <div className="flex items-center justify-center gap-1">
                                        {[...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="w-2 h-2 bg-blue-400 rounded-full"
                                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CheckoutPage;