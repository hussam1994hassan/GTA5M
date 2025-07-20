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
  Settings,
  BarChart3,
  Package,
  Dice6,
  Box,
  MonitorSpeaker,
  Wrench,
  Fingerprint,
  Globe2,
  Keyboard,
  Mouse,
  Headphones,
  Wifi,
  HardDrive,
  Smartphone,
  Laptop
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
  const [typewriterText, setTypewriterText] = useState('');
  const [codeIndex, setCodeIndex] = useState(0);

  const codeSnippets = [
    "npm install @nexuspay/fivem-sdk",
    "const store = new NexusPay.Store({...})",
    "await store.createItem('legendary_weapon')",
    "console.log('Transaction complete!')",
    "player.addItem(purchasedItem, quantity)"
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Typewriter effect
    const typewriterInterval = setInterval(() => {
      const currentSnippet = codeSnippets[codeIndex];
      setTypewriterText(prev => {
        if (prev.length < currentSnippet.length) {
          return currentSnippet.slice(0, prev.length + 1);
        } else {
          setTimeout(() => {
            setTypewriterText('');
            setCodeIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
          }, 2000);
          return prev;
        }
      });
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(typewriterInterval);
    };
  }, [codeIndex]);

  const features = [
    {
      icon: <Terminal className="w-10 h-10" />,
      title: "Code-Free API Integration",
      description: "Advanced SDK with zero-config setup. Our neural network handles server integration automatically. Just drag, drop, and deploy.",
      color: "from-cyan-400 via-blue-500 to-cyan-600",
      benefits: ["Auto-generated API keys", "Real-time webhooks", "Error handling", "Load balancing"],
      tech: "JavaScript • Python • Lua • C#"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Quantum Payment Engine",
      description: "Military-grade encryption with blockchain verification. Process thousands of transactions per second with 99.99% uptime guarantee.",
      color: "from-green-400 via-emerald-500 to-green-600",
      benefits: ["Sub-second processing", "DDoS protection", "Fraud AI detection", "Global routing"],
      tech: "Blockchain • ML • Redis • PostgreSQL"
    },
    {
      icon: <Gamepad2 className="w-10 h-10" />,
      title: "Game-Engine Integration",
      description: "Native FiveM integration with real-time inventory sync. Supports vehicles, weapons, skins, houses, and custom items.",
      color: "from-purple-400 via-violet-500 to-purple-600",
      benefits: ["Real-time sync", "Inventory management", "Asset validation", "Player tracking"],
      tech: "FiveM • ESX • QB-Core • VRP"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Advanced Analytics Engine",
      description: "Machine learning powered insights with predictive analytics. Track player behavior, optimize pricing, and maximize revenue.",
      color: "from-yellow-400 via-orange-500 to-yellow-600",
      benefits: ["Predictive modeling", "Player segmentation", "Revenue optimization", "A/B testing"],
      tech: "Python • TensorFlow • GraphQL • React"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Cybersecurity Protocol",
      description: "Enterprise-grade security with penetration testing, vulnerability scanning, and 24/7 SOC monitoring.",
      color: "from-red-400 via-pink-500 to-red-600",
      benefits: ["Penetration testing", "SOC monitoring", "Compliance audits", "Incident response"],
      tech: "WAF • SIEM • IDS • Encryption"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Developer SDK",
      description: "Full-featured development kit with code examples, testing environment, and debugging tools for advanced customization.",
      color: "from-indigo-400 via-blue-500 to-indigo-600",
      benefits: ["Sandbox environment", "Debug tools", "Code examples", "24/7 dev support"],
      tech: "REST API • WebSockets • OAuth • JWT"
    }
  ];

  const gamingFeatures = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Weapon Systems",
      description: "Advanced weapon marketplace with damage stats, rarity tiers, and upgrade paths",
      items: ["Legendary Weapons", "Tactical Gear", "Weapon Skins", "Attachments"]
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Vehicle Arsenal",
      description: "Complete vehicle ecosystem from motorcycles to supercars and aircraft",
      items: ["Supercars", "Motorcycles", "Aircraft", "Boats"]
    },
    {
      icon: <Dice6 className="w-8 h-8" />,
      title: "Loot Systems",
      description: "Advanced loot box mechanics with guaranteed drops and probability tables",
      items: ["Mystery Crates", "Seasonal Boxes", "Premium Packs", "Daily Rewards"]
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Item Economy",
      description: "Dynamic pricing with market fluctuations and supply/demand mechanics",
      items: ["Rare Items", "Collectibles", "Resources", "Consumables"]
    }
  ];

  const stats = [
    { number: "9,247", label: "Protected Servers", subtext: "Secured Vaults", icon: <Shield className="w-6 h-6" />, color: "emerald" },
    { number: "$31.2M", label: "Vault Volume", subtext: "Protected Transactions", icon: <Lock className="w-6 h-6" />, color: "cyan" },
    { number: "742K", label: "Secure Users", subtext: "Protected Accounts", icon: <Users className="w-6 h-6" />, color: "blue" },
    { number: "99.99%", label: "Vault Uptime", subtext: "Security Guarantee", icon: <Zap className="w-6 h-6" />, color: "yellow" }
  ];

  const navClass = scrollY > 50 
    ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' 
    : 'bg-transparent';

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      {/* Advanced Cyberpunk Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute text-cyan-400/30 font-mono text-sm"
              style={{
                left: `${i * 2}%`,
                animation: `matrixRain ${3 + Math.random() * 7}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {['01', '10', '11', '00', '01', '10'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>

        {/* Cyberpunk Grid System */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.6) 1px, transparent 1px),
            linear-gradient(rgba(147, 51, 234, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.4) 1px, transparent 1px),
            linear-gradient(rgba(245, 158, 11, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px, 120px 120px, 40px 40px, 40px 40px, 8px 8px, 8px 8px',
          transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
          animation: 'gridCyberpunk 8s ease-in-out infinite'
        }}></div>
        
        {/* Neon Orbs with Glow */}
        <div className="absolute top-1/5 left-1/8 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse shadow-2xl shadow-cyan-500/20"></div>
        <div className="absolute bottom-1/5 right-1/6 w-80 h-80 bg-purple-500/12 rounded-full blur-3xl animate-pulse shadow-2xl shadow-purple-500/20" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/5 left-3/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse shadow-2xl shadow-yellow-500/15" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-48 h-48 bg-green-500/8 rounded-full blur-3xl animate-pulse shadow-2xl shadow-green-500/10" style={{animationDelay: '6s'}}></div>

        {/* Floating Programming Elements */}
        <div className="absolute inset-0 font-mono opacity-8">
          {[
            '{ code }', '[ array ]', '< html >', '( function )', '// comment', 
            '=== true', '!== false', '=> arrow', '&& and', '|| or',
            'const', 'let', 'var', 'function', 'return', 'import', 'export',
            'async', 'await', 'promise', 'callback', 'null', 'undefined'
          ].map((symbol, i) => (
            <div 
              key={i}
              className={`absolute ${i % 4 === 0 ? 'text-cyan-400' : i % 4 === 1 ? 'text-purple-400' : i % 4 === 2 ? 'text-yellow-400' : 'text-green-400'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${10 + Math.random() * 8}px`,
                animation: `codeFloat ${8 + Math.random() * 12}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 8}s`
              }}
            >
              {symbol}
            </div>
          ))}
        </div>

        {/* Glitch Lines */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                animation: `glitchLine ${2 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Scanlines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 255, 255, 0.1) 50%)',
          backgroundSize: '100% 4px',
          animation: 'scanlines 0.1s linear infinite'
        }}></div>

        {/* Neural Network Connections */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10">
            {[...Array(15)].map((_, i) => (
              <g key={i}>
                <line 
                  x1={`${Math.random() * 100}%`} 
                  y1={`${Math.random() * 100}%`} 
                  x2={`${Math.random() * 100}%`} 
                  y2={`${Math.random() * 100}%`} 
                  stroke="url(#grad1)" 
                  strokeWidth="1"
                  className="animate-pulse"
                  style={{animationDelay: `${Math.random() * 3}s`}}
                />
                <circle 
                  cx={`${Math.random() * 100}%`} 
                  cy={`${Math.random() * 100}%`} 
                  r="2" 
                  fill="currentColor" 
                  className="text-cyan-400 animate-pulse"
                  style={{animationDelay: `${Math.random() * 3}s`}}
                />
              </g>
            ))}
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: 'rgb(6, 182, 212)', stopOpacity: 0}} />
                <stop offset="50%" style={{stopColor: 'rgb(6, 182, 212)', stopOpacity: 0.5}} />
                <stop offset="100%" style={{stopColor: 'rgb(147, 51, 234)', stopOpacity: 0}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Gaming Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navClass}`}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-20">
            {/* Revolutionary Professional Logo */}
            <div className="flex items-center space-x-6 group cursor-pointer">
              <div className="relative">
                {/* Main Logo Container with Vault Design */}
                <div className="w-20 h-20 relative">
                  {/* Outer Security Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-emerald-400 animate-spin opacity-60" style={{animationDuration: '8s'}}></div>
                  <div className="absolute inset-1 rounded-full border-2 border-cyan-400 animate-spin opacity-40" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
                  
                  {/* Central Vault Icon */}
                  <div className="absolute inset-2 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-emerald-500/40 border border-emerald-400/30">
                    <Shield className="w-8 h-8 text-emerald-400 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  </div>

                  {/* Security Indicators */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute -top-1 -left-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>

                  {/* Holographic Aura */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 animate-pulse"></div>
                </div>
              </div>

              <div className="flex flex-col relative">
                {/* Main Brand Name with Advanced Typography */}
                <div className="relative overflow-hidden">
                  <h1 className="text-4xl font-black relative">
                    {/* Primary Text */}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent font-mono tracking-wider">
                        NEXUS
                      </span>
                      {/* Glitch Layers */}
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" style={{transform: 'translate(2px, -1px)'}}>
                        NEXUS
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{transform: 'translate(-1px, 1px)'}}>
                        NEXUS
                      </span>
                    </span>
                    <span className="text-white font-mono tracking-wider ml-2">•</span>
                    <span className="relative inline-block ml-2">
                      <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-400 bg-clip-text text-transparent font-mono tracking-wider">
                        VAULT
                      </span>
                      {/* Glitch Layers */}
                      <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" style={{transform: 'translate(1px, -2px)'}}>
                        VAULT
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{transform: 'translate(-2px, 1px)'}}>
                        VAULT
                      </span>
                    </span>
                  </h1>

                  {/* Animated Underline */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{width: '0%', animation: 'expandWidth 2s ease-in-out infinite'}}></div>
                </div>

                {/* Enhanced Mission Statement */}
                <div className="flex items-center gap-2 mt-2">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono tracking-wider font-bold text-lg">
                    SECURE PAYMENT INTERMEDIARY
                  </span>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>

                {/* Advanced Status Indicators */}
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400 font-mono font-bold">[SECURE]</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">|</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                    <span className="text-xs text-blue-400 font-mono font-bold">[INSTANT]</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">|</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                    <span className="text-xs text-yellow-400 font-mono font-bold">[ZERO_FEES]</span>
                  </div>
                </div>

                {/* Version & Protocol */}
                <div className="mt-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-cyan-400 font-mono tracking-wider">
                    FIVEM_VAULT_PROTOCOL_v4.0.1 
                  </span>
                  <span className="text-xs text-gray-500 font-mono ml-2">// ENTERPRISE_GRADE</span>
                </div>
              </div>

              {/* Floating Particles Around Logo */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className={`absolute w-1 h-1 rounded-full ${i % 4 === 0 ? 'bg-emerald-400' : i % 4 === 1 ? 'bg-cyan-400' : i % 4 === 2 ? 'bg-blue-400' : 'bg-yellow-400'}`}
                    style={{
                      left: `${20 + Math.cos(i * 45 * Math.PI / 180) * 60}px`,
                      top: `${20 + Math.sin(i * 45 * Math.PI / 180) * 60}px`,
                      animation: `particleOrbit ${3 + i * 0.5}s linear infinite`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Gaming Menu */}
            <div className="flex items-center space-x-10">
              <div className="flex items-center space-x-8">
                <a href="#vault" className="text-gray-300 hover:text-emerald-400 transition-all duration-300 text-lg relative group font-mono font-medium">
                  [VAULT_CORE]
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#security" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-lg relative group font-mono font-medium">
                  [SECURITY]
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#marketplace" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-lg relative group font-mono font-medium">
                  [MARKETPLACE]
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#integration" className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-lg relative group font-mono font-medium">
                  [INTEGRATION]
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
              
              {/* Gaming Action Buttons */}
              <div className="flex items-center space-x-4">
                <button className="text-gray-300 hover:text-white transition-all duration-300 font-mono font-medium px-6 py-3 rounded-lg hover:bg-gray-800/50 border border-gray-700/50 hover:border-gray-600">
                  ./login
                </button>
                <button className="relative group bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-500 px-8 py-3 rounded-xl font-mono font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
                  <span className="relative z-10">$secure --vault</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Cyberpunk Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-gray-900/90"></div>
        
        {/* Animated Code Display */}
        <div className="absolute top-32 right-8 bg-gray-800/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 font-mono text-sm max-w-md">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 ml-2">terminal.js</span>
          </div>
          <div className="text-green-400">
            $ <span className="text-cyan-400">{typewriterText}</span>
            <span className="animate-pulse">|</span>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          {/* Gaming Status Banner */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 border border-yellow-400/30 rounded-full px-8 py-4 mb-12 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" style={{animationDuration: '3s'}} />
            <span className="text-lg font-mono font-bold text-yellow-300">[VAULT_STATUS]:</span>
            <span className="text-lg font-mono font-bold text-white">ZERO_FEES_ACTIVE</span>
            <Lock className="w-5 h-5 text-emerald-400" />
          </div>

          <div className="mb-16">
            {/* Enhanced Hero Title with Advanced Effects */}
            <div className="relative mb-8">
              <h1 className="text-8xl font-black mb-6 leading-tight font-mono relative">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent neon-text">THE</span>
                  <span className="absolute inset-0 text-emerald-400/40 animate-pulse" style={{transform: 'translate(3px, -2px)', animationDelay: '0.1s'}}>THE</span>
                  <span className="absolute inset-0 text-blue-400/30 animate-pulse" style={{transform: 'translate(-2px, 2px)', animationDelay: '0.2s'}}>THE</span>
                </span>
                <span className="block mt-4 relative cyber-border">
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent neon-text relative z-10">
                    ULTIMATE
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-yellow-400 bg-clip-text text-transparent opacity-50 animate-pulse" style={{transform: 'translate(2px, -1px)', animationDelay: '0.3s'}}>
                    ULTIMATE
                  </span>
                </span>
                <span className="block mt-4 relative">
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-400 bg-clip-text text-transparent neon-text">SECURE</span>
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent neon-text ml-4">VAULT</span>
                  <span className="absolute inset-0 text-yellow-400/30 animate-pulse" style={{transform: 'translate(-1px, 1px)', animationDelay: '0.4s'}}>SECURE VAULT</span>
                </span>
              </h1>

              {/* Enhanced Animated Underlines */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Terminal-style subtitle */}
            <div className="font-mono text-2xl text-gray-300 mb-8 leading-relaxed">
              <span className="text-emerald-400">&gt;</span> 
              <span className="text-gray-400">nexus</span>
              <span className="text-emerald-400">.</span>
              <span className="text-cyan-400">vault</span>
              <span className="text-gray-400">.</span>
              <span className="text-yellow-400">secure</span>
              <span className="text-gray-400">(</span>
              <span className="text-blue-400">{`{`}</span>
              <span className="block mt-2 ml-8 text-gray-400">
                protection: <span className="text-emerald-400">"military_grade"</span>,
              </span>
              <span className="block ml-8 text-gray-400">
                escrow: <span className="text-cyan-400">"enabled"</span>,
              </span>
              <span className="block ml-8 text-gray-400">
                fees: <span className="text-yellow-400">0</span>
              </span>
              <span className="text-blue-400">{`}`}</span>
              <span className="text-gray-400">)</span>
              <span className="animate-pulse text-emerald-400">_</span>
            </div>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
              The most <span className="text-emerald-400 font-mono font-bold">SECURE</span> FiveM payment intermediary. 
              <span className="text-cyan-400 font-mono font-bold"> Military-grade encryption</span> protecting 
              <span className="text-yellow-400 font-mono font-bold"> every transaction</span>. 
              <span className="block mt-4 text-lg text-gray-400 font-mono">
                // Your vault. Your rules. Our protection.
              </span>
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-20">
            <button className="group relative bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-500 px-12 py-6 rounded-2xl text-2xl font-mono font-bold transition-all duration-500 transform hover:scale-110 flex items-center justify-center gap-4 shadow-2xl shadow-emerald-500/30 overflow-hidden">
              <Shield className="w-8 h-8" />
              <span className="relative z-10">$secure --vault</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
              <div className="absolute inset-0 border border-emerald-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative bg-gray-800/80 hover:bg-gray-700/80 border-2 border-gray-600 hover:border-cyan-400 px-12 py-6 rounded-2xl text-2xl font-mono font-bold transition-all duration-500 flex items-center justify-center gap-4 backdrop-blur-sm hover:scale-105 overflow-hidden">
              <Lock className="w-8 h-8 group-hover:text-cyan-400 transition-colors" />
              <span className="group-hover:text-cyan-400 transition-colors">./vault --demo</span>
              <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Security Indicators */}
          <div className="grid grid-cols-4 gap-8 text-gray-400">
            <div className="flex flex-col items-center gap-3 group hover:text-emerald-400 transition-colors cursor-pointer">
              <Shield className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
              <span className="font-mono font-bold text-sm">[VAULT_SECURED]</span>
            </div>
            <div className="flex flex-col items-center gap-3 group hover:text-cyan-400 transition-colors cursor-pointer">
              <Lock className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
              <span className="font-mono font-bold text-sm">[ESCROW_PROTECTED]</span>
            </div>
            <div className="flex flex-col items-center gap-3 group hover:text-yellow-400 transition-colors cursor-pointer">
              <Fingerprint className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
              <span className="font-mono font-bold text-sm">[VERIFIED_SECURE]</span>
            </div>
            <div className="flex flex-col items-center gap-3 group hover:text-blue-400 transition-colors cursor-pointer">
              <Database className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
              <span className="font-mono font-bold text-sm">[VAULT_ENCRYPTED]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Stats Dashboard */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/50"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black font-mono mb-4 text-white">
              [VAULT_STATISTICS]
            </h2>
            <p className="text-xl text-gray-400 font-mono">&gt; Real-time security metrics</p>
          </div>
          
          <div className="grid grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-gray-700 hover:border-${stat.color}-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`flex items-center justify-center mb-6 text-${stat.color}-400 group-hover:scale-125 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className={`text-4xl font-black font-mono text-${stat.color}-400 mb-2`}>
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

      {/* Gaming Features Arsenal */}
      <section id="arsenal" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="relative mb-8">
              <h2 className="text-6xl font-black font-mono text-white relative">
                [GAMING_
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text">
                  ARSENAL
                </span>
                ]
                {/* Glitch overlay */}
                <span className="absolute inset-0 text-cyan-400/30 font-mono opacity-0 hover:opacity-100 transition-opacity duration-300" style={{transform: 'translate(2px, -1px)'}}>
                  [GAMING_ARSENAL]
                </span>
              </h2>
              {/* Animated border */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            </div>
            <p className="text-2xl text-gray-300 font-mono">&gt; Advanced marketplace systems for game developers</p>
          </div>

          <div className="grid grid-cols-4 gap-8 mb-16">
            {gamingFeatures.map((feature, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm">
                <div className="text-cyan-400 mb-6 flex justify-center group-hover:scale-125 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-mono mb-4 text-white group-hover:text-cyan-400 transition-colors text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-400 font-mono">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer SDK Section */}
      <section id="sdk" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="relative mb-8">
              <h2 className="text-6xl font-black font-mono relative">
                <span className="text-white">[DEVELOPER_</span>
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent neon-text">
                  SDK
                </span>
                <span className="text-white">]</span>
                {/* Glitch overlay */}
                <span className="absolute inset-0 text-green-400/30 font-mono opacity-0 hover:opacity-100 transition-opacity duration-300" style={{transform: 'translate(-1px, 1px)'}}>
                  [DEVELOPER_SDK]
                </span>
              </h2>
              {/* Animated border */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
            </div>
            <p className="text-2xl text-gray-300 font-mono">&gt; Full-stack development toolkit</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-10 rounded-3xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${feature.color} mb-8 group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold font-mono mb-6 text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="text-xs font-mono text-purple-400 mb-2">TECH_STACK:</div>
                    <div className="text-sm font-mono text-gray-400">{feature.tech}</div>
                  </div>
                  
                  {/* Feature Benefits */}
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-400 font-mono">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Integration Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black font-mono mb-8 text-white">
              [INTEGRATION_
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                PREVIEW
              </span>
              ]
            </h2>
            <p className="text-2xl text-gray-300 font-mono">&gt; See the power of our API</p>
          </div>

          {/* Code Example */}
          <div className="bg-gray-800/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 font-mono ml-4">cyberstore_integration.js</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div><span className="text-purple-400">const</span> <span className="text-cyan-400">CyberStore</span> <span className="text-gray-400">=</span> <span className="text-yellow-400">require</span><span className="text-gray-400">(</span><span className="text-green-400">'@cyberstore/fivem-sdk'</span><span className="text-gray-400">);</span></div>
              <div></div>
              <div><span className="text-gray-500">// Initialize store with your server</span></div>
              <div><span className="text-purple-400">const</span> <span className="text-cyan-400">store</span> <span className="text-gray-400">=</span> <span className="text-purple-400">new</span> <span className="text-cyan-400">CyberStore</span><span className="text-gray-400">({`{`}</span></div>
              <div className="ml-4"><span className="text-cyan-400">apiKey</span><span className="text-gray-400">:</span> <span className="text-green-400">'your_secret_key'</span><span className="text-gray-400">,</span></div>
              <div className="ml-4"><span className="text-cyan-400">serverName</span><span className="text-gray-400">:</span> <span className="text-green-400">'Night City RP'</span></div>
              <div><span className="text-gray-400">{`}`});</span></div>
              <div></div>
              <div><span className="text-gray-500">// Create legendary weapon</span></div>
              <div><span className="text-purple-400">await</span> <span className="text-cyan-400">store</span><span className="text-gray-400">.</span><span className="text-yellow-400">createItem</span><span className="text-gray-400">({`{`}</span></div>
              <div className="ml-4"><span className="text-cyan-400">name</span><span className="text-gray-400">:</span> <span className="text-green-400">'Mantis Blades'</span><span className="text-gray-400">,</span></div>
              <div className="ml-4"><span className="text-cyan-400">rarity</span><span className="text-gray-400">:</span> <span className="text-green-400">'legendary'</span><span className="text-gray-400">,</span></div>
              <div className="ml-4"><span className="text-cyan-400">price</span><span className="text-gray-400">:</span> <span className="text-yellow-400">2500</span><span className="text-gray-400">,</span></div>
              <div className="ml-4"><span className="text-cyan-400">category</span><span className="text-gray-400">:</span> <span className="text-green-400">'cyberware'</span></div>
              <div><span className="text-gray-400">{`}`});</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyberpunk CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-8 py-4 mb-8">
              <Shield className="w-6 h-6 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 font-mono font-bold text-lg">[VAULT_SECURE_ACCESS]</span>
            </div>
            
            <div className="relative mb-8">
              <h2 className="text-7xl font-black font-mono leading-tight text-white relative">
                [SECURE_
                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent neon-text">
                  YOUR_VAULT
                </span>
                ]
                {/* Multi-layer glitch effect */}
                <span className="absolute inset-0 text-emerald-400/40 font-mono opacity-0 hover:opacity-100 transition-opacity duration-300" style={{transform: 'translate(3px, -2px)'}}>
                  [SECURE_YOUR_VAULT]
                </span>
                <span className="absolute inset-0 text-cyan-400/30 font-mono opacity-0 hover:opacity-100 transition-opacity duration-300" style={{transform: 'translate(-2px, 3px)'}}>
                  [SECURE_YOUR_VAULT]
                </span>
              </h2>
              {/* Epic animated border */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            <p className="text-2xl text-gray-300 font-mono mb-12 max-w-4xl mx-auto leading-relaxed">
              &gt; Join the <span className="text-emerald-400 font-bold">secure_revolution</span> where 
              <span className="text-cyan-400 font-bold"> military_grade_encryption</span> meets 
              <span className="text-yellow-400 font-bold"> zero_friction_commerce</span>
              <span className="block mt-4 text-lg text-gray-400">
                // Your vault awaits. Maximum security guaranteed.
              </span>
            </p>
          </div>
          
          <div className="flex justify-center gap-8">
            <button className="group relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 px-16 py-8 rounded-3xl text-3xl font-mono font-black transition-all duration-500 transform hover:scale-110 shadow-2xl shadow-cyan-500/40 overflow-hidden">
              <span className="relative z-10 flex items-center gap-4">
                <Shield className="w-10 h-10" />
                $secure --vault
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg"></div>
              <div className="absolute inset-0 border-2 border-cyan-400/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative bg-gray-800/80 hover:bg-gray-700/80 border-2 border-gray-600 hover:border-purple-400 px-16 py-8 rounded-3xl text-3xl font-mono font-black transition-all duration-500 backdrop-blur-sm hover:scale-105 overflow-hidden">
              <span className="group-hover:text-cyan-400 transition-colors flex items-center gap-4">
                <Lock className="w-10 h-10" />
                ./explore --vault
              </span>
              <div className="absolute inset-0 bg-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Cyberpunk Footer */}
      <footer className="bg-gray-800 border-t border-cyan-500/30 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-800"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-4 gap-12">
            <div className="col-span-1">
              <div className="flex items-center space-x-4 mb-8 group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-emerald-500/30 relative overflow-hidden">
                    <Shield className="w-10 h-10 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  {/* Security ring */}
                  <div className="absolute inset-0 rounded-xl border border-emerald-400/30 group-hover:scale-125 transition-transform duration-500 animate-pulse"></div>
                </div>
                <div>
                  <span className="text-3xl font-black font-mono">
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">NEXUS</span>
                    <span className="text-white mx-2">•</span>
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">VAULT</span>
                  </span>
                  <div className="text-sm text-emerald-400 font-mono -mt-1">SECURE_PAYMENT_PROTOCOL_v4.0.1</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400 font-mono">VAULT_OPERATIONAL</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed font-mono">
                &gt; The most secure FiveM payment intermediary platform. Military-grade protection for every transaction.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-8 text-emerald-400 text-xl font-mono">[VAULT_CORE]</h3>
              <ul className="space-y-4 text-gray-400 font-mono">
                <li><a href="#" className="hover:text-emerald-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Security_Protocol</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Payment_Gateway</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Vault_SDK</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Integration_Docs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-8 text-cyan-400 text-xl font-mono">[SECURE_NET]</h3>
              <ul className="space-y-4 text-gray-400 font-mono">
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Vault_Support</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Security_Center</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Community_Vault</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Discord_Secure</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-8 text-yellow-400 text-xl font-mono">[VAULT_ARCHIVES]</h3>
              <ul className="space-y-4 text-gray-400 font-mono">
                <li><a href="#" className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Security_Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Vault_Terms</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Audit_Reports</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block">&gt; Compliance_Vault</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-16 pt-12 text-center">
            <p className="text-gray-400 font-mono text-lg">
              &copy; 2025 NEXUS_VAULT_PROTOCOL. All vaults secured. 
              <span className="text-emerald-400"> &gt; Protecting the FiveM economy.</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Advanced Cyberpunk Animations */}
      <style jsx>{`
        @keyframes matrixRain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes gridCyberpunk {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.15;
          }
          25% { 
            transform: translate(30px, 15px) scale(1.02);
            opacity: 0.25;
          }
          50% { 
            transform: translate(15px, 30px) scale(0.98);
            opacity: 0.20;
          }
          75% { 
            transform: translate(-15px, 10px) scale(1.01);
            opacity: 0.18;
          }
        }

        @keyframes codeFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.08;
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg); 
            opacity: 0.15;
          }
          50% { 
            transform: translateY(-40px) translateX(-5px) rotate(180deg); 
            opacity: 0.12;
          }
          75% { 
            transform: translateY(-30px) translateX(15px) rotate(270deg); 
            opacity: 0.10;
          }
        }

        @keyframes glitchLine {
          0%, 100% { 
            opacity: 0; 
            transform: translateX(-100%);
          }
          50% { 
            opacity: 0.3; 
            transform: translateX(100%);
          }
        }

        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }

        @keyframes neonGlow {
          0%, 100% { 
            box-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
          }
          50% { 
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
          }
        }

        @keyframes particleOrbit {
          0% { 
            transform: rotate(0deg) translateX(60px) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: rotate(360deg) translateX(60px) rotate(-360deg);
            opacity: 0.3;
          }
        }

        @keyframes expandWidth {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }

        .neon-text {
          text-shadow: 
            0 0 5px currentColor,
            0 0 10px currentColor,
            0 0 15px currentColor,
            0 0 20px currentColor;
        }

        .cyber-border {
          position: relative;
          overflow: hidden;
        }

        .cyber-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.4), transparent);
          animation: borderSweep 3s infinite;
        }

        @keyframes borderSweep {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default IndexPage;