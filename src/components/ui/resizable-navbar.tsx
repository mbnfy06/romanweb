"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState, useEffect } from "react";
import { Wrench } from "lucide-react";


interface NavbarProps {
    children: React.ReactNode;
    className?: string;
}

interface NavBodyProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface NavItemsProps {
    items: {
        name: string;
        link: string;
    }[];
    className?: string;
    onItemClick?: () => void;
}

interface MobileNavProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface MobileNavHeaderProps {
    children: React.ReactNode;
    className?: string;
}

interface MobileNavMenuProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div
            ref={ref}
            className={cn("fixed inset-x-0 top-0 z-50 w-full pt-4 transition-all duration-300 pointer-events-none", className)}
        >
            <div className="pointer-events-auto">
                {React.Children.map(children, (child) =>
                    React.isValidElement(child)
                        ? React.cloneElement(
                            child as React.ReactElement<{ visible?: boolean }>,
                            { visible },
                        )
                        : child,
                )}
            </div>
        </motion.div>
    );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                backgroundColor: visible ? "rgba(23, 23, 23, 0.8)" : "transparent",
                boxShadow: visible
                    ? "0 0 24px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.05) inset"
                    : "none",
                width: visible ? "85%" : "100%",
                y: visible ? 10 : 0,
                borderRadius: visible ? "9999px" : "0px",
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
            }}
            style={{
                minWidth: visible ? "600px" : "100%",
            }}
            className={cn(
                "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-8 py-3 lg:flex",
                className,
            )}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(
                        child as React.ReactElement<{ visible?: boolean }>,
                        { visible },
                    )
                    : child,
            )}
        </motion.div>
    );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "flex items-center justify-center space-x-1",
                className,
            )}
        >
            {items.map((item, idx) => (
                <a
                    key={`link-${idx}`}
                    onMouseEnter={() => setHovered(idx)}
                    onClick={onItemClick}
                    className="relative px-4 py-2 text-sm font-medium text-roman-text hover:text-white transition-colors"
                    href={item.link}
                >
                    {hovered === idx && (
                        <motion.div
                            layoutId="hovered"
                            className="absolute inset-0 h-full w-full rounded-full bg-roman-primary/20"
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                        />
                    )}
                    <span className="relative z-20">{item.name}</span>
                </a>
            ))}
        </motion.div>
    );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                backgroundColor: visible ? "rgba(23, 23, 23, 0.9)" : "transparent",
                boxShadow: visible
                    ? "0 0 24px rgba(0, 0, 0, 0.2)"
                    : "none",
                width: visible ? "90%" : "100%",
                paddingRight: visible ? "12px" : "0px",
                paddingLeft: visible ? "12px" : "0px",
                borderRadius: visible ? "16px" : "0px",
                y: visible ? 10 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-4 py-3 lg:hidden",
                className,
            )}
        >
            {children}
        </motion.div>
    );
};

export const MobileNavHeader = ({
    children,
    className,
}: MobileNavHeaderProps) => {
    return (
        <div
            className={cn(
                "flex w-full flex-row items-center justify-between",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const MobileNavMenu = ({
    children,
    className,
    isOpen,
    onClose,
}: MobileNavMenuProps) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    className={cn(
                        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-xl bg-roman-card border border-white/10 px-6 py-8 shadow-2xl max-h-[80vh] overflow-y-auto",
                        className,
                    )}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavToggle = ({
    isOpen,
    onClick,
}: {
    isOpen: boolean;
    onClick: () => void;
}) => {
    return isOpen ? (
        <IconX className="text-white transform transition-transform hover:scale-110" onClick={onClick} />
    ) : (
        <IconMenu2 className="text-white transform transition-transform hover:scale-110" onClick={onClick} />
    );
};

export const NavbarLogo = () => {
    return (
        <div className="flex items-center gap-2 group relative z-20">
            <div className="w-9 h-9 bg-roman-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-roman-primary/30 group-hover:shadow-roman-primary/50 transition-all duration-300">
                <Wrench size={18} />
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-display font-bold text-white leading-none tracking-tight">
                    ROMÁN
                </span>
            </div>
        </div>
    );
};

type NavbarButtonProps = {
    href?: string;
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "dark" | "gradient";
    onClick?: () => void;
} & (
        | React.ComponentPropsWithoutRef<"a">
        | React.ComponentPropsWithoutRef<"button">
    );

export const NavbarButton = ({
    href,
    as: Tag = "button",
    children,
    className,
    variant = "primary",
    onClick,
    ...props
}: NavbarButtonProps) => {
    const baseStyles =
        "px-5 py-2.5 rounded-lg text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center";

    const variantStyles = {
        primary:
            "bg-roman-primary text-white shadow-lg shadow-roman-primary/25 hover:shadow-roman-primary/40 focus:ring-2 focus:ring-roman-primary/50",
        secondary: "bg-transparent border border-white/10 text-roman-text hover:bg-white/5 hover:text-white",
        dark: "bg-roman-card text-white border border-white/10 hover:bg-roman-border",
        gradient:
            "bg-gradient-to-r from-roman-primary to-roman-accent text-white shadow-lg",
    };

    const Component = href ? "a" : Tag;

    return (
        // @ts-ignore
        <Component
            href={href || undefined}
            onClick={onClick}
            className={cn(baseStyles, variantStyles[variant], className)}
            {...props}
        >
            {children}
        </Component>
    );
};
