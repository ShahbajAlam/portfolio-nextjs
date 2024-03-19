import { Resend } from "resend";
import { NextResponse } from "next/server";
import { mailBody } from "@/utils/mailBody";

const POST = async (req: Request) => {
    const { fname, email, message } = await req.json();

    try {
        const resend = new Resend(process.env.API_KEY);
        const { data, error } = await resend.emails.send({
            from: process.env.FROM,
            to: process.env.TO,
            subject: `New message from ${fname}`,
            html: mailBody(message, email),
        });

        if (error)
            return new NextResponse(null, {
                status: 400,
                statusText: "Could not send the message",
            });
        return new NextResponse(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        if (error instanceof Error)
            return new NextResponse(null, {
                status: 401,
                statusText: error.message,
            });
    }
};

export { POST };
