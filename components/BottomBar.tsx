"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import home from "@/assets/home.webp";
import info from "@/assets/information.webp";
import skills from "@/assets/skills.webp";
import projects from "@/assets/project.webp";
import email from "@/assets/email.webp";
import Image from "next/image";
import { useEffect, useState } from "react";

type LinkProps = {
    src: string;
    alt: string;
    to: string;
};

const links: LinkProps[] = [
    { src: home.src, alt: "homepage", to: "/" },
    { src: info.src, alt: "about page", to: "/about" },
    { src: skills.src, alt: "skills", to: "/skills" },
    { src: projects.src, alt: "projects", to: "/projects" },
    { src: email.src, alt: "contact", to: "/contact" },
];

function BottomBar() {
    const path = usePathname();
    const [active, setActive] = useState("/");

    useEffect(() => {
        if (path === "/") setActive("/");
        if (path === "/about") setActive("/about");
        if (path === "/skills") setActive("/skills");
        if (path === "/projects") setActive("/projects");
        if (path === "/contact") setActive("/contact");
    }, [path]);

    return (
        <section className="fixed left-4 right-4 bottom-3 flex justify-between items-center rounded-2xl bg-black/[0.98] px-4 py-3 z-[2] backdrop-blur-sm overflow-hidden md:w-[75%] md:mx-auto md:px-6 md:py-5 lg:hidden">
            {links.map((link) => (
                <Link
                    key={link.src}
                    href={link.to}
                    className={`${
                        active === link.to
                            ? "scale-[1.2] duration-300"
                            : "opacity-40"
                    }`}
                >
                    <Image
                        src={link.src}
                        alt={link.alt}
                        width={32}
                        height={32}
                        className="w-8 h-8 md:w-10 md:h-10"
                    />
                </Link>
            ))}
        </section>
    );
}

export default BottomBar;
