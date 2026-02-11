import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-roman-dark via-roman-dark/90 to-roman-dark/60 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
                    alt="Taller Mecánico"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            <div className="container-custom relative z-20 pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-roman-primary/20 border border-roman-primary/30 text-roman-primary text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Taller Especializado en Rubí
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-tight"
                    >
                        Excelencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-roman-primary to-roman-accent">Automotriz</span> <br />
                        Desde 1965.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-roman-muted mb-8 max-w-xl leading-relaxed"
                    >
                        Más de 50 años cuidando de tu vehículo. Especialistas en mecánica general, diagnósticos avanzados, vehículos eléctricos y chapa y pintura.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="https://wa.me/34663980768"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary gap-2"
                        >
                            <Calendar size={20} />
                            Pedir Cita Ahora
                        </a>
                        <a
                            href="/servicios"
                            className="btn-outline gap-2"
                        >
                            Nuestros Servicios
                            <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 p-8 hidden lg:block">
                <div className="glass-card p-6 rounded-xl max-w-xs">
                    <p className="text-roman-muted text-sm mb-2">Certificación de Calidad</p>
                    <div className="flex items-center gap-3">
                        <div className="text-3xl font-bold text-white font-display">EuroTaller</div>
                        <div className="h-8 w-px bg-white/20"></div>
                        <div className="text-xs text-roman-muted uppercase tracking-wider">Plus 5<br />Estrellas</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
