import Bio from "./Bio";
import Work, { WorkProps } from "./Work";
import Education, { EducationProps } from "./Education";
import { MovingBorderContainer } from "./ui/moving-border";
import Certificate, { CertificateProps } from "./Certificate";

const certificateArray: CertificateProps[] = [
    {
        id: "d4b5c4653436",
        provider: "Hackerrank",
        title: "Frontend Developer (React)",
        url: "https://www.hackerrank.com/certificates/d4b5c4653436",
    },
    {
        id: "4fd023ca25a74ed0ebb33f3342323f5b",
        provider: "Cousera",
        title: "Meta Front-End Developer",
        url: "https://coursera.org/share/4fd023ca25a74ed0ebb33f3342323f5b",
    },
];

const workArray: WorkProps[] = [
    {
        from: "NOV, 2020",
        to: "APR, 2022",
        company: "Cognizant",
        title: "Programmer Analyst",
        location: "Kolkata, West Bengal",
    },
];

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
        <div className="w-full flex flex-col items-center justify-center px-2 py-24 md:w-[75%] lg:flex-row lg:w-[80%] lg:max-w-[1000px] lg:py-2 lg:pt-16">
            <MovingBorderContainer
                duration={5000}
                className="bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)] lg:grow lg:shrink-0 basis-[50%]"
            >
                <Bio />
            </MovingBorderContainer>

            <div className="w-full">
                <h2 className="text-center text-3xl text-white my-6 font-bold">
                    Experience
                </h2>
                <div className="flex flex-col gap-6">
                    {workArray.map((item) => (
                        <MovingBorderContainer
                            duration={5000}
                            className="bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]"
                        >
                            <Work
                                company={item.company}
                                from={item.from}
                                location={item.location}
                                title={item.title}
                                to={item.to}
                                key={item.from}
                            />
                        </MovingBorderContainer>
                    ))}
                </div>
            </div>
            <div className="w-full">
                <h2 className="text-center text-3xl text-white my-6 font-bold">
                    Education
                </h2>
                <div className="flex flex-col gap-6">
                    {educationArray.map((item) => (
                        <MovingBorderContainer
                            duration={5000}
                            className="bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]"
                        >
                            <Education
                                address={item.address}
                                degree={item.degree}
                                institute={item.institute}
                                subject={item.subject}
                                type={item.type}
                                year={item.year}
                                key={item.degree}
                            />
                        </MovingBorderContainer>
                    ))}
                </div>
            </div>

            <div className="w-full">
                <h2 className="text-center text-3xl text-white my-6 font-bold">
                    Certifications
                </h2>
                <div className="flex flex-col gap-6">
                    {certificateArray.map((item) => (
                        <MovingBorderContainer
                            duration={5000}
                            className="bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]"
                        >
                            <Certificate
                                id={item.id}
                                key={item.id}
                                provider={item.provider}
                                title={item.title}
                                url={item.url}
                            />
                        </MovingBorderContainer>
                    ))}
                </div>
            </div>
        </div>
    );
}
