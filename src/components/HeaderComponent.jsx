import React, { useState, useEffect } from "react";
import { ShoppingCart, Server, Gamepad2, Menu, X, TrendingUp, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";

const HeaderComponent = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navClass = scrollY > 50 ? "bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50" : "bg-transparent";

    // Custom Wolf SVG Logo with Cyberpunk Colors
    const WolfLogo = ({ className }) => (
        <svg viewBox="0 0 100 100" className={className}>
            <defs>
                <linearGradient id="wolfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
            </defs>
            {/* Wolf Head Shape */}
            <path 
                d="M50 15 L35 25 L30 40 L35 55 L45 65 L50 70 L55 65 L65 55 L70 40 L65 25 Z" 
                fill="url(#wolfGrad)" 
                opacity="0.9"
            />
            {/* Wolf Ears */}
            <path d="M35 25 L30 15 L40 20 Z" fill="url(#wolfGrad)" opacity="0.8" />
            <path d="M65 25 L70 15 L60 20 Z" fill="url(#wolfGrad)" opacity="0.8" />
            {/* Eyes */}
            <circle cx="42" cy="35" r="3" fill="#10b981" className="animate-pulse" />
            <circle cx="58" cy="35" r="3" fill="#10b981" className="animate-pulse" />
            {/* Circuit Lines */}
            <path d="M35 45 L45 45 L50 50 L55 45 L65 45" stroke="#06b6d4" strokeWidth="1" opacity="0.8" />
            <path d="M40 55 L50 55 L60 55" stroke="#3b82f6" strokeWidth="1" opacity="0.6" />
            {/* Binary Code Elements */}
            <text x="38" y="48" fill="#10b981" fontSize="4" fontFamily="monospace" opacity="0.7">01</text>
            <text x="58" y="48" fill="#06b6d4" fontSize="4" fontFamily="monospace" opacity="0.7">10</text>
        </svg>
    );

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    {/* Enhanced Logo */}
                    <motion.div 
                        className="flex items-center space-x-4 group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="relative">
                            {/* Main Logo Container */}
                            <div className="w-12 h-12 relative">
                                {/* Circuit Ring */}
                                <div className="absolute inset-0 rounded-full border border-emerald-400/50 group-hover:border-emerald-400/80 transition-colors duration-300">
                                    <div className="absolute top-0 left-1/2 w-1 h-1 bg-emerald-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                                    <div className="absolute right-0 top-1/2 w-1 h-1 bg-cyan-400 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                                    <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                                    <div className="absolute left-0 top-1/2 w-1 h-1 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                                </div>
                                
                                {/* Wolf Logo */}
                                <WolfLogo className="absolute inset-1 w-10 h-10" />
                                
                                {/* Server Indicator */}
                                <div className="absolute -top-1 -right-1 w-3 h-3">
                                    <Server className="w-3 h-3 text-emerald-400" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-mono">
                                    FiveMarket
                                </span>
                                <div className="flex space-x-1">
                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                                </div>
                            </div>
                            <span className="text-xs text-gray-400 font-mono">
                                // Server.Marketplace.Protocol_v4.0
                            </span>
                        </div>
                    </motion.div>

                    {/* Cyberpunk Programming Menu */}
                    <div className="flex items-center space-x-10">
                        <div className="hidden lg:flex items-center space-x-8">
                            <a
                                href="#vault"
                                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 text-lg relative group font-mono font-medium"
                            >
                                [VAULT_CORE]
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a
                                href="#security"
                                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-lg relative group font-mono font-medium"
                            >
                                [SECURITY]
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a
                                href="#marketplace"
                                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-lg relative group font-mono font-medium"
                            >
                                [MARKETPLACE]
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a
                                href="#integration"
                                className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-lg relative group font-mono font-medium"
                            >
                                [INTEGRATION]
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </div>

                        {/* Cyberpunk Action Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button className="text-gray-300 hover:text-white transition-all duration-300 font-mono font-medium px-6 py-3 rounded-lg hover:bg-gray-800/50 border border-gray-700/50 hover:border-gray-600">
                                ./login
                            </button>
                            
                            <motion.button
                                className="relative group bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-500 px-8 py-3 rounded-xl font-mono font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">[DEPLOY_STORE]</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            </motion.button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Enhanced Mobile Menu */}
            {isMenuOpen && (
                <motion.div 
                    className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto px-8 py-6 space-y-4">
                        <a
                            href="#vault"
                            className="block text-gray-300 hover:text-emerald-400 transition-colors py-2 text-lg font-mono"
                        >
                            [VAULT_CORE]
                        </a>
                        <a
                            href="#security"
                            className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 text-lg font-mono"
                        >
                            [SECURITY]
                        </a>
                        <a
                            href="#marketplace"
                            className="block text-gray-300 hover:text-yellow-400 transition-colors py-2 text-lg font-mono"
                        >
                            [MARKETPLACE]
                        </a>
                        <a
                            href="#integration"
                            className="block text-gray-300 hover:text-blue-400 transition-colors py-2 text-lg font-mono"
                        >
                            [INTEGRATION]
                        </a>

                        <div className="pt-4 border-t border-gray-800 space-y-3">
                            <button className="w-full text-left text-gray-300 hover:text-white transition-colors py-2 text-lg font-mono">
                                ./login
                            </button>
                            
                            <button className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 px-6 py-4 rounded-xl font-mono font-bold transition-all duration-300 text-lg">
                                [DEPLOY_STORE]
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default HeaderComponent;