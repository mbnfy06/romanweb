import { Zap, Wrench, PaintBucket, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Zap size={32} />,
        title: "Híbridos y Eléctricos",
        desc: "Diagnóstico y reparación certificado para vehículos de nueva generación. Mantenimiento de baterías y sistemas de alto voltaje.",
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-br from-blue-900/20 to-roman-card"
    },
    {
        icon: <Wrench size={32} />,
        title: "Mecánica General",
        desc: "Revisiones oficiales, frenos, distribución y embragues de todas las marcas.",
        colSpan: "md:col-span-1",
        bg: "bg-roman-card"
    },
    {
        icon: <PaintBucket size={32} />,
        title: "Chapa y Pintura",
        desc: "Restauración de carrocería con acabados de fábrica. Tecnología de colorimetría avanzada.",
        colSpan: "md:col-span-1",
        bg: "bg-roman-card"
    },
    {
        icon: <Cpu size={32} />,
        title: "Diagnosis Electrónica",
        desc: "Equipos de última generación para identificar y solucionar averías complejas.",
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-br from-roman-card to-roman-primary/10"
    }
];

const ServicesGrid = () => {
    return (
        <section id="servicios" className="py-24 bg-roman-dark relative">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Soluciones Integrales</h2>
                    <p className="text-roman-muted max-w-2xl mx-auto">
                        Combinamos artesanía tradicional con tecnología punta para ofrecer el mejor servicio a tu automóvil.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${service.colSpan} ${service.bg} p-8 rounded-2xl border border-white/5 hover:border-roman-primary/50 transition-all group cursor-default`}
                        >
                            <div className="bg-roman-dark/50 w-14 h-14 rounded-xl flex items-center justify-center text-roman-primary mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h3>
                            <p className="text-roman-muted leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
