import toast from "react-hot-toast";

export const errorToast = (message: string) => {
    toast.error(message, {
        duration: 2500,
        position: "top-center",
        id: Date.now().toString(),
        style: {
            borderRadius: 24,
            textAlign: "center",
            fontWeight: 600,
        },
    });
};
