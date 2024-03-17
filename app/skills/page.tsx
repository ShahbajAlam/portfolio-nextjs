"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { Boxes } from "@/components/ui/background-boxes";

export default function SkillsPage() {
    return (
        <div className="min-h-dvh relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
        </div>
    );
}
