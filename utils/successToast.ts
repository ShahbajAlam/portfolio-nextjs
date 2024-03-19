import toast from "react-hot-toast";

export const successToast = (message: string) => {
    toast.success(message, {
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
