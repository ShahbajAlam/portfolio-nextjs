"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type LinkProps = {
    to: string;
    title: string;
};

const links: LinkProps[] = [
    { to: "/", title: "HOME" },
    { to: "/about", title: "ABOUT" },
    { to: "/skills", title: "SKILLS" },
    { to: "/projects", title: "PROJECTS" },
    { to: "/contact", title: "CONTACT" },
];

function Navbar() {
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
        <nav className="lg:h-16 lg:flex lg:justify-center lg:items-center lg:gap-20 lg:text-gray-100 lg:font-semibold lg:bg-transparent lg:fixed lg:z-[2] lg:top-0 lg:left-0 lg:right-0 lg:w-[80%] lg:max-w-[1000px] lg:mx-auto lg:backdrop-blur-md lg:rounded-3xl hidden">
            {links.map((item) => (
                <Link
                    key={item.to}
                    href={item.to}
                    className={`link ${
                        item.to === active ? "text-cyan-400" : ""
                    }`}
                >
                    {item.title}
                </Link>
            ))}
        </nav>
    );
}

export default Navbar;
