import Bio from "./Bio";
import { MovingBorderContainer } from "./ui/moving-border";

export default function About() {
    return (
        <div className="w-full flex flex-col items-center justify-center px-2 py-24 lg:flex-row lg:w-[80%] lg:max-w-[1000px] lg:py-2 lg:pt-16">
            <MovingBorderContainer
                duration={8000}
                className="bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]"
            >
                <Bio />
            </MovingBorderContainer>
        </div>
    );
}
