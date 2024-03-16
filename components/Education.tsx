import Image from "next/image";

import map from "@/assets/map.webp";
import building from "@/assets/building.webp";
import calendar from "@/assets/calendar.webp";
import graduation from "@/assets/graduation.webp";
import { MovingBorderContainer } from "./ui/moving-border";

type EducationProps = {
    year: string;
    type: string;
    degree: string;
    institute: string;
    address: string;
    subject: string;
};

const educationArray: EducationProps[] = [
    {
        year: "2016-2020",
        degree: "Bachelor of Technology",
        institute:
            "Government College of Engineering and Textile Technology, Serampore",
        type: "Graduation",
        subject: "Information Technology",
        address: "Serampore, West Bengal",
    },
    {
        year: "2022-2024",
        degree: "Master of Technology",
        institute:
            "Maulana Abul Kalam Azad University of Technology, West Bengal",
        type: "Post Graduation",
        subject: "Information Technology",
        address: "Nadia, West Bengal",
    },
];

function Education() {
    return (
        <div className="w-full">
            <h2 className="text-center text-3xl text-white my-6 font-bold">
                Education
            </h2>
            <div className="flex flex-col gap-6 lg:flex-row">
                {educationArray.map((item) => (
                    <div className="lg:flex-1 lg:flex">
                        <MovingBorderContainer
                            duration={5000}
                            className="bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]"
                            containerClassName="w-full"
                        >
                            <div className="w-full rounded-3xl p-4 text-gray-50 flex flex-col gap-3">
                                <div className="w-full flex justify-between items-center">
                                    <div>
                                        <Image
                                            src={calendar.src}
                                            width={24}
                                            height={24}
                                            alt="calender"
                                        />
                                        <p>{item.year}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <Image
                                            src={graduation.src}
                                            width={24}
                                            height={24}
                                            alt="calender"
                                            className="self-end"
                                        />
                                        <p>{item.type}</p>
                                    </div>
                                </div>
                                <h1 className="text-2xl font-semibold">
                                    {item.degree}
                                </h1>
                                <h1 className="text-lg">{item.subject}</h1>
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={building.src}
                                        alt="university"
                                        width={24}
                                        height={24}
                                    />
                                    <h2 className="text-lg">
                                        {item.institute}
                                    </h2>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={map.src}
                                        alt="address"
                                        width={24}
                                        height={24}
                                    />
                                    <h2 className="text-lg">{item.address}</h2>
                                </div>
                            </div>
                        </MovingBorderContainer>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
