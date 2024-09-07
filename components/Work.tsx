import Image from "next/image";

import map from "@/assets/map.webp";
import calendar from "@/assets/calendar.webp";
import { MovingBorderContainer } from "./ui/moving-border";

type WorkProps = {
    from: string;
    to: string;
    company: string;
    title: string;
    location: string;
};

const workArray: WorkProps[] = [
    {
        from: "NOV, 2020",
        to: "APR, 2022",
        company: "Cognizant",
        title: "Programmer Analyst",
        location: "Kolkata, West Bengal",
    },
    {
        from: "SEPT, 2024",
        to: "-",
        company: "byteXL",
        title: "Technical Trainer",
        location: "Dehradun, Uttarakhand",
    },
];

function Work() {
    return (
        <div className="w-full">
            <h2 className="text-center text-3xl text-white my-6 font-bold lg:text-left">
                Experience
            </h2>
            <div className="flex flex-col gap-6 lg:flex-row">
                {workArray.map((item) => (
                    <div className="lg:basis-[50%] lg:flex">
                        <MovingBorderContainer
                            duration={5000}
                            className="bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]"
                            containerClassName="w-full"
                        >
                            <div className="w-full rounded-3xl p-4 text-gray-50 flex flex-col gap-3">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <Image
                                            src={calendar.src}
                                            width={24}
                                            height={24}
                                            alt="calender"
                                        />
                                        <p>{item.from}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <Image
                                            src={calendar.src}
                                            width={24}
                                            height={24}
                                            alt="calender"
                                            className="self-end"
                                        />
                                        <p>{item.to}</p>
                                    </div>
                                </div>
                                <h1 className="text-2xl font-semibold">
                                    {item.company}
                                </h1>
                                <h1 className="text-lg">{item.title}</h1>
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={map.src}
                                        alt="address"
                                        width={24}
                                        height={24}
                                    />
                                    <h2 className="text-lg">{item.location}</h2>
                                </div>
                            </div>
                        </MovingBorderContainer>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Work;
