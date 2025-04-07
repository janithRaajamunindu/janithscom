import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

type AnimatedTitleProps = {
    text: string;
    className?: string; // Optional className
    wordSpace: string;  // Space between words
    charSpace: string;  // Space between characters
    delay?: number;     // Optional delay
};

export default function AnimatedTitle({
    text,
    className = "",
    wordSpace,
    charSpace,
    delay = 0, // Default delay
}: AnimatedTitleProps) {

    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        } else {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    const wordAnimation = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay, staggerChildren: 0.2 } },
    };

    const characterAnimation = {
        hidden: {
            opacity: 0,
            y: "0.25em",
        },
        visible: {
            opacity: 1,
            y: "0em",
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    return (
        <h2 aria-label={text} role="heading" className={className}>
            {text.split(" ").map((word, index) => {
                return (
                    <motion.span
                        ref={ref}
                        aria-hidden="true"
                        key={index}
                        initial="hidden"
                        animate={ctrls}
                        variants={wordAnimation}
                        transition={{
                            delayChildren: index * 0.25,
                            staggerChildren: 0.05,
                        }}
                        className={'inline-block whitespace-nowrap ${wordSpace}'}
                    >
                        {word.split("").map((character, index) => {
                            return (
                                <motion.span
                                    aria-hidden="true"
                                    key={index}
                                    variants={characterAnimation}
                                    className={'inline-block ${charSpace}'}
                                >
                                    {character}
                                </motion.span>
                            )
                        })
                        }
                    </motion.span>
                )
            })
            }
        </h2>
    );
}
