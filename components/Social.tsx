import Image from "next/image";

import fb from "@/assets/fb.webp";
import insta from "@/assets/insta.webp";
import github from "@/assets/github.webp";
import linkedin from "@/assets/linkedin.webp";

type SocialProps = {
    src: string;
    alt: string;
    link: string;
};

export const socialObject: SocialProps[] = [
    {
        link: "https://www.linkedin.com/in/shahbajalam97/",
        alt: "linkedin logo",
        src: linkedin.src,
    },
    {
        link: "https://github.com/ShahbajAlam",
        alt: "github logo",
        src: github.src,
    },

    {
        link: "https://www.facebook.com/naheed97",
        alt: "facebook logo",
        src: fb.src,
    },
    {
        link: "https://www.instagram.com/i_am_naheed/",
        alt: "instagram logo",
        src: insta.src,
    },
];

function Social({ src, alt, link }: SocialProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
        >
            <Image src={src} alt={alt} width={32} height={32} />
        </a>
    );
}

export default Social;
