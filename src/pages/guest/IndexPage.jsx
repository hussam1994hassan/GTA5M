import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  Shield, 
  Zap, 
  Users, 
  CreditCard, 
  Server, 
  Star, 
  ArrowRight, 
  Play,
  CheckCircle,
  Menu,
  X,
  Globe,
  Lock,
  TrendingUp,
  Gamepad2,
  Target,
  Bolt,
  Store,
  Wallet,
  Crown,
  Sparkles,
  Clock,
  Gift,
  DollarSign,
  Eye,
  ShieldCheck,
  Code,
  Terminal,
  Cpu,
  Database,
  Layers,
  Hexagon,
  Triangle,
  Circle,
  Square
} from 'lucide-react';
import PagesURL from "../../constants/PagesURL";
import AppENV from "../../constants/AppENV";

const IndexPage = () => {
    // Page Title
    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.ROOT.TITLE}`;
    }, []);

  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('servers');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: <Database className="w-10 h-10" />,
      title: "Quantum Escrow Protocol",
      description: "Advanced blockchain-inspired security that holds transactions in a protected quantum state until delivery confirmation.",
      color: "from-cyan-400 via-blue-500 to-purple-600",
      glow: "cyan"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Neural Network Delivery",
      description: "AI-powered instant delivery system that learns and adapts to optimize transaction speed and reliability.",
      color: "from-yellow-400 via-orange-500 to-red-500",
      glow: "yellow"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Cybernetic Interface",
      description: "Futuristic admin dashboard with real-time analytics, holographic data visualization, and predictive insights.",
      color: "from-green-400 via-emerald-500 to-teal-600",
      glow: "green"
    },
    {
      icon: <Terminal className="w-10 h-10" />,
      title: "Code Integration Matrix",
      description: "Seamless API integration with advanced webhooks, custom scripts, and automated server management tools.",
      color: "from-purple-400 via-violet-500 to-indigo-600",
      glow: "purple"
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Multi-Dimensional Payments",
      description: "Support for cryptocurrency, traditional banking, gaming tokens, and future payment technologies.",
      color: "from-pink-400 via-rose-500 to-red-500",
      glow: "pink"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Fortress-Class Security",
      description: "Military-grade encryption with biometric verification, quantum-resistant algorithms, and zero-trust architecture.",
      color: "from-blue-400 via-cyan-500 to-teal-600",
      glow: "blue"
    }
  ];

  const stats = [
    { number: "2,847", label: "Active Servers", subtext: "Connected to the Matrix", icon: <Server className="w-8 h-8" />, color: "cyan" },
    { number: "$8.2M", label: "Protected Volume", subtext: "Quantum Secured", icon: <Shield className="w-8 h-8" />, color: "green" },
    { number: "156K", label: "Digital Citizens", subtext: "Registered Users", icon: <Users className="w-8 h-8" />, color: "purple" },
    { number: "99.97%", label: "System Uptime", subtext: "Neural Network", icon: <Zap className="w-8 h-8" />, color: "yellow" }
  ];

  const navClass = scrollY > 50 
    ? 'bg-gray-900/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10' 
    : 'bg-transparent';

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      {/* Advanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Cyberpunk Grid */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
          animation: 'gridCyber 20s linear infinite'
        }}></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className={`absolute opacity-10 ${i % 3 === 0 ? 'text-cyan-400' : i % 3 === 1 ? 'text-purple-400' : 'text-yellow-400'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${20 + Math.random() * 40}px`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {i % 4 === 0 ? <Hexagon /> : i % 4 === 1 ? <Triangle /> : i % 4 === 2 ? <Circle /> : <Square />}
            </div>
          ))}
        </div>

        {/* Neon Orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Moving Light Beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Futuristic Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navClass}`}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo with Holographic Effect */}
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/30 relative overflow-hidden">
                  <Code className="w-10 h-10 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                {/* Holographic rings */}
                <div className="absolute inset-0 rounded-2xl border border-cyan-400/30 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute inset-0 rounded-2xl border border-purple-400/20 group-hover:scale-150 transition-transform duration-700"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  NEXUS
                </h1>
                <span className="text-sm text-cyan-400 font-mono -mt-1 tracking-wider">FIVEM_PROTOCOL_V2.1</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="flex items-center space-x-12">
              <div className="flex items-center space-x-8">
                <a href="#matrix" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-mono text-lg relative group font-medium">
                  [MATRIX]
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400/50 transition-all duration-300 group-hover:w-full delay-100"></span>
                </a>
                <a href="#protocols" className="text-gray-300 hover:text-purple-400 transition-all duration-300 font-mono text-lg relative group font-medium">
                  [PROTOCOLS]
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400/50 transition-all duration-300 group-hover:w-full delay-100"></span>
                </a>
                <a href="#network" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-mono text-lg relative group font-medium">
                  [NETWORK]
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-400/50 transition-all duration-300 group-hover:w-full delay-100"></span>
                </a>
                <a href="#terminal" className="text-gray-300 hover:text-green-400 transition-all duration-300 font-mono text-lg relative group font-medium">
                  [TERMINAL]
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-green-400/50 transition-all duration-300 group-hover:w-full delay-100"></span>
                </a>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <button className="relative group px-6 py-3 font-mono text-gray-300 hover:text-cyan-400 transition-all duration-300 border border-gray-600 hover:border-cyan-400/50 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                  <span className="relative z-10">[LOGIN]</span>
                  <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </button>
                <button className="relative group bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 px-8 py-3 rounded-lg font-mono font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 overflow-hidden">
                  <span className="relative z-10">[DEPLOY_STORE]</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border border-cyan-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Cyberpunk Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        
        {/* Code Rain Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute text-cyan-400 font-mono text-sm"
              style={{
                left: `${i * 5}%`,
                animation: `codeRain ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {['01001001', '11010110', '10101010', '11110000', '01010101'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          {/* System Status Banner */}
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-8 py-4 mb-12 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 animate-pulse"></div>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" style={{animationDuration: '3s'}} />
            <span className="text-lg font-mono text-cyan-300 font-bold">[SYSTEM_STATUS]:</span>
            <span className="text-lg font-mono text-white font-bold">ZERO_TRANSACTION_FEES</span>
            <Clock className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-sm font-mono text-yellow-400">[LIMITED_TIME_PROTOCOL]</span>
          </div>

          <div className="mb-16">
            {/* Glitch Effect Title */}
            <div className="relative mb-8">
              <h1 className="text-8xl font-black mb-4 leading-tight tracking-tight font-mono">
                <span className="relative inline-block">
                  <span className="text-white">THE</span>
                  <span className="absolute inset-0 text-cyan-400 opacity-75 animate-pulse" style={{animationDelay: '0.1s'}}>THE</span>
                </span>
                <span className="block mt-4 relative">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">NEXUS</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent opacity-50 animate-pulse" style={{animationDelay: '0.2s'}}>NEXUS</span>
                </span>
              </h1>
              
              {/* Terminal-style subtitle */}
              <div className="font-mono text-2xl text-gray-300 mb-8">
                <span className="text-cyan-400">&gt;</span> 
                <span className="text-gray-400">fivem_marketplace</span>
                <span className="text-cyan-400">.</span>
                <span className="text-purple-400">connect</span>
                <span className="text-gray-400">(</span>
                <span className="text-yellow-400">"secure"</span>
                <span className="text-gray-400">)</span>
                <span className="animate-pulse text-cyan-400">_</span>
              </div>
            </div>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
              Advanced <span className="text-cyan-400 font-mono">[INTERMEDIARY_PROTOCOL]</span> connecting 
              <span className="text-purple-400 font-mono"> server_operators</span> and 
              <span className="text-yellow-400 font-mono"> digital_citizens</span> through quantum-secured transactions.
              <span className="block mt-4 text-lg text-gray-400 font-mono">
                &gt; Initializing secure payment matrix...
              </span>
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-20">
            <button className="group relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 px-12 py-6 rounded-2xl text-2xl font-mono font-bold transition-all duration-500 transform hover:scale-110 flex items-center justify-center gap-4 shadow-2xl shadow-cyan-500/30 overflow-hidden">
              <Terminal className="w-8 h-8" />
              <span className="relative z-10">[INITIALIZE_STORE]</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
              <div className="absolute inset-0 border border-cyan-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative bg-gray-800/80 hover:bg-gray-700/80 border-2 border-gray-600 hover:border-purple-400 px-12 py-6 rounded-2xl text-2xl font-mono font-bold transition-all duration-500 flex items-center justify-center gap-4 backdrop-blur-sm hover:scale-105 overflow-hidden">
              <Gamepad2 className="w-8 h-8 group-hover:text-purple-400 transition-colors" />
              <span className="group-hover:text-purple-400 transition-colors">[BROWSE_MATRIX]</span>
              <div className="absolute inset-0 bg-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* System Indicators */}
          <div className="grid grid-cols-4 gap-8 text-gray-400">
            <div className="flex flex-col items-center gap-3 group hover:text-cyan-400 transition-colors cursor-pointer">
              <div className="relative">
                <ShieldCheck className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </div>
              <span className="font-mono text-sm font-bold">[QUANTUM_SECURED]</span>
            </div>
            <div className="flex flex-col items-center gap-3 group hover:text-purple-400 transition-colors cursor-pointer">
              <div className="relative">
                <Zap className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
                <div className="absolute inset-0 bg-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </div>
              <span className="font-mono text-sm font-bold">[NEURAL_DELIVERY]</span>
            </div>
            <div className="flex flex-col items-center gap-3 group hover:text-yellow-400 transition-colors cursor-pointer">
              <div className="relative">
                <Globe className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </div>
              <span className="font-mono text-sm font-bold">[GLOBAL_NETWORK]</span>
            </div>
            <div className="flex flex-col items-center gap-3 group hover:text-green-400 transition-colors cursor-pointer">
              <div className="relative">
                <Gift className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
                <div className="absolute inset-0 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </div>
              <span className="font-mono text-sm font-bold">[ZERO_FEES_ACTIVE]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black font-mono mb-4 text-white">
              [SYSTEM_METRICS]
            </h2>
            <p className="text-xl text-gray-400 font-mono">&gt; Real-time network statistics</p>
          </div>
          
          <div className="grid grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-gray-700 hover:border-${stat.color}-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden`}>
                {/* Animated border */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`flex items-center justify-center mb-6 text-${stat.color}-400 group-hover:scale-125 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className={`text-4xl font-black font-mono text-${stat.color}-400 mb-2 group-hover:scale-110 transition-transform`}>
                    {stat.number}
                  </div>
                  <div className="text-white font-mono font-bold text-lg mb-1">{stat.label}</div>
                  <div className="text-gray-400 font-mono text-sm">{stat.subtext}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Matrix */}
      <section id="protocols" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black font-mono mb-8 text-white">
              [SYSTEM_
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                PROTOCOLS
              </span>
              ]
            </h2>
            <p className="text-2xl text-gray-300 font-mono">&gt; Advanced features for the digital frontier</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-10 rounded-3xl border border-gray-700 hover:border-${feature.glow}-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden`}>
                {/* Holographic Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.glow}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{
                  background: `linear-gradient(45deg, transparent, rgba(${feature.glow === 'cyan' ? '6, 182, 212' : feature.glow === 'yellow' ? '245, 158, 11' : feature.glow === 'green' ? '34, 197, 94' : feature.glow === 'purple' ? '147, 51, 234' : feature.glow === 'pink' ? '236, 72, 153' : '59, 130, 246'}, 0.1), transparent)`,
                  animation: 'hologram 3s linear infinite'
                }}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${feature.color} mb-8 group-hover:scale-125 transition-transform duration-500 shadow-lg relative overflow-hidden`}>
                    <div className="text-white relative z-10">
                      {feature.icon}
                    </div>
                    <div className={`absolute inset-0 bg-${feature.glow}-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`}></div>
                  </div>
                  <h3 className={`text-2xl font-bold font-mono mb-6 text-white group-hover:text-${feature.glow}-400 transition-colors`}>
                    [{feature.title.toUpperCase().replace(/ /g, '_')}]
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors font-medium text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black font-mono mb-8 text-white">
              [CONTROL_
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                INTERFACE
              </span>
              ]
            </h2>
            <p className="text-2xl text-gray-300 font-mono">&gt; Mission control for server operators</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-gray-800/80 rounded-2xl p-2 border border-gray-700 backdrop-blur-sm">
              {['servers', 'analytics', 'transactions'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-xl font-mono font-bold transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  [{tab.toUpperCase()}]
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl border border-gray-700 p-12 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-800/60 rounded-2xl p-6 border border-cyan-400/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-mono text-green-400 font-bold">[ONLINE]</span>
                  </div>
                  <div className="text-3xl font-black font-mono text-white mb-2">847</div>
                  <div className="text-gray-400 font-mono">Active Connections</div>
                </div>
                
                <div className="bg-gray-800/60 rounded-2xl p-6 border border-purple-400/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="font-mono text-purple-400 font-bold">[PROCESSING]</span>
                  </div>
                  <div className="text-3xl font-black font-mono text-white mb-2">$12.4K</div>
                  <div className="text-gray-400 font-mono">Today's Revenue</div>
                </div>
                
                <div className="bg-gray-800/60 rounded-2xl p-6 border border-yellow-400/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="font-mono text-yellow-400 font-bold">[OPTIMIZED]</span>
                  </div>
                  <div className="text-3xl font-black font-mono text-white mb-2">99.8%</div>
                  <div className="text-gray-400 font-mono">Success Rate</div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-xl text-gray-300 font-mono mb-8">
                  &gt; Advanced analytics, real-time monitoring, automated deployment protocols
                </p>
                <button className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 px-10 py-4 rounded-xl font-mono font-bold transition-all duration-300 transform hover:scale-105">
                  [ACCESS_TERMINAL]
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Terminal Style */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <div className="mb-12">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-8 py-4 mb-8 backdrop-blur-sm">
              <Clock className="w-6 h-6 text-yellow-400 animate-spin" style={{animationDuration: '2s'}} />
              <span className="text-yellow-400 font-mono font-bold text-lg">[LIMITED_TIME_PROTOCOL]</span>
            </div>
            
            <h2 className="text-7xl font-black font-mono mb-8 leading-tight text-white">
              [DEPLOY_
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                YOUR_EMPIRE
              </span>
              ]
            </h2>
            <p className="text-2xl text-gray-300 font-mono mb-12 max-w-4xl mx-auto leading-relaxed">
              &gt; Join the <span className="text-cyan-400 font-bold">digital_revolution</span> where 
              <span className="text-purple-400 font-bold"> quantum_security</span> meets 
              <span className="text-yellow-400 font-bold"> zero_transaction_costs</span>
              <span className="block mt-4 text-lg text-gray-400">
                &gt; Initializing deployment sequence...
              </span>
            </p>
          </div>
          
          <div className="flex justify-center gap-8">
            <button className="group relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 px-16 py-8 rounded-3xl text-3xl font-mono font-black transition-all duration-500 transform hover:scale-110 shadow-2xl shadow-cyan-500/40 overflow-hidden">
              <span className="relative z-10 flex items-center gap-4">
                <Terminal className="w-10 h-10" />
                [INITIALIZE_STORE]
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg"></div>
              <div className="absolute inset-0 border-2 border-cyan-400/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative bg-gray-800/80 hover:bg-gray-700/80 border-2 border-gray-600 hover:border-purple-400 px-16 py-8 rounded-3xl text-3xl font-mono font-black transition-all duration-500 backdrop-blur-sm hover:scale-105 overflow-hidden">
              <span className="group-hover:text-purple-400 transition-colors flex items-center gap-4">
                <Database className="w-10 h-10" />
                [BROWSE_NETWORK]
              </span>
              <div className="absolute inset-0 bg-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Futuristic Footer */}
      <footer className="bg-gray-800 border-t border-cyan-500/30 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-800"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-4 gap-12">
            <div className="col-span-1">
              <div className="flex items-center space-x-4 mb-8 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <div>
                  <span className="text-3xl font-black text-white font-mono">NEXUS</span>
                  <div className="text-sm text-cyan-400 font-mono -mt-1">FIVEM_PROTOCOL_V2.1</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed font-mono">
                &gt; Quantum-secured marketplace connecting digital realms through advanced encryption protocols.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-8 text-cyan-400 text-xl font-mono">[SYSTEM_CORE]</h3>
              <ul className="space-y-4 text-gray-400 font-mono">
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Protocol_Manual</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Security_Matrix</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; API_Terminal</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Neural_Docs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-8 text-purple-400 text-xl font-mono">[SUPPORT_NET]</h3>
              <ul className="space-y-4 text-gray-400 font-mono">
                <li><a href="#" className="hover:text-purple-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Command_Center</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Contact_Node</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Digital_Community</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Discord_Hub</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-8 text-yellow-400 text-xl font-mono">[DATA_VAULT]</h3>
              <ul className="space-y-4 text-gray-400 font-mono">
                <li><a href="#" className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Mission_Brief</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; System_Log</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Privacy_Shield</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Terms_Protocol</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-16 pt-12 text-center">
            <p className="text-gray-400 font-mono text-lg">
              &copy; 2025 NEXUS_PROTOCOL. All systems operational. 
              <span className="text-cyan-400"> &gt; Built for the digital frontier.</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gridCyber {
          0% { transform: translate(0, 0); }
          25% { transform: translate(50px, 25px); }
          50% { transform: translate(25px, 50px); }
          75% { transform: translate(-25px, 25px); }
          100% { transform: translate(0, 0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes codeRain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes hologram {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default IndexPage;





