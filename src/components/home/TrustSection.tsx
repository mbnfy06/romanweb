import { Star, Award, Shield } from 'lucide-react';

const TrustSection = () => {
    return (
        <section className="py-20 border-y border-white/5 bg-roman-card/30">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                    <div className="p-4">
                        <div className="flex justify-center mb-4 text-roman-accent">
                            <Award size={40} />
                        </div>
                        <h4 className="text-4xl font-bold text-white mb-2 font-display">1965</h4>
                        <p className="text-roman-muted">Año de Fundación</p>
                    </div>

                    <div className="p-4">
                        <div className="flex justify-center mb-4 text-roman-accent">
                            <Star size={40} />
                        </div>
                        <h4 className="text-4xl font-bold text-white mb-2 font-display">5 Estrellas</h4>
                        <p className="text-roman-muted">Certificado EuroTaller Plus</p>
                    </div>

                    <div className="p-4">
                        <div className="flex justify-center mb-4 text-roman-accent">
                            <Shield size={40} />
                        </div>
                        <h4 className="text-4xl font-bold text-white mb-2 font-display">Garantía</h4>
                        <p className="text-roman-muted">En todas las reparaciones</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
