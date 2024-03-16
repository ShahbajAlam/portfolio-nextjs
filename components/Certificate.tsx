import { MovingBorderContainer } from "./ui/moving-border";

type CertificateProps = {
    id: string;
    title: string;
    provider: string;
    url: string;
};

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

function Certificate() {
    return (
        <div className="w-full">
            <h2 className="text-center text-3xl text-white my-6 font-bold">
                Certifications
            </h2>
            <div className="flex flex-col gap-6 lg:flex-row">
                {certificateArray.map((item) => (
                    <div className="lg:flex-1 lg:flex">
                        <MovingBorderContainer
                            duration={5000}
                            className="w-full bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]"
                            containerClassName="w-full"
                        >
                            <div className="w-full rounded-3xl p-4 text-gray-50 flex flex-col gap-3">
                                <h1 className="text-2xl font-semibold">
                                    {item.title}
                                </h1>
                                <p className="text-lg">
                                    Certificate ID : {item.id}
                                </p>
                                <p className="text-lg">
                                    Provided by : {item.provider}
                                </p>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    className="self-end bg-gradient-to-r from-[#3e4e6e] to-[#212e41] rounded-xl px-4 py-2 font-semibold text-xl my-2"
                                >
                                    View the certificate
                                </a>
                            </div>
                        </MovingBorderContainer>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certificate;
