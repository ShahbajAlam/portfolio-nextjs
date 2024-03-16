import Bio from "./Bio";
import Work from "./Work";
import Education from "./Education";
import Certificate from "./Certificate";

export default function About() {
    return (
        <div className="w-full flex flex-col items-center justify-center px-2 py-24 md:w-[75%] lg:w-[80%] lg:max-w-[1000px] lg:pb-4 lg:pt-24">
            <Bio />
            <Work />
            <Education />
            <Certificate />
        </div>
    );
}
