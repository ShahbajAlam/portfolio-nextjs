import man from "@/assets/man.webp";

function Bio() {
    return (
        <div className="flex flex-col items-center gap-3 p-4 rounded-3xl">
            <img
                src={man.src}
                alt="profile picture"
                className="w-20 h-20 rounded-full border-2 border-orange-800"
            />
            <p className="text-lg text-gray-100 text-justify">
                I am a passionate web developer dedicated to creating engaging
                and seamless user experiences with a strong foundation in web
                development, I thrive on turning design concepts into responsive
                and dynamic interfaces. My goal is to contribute innovative
                solutions and bring ideas to life through clean and efficient
                code. Let's build something remarkable together!
            </p>
            <a
                download=""
                className="self-end bg-gradient-to-r from-[#3e4e6e] to-[#212e41] rounded-xl px-4 py-2 font-semibold text-xl my-2"
            >
                Download Resume
            </a>
        </div>
    );
}

export default Bio;
