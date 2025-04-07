import { StaticImageData } from "next/image";
import alice from "../../public/team-1.webp";
import keli from "../../public/team-2.webp";
import nena from "../../public/team-4.webp";
import smith from "../../public/team-1.webp";
import james from "../../public/team-2.webp";
import anto from "../../public/team-4.webp";

export type reviewProps = {
    name: string;
    role: string;
    company: string;
    profileImg: StaticImageData;
    testimonial: string;
    index: number;
};

export const reviewDetails = [
    {
        name: "Alice Murphy",
        role: "CEO & Founder",
        company: "Google",
        profileImg: alice,
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio et velit ornare porttitor. Nullam in turpis auctor, ultricies nunc id, varius mi. In hac habitasse platea dictumst. Donec id felis nec libero.",
    },
    {
        name: "Nimic James",
        role: "UI Speacialist",
        company: "Org Deccan Ltd",
        profileImg: anto,
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio et velit ornare porttitor. Nullam in turpis auctor, ultricies nunc id, varius mi. In hac habitasse platea dictumst. Donec id felis nec libero.",
    },
    {
        name: "O Corner",
        role: "Senior Frontend Developer",
        company: "CisIBW",
        profileImg: james,
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio et velit ornare porttitor. Nullam in turpis auctor, ultricies nunc id, varius mi. In hac habitasse platea dictumst. Donec id felis nec libero.",
    },
    {
        name: "Emily Davision",
        role: "VP Engineering",
        company: "Tekka",
        profileImg: smith,
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio et velit ornare porttitor. Nullam in turpis auctor, ultricies nunc id, varius mi. In hac habitasse platea dictumst. Donec id felis nec libero.",
    },
    {
        name: "Emily Adams",
        role: "CEO",
        company: "Software Digital",
        profileImg: nena,
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio et velit ornare porttitor. Nullam in turpis auctor, ultricies nunc id, varius mi. In hac habitasse platea dictumst. Donec id felis nec libero.",
    },
    {
        name: "Sarah Thompson",
        role: "Marketing Director",
        company: "Tech Arrivals",
        profileImg: keli,
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio et velit ornare porttitor. Nullam in turpis auctor, ultricies nunc id, varius mi. In hac habitasse platea dictumst. Donec id felis nec libero.",
    },
]