"use client";

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";

import home from "@/assets/home.webp";

const skills = [
    {
        name: "HTML",
        image: home.src,
    },
    {
        name: "HTML",
        image: home.src,
    },
    {
        name: "HTML",
        image: home.src,
    },
    {
        name: "HTML",
        image: home.src,
    },
    {
        name: "HTML",
        image: home.src,
    },
];

export default function SkillsPage() {
    return (
        <div className="min-h-dvh w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <BackgroundBeams />
            <div className="w-full flex flex-col items-center justify-center px-2 py-24 md:w-[75%] lg:w-[80%] lg:max-w-[1000px] lg:pb-4 lg:pt-24">
                <HoverEffect items={skills} />
            </div>
        </div>
    );
}
