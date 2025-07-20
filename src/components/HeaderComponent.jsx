import React from "react";
import PagesURL from "../constants/PagesURL";
import { Link } from "react-router-dom";
import ProfileDropdownMenu from "./ProfileDropdownMenu";
import NotificationDropdown from "./NotificationDropdown";
import LogoApp from "./LogoApp";
import { useSelector } from "react-redux";
import { Code } from "lucide-react";

const HeaderComponent = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const listMenu = [
        { label: "[MATRIX]", href: "#matrix", color: "cyan-400" },
        { label: "[PROTOCOLS]", href: "#protocols", color: "purple-400" },
        { label: "[NETWORK]", href: "#network", color: "yellow-400" },
        { label: "[TERMINAL]", href: "#terminal", color: "green-400" },
    ];

    return (
        <header className="bg-gray-900 text-gray-300 h-20 sticky top-0 left-0 z-10">
            <div className="w-full mx-auto px-10 py-4 flex items-center justify-end">
                {isAuthenticated ? (
                    <div className="flex items-center space-x-6">
                        <NotificationDropdown />
                        <ProfileDropdownMenu />
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-between gap-5">
                        {/* Logo */}
                        <LogoApp />

                        {/* Desktop Navigation */}
                        <div className="flex items-center space-x-8">
                            {listMenu.map((item, index) => (
                                <Link
                                    to={item.href}
                                    key={index}
                                    className={`text-gray-300 hover:text-${item.color} transition-all duration-300 font-mono text-lg relative group font-medium`}
                                >
                                    {item.label}
                                    <span
                                        className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-${item.color} transition-all duration-300 group-hover:w-full`}
                                    ></span>
                                    <span
                                        className={`absolute -bottom-1 left-0 w-0 h-px bg-${item.color}/50 transition-all duration-300 group-hover:w-full delay-100`}
                                    ></span>
                                </Link>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-4">
                            <Link
                                to={PagesURL.LOGIN.URL}
                                className="relative group px-6 py-3 font-mono text-gray-300 hover:text-cyan-400 transition-all duration-300 border border-gray-600 hover:border-cyan-400/50 rounded-lg bg-gray-800/50 backdrop-blur-sm"
                            >
                                <span className="relative z-10">[LOGIN]</span>
                                <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            </Link>
                            <Link
                                to={PagesURL.REGISTER.URL}
                                className="relative group bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 px-8 py-3 rounded-lg font-mono font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 overflow-hidden"
                            >
                                <span className="relative z-10">
                                    [DEPLOY_STORE]
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 border border-cyan-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default HeaderComponent;
