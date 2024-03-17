"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

const Template = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.75,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
};

export default Template;
