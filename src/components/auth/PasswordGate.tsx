"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock } from "lucide-react";

interface PasswordGateProps {
    children: React.ReactNode;
}

const PasswordGate = ({ children }: PasswordGateProps) => {
    const [password, setPassword] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const CORRECT_PASSWORD = "romandemo123";

    useEffect(() => {
        const authStatus = localStorage.getItem("mbnify_demo_access");
        if (authStatus === "granted") {
            setIsAuthorized(true);
        }
        setIsLoading(false);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === CORRECT_PASSWORD) {
            localStorage.setItem("mbnify_demo_access", "granted");
            setIsAuthorized(true);
            setError(false);
        } else {
            setError(true);
            setPassword("");
            // Reset error after animation
            setTimeout(() => setError(false), 500);
        }
    };

    if (isLoading) return null;

    return (
        <>
            <AnimatePresence mode="wait">
                {!isAuthorized && (
                    <motion.div
                        key="password-gate"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, filter: "blur(20px)" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] overflow-hidden"
                    >
                        {/* Ambient Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#bef264]/5 blur-[120px] rounded-full pointer-events-none" />

                        <div className="relative z-10 w-full max-w-md px-6">
                            {/* Glass Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 md:p-10 shadow-2xl"
                            >
                                {/* Logo Section */}
                                <div className="text-center mb-10">
                                    <div className="flex flex-col items-center justify-center mb-4">
                                        <div className="flex items-baseline font-display font-black text-4xl tracking-tighter">
                                            <span className="text-white">MBN</span>
                                            <span className="text-[#bef264] drop-shadow-[0_0_15px_rgba(190,242,100,0.5)]">!FY</span>
                                        </div>
                                        <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 mt-1 font-mono">
                                            STUDIO
                                        </div>
                                    </div>
                                    <p className="text-white/60 text-sm font-medium">
                                        Acceso exclusivo a Demo
                                    </p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <motion.div
                                        animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                                        className="relative"
                                    >
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Contraseña"
                                            className={`w-full bg-white/[0.05] border ${error ? "border-red-500/50" : "border-white/10"
                                                } rounded-xl px-5 py-4 text-white text-center focus:outline-none focus:border-[#bef264]/50 focus:ring-4 focus:ring-[#bef264]/10 transition-all duration-300 placeholder:text-white/20`}
                                            autoFocus
                                        />
                                    </motion.div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full bg-[#bef264] hover:bg-[#a3e635] text-black font-bold py-4 rounded-xl shadow-[0_0_30px_rgba(190,242,100,0.2)] hover:shadow-[0_0_40px_rgba(190,242,100,0.4)] transition-all duration-300"
                                    >
                                        Entrar al Sistema
                                    </motion.button>
                                </form>

                                {/* Secure Badge */}
                                <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-white/20 uppercase tracking-widest">
                                    <Lock size={10} />
                                    Acceso Restringido
                                </div>
                            </motion.div>

                            {/* Footer text requested */}
                            <div className="mt-12 text-center">
                                <p className="text-[10px] text-white/30 tracking-[0.2em] uppercase">
                                    Propiedad intelectual de MBN!FY STUDIO | 2026
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <motion.div
                initial={false}
                animate={{ opacity: isAuthorized ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default PasswordGate;
