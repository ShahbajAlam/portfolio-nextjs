import Image from "next/image";

import map from "@/assets/map.webp";
import building from "@/assets/building.webp";
import calendar from "@/assets/calendar.webp";
import graduation from "@/assets/graduation.webp";

export type EducationProps = {
    year: string;
    type: string;
    degree: string;
    institute: string;
    address: string;
    subject: string;
};

function Education(props: EducationProps) {
    return (
        <div className="w-full rounded-3xl p-4 text-gray-50 flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <div>
                    <Image
                        src={calendar.src}
                        width={24}
                        height={24}
                        alt="calender"
                    />
                    <p>{props.year}</p>
                </div>
                <div className="flex flex-col">
                    <Image
                        src={graduation.src}
                        width={24}
                        height={24}
                        alt="calender"
                        className="self-end"
                    />
                    <p>{props.type}</p>
                </div>
            </div>
            <h1 className="text-2xl font-semibold">{props.degree}</h1>
            <h1 className="text-lg">{props.subject}</h1>
            <div className="flex items-center gap-3">
                <Image
                    src={building.src}
                    alt="university"
                    width={24}
                    height={24}
                />
                <h2 className="text-lg">{props.institute}</h2>
            </div>
            <div className="flex items-center gap-3">
                <Image src={map.src} alt="address" width={24} height={24} />
                <h2 className="text-lg">{props.address}</h2>
            </div>
        </div>
    );
}

export default Education;
