import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import Intro from "@/components/Intro";

export default function HomePage() {
    return (
        <div className="min-h-dvh w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.04] relative overflow-hidden">
            <Spotlight
                className="-top-28 left-0 md:left-6 md:-top-44"
                fill="white"
            />
            <Intro />
        </div>
    );
}
