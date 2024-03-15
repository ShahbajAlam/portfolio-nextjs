import Bio from "./Bio";
import Education, { EducationProps } from "./Education";
import { Meteors } from "./ui/meteors";
import { MovingBorderContainer } from "./ui/moving-border";

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

export default function About() {
    return (
        <div className="w-full flex flex-col items-center justify-center px-2 py-24 lg:flex-row lg:w-[80%] lg:max-w-[1000px] lg:py-2 lg:pt-16">
            <MovingBorderContainer
                duration={5000}
                className="bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)] lg:grow lg:shrink-0 basis-[50%]"
            >
                <Bio />
            </MovingBorderContainer>
            <h2 className="text-center text-3xl text-white my-6 font-bold">
                Education
            </h2>
            {educationArray.map((item) => (
                <div className="flex flex-col items-center mb-6 p-2 rounded-3xl bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.4)] relative overflow-hidden">
                    <Education
                        address={item.address}
                        degree={item.degree}
                        institute={item.institute}
                        subject={item.subject}
                        type={item.type}
                        year={item.year}
                        key={item.degree}
                    />
                    <Meteors number={20} />
                </div>
            ))}
        </div>
    );
}
