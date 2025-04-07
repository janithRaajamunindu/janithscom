import Image from "next/image";
import "../animations/animate.css";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#FFF]
    bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <Image
        src="/bg_blur-min.png"
        alt="bg"
        width={1920}
        height={1080}
        className="absolute left-0 top-0 h-full w-full bg-cover bg-center"
      />

      <div
        className="mx-auto flex w-[90%] flex-col items-center justify-center 
      lg:max-w-[1212.8px]"
      >
        <AnimatedTitle
          text={
            "Uncover Our Journey: Together, We're Shaping a Promising Future."
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
          className="md:text[60px] lg:text[80px] mb-10 text-left text-[40px]
        font-bold leading-[0.9em] tracking-tighter text-[#333] sm:text-[45px] md:mb-16"
        />

        <div className="mx-auto flex w-[100%] flex-col">
          <div
            className="mb-10 flex w-[100%] flex-col gap-4 text-[18px]
          font-medium leading-relaxed tracking-wide text-[#333] md:mb-16
          md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:text-[24px]"
          >
            <AnimatedBody
              text={`Hello there! I'm Janith Tharindu, a native Sri Lankan driven by 
                innovation and a passion for creative expression. My journey 
                into the digital realm began in the heart of the busling
                streets of Sri Lanka. Growing up surrounded by the dynamic 
                energy of the country, I developed a keen interest in harnessing
                technology to improve our digital lives.`}
            />

            <AnimatedBody
              text={`What sets me apart is not just my technical expertise but 
              also my comitment to saring great ideas that elevate 
              the digital presence of my clients, I belive that collaboration 
              and creativity are the cornerstones of progress, and I am 
              dedicated to bringing a fresh perspective to every project I 
              undertake.`}
            />

            <AnimatedBody
              text={`My academic pursuit led me to SLIIT, where I 
              delved into the world of arts and letters. It was here that my
              creative instincts flourished, and I discovered the power of merging
              artistic concepts with the limitless possibilities of the digital 
              landscape.`}
            />

            <AnimatedBody
              text={`Fueled by my love for both art and technology, I embarked on a
              career path that seamlessly blends these two worlds. Currently, I
              offer Web Design and development and Digital marketing services to
              ambitious companies brimming with increadible  potential for success.
              Whether it's crafting visually captivating websityes or devising
              innovative digital marketing stratergies, I thrive on transforming 
              ideas into impactful degital experiences.`}
            />
          </div>

          <div
            className="mb-24 flex w-[100%] flex-row gap-4 text-[18px]
          font-normal leading-relaxed tracking-wide text-[#333]/80 sm:mb-32
          md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16
          lg:text-[18px]"
          >
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Fullstack Tools"}
                className={
                  "text-[24px] text-[#333] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0,25em]"}
                charSpace={"mr-[0.01em]"}
              />

              <AnimatedBody
                text={
                  "HTML5, CSS, JavaScript, React, Next.js, MERN, Java, Kotlin, GitHub"
                }
              />
            </div>

            <div className="flex flex-col gap-3 md:gap-3">
              <AnimatedTitle
                text={"UI Libraries"}
                className={
                  "text-[24px] text-[#333] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Framer Motion, react Awesome Reveal, CSS3, Tailwind CSS, Material UI, Bootstrap, chart.js."
                }
              />
            </div>

            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design Tools"}
                className={
                  "text-[24px] text-[#333] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody text={"Figma, Adobe Photoshop, Prototyping."} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
