import React from "react";
import group from "../assets/group.jpg";
import aec from "../assets/aec.png";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const About = () => {
  return (
    <section className=" py-16 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10 md:flex-row justify-between w-full">
          <motion.div
            variants={slideIn("left", "tween", 0.1, 0.5)}
            initial="hidden"
            animate="show"
            className="md:w-3/4"
          >
            <h2 className="text-3xl font-bold mb-4 sectionHeadText">
              About Us
            </h2>
            <p className="text-light2 leading-loose mt-10">
            Asansol Engineering College, a self financing institute was established in the year 1998. It is situated at Asansol, Burdwan, West Bengal. It offers B.Tech, MCA and M.Tech in various disciplines. The college is approved by All India Council for Technical Education (AICTE), affiliated to Maulana Abul Kalam Azad University of Technology (MAKAUT) [Formerly - West Bengal University of Technology (WBUT)] and recognized by UGC under section 2f of the UGC Act, 1956.
            </p>
            {/* <p className="text-light2 leading-loose mt-4">
              Vivamus auctor, velit at suscipit eleifend, metus ligula varius
              nisi, eu vehicula ipsum odio at arcu. Sed eget vestibulum purus,
              id pharetra lectus. <br /> Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Earum libero, voluptatibus optio porro nesciunt
              eveniet modi ex accusamus sunt nulla!
            </p> */}
          </motion.div>
          <motion.div
            variants={slideIn("right", "tween", 0.1, 0.5)}
            initial="hidden"
            animate="show"
            className="md:w-1/2 mt-8 md:mt-0 animate-spin"
          >
            <img src={aec} alt="Team" className="rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
