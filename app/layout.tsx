import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomBar from "@/components/BottomBar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shahbaj Alam | Portfolio",
    description:
        "The portfolio website of Shahbaj Alam, a web developer from India",
    
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <BottomBar />
            </body>
        </html>
    );
}
