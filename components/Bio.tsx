import Image from "next/image";

import dp from "@/assets/dp.jpg";

import { MovingBorderContainer } from "./ui/moving-border";

function Bio() {
    return (
        <MovingBorderContainer
            duration={5000}
            className="w-full flex flex-col gap-4 p-4 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)] lg:flex-row lg:p-8"
        >
            <div className="lg:basis-[30%]">
                <Image
                    src={dp.src}
                    alt="profile picture"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full border-2 lg:w-40 lg:h-40"
                />
            </div>
            <div className="flex flex-col gap-4 lg:basis-[70%]">
                <p className="text-lg text-gray-100 text-justify">
                    I am a passionate web developer dedicated to creating
                    engaging and seamless user experiences with a strong
                    foundation in web development, I thrive on turning design
                    concepts into responsive and dynamic interfaces. My goal is
                    to contribute innovative solutions and bring ideas to life
                    through clean and efficient code. Let's build something
                    remarkable together!
                </p>
                <a
                    download
                    href="/shahbaj_resume.pdf"
                    className="self-end bg-gradient-to-r from-[#3e4e6e] to-[#212e41] rounded-xl px-4 py-2 font-semibold text-xl my-2 active:scale-95 duration-200"
                >
                    Download Resume
                </a>
            </div>
        </MovingBorderContainer>
    );
}

export default Bio;
