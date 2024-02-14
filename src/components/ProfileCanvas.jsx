import {motion} from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
// import Footer from "../components/Footer";
// import Profile from "../components/Profile";

const ProfileCanvas = () => {
  let male = true;

  return (
    <div className="bg-darkPrimary h-max pb-16 flex flex-col justify-center items-center text-center">
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
        variants={fadeIn("", "spring", 0.3, 1)}
        initial="hidden"
        animate="show"
        className="bg-darkGrey h-max w-max m-10 p-10 rounded-xl flex flex-col justify-center text-center"
      >
        {male ? 
        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Student.png" alt="Student" width="175" height="175" />
        : 
          <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Student.png" alt="Woman Student" width="175" height="175" />
        }
        <h2 className="sectionHeadText">My Name</h2>
        <p className="sectionSubText">~~~~~~💖~~~~~~</p>
        <h2 className="sectionHeadText">Roll</h2>
        <p className="sectionSubText">~~~~~~💖~~~~~~</p>
        {/* <h2 className="sectionHeadText">My Name</h2>
        <p className="sectionSubText">~~~~~~💖~~~~~~</p>
        <h2 className="sectionHeadText">My Name</h2>
        <p className="sectionSubText">~~~~~~💖~~~~~~</p> */}
      </motion.div>
    </div>
  )
}

export default ProfileCanvas