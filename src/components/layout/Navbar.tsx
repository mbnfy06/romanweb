import {
    Navbar as NavbarRoot,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Phone, Calendar } from "lucide-react";

export default function Navbar() {
    const navItems = [
        { name: "Inicio", link: "/" },
        { name: "Servicios", link: "/servicios" },
        { name: "Nosotros", link: "#nosotros" },
        { name: "Contacto", link: "#contacto" },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <NavbarRoot>
            {/* Desktop Navigation */}
            <NavBody>
                <div className="flex items-center gap-2">
                    <NavbarLogo />
                </div>

                <NavItems items={navItems} />

                <div className="flex items-center gap-3">
                    <a href="https://wa.me/34663980768" target="_blank" rel="noopener noreferrer">
                        <NavbarButton variant="primary" className="gap-2">
                            <Phone size={16} />
                            <span>Pedir Cita</span>
                        </NavbarButton>
                    </a>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navItems.map((item, idx) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-lg font-medium text-roman-text hover:text-white transition-colors py-2 border-b border-white/5 last:border-0"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="flex w-full flex-col gap-3 mt-4 pt-4 border-t border-white/10">
                        <a href="https://wa.me/34663980768" target="_blank" rel="noopener noreferrer" className="w-full">
                            <NavbarButton
                                variant="primary"
                                className="w-full gap-2 justify-center"
                            >
                                <Calendar size={18} />
                                Pedir Cita
                            </NavbarButton>
                        </a>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </NavbarRoot>
    );
}
