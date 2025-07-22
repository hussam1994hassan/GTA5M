import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Settings,
    Save,
    RefreshCw,
    Shield,
    Key,
    Bell,
    Globe,
    Server,
    Database,
    Code,
    Mail,
    Webhook,
    Eye,
    EyeOff,
    CheckCircle,
    AlertTriangle,
    Copy,
    Download,
    Upload,
    Trash2,
    Plus,
    Edit,
    X,
    Clock,
    Users,
    Package,
    DollarSign,
    Activity,
    Lock,
    Unlock,
    Zap,
    Monitor,
    HardDrive,
    Cpu,
    MemoryStick,
    Network,
    Wifi,
    FileText,
    BarChart3,
    TrendingUp,
    Calendar,
    MessageSquare,
    ExternalLink,
    Terminal,
    GitBranch,
    Info,
    CreditCard
} from "lucide-react";

const SettingsPage = () => {
    const [activeSection, setActiveSection] = useState("general");
    const [saving, setSaving] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [systemSettings, setSystemSettings] = useState({
        // General Settings
        siteName: "NexusVault Dashboard",
        siteDescription: "FiveM Store Management System",
        timezone: "America/New_York",
        language: "en",
        dateFormat: "MM/DD/YYYY",
        currency: "USD",
        maintenanceMode: false,
        
        // Security Settings
        twoFactorAuth: true,
        sessionTimeout: 30,
        passwordPolicy: {
            minLength: 8,
            requireUppercase: true,
            requireNumbers: true,
            requireSymbols: true
        },
        maxLoginAttempts: 5,
        bruteForceProtection: true,
        
        // API Settings
        apiEnabled: true,
        webhooksEnabled: true,
        rateLimit: 1000,
        apiVersion: "v1",
        cors: {
            enabled: true,
            origins: ["https://yourdomain.com"]
        },
        
        // Email Settings
        emailProvider: "smtp",
        smtpHost: "smtp.gmail.com",
        smtpPort: 587,
        smtpUsername: "",
        smtpPassword: "",
        smtpSecurity: "tls",
        fromEmail: "noreply@yourdomain.com",
        fromName: "NexusVault",
        
        // Notification Settings
        emailNotifications: true,
        discordNotifications: true,
        slackNotifications: false,
        pushNotifications: true,
        notificationTypes: {
            newOrders: true,
            paymentFailed: true,
            lowStock: true,
            systemAlerts: true,
            userRegistration: false
        },
        
        // System Performance
        cacheEnabled: true,
        cacheTimeout: 3600,
        compressionEnabled: true,
        minifyAssets: true,
        cdnEnabled: false,
        cdnUrl: "",
        
        // Backup Settings
        autoBackup: true,
        backupFrequency: "daily",
        backupRetention: 30,
        backupLocation: "local",
        s3Bucket: "",
        s3Region: "us-east-1",
        
        // Integration Settings
        fivemServer: {
            host: "127.0.0.1",
            port: 30120,
            password: "",
            enabled: true
        },
        discordBot: {
            token: "",
            guildId: "",
            enabled: false
        },
        paymentGateways: {
            paypal: {
                enabled: true,
                sandboxMode: false,
                clientId: "",
                clientSecret: ""
            },
            stripe: {
                enabled: true,
                testMode: false,
                publicKey: "",
                secretKey: ""
            }
        }
    });

    const settingSections = [
        { id: "general", label: "General", icon: <Settings className="w-5 h-5" /> },
        { id: "security", label: "Security", icon: <Shield className="w-5 h-5" /> },
        { id: "api", label: "API & Webhooks", icon: <Code className="w-5 h-5" /> },
        { id: "email", label: "Email", icon: <Mail className="w-5 h-5" /> },
        { id: "notifications", label: "Notifications", icon: <Bell className="w-5 h-5" /> },
        { id: "performance", label: "Performance", icon: <Zap className="w-5 h-5" /> },
        { id: "backup", label: "Backup", icon: <Database className="w-5 h-5" /> },
        { id: "integrations", label: "Integrations", icon: <Webhook className="w-5 h-5" /> }
    ];

    const handleInputChange = (section, field, value) => {
        if (section) {
            setSystemSettings(prev => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: value
                }
            }));
        } else {
            setSystemSettings(prev => ({
                ...prev,
                [field]: value
            }));
        }
    };

    const handleSave = async () => {
        setSaving(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Saving settings:", systemSettings);
        setSaving(false);
    };

    const renderGeneralSettings = () => (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <h3 className="text-xl font-bold text-emerald-400 font-mono mb-6 flex items-center gap-2">
                    <Globe className="w-6 h-6" />
                    [SITE_CONFIGURATION]
                </h3>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Site Name
                        </label>
                        <input
                            type="text"
                            value={systemSettings.siteName}
                            onChange={(e) => handleInputChange(null, 'siteName', e.target.value)}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Timezone
                        </label>
                        <select
                            value={systemSettings.timezone}
                            onChange={(e) => handleInputChange(null, 'timezone', e.target.value)}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300"
                        >
                            <option value="America/New_York">Eastern Time (EST)</option>
                            <option value="America/Chicago">Central Time (CST)</option>
                            <option value="America/Denver">Mountain Time (MST)</option>
                            <option value="America/Los_Angeles">Pacific Time (PST)</option>
                            <option value="Europe/London">London (GMT)</option>
                            <option value="Europe/Paris">Paris (CET)</option>
                            <option value="Asia/Tokyo">Tokyo (JST)</option>
                        </select>
                    </div>

                    <div className="col-span-2">
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Site Description
                        </label>
                        <textarea
                            value={systemSettings.siteDescription}
                            onChange={(e) => handleInputChange(null, 'siteDescription', e.target.value)}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono h-24 resize-none focus:border-emerald-400 transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Default Language
                        </label>
                        <select
                            value={systemSettings.language}
                            onChange={(e) => handleInputChange(null, 'language', e.target.value)}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300"
                        >
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                            <option value="de">Deutsch</option>
                            <option value="pt">Português</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Default Currency
                        </label>
                        <select
                            value={systemSettings.currency}
                            onChange={(e) => handleInputChange(null, 'currency', e.target.value)}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-emerald-400 transition-all duration-300"
                        >
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                            <option value="GBP">GBP (£)</option>
                            <option value="CAD">CAD ($)</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                    <input
                        type="checkbox"
                        checked={systemSettings.maintenanceMode}
                        onChange={(e) => handleInputChange(null, 'maintenanceMode', e.target.checked)}
                        className="w-5 h-5 rounded"
                    />
                    <label className="text-gray-300 font-mono font-semibold">
                        Maintenance Mode (Disable public access)
                    </label>
                </div>
            </motion.div>
        </div>
    );

    const renderSecuritySettings = () => (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <h3 className="text-xl font-bold text-red-400 font-mono mb-6 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    [SECURITY_CONFIGURATION]
                </h3>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Session Timeout (minutes)
                        </label>
                        <input
                            type="number"
                            value={systemSettings.sessionTimeout}
                            onChange={(e) => handleInputChange(null, 'sessionTimeout', parseInt(e.target.value))}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-red-400 transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Max Login Attempts
                        </label>
                        <input
                            type="number"
                            value={systemSettings.maxLoginAttempts}
                            onChange={(e) => handleInputChange(null, 'maxLoginAttempts', parseInt(e.target.value))}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-red-400 transition-all duration-300"
                        />
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={systemSettings.twoFactorAuth}
                            onChange={(e) => handleInputChange(null, 'twoFactorAuth', e.target.checked)}
                            className="w-5 h-5 rounded"
                        />
                        <label className="text-gray-300 font-mono font-semibold">
                            Require Two-Factor Authentication
                        </label>
                    </div>

                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={systemSettings.bruteForceProtection}
                            onChange={(e) => handleInputChange(null, 'bruteForceProtection', e.target.checked)}
                            className="w-5 h-5 rounded"
                        />
                        <label className="text-gray-300 font-mono font-semibold">
                            Enable Brute Force Protection
                        </label>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <h3 className="text-xl font-bold text-orange-400 font-mono mb-6 flex items-center gap-2">
                    <Key className="w-6 h-6" />
                    [PASSWORD_POLICY]
                </h3>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Minimum Length
                        </label>
                        <input
                            type="number"
                            value={systemSettings.passwordPolicy.minLength}
                            onChange={(e) => handleInputChange('passwordPolicy', 'minLength', parseInt(e.target.value))}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-orange-400 transition-all duration-300"
                        />
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={systemSettings.passwordPolicy.requireUppercase}
                                onChange={(e) => handleInputChange('passwordPolicy', 'requireUppercase', e.target.checked)}
                                className="w-4 h-4 rounded"
                            />
                            <label className="text-gray-300 font-mono text-sm">
                                Require Uppercase Letters
                            </label>
                        </div>

                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={systemSettings.passwordPolicy.requireNumbers}
                                onChange={(e) => handleInputChange('passwordPolicy', 'requireNumbers', e.target.checked)}
                                className="w-4 h-4 rounded"
                            />
                            <label className="text-gray-300 font-mono text-sm">
                                Require Numbers
                            </label>
                        </div>

                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={systemSettings.passwordPolicy.requireSymbols}
                                onChange={(e) => handleInputChange('passwordPolicy', 'requireSymbols', e.target.checked)}
                                className="w-4 h-4 rounded"
                            />
                            <label className="text-gray-300 font-mono text-sm">
                                Require Special Characters
                            </label>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );

    const renderAPISettings = () => (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <h3 className="text-xl font-bold text-cyan-400 font-mono mb-6 flex items-center gap-2">
                    <Code className="w-6 h-6" />
                    [API_CONFIGURATION]
                </h3>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            API Version
                        </label>
                        <input
                            type="text"
                            value={systemSettings.apiVersion}
                            onChange={(e) => handleInputChange(null, 'apiVersion', e.target.value)}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-cyan-400 transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Rate Limit (requests/hour)
                        </label>
                        <input
                            type="number"
                            value={systemSettings.rateLimit}
                            onChange={(e) => handleInputChange(null, 'rateLimit', parseInt(e.target.value))}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-cyan-400 transition-all duration-300"
                        />
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={systemSettings.apiEnabled}
                            onChange={(e) => handleInputChange(null, 'apiEnabled', e.target.checked)}
                            className="w-5 h-5 rounded"
                        />
                        <label className="text-gray-300 font-mono font-semibold">
                            Enable API Access
                        </label>
                    </div>

                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={systemSettings.webhooksEnabled}
                            onChange={(e) => handleInputChange(null, 'webhooksEnabled', e.target.checked)}
                            className="w-5 h-5 rounded"
                        />
                        <label className="text-gray-300 font-mono font-semibold">
                            Enable Webhooks
                        </label>
                    </div>

                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={systemSettings.cors.enabled}
                            onChange={(e) => handleInputChange('cors', 'enabled', e.target.checked)}
                            className="w-5 h-5 rounded"
                        />
                        <label className="text-gray-300 font-mono font-semibold">
                            Enable CORS
                        </label>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20 p-6 rounded-2xl"
            >
                <h4 className="text-blue-400 font-mono font-bold mb-4 flex items-center gap-2">
                    <Terminal className="w-5 h-5" />
                    API ENDPOINTS
                </h4>
                <div className="space-y-2 font-mono text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-300">Base URL:</span>
                        <span className="text-cyan-400">https://api.yourdomain.com/v1</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-300">Documentation:</span>
                        <span className="text-cyan-400">/docs</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-300">Authentication:</span>
                        <span className="text-yellow-400">Bearer Token</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );

    const renderIntegrationsSettings = () => (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <h3 className="text-xl font-bold text-purple-400 font-mono mb-6 flex items-center gap-2">
                    <Server className="w-6 h-6" />
                    [FIVEM_SERVER]
                </h3>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Server Host
                        </label>
                        <input
                            type="text"
                            value={systemSettings.fivemServer.host}
                            onChange={(e) => handleInputChange('fivemServer', 'host', e.target.value)}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-purple-400 transition-all duration-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Server Port
                        </label>
                        <input
                            type="number"
                            value={systemSettings.fivemServer.port}
                            onChange={(e) => handleInputChange('fivemServer', 'port', parseInt(e.target.value))}
                            className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 font-mono focus:border-purple-400 transition-all duration-300"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-gray-300 font-mono font-semibold mb-2">
                            Server Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={systemSettings.fivemServer.password}
                                onChange={(e) => handleInputChange('fivemServer', 'password', e.target.value)}
                                className="w-full bg-gray-800/60 border border-gray-600 rounded-xl text-white px-4 py-3 pr-12 font-mono focus:border-purple-400 transition-all duration-300"
                            />
                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                    <input
                        type="checkbox"
                        checked={systemSettings.fivemServer.enabled}
                        onChange={(e) => handleInputChange('fivemServer', 'enabled', e.target.checked)}
                        className="w-5 h-5 rounded"
                    />
                    <label className="text-gray-300 font-mono font-semibold">
                        Enable FiveM Integration
                    </label>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700"
            >
                <h3 className="text-xl font-bold text-blue-400 font-mono mb-6 flex items-center gap-2">
                    <CreditCard className="w-6 h-6" />
                    [PAYMENT_GATEWAYS]
                </h3>

                <div className="space-y-6">
                    {/* PayPal */}
                    <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-600">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-white font-mono font-bold">PayPal</h4>
                            <input
                                type="checkbox"
                                checked={systemSettings.paymentGateways.paypal.enabled}
                                onChange={(e) => handleInputChange('paymentGateways.paypal', 'enabled', e.target.checked)}
                                className="w-5 h-5 rounded"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-400 font-mono text-sm mb-1">
                                    Client ID
                                </label>
                                <input
                                    type="text"
                                    value={systemSettings.paymentGateways.paypal.clientId}
                                    onChange={(e) => handleInputChange('paymentGateways.paypal', 'clientId', e.target.value)}
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono text-sm"
                                    disabled={!systemSettings.paymentGateways.paypal.enabled}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 font-mono text-sm mb-1">
                                    Client Secret
                                </label>
                                <input
                                    type="password"
                                    value={systemSettings.paymentGateways.paypal.clientSecret}
                                    onChange={(e) => handleInputChange('paymentGateways.paypal', 'clientSecret', e.target.value)}
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono text-sm"
                                    disabled={!systemSettings.paymentGateways.paypal.enabled}
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={systemSettings.paymentGateways.paypal.sandboxMode}
                                onChange={(e) => handleInputChange('paymentGateways.paypal', 'sandboxMode', e.target.checked)}
                                className="w-4 h-4 rounded"
                                disabled={!systemSettings.paymentGateways.paypal.enabled}
                            />
                            <label className="text-gray-400 font-mono text-sm">
                                Sandbox Mode (Testing)
                            </label>
                        </div>
                    </div>

                    {/* Stripe */}
                    <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-600">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-white font-mono font-bold">Stripe</h4>
                            <input
                                type="checkbox"
                                checked={systemSettings.paymentGateways.stripe.enabled}
                                onChange={(e) => handleInputChange('paymentGateways.stripe', 'enabled', e.target.checked)}
                                className="w-5 h-5 rounded"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-400 font-mono text-sm mb-1">
                                    Public Key
                                </label>
                                <input
                                    type="text"
                                    value={systemSettings.paymentGateways.stripe.publicKey}
                                    onChange={(e) => handleInputChange('paymentGateways.stripe', 'publicKey', e.target.value)}
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono text-sm"
                                    disabled={!systemSettings.paymentGateways.stripe.enabled}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 font-mono text-sm mb-1">
                                    Secret Key
                                </label>
                                <input
                                    type="password"
                                    value={systemSettings.paymentGateways.stripe.secretKey}
                                    onChange={(e) => handleInputChange('paymentGateways.stripe', 'secretKey', e.target.value)}
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white px-3 py-2 font-mono text-sm"
                                    disabled={!systemSettings.paymentGateways.stripe.enabled}
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={systemSettings.paymentGateways.stripe.testMode}
                                onChange={(e) => handleInputChange('paymentGateways.stripe', 'testMode', e.target.checked)}
                                className="w-4 h-4 rounded"
                                disabled={!systemSettings.paymentGateways.stripe.enabled}
                            />
                            <label className="text-gray-400 font-mono text-sm">
                                Test Mode
                            </label>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );

    const renderContent = () => {
        switch (activeSection) {
            case "general":
                return renderGeneralSettings();
            case "security":
                return renderSecuritySettings();
            case "api":
                return renderAPISettings();
            case "integrations":
                return renderIntegrationsSettings();
            case "email":
            case "notifications":
            case "performance":
            case "backup":
                return (
                    <div className="text-center py-20">
                        <div className="text-gray-400 font-mono text-xl mb-4">
                            [SECTION_UNDER_DEVELOPMENT]
                        </div>
                        <p className="text-gray-500 font-mono">
                            This settings section is being built. Check back soon!
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <h1 className="text-3xl font-black text-white font-mono mb-2">
                        [SYSTEM_SETTINGS]
                    </h1>
                    <p className="text-gray-400 font-mono">
                        Configure system behavior, security, and integrations
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-gray-700/50 text-gray-400 px-6 py-3 rounded-xl font-mono font-bold hover:bg-gray-600/50 hover:text-white transition-all duration-300">
                        <Download className="w-5 h-5 inline mr-2" />
                        EXPORT
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-mono font-bold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {saving ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin inline mr-2"></div>
                                SAVING...
                            </>
                        ) : (
                            <>
                                <Save className="w-5 h-5 inline mr-2" />
                                SAVE_SETTINGS
                            </>
                        )}
                    </button>
                </div>
            </motion.div>

            <div className="grid grid-cols-4 gap-8">
                {/* Settings Navigation */}
                <div className="col-span-1">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-2xl border border-gray-700 sticky top-0"
                    >
                        <h2 className="text-lg font-bold text-emerald-400 font-mono mb-6">
                            [CONFIGURATION]
                        </h2>
                        <nav className="space-y-2">
                            {settingSections.map((section) => (
                                <motion.button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-mono text-left ${
                                        activeSection === section.id
                                            ? 'bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border border-emerald-400/30 text-emerald-400'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                    }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {section.icon}
                                    <span className="text-sm font-bold">{section.label}</span>
                                </motion.button>
                            ))}
                        </nav>

                        {/* System Status */}
                        <div className="mt-8 space-y-3">
                            <h3 className="text-cyan-400 font-mono font-bold text-sm">SYSTEM_STATUS</h3>
                            <div className="bg-gray-800/30 p-3 rounded-lg">
                                <div className="text-emerald-400 font-mono font-bold">ONLINE</div>
                                <div className="text-gray-400 text-xs">System Status</div>
                            </div>
                            <div className="bg-gray-800/30 p-3 rounded-lg">
                                <div className="text-cyan-400 font-mono font-bold">v2.1.4</div>
                                <div className="text-gray-400 text-xs">Version</div>
                            </div>
                            <div className="bg-gray-800/30 p-3 rounded-lg">
                                <div className="text-yellow-400 font-mono font-bold">99.8%</div>
                                <div className="text-gray-400 text-xs">Uptime</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Settings Content */}
                <div className="col-span-3">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderContent()}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;