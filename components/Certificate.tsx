export type CertificateProps = {
    id: string;
    title: string;
    provider: string;
    url: string;
};

function Certificate(props: CertificateProps) {
    return (
        <div className="w-full rounded-3xl p-4 text-gray-50 flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">{props.title}</h1>
            <p className="text-lg">Certificate ID : {props.id}</p>
            <p className="text-lg">Provided by : {props.provider}</p>
            <a
                href={props.url}
                target="_blank"
                className="self-end bg-gradient-to-r from-[#3e4e6e] to-[#212e41] rounded-xl px-4 py-2 font-semibold text-xl my-2"
            >
                View the certificate
            </a>
        </div>
    );
}

export default Certificate;
