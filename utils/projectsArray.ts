import chat from "@/assets/chat.png";
import budget from "@/assets/budget.png";
import chatbot from "@/assets/chatbot.png";

const projects = [
    {
        title: "Chat Application",
        tech: "React, Tailwind CSS, Firebase, Framer Motion",
        href: "https://shahbajalam-chat-app.netlify.app",
        github: "https://github.com/ShahbajAlam/chat-room-firebase",
        image: chat.src,
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
