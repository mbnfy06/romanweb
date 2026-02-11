import { MapPin, Phone, Clock } from 'lucide-react';

const ContactMap = () => {
    return (
        <section id="contacto" className="py-24 bg-roman-dark relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Visítanos en Rubí</h2>
                        <p className="text-roman-muted mb-8 text-lg">
                            Estamos ubicados en una zona accesible del polígono industrial, con fácil aparcamiento y modernas instalaciones de más de 1000m².
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-roman-card border border-white/5">
                                <div className="bg-roman-primary/20 p-3 rounded-lg text-roman-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Dirección</h4>
                                    <p className="text-roman-muted">Carrer de la Natació, 26, Nau 1</p>
                                    <p className="text-roman-muted">08191 Rubí, Barcelona</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-roman-card border border-white/5">
                                <div className="bg-roman-primary/20 p-3 rounded-lg text-roman-primary">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Horario</h4>
                                    <p className="text-roman-muted">Lun - Vie: 08:00 - 13:00 / 15:00 - 19:00</p>
                                    <p className="text-roman-muted">Sáb - Dom: Cerrado</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-roman-card border border-white/5">
                                <div className="bg-roman-primary/20 p-3 rounded-lg text-roman-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Contacto</h4>
                                    <p className="text-roman-muted">Tel: 93 674 00 86</p>
                                    <p className="text-roman-muted">WhatsApp: 663 980 768</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-roman-card">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.698376887588!2d2.00898597656209!3d41.5541629712795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4928fb8d66f0b%3A0x6734107128522730!2sCarrer%20de%20la%20Nataci%C3%B3%2C%2026%2C%2008191%20Rub%C3%AD%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1709658231532!5m2!1ses!2ses"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactMap;
