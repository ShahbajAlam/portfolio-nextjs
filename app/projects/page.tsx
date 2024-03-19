import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

import github from "@/assets/github.svg";
import { projects } from "@/utils/projectsArray";
import { Meteors } from "@/components/ui/meteors";

export default function ProjectsPage() {
    return (
        <div className="min-h-dvh w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.04] relative overflow-hidden px-2 py-24 lg:pb-4 lg:pt-24">
            <Meteors number={50} />
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:w-[80%] lg:mx-auto lg:max-w-[1000px]">
                {projects.map((item, i) => (
                    <CardContainer
                        key={i}
                        className={`inter-var md:w-[90%] ${
                            i % 2 === 0 ? "ml-auto" : "mr-auto"
                        }`}
                    >
                        <CardBody className="bg-gray-950 relative group/card rounded-3xl p-6 h-auto">
                            <CardItem
                                translateZ="50"
                                className="text-2xl font-bold text-white"
                            >
                                {item.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-white text-base mt-2"
                            >
                                {item.tech}
                            </CardItem>
                            <CardItem
                                translateZ="100"
                                className="w-full my-8 flex justify-center items-center"
                            >
                                <Image
                                    src={item.image}
                                    height={120}
                                    width={120}
                                    className="object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-4">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href={item.github}
                                    target="_blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                                >
                                    <Image
                                        src={github}
                                        width={32}
                                        height={32}
                                        alt="Github Logo"
                                        className="aspect-square"
                                    />
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href={item.href}
                                    target="_blank"
                                    className="px-4 py-2 rounded-xl text-base font-normal text-white"
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
