import {motion} from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
// import Footer from "../components/Footer";
// import Profile from "../components/Profile";

const ProfileCanvas = () => {
  return (
    <motion.div
    variants={textVariant(fadeIn("down", "spring", 1, 1))}
    initial="hidden"
    animate="show"
    className="text-center pt-10"
    >
      My Profile
    </motion.div>
  )
}

export default ProfileCanvas