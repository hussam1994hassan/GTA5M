import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  FileText, 
  CheckCircle, 
  AlertTriangle,
  Scale,
  Users,
  Lock,
  Globe,
  Gavel,
  Eye,
  Server,
  Clock,
  ArrowLeft,
  Download,
  Printer
} from 'lucide-react';

const TermsComponent = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: <FileText className="w-5 h-5" /> },
    { id: 'definitions', title: 'Definitions', icon: <Globe className="w-5 h-5" /> },
    { id: 'services', title: 'Platform Services', icon: <Server className="w-5 h-5" /> },
    { id: 'user-obligations', title: 'User Obligations', icon: <Users className="w-5 h-5" /> },
    { id: 'security', title: 'Security & Privacy', icon: <Shield className="w-5 h-5" /> },
    { id: 'payments', title: 'Payment Terms', icon: <Lock className="w-5 h-5" /> },
    { id: 'liability', title: 'Liability & Disputes', icon: <Scale className="w-5 h-5" /> },
    { id: 'termination', title: 'Termination', icon: <AlertTriangle className="w-5 h-5" /> }
  ];

  const lastUpdated = "January 15, 2025";
  const effectiveDate = "January 1, 2025";

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.6) 1px, transparent 1px),
            linear-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
        }}></div>

        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gray-800/80 backdrop-blur-xl border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors font-mono"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Vault
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-mono text-sm">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-mono text-sm">
                <Printer className="w-4 h-4" />
                Print
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="fixed top-50 ">
              {/* Logo Section */}
              <div className="flex items-center space-x-3 mb-8 group">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Gavel className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-black font-mono">
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">NEXUS</span>
                    <span className="text-white mx-1">•</span>
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">VAULT</span>
                  </h1>
                  <p className="text-emerald-400 font-mono text-sm">LEGAL_FRAMEWORK</p>
                </div>
              </div>

              {/* Document Info */}
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
                <h3 className="text-emerald-400 font-mono font-bold mb-4">[DOCUMENT_INFO]</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Version:</span>
                    <span className="text-white font-mono">v2.1.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Effective:</span>
                    <span className="text-white font-mono">{effectiveDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Updated:</span>
                    <span className="text-white font-mono">{lastUpdated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-emerald-400 font-mono flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation Menu */}
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-mono text-left ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border border-emerald-400/30 text-emerald-400'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {section.icon}
                    <span className="text-sm">{section.title}</span>
                  </motion.button>
                ))}
              </nav>

              {/* Quick Contact */}
              <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl">
                <h4 className="text-cyan-400 font-mono font-bold text-sm mb-2">Legal Questions?</h4>
                <p className="text-gray-400 text-xs mb-3">Contact our legal team for clarification</p>
                <button className="text-cyan-400 hover:text-emerald-400 font-mono text-xs transition-colors">
                  legal@nexusvault.io
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-12">
              
              {/* Header */}
              <div className="text-center border-b border-gray-700 pb-12">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-6xl font-black mb-6 font-mono"
                >
                  <span className="text-white">TERMS &</span>
                  <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    CONDITIONS
                  </span>
                </motion.h1>
                <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                  Legal framework governing the use of NEXUS VAULT secure payment intermediary platform for FiveM transactions.
                </p>
                <div className="flex items-center justify-center gap-6 text-sm text-gray-400 font-mono">
                  <span>Effective: {effectiveDate}</span>
                  <span>•</span>
                  <span>Last Updated: {lastUpdated}</span>
                  <span>•</span>
                  <span className="text-emerald-400">Version 2.1.0</span>
                </div>
              </div>

              {/* Overview Section */}
              <section id="overview" className="scroll-mt-30">
                <h2 className="text-3xl font-bold mb-6 font-mono text-emerald-400 flex items-center gap-3">
                  <FileText className="w-8 h-8" />
                  [OVERVIEW]
                </h2>
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Welcome to <span className="text-emerald-400 font-mono font-bold">NEXUS VAULT</span>, the premier secure payment intermediary platform designed specifically for FiveM gaming environments. These Terms and Conditions govern your access to and use of our platform, services, and related technologies.
                  </p>
                  <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-yellow-400 font-bold font-mono mb-2">IMPORTANT NOTICE</h4>
                        <p className="text-gray-300 text-sm">
                          By accessing or using NEXUS VAULT services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Definitions Section */}
              <section id="definitions" className="scroll-mt-30">
                <h2 className="text-3xl font-bold mb-6 font-mono text-cyan-400 flex items-center gap-3">
                  <Globe className="w-8 h-8" />
                  [DEFINITIONS]
                </h2>
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                  <div className="grid gap-4">
                    {[
                      {
                        term: "Platform",
                        definition: "The NEXUS VAULT secure payment intermediary system, including all related websites, applications, APIs, and services."
                      },
                      {
                        term: "Vault",
                        definition: "Your secure account within the NEXUS VAULT platform used for transaction management and digital asset storage."
                      },
                      {
                        term: "Server Owner",
                        definition: "Individual or entity operating a FiveM server and offering digital items or services through our platform."
                      },
                      {
                        term: "Player",
                        definition: "End user who purchases digital items or services from Server Owners through the platform."
                      },
                      {
                        term: "Transaction",
                        definition: "Any exchange of value facilitated through the NEXUS VAULT platform, including purchases, refunds, and transfers."
                      },
                      {
                        term: "Digital Items",
                        definition: "In-game assets, currencies, vehicles, weapons, cosmetics, or any virtual goods tradeable within FiveM environments."
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-l-4 border-cyan-400 pl-4 py-2"
                      >
                        <h4 className="text-cyan-400 font-mono font-bold text-lg mb-2">{item.term}</h4>
                        <p className="text-gray-300">{item.definition}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Platform Services Section */}
              <section id="services" className="scroll-mt-30">
                <h2 className="text-3xl font-bold mb-6 font-mono text-blue-400 flex items-center gap-3">
                  <Server className="w-8 h-8" />
                  [PLATFORM_SERVICES]
                </h2>
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">Service Offerings</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Secure Payment Processing",
                        items: ["Military-grade encryption", "Escrow protection", "Fraud prevention", "Chargeback protection"]
                      },
                      {
                        title: "Digital Asset Management",
                        items: ["Inventory tracking", "Asset verification", "Delivery automation", "Transaction history"]
                      },
                      {
                        title: "Platform Integration",
                        items: ["FiveM server connection", "Real-time API access", "Webhook notifications", "Custom implementations"]
                      },
                      {
                        title: "Analytics & Reporting",
                        items: ["Revenue tracking", "Player analytics", "Performance metrics", "Compliance reporting"]
                      }
                    ].map((service, index) => (
                      <div key={index} className="bg-gray-800/30 border border-gray-600 rounded-lg p-6">
                        <h4 className="text-blue-400 font-mono font-bold mb-4">{service.title}</h4>
                        <ul className="space-y-2">
                          {service.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center gap-2 text-gray-300">
                              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* User Obligations Section */}
              <section id="user-obligations" className="scroll-mt-30">
                <h2 className="text-3xl font-bold mb-6 font-mono text-purple-400 flex items-center gap-3">
                  <Users className="w-8 h-8" />
                  [USER_OBLIGATIONS]
                </h2>
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Account Responsibilities</h3>
                      <ul className="space-y-3">
                        {[
                          "Maintain accurate and current account information",
                          "Protect your vault credentials and authentication methods",
                          "Report unauthorized access or suspicious activity immediately",
                          "Comply with all applicable laws and regulations",
                          "Use the platform only for legitimate FiveM-related transactions"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-6">
                      <h4 className="text-red-400 font-bold font-mono mb-3">PROHIBITED ACTIVITIES</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Fraudulent transactions or money laundering</li>
                        <li>• Circumventing platform security measures</li>
                        <li>• Selling prohibited or illegal digital items</li>
                        <li>• Attempting to exploit platform vulnerabilities</li>
                        <li>• Creating duplicate accounts to circumvent restrictions</li>
                        <li>• Interfering with other users' legitimate transactions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Security & Privacy Section */}
              <section id="security" className="scroll-mt-30">
                <h2 className="text-3xl font-bold mb-6 font-mono text-emerald-400 flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  [SECURITY_PRIVACY]
                </h2>
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Data Protection Commitment</h3>
                      <p className="text-gray-300 mb-4">
                        NEXUS VAULT employs industry-leading security measures to protect your data and transactions:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          "256-bit AES encryption for all data",
                          "Zero-knowledge architecture",
                          "Multi-factor authentication",
                          "Regular security audits",
                          "GDPR and CCPA compliance",
                          "Secure data centers"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-400" />
                            <span className="text-gray-300 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-lg p-6">
                      <h4 className="text-emerald-400 font-bold font-mono mb-3">PRIVACY GUARANTEE</h4>
                      <p className="text-gray-300 text-sm">
                        We never sell, share, or monetize your personal data. All information is used solely for platform operation and transaction facilitation. For complete details, please review our Privacy Policy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment Terms Section */}
              <section id="payments" className="scroll-mt-30">
                <h2 className="text-3xl font-bold mb-6 font-mono text-yellow-400 flex items-center gap-3">
                  <Lock className="w-8 h-8" />
                  [PAYMENT_TERMS]
                </h2>
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Transaction Processing</h3>
                      <ul className="space-y-3">
                        {[
                          "All transactions are processed through secure escrow",
                          "Payments are held until successful item delivery",
                          "Refunds processed within 24-48 hours when applicable",
                          "Transaction fees clearly disclosed before confirmation",
                          "Multiple payment methods supported with equal security"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-6">
                      <h4 className="text-yellow-400 font-bold font-mono mb-3">LIMITED TIME PROMOTION</h4>
                      <p className="text-gray-300 text-sm">
                        Currently offering zero transaction fees for new platform users. Standard fees may apply after promotional period ends. Users will receive 30-day advance notice of any fee structure changes.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Liability & Disputes Section */}
              <section id="liability" className="scroll-mt-30">
                <h2 className="text-3xl font-bold mb-6 font-mono text-orange-400 flex items-center gap-3">
                  <Scale className="w-8 h-8" />
                  [LIABILITY_DISPUTES]
                </h2>
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Limitation of Liability</h3>
                      <p className="text-gray-300 mb-4">
                        NEXUS VAULT operates as an intermediary platform and disclaims liability for:
                      </p>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Server downtime or technical issues beyond our control</li>
                        <li>• Disputes between Server Owners and Players regarding item quality</li>
                        <li>• FiveM game updates that affect digital item functionality</li>
                        <li>• Third-party payment processor delays or failures</li>
                        <li>• Force majeure events affecting service availability</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Dispute Resolution</h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-orange-400 pl-4">
                          <h4 className="text-orange-400 font-bold mb-2">Step 1: Direct Resolution</h4>
                          <p className="text-gray-300 text-sm">Parties must attempt good-faith resolution within 14 days</p>
                        </div>
                        <div className="border-l-4 border-orange-400 pl-4">
                          <h4 className="text-orange-400 font-bold mb-2">Step 2: Platform Mediation</h4>
                          <p className="text-gray-300 text-sm">NEXUS VAULT will facilitate mediation with 72-hour response time</p>
                        </div>
                        <div className="border-l-4 border-orange-400 pl-4">
                          <h4 className="text-orange-400 font-bold mb-2">Step 3: Binding Arbitration</h4>
                          <p className="text-gray-300 text-sm">Final resolution through neutral arbitration service</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Termination Section */}
              <section id="termination" className="scroll-mt-30">
                <h2 className="text-3xl font-bold mb-6 font-mono text-red-400 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8" />
                  [TERMINATION]
                </h2>
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Account Termination</h3>
                      <p className="text-gray-300 mb-4">
                        NEXUS VAULT reserves the right to suspend or terminate accounts for:
                      </p>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Violation of these Terms and Conditions</li>
                        <li>• Fraudulent or suspicious activity</li>
                        <li>• Extended periods of account inactivity (12+ months)</li>
                        <li>• Legal compliance requirements</li>
                        <li>• Platform security concerns</li>
                      </ul>
                    </div>

                    <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-6">
                      <h4 className="text-red-400 font-bold font-mono mb-3">TERMINATION PROCESS</h4>
                      <div className="space-y-2 text-sm text-gray-300">
                        <p>• 30-day notice provided for non-emergency terminations</p>
                        <p>• Opportunity to withdraw funds before account closure</p>
                        <p>• Data deletion according to retention policies</p>
                        <p>• Appeal process available for disputed terminations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="border-t border-gray-700 pt-12 mt-16">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center gap-4">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-400 font-mono text-sm">
                      Last updated: {lastUpdated} | Version 2.1.0
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-6 text-sm">
                    <button className="text-cyan-400 hover:text-emerald-400 transition-colors font-mono">
                      Download PDF
                    </button>
                    <span className="text-gray-600">•</span>
                    <button className="text-cyan-400 hover:text-emerald-400 transition-colors font-mono">
                      Print Version
                    </button>
                    <span className="text-gray-600">•</span>
                    <button className="text-cyan-400 hover:text-emerald-400 transition-colors font-mono">
                      Contact Legal
                    </button>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 rounded-xl p-6">
                    <p className="text-gray-300 text-sm">
                      <strong className="text-emerald-400">Questions about these terms?</strong> Our legal team is available to provide clarification. 
                      Contact us at <span className="text-cyan-400 font-mono">legal@nexusvault.io</span> or through our secure support portal.
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsComponent;