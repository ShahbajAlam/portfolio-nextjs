"use client";

import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import svg from "@/assets/code.svg";

const words = [
    {
        text: "A ",
        className: "text-2xl text-cyan-200 md:text-3xl lg:text-4xl",
    },
    {
        text: "WEB ",
        className: "text-2xl text-cyan-200 md:text-3xl lg:text-4xl",
    },
    {
        text: "DEVELOPER",
        className: "text-cyan-200 text-2xl md:text-3xl lg:text-4xl",
    },
];

const name = "<Shahbaj />";

export default function Intro() {
    return (
        <div className="w-full flex flex-col items-center justify-center px-2 py-24 lg:flex-row lg:w-[80%] lg:max-w-[1000px] lg:py-6">
            <div className="basis-6/12 flex flex-col items-center justify-center">
                <h2 className="text-4xl text-white font-bold md:text-5xl lg:text-6xl">
                    Hey there, I am
                </h2>
                <h1 className="text-[3.5rem] text-transparent bg-gradient-to-l from-cyan-500 to-blue-700 bg-clip-text font-bold m-0 mt-2 md:text-6xl md:mt-4 lg:text-7xl">
                    {name}
                </h1>
                <TypewriterEffectSmooth
                    words={words}
                    cursorClassName="hidden"
                />
            </div>

            <div className="basis-6/12 flex items-center justify-center aspect-square">
                <Image
                    src={svg}
                    alt="coding image"
                    priority
                    className="w-[90%] md:w-full lg:w-[70%]"
                />
            </div>
        </div>
    );
}
