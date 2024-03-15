import React from "react";
import { Meteors } from "@/components/ui/meteors";
import About from "@/components/About";

export default function MeteorsDemo() {
    return (
        <div className="min-h-dvh w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.04] relative overflow-hidden">
            <Meteors number={50} />
            <About />
        </div>
    );
}
