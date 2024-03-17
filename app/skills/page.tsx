"use client";

import React from "react";

import { skills } from "@/utils/skillsArray";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function SkillsPage() {
    return (
        <div className="min-h-dvh w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.04] relative overflow-hidden px-2 py-24 lg:py-2 lg:pt-16">
            <HoverEffect items={skills} />
        </div>
    );
}
