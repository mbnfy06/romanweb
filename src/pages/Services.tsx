import { motion } from 'framer-motion';
import { Zap, Wrench, PaintBucket, ShieldCheck, Cpu, Disc, ArrowRight } from 'lucide-react';
import { Timeline } from '@/components/ui/timeline';

const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const services = [
        {
            id: "hybrid",
            title: "Híbridos y Eléctricos",
            icon: <Zap size={32} />,
            description: "Somos especialistas certificados en la nueva era de la automoción. Mantenimiento y reparación de sistemas de alto voltaje.",
            features: ["Certificado Oficial", "Mantenimiento de Baterías", "Sistemas de Carga", "Diagnosis EV"],
            color: "text-yellow-400",
            bg: "bg-yellow-400/10",
            border: "border-yellow-400/20"
        },
        {
            id: "mechanic",
            title: "Mecánica Avanzada",
            icon: <Wrench size={32} />,
            description: "Soluciones mecánicas integrales para motor, transmisión y sistemas de suspensión.",
            features: ["Distribución y Embragues", "Sistemas de Frenado", "Amortiguación", "Revisiones Oficiales"],
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            id: "electronic",
            title: "Diagnosis Electrónica",
            icon: <Cpu size={32} />,
            description: "Tecnología de vanguardia para identificar averías complejas en la centralita y sensores del vehículo.",
            features: ["Reprogramación", "Diagnosis Computerizada", "Sensores ADAS", "Sistemas Confort"],
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        },
        {
            id: "body",
            title: "Chapa y Pintura",
            icon: <PaintBucket size={32} />,
            description: "Recuperamos la estética original de tu vehículo con acabados de fábrica y pinturas ecológicas.",
            features: ["Cabina de Pintura", "Bancada Universal", "Pulido de Faros", "Peritaciones"],
            color: "text-red-500",
            bg: "bg-red-500/10",
            border: "border-red-500/20"
        },
        {
            id: "tires",
            title: "Neumáticos y Alineado",
            icon: <Disc size={32} />,
            description: "Seguridad en carretera con las mejores marcas y servicio de equilibrado 3D.",
            features: ["Alineación 3D", "Equilibrado Electrónico", "Reparación Pinchazos", "Primeras Marcas"],
            color: "text-green-500",
            bg: "bg-green-500/10",
            border: "border-green-500/20"
        },
        {
            id: "review",
            title: "Pre-ITV",
            icon: <ShieldCheck size={32} />,
            description: "Revisión exhaustiva de todos los puntos críticos para garantizar que superes la inspección a la primera.",
            features: ["Análisis de Gases", "Frenómetro", "Luces y Señalización", "Neumáticos"],
            color: "text-cyan-500",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20"
        }
    ];

    const timelineData = [
        {
            title: "Recepción",
            content: (
                <div className="bg-roman-card/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <p className="text-roman-muted text-base md:text-lg mb-4">
                        Evaluación inicial detallada de tu vehículo. Escuchamos tus necesidades y realizamos una inspección visual preliminar.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1632733711679-5292d6863600?q=80&w=800&auto=format&fit=crop"
                            alt="Recepción de vehículo"
                            className="rounded-lg object-cover h-48 w-full border border-white/10"
                        />
                        <div className="space-y-2">
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-roman-primary" /> Inventario de entrada
                            </li>
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-roman-primary" /> Presupuesto transparente
                            </li>
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-roman-primary" /> Plazos de entrega reales
                            </li>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Diagnóstico",
            content: (
                <div className="bg-roman-card/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <p className="text-roman-muted text-base md:text-lg mb-4">
                        Utilizamos equipos de diagnosis de última generación para conectar con la centralita y detectar cualquier anomalía electrónica o mecánica.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=800&auto=format&fit=crop"
                            alt="Diagnóstico avanzado"
                            className="rounded-lg object-cover h-48 w-full border border-white/10"
                        />
                        <div className="space-y-2">
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-roman-primary" /> Escaneo de sistemas ADAS
                            </li>
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-roman-primary" /> Prueba de rendimiento EV
                            </li>
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-roman-primary" /> Informe técnico detallado
                            </li>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Reparación",
            content: (
                <div className="bg-roman-card/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <p className="text-roman-muted text-base md:text-lg mb-4">
                        Nuestros técnicos certificados ejecutan la reparación siguiendo estrictamente los estándares del fabricante y utilizando recambios originales.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1487754180451-c456f719c141?q=80&w=800&auto=format&fit=crop"
                            alt="Reparación especializada"
                            className="rounded-lg object-cover h-48 w-full border border-white/10"
                        />
                        <div className="space-y-2">
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-roman-primary" /> Recambios de primer equipo
                            </li>
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-roman-primary" /> Certificación EuroTaller
                            </li>
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-roman-primary" /> Garantía nacional de servicio
                            </li>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Entrega",
            content: (
                <div className="bg-roman-card/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <p className="text-roman-muted text-base md:text-lg mb-4">
                        Control de calidad final, prueba de conducción y entrega del vehículo impecable. Explicamos detalladamente el trabajo realizado.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop"
                            alt="Entrega de vehículo"
                            className="rounded-lg object-cover h-48 w-full border border-white/10"
                        />
                        <div className="space-y-2">
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-roman-primary" /> Lavado de cortesía
                            </li>
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-roman-primary" /> Explicación de factura
                            </li>
                            <li className="flex items-center gap-2 text-white/70 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-roman-primary" /> Seguimiento post-servicio
                            </li>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-roman-dark text-roman-text font-sans selection:bg-roman-primary selection:text-white">

            {/* Hero Section */}
            <header className="relative pt-24 pb-12 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-roman-dark via-roman-dark/95 to-roman-dark z-10" />
                    <div className="absolute top-0 left-0 right-0 h-[500px] bg-roman-primary/5 blur-[120px] rounded-full transform -translate-y-1/2" />
                </div>

                <div className="container-custom relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-roman-primary text-xs md:sm font-bold tracking-wider mb-6">
                            NUESTROS SERVICIOS
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold font-display text-white mb-6 leading-tight">
                            Ingeniería <span className="text-transparent bg-clip-text bg-gradient-to-r from-roman-primary to-roman-accent">Aplicada</span>
                        </h1>
                        <p className="text-lg md:text-xl text-roman-muted leading-relaxed">
                            Combinamos experiencia artesanal con la última tecnología de diagnóstico.
                            Desde el mantenimiento rutinario hasta las reparaciones más complejas,
                            tu vehículo está en manos expertas.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Services Grid */}
            <section className="pb-20 md:pb-32 relative z-20">
                <div className="container-custom">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "0px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                className={`group relative p-6 md:p-8 rounded-2xl bg-roman-card border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-roman-primary/5 cursor-default overflow-hidden`}
                            >
                                {/* Hover Gradient Background */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.bg} to-transparent pointer-events-none`} />

                                <div className="relative z-10">
                                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-6 bg-roman-dark border border-white/10 ${service.color} group-hover:scale-110 transition-transform duration-500`}>
                                        {service.icon}
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">{service.title}</h3>
                                    <p className="text-roman-muted mb-6 md:mb-8 leading-relaxed text-sm">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm font-medium text-white/80">
                                                <ShieldCheck size={16} className={service.color} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-[10px] md:text-xs font-mono text-roman-muted uppercase tracking-wider">Servicio Profesional</span>
                                        <button className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors ${service.color}`}>
                                            <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* New Process Section with Timeline */}
            <div className="relative border-y border-white/5 overflow-hidden">
                <Timeline data={timelineData} />
            </div>

            {/* CTA */}
            <section className="py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-roman-primary/5" />
                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-8 px-4">¿Listo para mejorar tu vehículo?</h2>
                    <p className="text-lg md:text-xl text-roman-muted mb-10 max-w-2xl mx-auto px-4">
                        Reserva tu cita hoy mismo y descubre por qué somos el taller de referencia en Rubí desde 1965.
                    </p>
                    <a
                        href="https://wa.me/34663980768"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 bg-roman-primary text-white font-bold rounded-full hover:bg-blue-600 transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] transform hover:-translate-y-1 mx-4"
                    >
                        Pedir Cita por WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Services;
