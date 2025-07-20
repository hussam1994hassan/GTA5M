import React from "react";
import { Code } from "lucide-react";
import { Link } from "react-router";
const LogoApp = () => {
    return (
        <Link
            to={`/`}
            className="flex items-center space-x-4 group cursor-pointer"
        >
            <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/30 relative overflow-hidden">
                    <Code className="w-10 h-10 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                {/* Holographic rings */}
                <div className="absolute inset-0 rounded-2xl border border-cyan-400/30 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute inset-0 rounded-2xl border border-purple-400/20 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    NEXUS
                </h1>
                <span className="text-sm text-cyan-400 font-mono -mt-1 tracking-wider">
                    FIVEM_PROTOCOL_V2.1
                </span>
            </div>
        </Link>
    );
};

export default LogoApp;
