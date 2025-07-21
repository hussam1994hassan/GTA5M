import React, { useState, useEffect } from "react";
import {
    Shield,
    Zap,
    Users,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Lock,
    Gamepad2,
    Target,
    Crown,
    Package,
    Dice6,
    Fingerprint,
    Database,
    Terminal,
    Cpu,
    Code,
} from "lucide-react";

const IndexPage = () => {
    const [typewriterText, setTypewriterText] = useState("");
    const [codeIndex, setCodeIndex] = useState(0);
    const [_, setActiveFeature] = useState(0);

    const codeSnippets = [
        "npm install @nexusvault/fivem-sdk",
        "const vault = new NexusVault.Secure({...})",
        "await vault.createItem('legendary_weapon')",
        "console.log('Transaction secured!')",
        "player.addItem(purchasedItem, quantity)",
    ];

    useEffect(() => {
        // Typewriter effect
        const typewriterInterval = setInterval(() => {
            const currentSnippet = codeSnippets[codeIndex];
            setTypewriterText((prev) => {
                if (prev.length < currentSnippet.length) {
                    return currentSnippet.slice(0, prev.length + 1);
                } else {
                    setTimeout(() => {
                        setTypewriterText("");
                        setCodeIndex(
                            (prevIndex) => (prevIndex + 1) % codeSnippets.length
                        );
                    }, 2000);
                    return prev;
                }
            });
        }, 100);

        return () => clearInterval(typewriterInterval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [codeIndex]);

    const stats = [
        {
            number: "9,247",
            label: "Protected Servers",
            subtext: "Secured Vaults",
            icon: <Shield className="w-6 h-6" />,
            color: "emerald",
        },
        {
            number: "$31.2M",
            label: "Vault Volume",
            subtext: "Protected Transactions",
            icon: <Lock className="w-6 h-6" />,
            color: "cyan",
        },
        {
            number: "742K",
            label: "Secure Users",
            subtext: "Protected Accounts",
            icon: <Users className="w-6 h-6" />,
            color: "blue",
        },
        {
            number: "99.99%",
            label: "Vault Uptime",
            subtext: "Security Guarantee",
            icon: <Zap className="w-6 h-6" />,
            color: "yellow",
        },
    ];

    const features = [
        {
            icon: <Terminal className="w-10 h-10" />,
            title: "Code-Free Vault Integration",
            description:
                "Advanced SDK with zero-config setup. Our neural network handles server integration automatically. Just drag, drop, and deploy.",
            color: "from-cyan-400 via-blue-500 to-cyan-600",
            benefits: [
                "Auto-generated API keys",
                "Real-time webhooks",
                "Error handling",
                "Load balancing",
            ],
            tech: "JavaScript • Python • Lua • C#",
        },
        {
            icon: <Cpu className="w-10 h-10" />,
            title: "Quantum Security Engine",
            description:
                "Military-grade encryption with blockchain verification. Process thousands of transactions per second with 99.99% uptime guarantee.",
            color: "from-green-400 via-emerald-500 to-green-600",
            benefits: [
                "Sub-second processing",
                "DDoS protection",
                "Fraud AI detection",
                "Global routing",
            ],
            tech: "Blockchain • ML • Redis • PostgreSQL",
        },
        {
            icon: <Gamepad2 className="w-10 h-10" />,
            title: "Game-Engine Integration",
            description:
                "Native FiveM integration with real-time inventory sync. Supports vehicles, weapons, skins, houses, and custom items.",
            color: "from-purple-400 via-violet-500 to-purple-600",
            benefits: [
                "Real-time sync",
                "Inventory management",
                "Asset validation",
                "Player tracking",
            ],
            tech: "FiveM • ESX • QB-Core • VRP",
        },
        {
            icon: <Database className="w-10 h-10" />,
            title: "Advanced Analytics Engine",
            description:
                "Machine learning powered insights with predictive analytics. Track player behavior, optimize pricing, and maximize revenue.",
            color: "from-yellow-400 via-orange-500 to-yellow-600",
            benefits: [
                "Predictive modeling",
                "Player segmentation",
                "Revenue optimization",
                "A/B testing",
            ],
            tech: "Python • TensorFlow • GraphQL • React",
        },
        {
            icon: <Shield className="w-10 h-10" />,
            title: "Cybersecurity Protocol",
            description:
                "Enterprise-grade security with penetration testing, vulnerability scanning, and 24/7 SOC monitoring.",
            color: "from-red-400 via-pink-500 to-red-600",
            benefits: [
                "Penetration testing",
                "SOC monitoring",
                "Compliance audits",
                "Incident response",
            ],
            tech: "WAF • SIEM • IDS • Encryption",
        },
        {
            icon: <Code className="w-10 h-10" />,
            title: "Developer Vault SDK",
            description:
                "Full-featured development kit with code examples, testing environment, and debugging tools for advanced customization.",
            color: "from-indigo-400 via-blue-500 to-indigo-600",
            benefits: [
                "Sandbox environment",
                "Debug tools",
                "Code examples",
                "24/7 dev support",
            ],
            tech: "REST API • WebSockets • OAuth • JWT",
        },
    ];

    const gamingFeatures = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Weapon Systems",
            description:
                "Advanced weapon marketplace with damage stats, rarity tiers, and upgrade paths",
            items: [
                "Legendary Weapons",
                "Tactical Gear",
                "Weapon Skins",
                "Attachments",
            ],
        },
        {
            icon: <Crown className="w-8 h-8" />,
            title: "Vehicle Arsenal",
            description:
                "Complete vehicle ecosystem from motorcycles to supercars and aircraft",
            items: ["Supercars", "Motorcycles", "Aircraft", "Boats"],
        },
        {
            icon: <Dice6 className="w-8 h-8" />,
            title: "Loot Systems",
            description:
                "Advanced loot box mechanics with guaranteed drops and probability tables",
            items: [
                "Mystery Crates",
                "Seasonal Boxes",
                "Premium Packs",
                "Daily Rewards",
            ],
        },
        {
            icon: <Package className="w-8 h-8" />,
            title: "Item Economy",
            description:
                "Dynamic pricing with market fluctuations and supply/demand mechanics",
            items: ["Rare Items", "Collectibles", "Resources", "Consumables"],
        },
    ];

    const platformBenefits = [
        {
            title: "For Server Owners",
            icon: <Crown className="w-8 h-8" />,
            benefits: [
                "Complete vault management platform",
                "Zero transaction fees (limited time)",
                "Professional payment processing",
                "Automated item delivery system",
                "Advanced analytics & reporting",
                "24/7 security support",
            ],
            color: "emerald",
        },
        {
            title: "For Players",
            icon: <Gamepad2 className="w-8 h-8" />,
            benefits: [
                "Secure purchase protection",
                "Instant item delivery",
                "Multiple payment options",
                "Money-back guarantee",
                "Fraud protection",
                "Global accessibility",
            ],
            color: "cyan",
        },
    ];

    return (
        <div className="relative z-10">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-gray-900/90"></div>

                {/* Animated Code Display */}
                <div className="absolute top-32 right-8 bg-gray-800/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 font-mono text-sm max-w-md">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-400 ml-2">vault.js</span>
                    </div>
                    <div className="text-green-400">
                        ${" "}
                        <span className="text-cyan-400">{typewriterText}</span>
                        <span className="animate-pulse">|</span>
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
                    {/* Vault Status Banner */}
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 border border-yellow-400/30 rounded-full px-8 py-4 mb-12 backdrop-blur-sm">
                        <Sparkles
                            className="w-5 h-5 text-yellow-400 animate-spin"
                            style={{ animationDuration: "3s" }}
                        />
                        <span className="text-lg font-mono font-bold text-yellow-300">
                            [VAULT_STATUS]:
                        </span>
                        <span className="text-lg font-mono font-bold text-white">
                            ZERO_FEES_ACTIVE
                        </span>
                        <Lock className="w-5 h-5 text-emerald-400" />
                    </div>

                    <div className="mb-16">
                        <div className="relative mb-8">
                            <h1 className="text-8xl font-black mb-6 leading-tight font-mono relative">
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent neon-text">
                                        THE
                                    </span>
                                    <span
                                        className="absolute inset-0 text-emerald-400/40 animate-pulse"
                                        style={{
                                            transform: "translate(3px, -2px)",
                                            animationDelay: "0.1s",
                                        }}
                                    >
                                        THE
                                    </span>
                                    <span
                                        className="absolute inset-0 text-blue-400/30 animate-pulse"
                                        style={{
                                            transform: "translate(-2px, 2px)",
                                            animationDelay: "0.2s",
                                        }}
                                    >
                                        THE
                                    </span>
                                </span>
                                <span className="block mt-4 relative cyber-border">
                                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent neon-text relative z-10">
                                        ULTIMATE
                                    </span>
                                    <span
                                        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-yellow-400 bg-clip-text text-transparent opacity-50 animate-pulse"
                                        style={{
                                            transform: "translate(2px, -1px)",
                                            animationDelay: "0.3s",
                                        }}
                                    >
                                        ULTIMATE
                                    </span>
                                </span>
                                <span className="block mt-4 relative">
                                    <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-400 bg-clip-text text-transparent neon-text">
                                        SECURE VAULT
                                    </span>
                                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent neon-text ml-4"></span>
                                    <span
                                        className="absolute inset-0 text-yellow-400/30 animate-pulse"
                                        style={{
                                            transform: "translate(-1px, 1px)",
                                            animationDelay: "0.4s",
                                        }}
                                    >
                                        SECURE VAULT
                                    </span>
                                </span>
                            </h1>

                            {/* Enhanced Animated Underlines */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"></div>
                            <div
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
                                style={{ animationDelay: "0.5s" }}
                            ></div>
                            <div
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"
                                style={{ animationDelay: "1s" }}
                            ></div>
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
                                protection:{" "}
                                <span className="text-emerald-400">
                                    "military_grade"
                                </span>
                                ,
                            </span>
                            <span className="block ml-8 text-gray-400">
                                escrow:{" "}
                                <span className="text-cyan-400">"enabled"</span>
                                ,
                            </span>
                            <span className="block ml-8 text-gray-400">
                                fees: <span className="text-yellow-400">0</span>
                            </span>
                            <span className="text-blue-400">{`}`}</span>
                            <span className="text-gray-400">)</span>
                            <span className="animate-pulse text-emerald-400">
                                _
                            </span>
                        </div>

                        <p className="text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
                            The most{" "}
                            <span className="text-emerald-400 font-mono font-bold">
                                SECURE
                            </span>{" "}
                            FiveM payment intermediary.
                            <span className="text-cyan-400 font-mono font-bold">
                                {" "}
                                Military-grade encryption
                            </span>{" "}
                            protecting
                            <span className="text-yellow-400 font-mono font-bold">
                                {" "}
                                every transaction
                            </span>
                            .
                            <span className="block mt-4 text-lg text-gray-400 font-mono">
                                // Your vault. Your rules. Our protection.
                            </span>
                        </p>
                    </div>

                    <div className="flex justify-center gap-8 mb-20">
                        <button className="group relative bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-500 px-12 py-6 rounded-2xl text-2xl font-mono font-bold transition-all duration-500 transform hover:scale-110 flex items-center justify-center gap-4 shadow-2xl shadow-emerald-500/30 overflow-hidden">
                            <Shield className="w-8 h-8" />
                            <span className="relative z-10">
                                $secure --vault
                            </span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                            <div className="absolute inset-0 border border-emerald-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        <button className="group relative bg-gray-800/80 hover:bg-gray-700/80 border-2 border-gray-600 hover:border-cyan-400 px-12 py-6 rounded-2xl text-2xl font-mono font-bold transition-all duration-500 flex items-center justify-center gap-4 backdrop-blur-sm hover:scale-105 overflow-hidden">
                            <Lock className="w-8 h-8 group-hover:text-cyan-400 transition-colors" />
                            <span className="group-hover:text-cyan-400 transition-colors">
                                ./vault --demo
                            </span>
                            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>

                    {/* Security Indicators */}
                    <div className="grid grid-cols-4 gap-8 text-gray-400">
                        <div className="flex flex-col items-center gap-3 group hover:text-emerald-400 transition-colors cursor-pointer">
                            <Shield className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
                            <span className="font-mono font-bold text-sm">
                                [VAULT_SECURED]
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-3 group hover:text-cyan-400 transition-colors cursor-pointer">
                            <Lock className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
                            <span className="font-mono font-bold text-sm">
                                [ESCROW_PROTECTED]
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-3 group hover:text-yellow-400 transition-colors cursor-pointer">
                            <Fingerprint className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
                            <span className="font-mono font-bold text-sm">
                                [VERIFIED_SECURE]
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-3 group hover:text-blue-400 transition-colors cursor-pointer">
                            <Database className="w-10 h-10 group-hover:scale-125 transition-transform duration-300" />
                            <span className="font-mono font-bold text-sm">
                                [VAULT_ENCRYPTED]
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/50"></div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black font-mono mb-4 text-white">
                            [VAULT_STATISTICS]
                        </h2>
                        <p className="text-xl text-gray-400 font-mono">
                            &gt; Real-time security metrics
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-gray-700 hover:border-${stat.color}-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden`}
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                ></div>

                                <div className="relative z-10 text-center">
                                    <div
                                        className={`flex items-center justify-center mb-6 text-${stat.color}-400 group-hover:scale-125 transition-transform duration-300`}
                                    >
                                        {stat.icon}
                                    </div>
                                    <div
                                        className={`text-4xl font-black font-mono text-${stat.color}-400 mb-2`}
                                    >
                                        {stat.number}
                                    </div>
                                    <div className="text-white font-mono font-bold text-lg mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-gray-400 font-mono text-sm">
                                        {stat.subtext}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Benefits */}
            <section id="platform" className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black mb-8 text-white">
                            Your{" "}
                            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                Complete
                            </span>{" "}
                            Vault Solution
                        </h2>
                        <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                            We provide everything you need to run a professional
                            FiveM store. No technical knowledge required.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-16">
                        {platformBenefits.map((benefit, index) => (
                            <div key={index} className="relative">
                                <div className="text-center mb-8">
                                    <div
                                        className={`inline-flex items-center gap-4 mb-6 text-${benefit.color}-400`}
                                    >
                                        {benefit.icon}
                                        <h3 className="text-3xl font-bold text-white">
                                            {benefit.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {benefit.benefits.map(
                                        (point, pointIndex) => (
                                            <div
                                                key={pointIndex}
                                                className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300"
                                            >
                                                <CheckCircle
                                                    className={`w-6 h-6 text-${benefit.color}-400 flex-shrink-0`}
                                                />
                                                <span className="text-gray-300 group-hover:text-white transition-colors text-lg">
                                                    {point}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Showcase */}
            <section id="features" className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-20">
                        <div className="relative mb-8">
                            <h2 className="text-6xl font-black font-mono text-white relative">
                                [DEVELOPER_
                                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent neon-text">
                                    SDK
                                </span>
                                ]{/* Glitch overlay */}
                                <span
                                    className="absolute inset-0 text-green-400/30 font-mono opacity-0 hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        transform: "translate(-1px, 1px)",
                                    }}
                                >
                                    [DEVELOPER_SDK]
                                </span>
                            </h2>
                            {/* Animated border */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
                        </div>
                        <p className="text-2xl text-gray-300 font-mono">
                            &gt; Full-stack development toolkit
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-10 rounded-3xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden cursor-pointer"
                                onMouseEnter={() => setActiveFeature(index)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div
                                        className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${feature.color} mb-8 group-hover:scale-125 transition-transform duration-500 shadow-lg`}
                                    >
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
                                        <div className="text-xs font-mono text-purple-400 mb-2">
                                            TECH_STACK:
                                        </div>
                                        <div className="text-sm font-mono text-gray-400">
                                            {feature.tech}
                                        </div>
                                    </div>

                                    {/* Feature Benefits */}
                                    <div className="space-y-2">
                                        {feature.benefits.map(
                                            (benefit, benefitIndex) => (
                                                <div
                                                    key={benefitIndex}
                                                    className="flex items-center gap-2 text-sm"
                                                >
                                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                                    <span className="text-gray-400 font-mono">
                                                        {benefit}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
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
                                ]{/* Glitch overlay */}
                                <span
                                    className="absolute inset-0 text-cyan-400/30 font-mono opacity-0 hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        transform: "translate(2px, -1px)",
                                    }}
                                >
                                    [GAMING_ARSENAL]
                                </span>
                            </h2>
                            {/* Animated border */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                        </div>
                        <p className="text-2xl text-gray-300 font-mono">
                            &gt; Advanced marketplace systems for game
                            developers
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-8 mb-16">
                        {gamingFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm"
                            >
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
                                        <div
                                            key={itemIndex}
                                            className="flex items-center gap-2 text-sm"
                                        >
                                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                            <span className="text-gray-400 font-mono">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

                <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-8 py-4 mb-8">
                            <Shield className="w-6 h-6 text-yellow-400 animate-pulse" />
                            <span className="text-yellow-400 font-mono font-bold text-lg">
                                [VAULT_SECURE_ACCESS]
                            </span>
                        </div>

                        <div className="relative mb-8">
                            <h2 className="text-7xl font-black font-mono leading-tight text-white relative">
                                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent neon-text">
                                    [SECURE_YOUR_VAULT]
                                </span>

                                {/* Multi-layer glitch effect */}
                                <span
                                    className="absolute inset-0 text-emerald-400/40 font-mono opacity-0 hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        transform: "translate(3px, -2px)",
                                    }}
                                >
                                    [SECURE_YOUR_VAULT]
                                </span>
                                <span
                                    className="absolute inset-0 text-cyan-400/30 font-mono opacity-0 hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        transform: "translate(-2px, 3px)",
                                    }}
                                >
                                    [SECURE_YOUR_VAULT]
                                </span>
                            </h2>
                            {/* Epic animated border */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"></div>
                            <div
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
                                style={{ animationDelay: "0.5s" }}
                            ></div>
                        </div>
                        <p className="text-2xl text-gray-300 font-mono mb-12 max-w-4xl mx-auto leading-relaxed">
                            &gt; Join the{" "}
                            <span className="text-emerald-400 font-bold">
                                secure_revolution
                            </span>{" "}
                            where
                            <span className="text-cyan-400 font-bold">
                                {" "}
                                military_grade_encryption
                            </span>{" "}
                            meets
                            <span className="text-yellow-400 font-bold">
                                {" "}
                                zero_friction_commerce
                            </span>
                            <span className="block mt-4 text-lg text-gray-400">
                                // Your vault awaits. Maximum security
                                guaranteed.
                            </span>
                        </p>
                    </div>

                    <div className="flex justify-center gap-8">
                        <button className="group relative bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-500 px-16 py-8 rounded-3xl text-3xl font-mono font-black transition-all duration-500 transform hover:scale-110 shadow-2xl shadow-emerald-500/40 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-4">
                                <Shield className="w-10 h-10" />
                                $secure --vault
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg"></div>
                            <div className="absolute inset-0 border-2 border-emerald-400/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        <button className="group relative bg-gray-800/80 hover:bg-gray-700/80 border-2 border-gray-600 hover:border-cyan-400 px-16 py-8 rounded-3xl text-3xl font-mono font-black transition-all duration-500 backdrop-blur-sm hover:scale-105 overflow-hidden">
                            <span className="group-hover:text-cyan-400 transition-colors flex items-center gap-4">
                                <Lock className="w-10 h-10" />
                                ./explore --vault
                            </span>
                            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndexPage;
