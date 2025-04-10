import React from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../../public/about-me.webp";

//icons
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";

//animations
import { motion } from "framer-motion";
import { bodyAnimation, imageAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import { monaSans } from "../fonts/monaSans";

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      className='relative z-10 flex h-screen w-full items-stretch justify-center bg-[url("/heros.jpg")] bg-cover bg-center py-0'
      id="home"
      initial="initial"
      animate="animate"
    >
      {/** checked background */}
      <Image
        src="/background.png"
        alt="bg"
        width={1920}
        height={1080}
        className="absolute left-0 top-0 h-full w-full bg-cover bg-center"
      />

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        {/** Connect Button */}
        <div>
          <Link
            href="#contact"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to Contact Section"
          >
            <motion.button
              className="hidden rounded-full border-2 border-[#e4ded7] py-2 px-4 font-semibold text-[#e4ded7] sm:block md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              Let's Connect
            </motion.button>
          </Link>
        </div>

        {/** Social Icons right side */}
        <div className="flex gap-10 text-[#e4ded7] sm:gap-6 md:gap-8 lg:gap-8">
          <Link
            href="https://github.com/janithRaajamunindu"
            target="_blank"
            aria-label="View Github Website"
          >
            <motion.p variants={bodyAnimation}>
              <AiFillGithub size={24} />
            </motion.p>
          </Link>

          <Link
            href="https://youtube.com/"
            target="_blank"
            aria-label="View Youtube Profile"
          >
            <motion.p variants={bodyAnimation}>
              <AiFillYoutube size={24} />
            </motion.p>
          </Link>

          <Link
            href="https://x.com/rajamunind28862"
            target="_blank"
            aria-label="View Twitter Profile"
          >
            <motion.p variants={bodyAnimation}>
              <AiFillTwitterCircle size={24} />
            </motion.p>
          </Link>

          <Link
            href="https://www.instagram.com/_datboii.janith/"
            target="_blank"
            aria-label="View Instagram Profile"
          >
            <motion.p variants={bodyAnimation}>
              <AiFillInstagram size={24} />
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          <AnimatedWords
            title="Janith Tharindu"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 
            md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px]
            md:bottom-[-130px] lg:bottom-[-190px]"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              priority
              alt="Profile"
              data-blobity-tooltip="Janith Tharindu"
              data-blobity-invert="false"
              className="w-[150px] rounded-full grayscale hover:grayscale-0 md:w-[200px] lg:w-[245px]"
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center justify-center 
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Creative Developer, Web Designer, Freelancer, Fullstack Developer.
          </p>
        </motion.div>

        <motion.div
          className="hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Emerging graphic designer focused on impactful visuals.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
