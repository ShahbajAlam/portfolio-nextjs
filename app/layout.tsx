import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomBar from "@/components/BottomBar";
import Navbar from "@/components/Navbar";
import Template from "./template";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shahbaj Alam | Portfolio",
    description:
        "The portfolio website of Shahbaj Alam, a web developer from India",
    verification: {
    google: "rzOPzc8MrogWdEYLvuSZ7m-BzOhZpg1n9SYEvHlemzM",
  },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} min-h-dvh w-full bg-black/[0.96] antialiased`}
            >
                <Toaster />
                <Navbar />
                <Template>{children}</Template>
                <BottomBar />
            </body>
        </html>
    );
}
