import budget from "@/assets/budget.png";
import grocery from "@/assets/grocery.png";
import chatbot from "@/assets/chatbot.png";

const projects = [
    {
        title: "Grocery Store",
        tech: "NextJS, Tailwind CSS, DaisyUI, Kinde, MongoDB, Sanity CMS, Stripe",
        href: "https://shahbajalam-grocery-store.vercel.app/",
        github: "https://github.com/ShahbajAlam/grocery-store",
        image: grocery.src,
    },
    {
        title: "Chat Bot",
        tech: "React, Tailwind CSS, Firebase, Framer Motion",
        href: "https://shahbajalam-chatbot.netlify.app/",
        github: "https://github.com/ShahbajAlam/chatbot",
        image: chatbot.src,
    },
    {
        title: "Expense Tracker",
        tech: "React, Tailwind CSS, Firebase, Framer Motion",
        href: "https://shahbajalam-expense-tracker.netlify.app/",
        github: "https://github.com/ShahbajAlam/expense-tracker-firebase",
        image: budget.src,
    },
];

export { projects };
