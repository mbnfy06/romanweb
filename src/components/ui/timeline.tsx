"use client";
import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-roman-dark font-sans md:px-10"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl mb-4 text-white font-display font-bold">
                    Nuestro Proceso de Trabajo
                </h2>
                <p className="text-roman-muted text-sm md:text-lg max-w-2xl mx-auto md:mx-0">
                    Transparencia y excelencia en cada etapa de la reparación.
                    Descubre cómo cuidamos de tu vehículo desde que entra en nuestras instalaciones.
                </p>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <TimelineItem
                        key={index}
                        item={item}
                    />
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/10 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-roman-primary via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

const TimelineItem = ({ item }: { item: TimelineEntry }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start 70%", "end 30%"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
    const color = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        ["rgba(255,255,255,0.1)", "rgba(37,99,235,1)", "rgba(37,99,235,1)", "rgba(255,255,255,0.1)"]
    );

    return (
        <div
            ref={itemRef}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
        >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-roman-dark border border-white/5 flex items-center justify-center">
                    <motion.div
                        style={{
                            backgroundColor: color,
                            boxShadow: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["0px 0px 0px rgba(37,99,235,0)", "0px 0px 20px rgba(37,99,235,0.5)", "0px 0px 20px rgba(37,99,235,0.5)", "0px 0px 0px rgba(37,99,235,0)"])
                        }}
                        className="h-4 w-4 rounded-full border border-white/10"
                    />
                </div>
                <motion.h3
                    style={{ opacity, scale, color }}
                    className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold font-display"
                >
                    {item.title}
                </motion.h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <motion.h3
                    style={{ opacity, color }}
                    className="md:hidden block text-2xl mb-4 text-left font-bold font-display"
                >
                    {item.title}
                </motion.h3>
                <motion.div style={{ opacity, scale }}>
                    {item.content}
                </motion.div>
            </div>
        </div>
    );
};
