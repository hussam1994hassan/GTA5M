import React from "react";
import { Code } from "lucide-react";

const FooterComponent = () => {
    return (
        <footer className="bg-gray-800 border-t border-cyan-500/30 py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-800"></div>

            <div className="max-w-7xl mx-auto px-8 relative">
                <div className="grid grid-cols-4 gap-12">
                    <div className="col-span-1">
                        <div className="flex items-center space-x-4 mb-8 group">
                            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                                <Code className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <span className="text-3xl font-black text-white font-mono">
                                    NEXUS
                                </span>
                                <div className="text-sm text-cyan-400 font-mono -mt-1">
                                    FIVEM_PROTOCOL_V2.1
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-mono">
                            &gt; Quantum-secured marketplace connecting digital
                            realms through advanced encryption protocols.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-8 text-cyan-400 text-xl font-mono">
                            [SYSTEM_CORE]
                        </h3>
                        <ul className="space-y-4 text-gray-400 font-mono">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Protocol_Manual
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Security_Matrix
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; API_Terminal
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-cyan-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Neural_Docs
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-8 text-purple-400 text-xl font-mono">
                            [SUPPORT_NET]
                        </h3>
                        <ul className="space-y-4 text-gray-400 font-mono">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Command_Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Contact_Node
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Digital_Community
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Discord_Hub
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-8 text-yellow-400 text-xl font-mono">
                            [DATA_VAULT]
                        </h3>
                        <ul className="space-y-4 text-gray-400 font-mono">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Mission_Brief
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; System_Log
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Privacy_Shield
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-yellow-400 transition-colors hover:translate-x-2 transform duration-200 inline-block"
                                >
                                    &gt; Terms_Protocol
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-16 pt-12 text-center">
                    <p className="text-gray-400 font-mono text-lg">
                        &copy; 2025 NEXUS_PROTOCOL. All systems operational.
                        <span className="text-cyan-400">
                            {" "}
                            &gt; Built for the digital frontier.
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
