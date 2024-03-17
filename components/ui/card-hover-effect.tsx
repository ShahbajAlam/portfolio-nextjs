import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        name: string;
        image: string;
        id: number;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5  py-2",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={item.id}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-cyan-600 dark:bg-slate-800/[0.2] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>
                            <Image
                                alt={item.name}
                                src={item.image}
                                width={64}
                                height={64}
                                className="aspect-square w-16  md:w-24 lg:w-28"
                            />
                        </CardDescription>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black relative z-20",
                className
            )}
        >
            <div className="relative z-20">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4
            className={cn(
                "text-zinc-100 font-bold tracking-wide text-center",
                className
            )}
        >
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p className={cn("mt-4 flex justify-center items-center", className)}>
            {children}
        </p>
    );
};
