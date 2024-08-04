"use client"

import { motion } from "framer-motion";
import Image from "next/image";


// get another animation for the photo or use something else entirely
const Photo = () => {
  return (
    <div className="w-full h-full relative ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[500px] xl:h-[500px] mix-blend-lighten absolute rounded-full bg-accent">
          <Image
            src="/assets/mm.png"
            priority
            quality={100}
            fill
            alt="logo"
            className="object-contain"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="02 02 506 506"
          xmlns="https://www.w3.org/2000/svg"
        >
          <motion.circle cx="253" cy="253" r="258" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" initial={{ strokeDasharray: "24 10 0 0" }} animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 92", "4 258 22 22"], rotate: [120, 360], }}
            transition={{
              duration: 20, repeat: Infinity, repeatType: "reverse",
            }}
          />
        </motion.svg>

      </motion.div>
    </div>
  );
};

export default Photo;