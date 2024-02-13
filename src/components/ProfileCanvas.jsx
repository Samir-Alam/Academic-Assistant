import {motion} from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
// import Footer from "../components/Footer";
// import Profile from "../components/Profile";

const ProfileCanvas = () => {
  return (
    <div className="bg-darkPrimary h-max">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="text-center pt-10"
      >
        <h2 className="sectionHeadText">My Profile</h2>
        <p className="sectionSubText">~~~~~~💖~~~~~~</p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "spring", 0.3, 1)}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col items-center justify-center bg-darkGrey h-[5em] w-max mx-auto mt-10 rounded-xl">

        </div>
        <div>

        </div>
      </motion.div>
    </div>
  )
}

export default ProfileCanvas