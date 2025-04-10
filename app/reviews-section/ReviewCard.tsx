import { reviewProps } from "./reviewDetails";
import "../globals.css";
import slash from "../../public/shape-3.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Stars from "../../public/star.png";

const BlogBard = ({
  name,
  role,
  company,
  profileImg,
  testimonial,
  index,
}: reviewProps) => {
  const abbreviateName = (name: string): string => {
    const [firstname, lastname] = name.split(" ");
    return `${firstname} ${lastname[0]}.`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 10,
        transition: {
          delay: 0.1 * index,
          duration: 0.7,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="relative flex h-[473px] w-[100%] flex-col items-start justify-between rounded-[23px] border-[1px] border-[#212531] bg-transparent
    p-[28px] transition-all duration-300 hover:border-white sm:h-[450px]
    sm:items-center sm:justify-start lg:h-[420px] lg:max-w-[438px]"
    >
      {/* <Image
        src={slash}
        alt={"title"}
        className="absolute top-[34px] left-[28px] w-[50px]"
      /> */}
      <Image
        src={Stars}
        alt={"title"}
        className="absolute top-[34px] left-[28px] w-[50px]"
      />

      <p className="mt-20 text-[18px] font-[500] leading-relaxed tracking-wide text-[#e4ded7]">
        {testimonial}
      </p>

      <div className="flex gap-3 sm:absolute sm:bottom-[28px] sm:left-[28px]">
        <Image
          src={profileImg}
          alt={"title"}
          width={1600}
          height={840}
          className="h-[41px] w-[41px] rounded-full bg-contain bg-center object-cover"
        />
        <div className="flex flex-col gap-1 pr-7">
          <h3 className="w-[176px] text-[23px] font-bold uppercase leading-[20.7px] tracking-[-0.46056px] text-[#e4ded7]">
            {abbreviateName(name)}
          </h3>
          <p className="text-sm font-[500] leading-[16px] text-[#959790]">
            {role} @ {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogBard;
