"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

import { errorToast } from "@/utils/errorToast";
import { successToast } from "@/utils/successToast";
import SendButton from "@/components/SendButton";

function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, name: e.target.value }));
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, email: e.target.value }));
    };

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, message: e.target.value }));
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    const handleForm = async (e: FormEvent) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            errorToast("Please enter your name");
            return;
        }

        if (!formData.email.trim()) {
            errorToast("Please enter your email ID");
            return;
        }

        if (!formData.message.trim()) {
            errorToast("Please enter a message");
            return;
        }

        try {
            setLoading(true);

            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                    fname: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });
            console.log(res);
            const data = await res.json();
            console.log(data);
            if (data.id) successToast("Message is sent successfully");
        } catch (error) {
            if (error instanceof Error) errorToast(error.message);
        } finally {
            setLoading(false);
        }

        resetForm();
    };

    return (
        <div className="flex flex-col justify-center items-center w-full text-gray-100">
            <form
                autoComplete="off"
                className="flex flex-col w-full gap-1 px-4 py-6 rounded-3xl"
                onSubmit={handleForm}
            >
                <h1 className="text-2xl text-center text-balance mb-4">
                    Get in touch
                </h1>
                <label htmlFor="fname" className="text-lg font-medium">
                    Name
                </label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    disabled={loading}
                    value={formData.name}
                    onChange={(e) => handleNameChange(e)}
                    className="border-none outline-none rounded-lg px-2 py-1 bg-gray-300 caret-gray-950 text-gray-950 text-lg font-medium disabled:bg-gray-500"
                />

                <label htmlFor="email" className="text-lg font-medium">
                    Email ID
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    disabled={loading}
                    value={formData.email}
                    onChange={(e) => handleEmailChange(e)}
                    className="border-none outline-none rounded-lg px-2 py-1 bg-gray-300 caret-gray-950 text-gray-950 text-lg font-medium disabled:bg-gray-500"
                />

                <label htmlFor="message" className="text-lg font-medium">
                    Message
                </label>
                <textarea
                    rows={3}
                    id="message"
                    name="message"
                    disabled={loading}
                    value={formData.message}
                    onChange={(e) => handleMessageChange(e)}
                    className="border-none outline-none rounded-lg px-2 py-1 bg-gray-300 caret-gray-950 text-gray-950 text-lg resize-none font-medium disabled:bg-gray-500"
                />

                <SendButton loading={loading} />
            </form>
        </div>
    );
}

export default ContactForm;
