export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  available: boolean;
  demo: string;
};

export const devProjects = [
  {
    id: 0,
    name: "Suburbia",
    description:
      "Suburbia is a fictional skate board brand, which has a stunning landing page and interractive customizable app. users can customize every detail of a skateboard in real time—from wheels to trucks to decks.",
    technologies: ["Next.js", "Three.js", "GSAP"],
    github: "https://github.com/",
    demo: "https://suburbia-skatess.netlify.app/",
    image: require(".//../../public/projects/guy-1.png"),
    available: true,
  },
  {
    id: 1,
    name: "InterviewPrep",
    description:
      "InterviewPrep is a Full Stack Real Time AI Voice Agent Interview Platform. It is a platform that helps you prepare for interviews by providing you with a real-time AI voice agent that can ask you questions and give you feedback.",
    technologies: ["Next.js", "TailwindCss", "Vapi"],
    github: "https://github.com/",
    demo: "https://v0-interview-prep-pi.vercel.app/",
    image: require(".//../../public/projects/robot.png"),
    available: true,
  },
  {
    id: 2,
    name: "MooVies",
    description:
      "The app called MooVies offers an intuitive and visually appealing interface for discovering movies and exploring trending content. It integrates the TMDB API to fetch real-time movie data, including ratings, overviews, and posters.",
    technologies: ["React", "TailwindCss", "TMDB"],
    github: "https://github.com/",
    demo: "https://v0-interview-prep-pi.vercel.app/",
    image: require(".//../../public/projects/movie-app.png"),
    available: true,
  },
  {
    id: 3,
    name: "Portfolio",
    description:
      "This portfolio an Amazing 3D Portfolio Website with Three.js and GSAP. It is a fully responsive website that showcases your work and skills in a visually stunning way.",
    technologies: ["React", "Three.js", "TailwindCss"],
    github: "https://github.com/",
    demo: "https://janith-tharindu.netlify.app/",
    image: require(".//../../public/projects/portfolio.jpeg"),
    available: true,
  },
  // {
  //   id: 4,
  //   name: "APP Design",
  //   description:
  //     "Developing website involves creating your website, making it one of the most vital parts of your marketing, user-friendly products and web experiences for Web3 founders and projects.",
  //   technologies: ["Figma", "XD", "Invision"],
  //   github: "https://github.com/",
  //   demo: "https://www.youtube.com/@frontendadvance",
  //   image: require(".//../../public/projects/art.png"),
  //   available: true,
  // },
];
