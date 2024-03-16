import Image from "next/image";

import map from "@/assets/map.webp";
import calendar from "@/assets/calendar.webp";

export type WorkProps = {
    from: string;
    to: string;
    company: string;
    title: string;
    location: string;
};

function Work(props: WorkProps) {
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
                    <p>{props.from}</p>
                </div>
                <div className="flex flex-col">
                    <Image
                        src={calendar.src}
                        width={24}
                        height={24}
                        alt="calender"
                        className="self-end"
                    />
                    <p>{props.to}</p>
                </div>
            </div>
            <h1 className="text-2xl font-semibold">{props.company}</h1>
            <h1 className="text-lg">{props.title}</h1>
            <div className="flex items-center gap-3">
                <Image src={map.src} alt="address" width={24} height={24} />
                <h2 className="text-lg">{props.location}</h2>
            </div>
        </div>
    );
}

export default Work;
