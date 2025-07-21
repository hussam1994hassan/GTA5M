import React, { useState, useEffect } from "react";
import { Shield, Lock, Menu, X } from "lucide-react";
import { useNavigate } from "react-router";
import PagesURL from "../constants/PagesURL";

const HeaderComponent = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navClass =
        scrollY > 50
            ? "bg-gray-900 transition-all duration-0"
            : "bg-transparent";

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${navClass}`}
        >
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Revolutionary Professional Logo */}
                    <div className="flex items-center space-x-6 group cursor-pointer">
                        <div className="relative">
                            <div className="w-14 h-14 relative">
                                {/* Outer Security Ring */}
                                <div
                                    className="absolute inset-0 rounded-full border-4 border-emerald-400 animate-spin opacity-60"
                                    style={{ animationDuration: "8s" }}
                                ></div>
                                <div
                                    className="absolute inset-1 rounded-full border-2 border-cyan-400 animate-spin opacity-40"
                                    style={{
                                        animationDuration: "6s",
                                        animationDirection: "reverse",
                                    }}
                                ></div>

                                {/* Central Vault Icon */}
                                <div className="absolute inset-2 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-emerald-500/40 border border-emerald-400/30">
                                    <Shield className="w-6 h-6 text-emerald-400 relative z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                                </div>

                                {/* Security Indicators */}
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <div
                                    className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"
                                    style={{ animationDelay: "0.5s" }}
                                ></div>
                                <div
                                    className="absolute -top-1 -left-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                                    style={{ animationDelay: "1s" }}
                                ></div>

                                {/* Holographic Aura */}
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 animate-pulse"></div>
                            </div>
                        </div>

                        <div className="flex flex-col relative">
                            {/* Enhanced Mission Statement */}
                            <div className="flex items-center gap-2 mt-2">
                                {/* <Lock className="w-4 h-4 text-emerald-400" /> */}
                                <span className="text-emerald-400 font-mono tracking-wider font-bold text-3xl">
                                    GTA5M
                                </span>
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            </div>

                            {/* Advanced Status Indicators */}
                            {/* <div className="flex items-center gap-3 mt-2">
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-xs text-green-400 font-mono font-bold">
                                        [SECURE]
                                    </span>
                                </div>
                                <span className="text-xs text-gray-500 font-mono">
                                    |
                                </span>
                                <div className="flex items-center gap-1">
                                    <div
                                        className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                                        style={{ animationDelay: "0.3s" }}
                                    ></div>
                                    <span className="text-xs text-blue-400 font-mono font-bold">
                                        [INSTANT]
                                    </span>
                                </div>
                                <span className="text-xs text-gray-500 font-mono">
                                    |
                                </span>
                                <div className="flex items-center gap-1">
                                    <div
                                        className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
                                        style={{ animationDelay: "0.6s" }}
                                    ></div>
                                    <span className="text-xs text-yellow-400 font-mono font-bold">
                                        [ZERO_FEES]
                                    </span>
                                </div>
                            </div> */}

                            {/* Version & Protocol
                            <div className="mt-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-xs text-cyan-400 font-mono tracking-wider">
                                    FIVEM_VAULT_PROTOCOL_v4.0.1
                                </span>
                                <span className="text-xs text-gray-500 font-mono ml-2">
                                    // ENTERPRISE_GRADE
                                </span>
                            </div> */}
                        </div>

                        {/* Floating Particles Around Logo */}
                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`absolute w-1 h-1 rounded-full particle-orbit ${
                                        i % 4 === 0
                                            ? "bg-emerald-400"
                                            : i % 4 === 1
                                            ? "bg-cyan-400"
                                            : i % 4 === 2
                                            ? "bg-blue-400"
                                            : "bg-yellow-400"
                                    }`}
                                    style={{
                                        left: `${
                                            20 +
                                            Math.cos((i * 45 * Math.PI) / 180) *
                                                60
                                        }px`,
                                        top: `${
                                            20 +
                                            Math.sin((i * 45 * Math.PI) / 180) *
                                                60
                                        }px`,
                                        animationDelay: `${i * 0.2}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Gaming Menu */}
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

                        {/* Gaming Action Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button
                                onClick={() => navigate(PagesURL.LOGIN.URL)}
                                className="text-gray-300 hover:text-white transition-all duration-300 font-mono font-medium px-6 py-3 rounded-lg hover:bg-gray-800/50 border border-gray-700/50 hover:border-gray-600"
                            >
                                ./login
                            </button>
                            <button
                                onClick={() => navigate(PagesURL.REGISTER.URL)}
                                className="relative group bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-500 px-8 py-3 rounded-xl font-mono font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25"
                            >
                                <span className="relative z-10">
                                    [DEPLOY_STORE]
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 rounded-xl hover:bg-gray-800/50 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Enhanced Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800">
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
                            <button
                                onClick={() => navigate(PagesURL.LOGIN.URL)}
                                className="w-full text-left text-gray-300 hover:text-white transition-colors py-2 text-lg font-mono"
                            >
                                ./login
                            </button>
                            <button
                                onClick={() => navigate(PagesURL.REGISTER.URL)}
                                className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 px-6 py-4 rounded-xl font-mono font-bold transition-all duration-300 text-lg"
                            >
                                [DEPLOY_STORE]
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default HeaderComponent;
