import { StaticImageData } from "next/image";
import alice from "../../public/review1.png";
import keli from "../../public/review2.png";
import nena from "../../public/review3.png";
import smith from "../../public/review4.png";
// import james from "../../public/team-2.webp";
// import anto from "../../public/team-4.webp";

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
    name: "Ruchira B",
    role: "undergrad ",
    company: "SLIIT",
    profileImg: alice,
    testimonial:
      "Janith was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
  {
    name: "Janidu J",
    role: "undergrad",
    company: "SLIIT",
    profileImg: keli,
    testimonial:
      "Working with Janith was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects. ",
  },
  {
    name: "Bumal S",
    role: "undergrad",
    company: "SLIIT",
    profileImg: nena,
    testimonial:
      "Janith’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    name: "Madusha T",
    role: "undergrad",
    company: "SLIIT",
    profileImg: smith,
    testimonial:
      "I can’t say enough good things about Janith. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  //   {
  //     name: "Emily Adams",
  //     role: "CEO",
  //     company: "Software Digital",
  //     profileImg: nena,
  //     testimonial:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio et velit ornare porttitor. Nullam in turpis auctor, ultricies nunc id, varius mi. In hac habitasse platea dictumst. Donec id felis nec libero.",
  //   },
  //   {
  //     name: "Sarah Thompson",
  //     role: "Marketing Director",
  //     company: "Tech Arrivals",
  //     profileImg: keli,
  //     testimonial:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio et velit ornare porttitor. Nullam in turpis auctor, ultricies nunc id, varius mi. In hac habitasse platea dictumst. Donec id felis nec libero.",
  //   },
];
