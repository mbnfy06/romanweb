import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-roman-card border-t border-roman-border pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <div className="flex flex-col mb-6">
                            <span className="text-2xl font-display font-bold text-white">TALLERS ROMÁN</span>
                            <span className="text-sm text-roman-muted">Excelencia desde 1965</span>
                        </div>
                        <p className="text-roman-muted text-sm leading-relaxed mb-6">
                            Servicio integral del automóvil. Especialistas en vehículos híbridos, eléctricos y mecánica avanzada. Certificado EuroTaller.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-roman-border flex items-center justify-center text-roman-text hover:bg-roman-primary hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-roman-border flex items-center justify-center text-roman-text hover:bg-roman-primary hover:text-white transition-all">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Inicio', link: '/' },
                                { name: 'Servicios', link: '/servicios' },
                                { name: 'Nosotros', link: '/#nosotros' },
                                { name: 'Contacto', link: '/#contacto' },
                                { name: 'Pedir Cita', link: 'https://wa.me/34663980768' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={item.link} className="text-roman-muted hover:text-white transition-colors text-sm">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-roman-muted text-sm">
                                <MapPin size={18} className="text-roman-primary shrink-0 mt-0.5" />
                                <span>Carrer de la Natació, 26, Nau 1<br />08191 Rubí, Barcelona</span>
                            </li>
                            <li className="flex items-center gap-3 text-roman-muted text-sm">
                                <Phone size={18} className="text-roman-primary shrink-0" />
                                <a href="tel:936740086" className="hover:text-white transition-colors">93 674 00 86</a>
                            </li>
                            <li className="flex items-center gap-3 text-roman-muted text-sm">
                                <Mail size={18} className="text-roman-primary shrink-0" />
                                <a href="mailto:sergi@talleresroman.com" className="hover:text-white transition-colors">sergi@talleresroman.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Horario</h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between text-roman-muted text-sm border-b border-roman-border/50 pb-2">
                                <span>Lunes - Viernes</span>
                                <span className="text-white">08:00 - 13:00</span>
                            </li>
                            <li className="flex justify-end text-white text-sm pb-2">
                                <span>15:00 - 19:00</span>
                            </li>
                            <li className="flex justify-between text-roman-muted text-sm border-b border-roman-border/50 pb-2">
                                <span>Sábado - Domingo</span>
                                <span className="text-roman-red">Cerrado</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-roman-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-roman-muted text-xs">
                        © {new Date().getFullYear()} Tallers Román. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-roman-muted text-xs hover:text-white">Aviso Legal</a>
                        <a href="#" className="text-roman-muted text-xs hover:text-white">Política de Privacidad</a>
                        <a href="#" className="text-roman-muted text-xs hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
