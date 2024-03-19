import Image from "next/image";
import loadingIcon from "@/assets/loading.svg";

function SendButton({ loading }: { loading: boolean }) {
    return (
        <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center py-2 bg-gradient-to-tr from-[#08b6b6] to-[#22c99c] font-semibold rounded-xl text-xl mt-2 text-gray-950"
        >
            {loading ? (
                <Image
                    src={loadingIcon}
                    alt="loading animation"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                />
            ) : (
                "SEND"
            )}
        </button>
    );
}

export default SendButton;
