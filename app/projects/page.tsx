import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

import github from "@/assets/github.svg";
import { projects } from "@/utils/projectsArray";

export default function ProjectsPage() {
    return (
        <div className="min-h-dvh w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.04] relative overflow-hidden px-2 py-24 lg:pb-4 lg:pt-24">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:w-[80%] lg:mx-auto lg:max-w-[1000px]">
                {projects.map((item, i) => (
                    <CardContainer
                        key={i}
                        className={`inter-var md:w-[90%] ${
                            i % 2 === 0 ? "ml-auto" : "mr-auto"
                        }`}
                    >
                        <CardBody className="bg-black relative group/card border-white/[0.2] rounded-xl p-6 border h-auto">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-white"
                            >
                                {item.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-white text-sm mt-2"
                            >
                                ReactJS, Firebase, Netlify
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={"https://picsum.photos/300"}
                                    height={320}
                                    width={320}
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-4">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://twitter.com/mannupaaji"
                                    target="_blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                                >
                                    <Image
                                        src={github}
                                        height={32}
                                        width={32}
                                        alt="Github Logo"
                                    />
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://twitter.com/mannupaaji"
                                    target="_blank"
                                    className="px-4 py-2 rounded-xl text-sm font-normal text-white"
                                >
                                    Visit now →
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
}
