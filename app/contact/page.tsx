import { Meteors } from "@/components/ui/meteors";
import ContactForm from "@/components/ContactForm";
import Address from "@/components/Address";

export default function ContactPage() {
    return (
        <div className="min-h-dvh w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.04] relative overflow-hidden px-2 py-24 lg:pb-4 lg:pt-24">
            <div className="w-full lg:w-[80%] lg:mx-auto lg:max-w-[1000px]">
                <Meteors number={50} />
                <div className="flex justify-center flex-col gap-6 lg:flex-row">
                    <Address />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
