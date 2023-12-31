import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { clubs } from "../constants";

const ClubCard = ({ index, name, description, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} initial="hidden" animate="show">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-darkGrey p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-card"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="club_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const ClubCanvas = () => {
  return (
    <div className="bg-darkPrimary ">
      <motion.div variants={textVariant()} initial="hidden" animate="show" className="text-center pt-10">
        <p className="sectionSubText">Extracurricular Activities</p>
        <h2 className="sectionHeadText">CLUBS</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          initial="hidden"
          animate="show"
          className="mt-3 text-light2 text-[17px] max-w-3xl leading-[30px] backdrop-blur-md bg-darkGrey bg-opacity-50 rounded-2xl border-transparent p-3"
        >
          Clubs are a great way to explore your interests, meet new people, and have fun outside the classroom. Whether you are into sports, arts, culture, or social causes, there is a club for you at the college. Here you can find a list of all the clubs available, along with their brief introduction, contact information, and upcoming events. You can also search for a club by name or category, or create your own club if you have an idea. Joining a club is easy and free, just fill out the online form and wait for the confirmation email. Don’t miss this opportunity to enrich your academic experience and make some lasting memories.
        </motion.p>
      </div>

      <div className="ml-20 mt-20 flex flex-wrap gap-7">
        {clubs.map((project, index) => (
          <ClubCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ClubCanvas;
