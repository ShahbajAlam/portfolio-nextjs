"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

const Template = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            initial={{
                scale: 0.9,
                opacity: 0,
            }}
            animate={{
                scale: 1,
                opacity: 1,
            }}
            exit={{
                scale: 0.9,
                opacity: 0,
            }}
            transition={{
                duration: 0.25,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
};

export default Template;
