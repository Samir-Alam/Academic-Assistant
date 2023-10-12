import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className="absolute w-full h-screen mx-auto bg-hero-pattern3 bg-cover ">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-10  paddingX flex flex-row items-start gap-5`}
      >
        {/* <div className="bg-hero-pattern3 blur-md -z-10 absolute h-max"></div> */}
        <motion.div variants={textVariant()} initial="hidden" animate="show" className="flex flex-col justify-center items-center mt-5 backdrop-blur-md p-6 rounded-lg shadow-lightCard  border-[1px] border-transparent">
          <h1 className={` heroHeadText text-white`}>
          Welcome To <br className="sm:block hidden" /> <span className="text-darkBlue">The Academic Assistant</span>
          </h1>
          <p className={` heroSubText mt-2 text-darkPrimary text-2xl`}>
            The smart way to manage your academic life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
