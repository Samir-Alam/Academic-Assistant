import {motion} from "framer-motion";
import { textVariant } from "../utils/motion";
// import Footer from "../components/Footer";
// import Profile from "../components/Profile";

const ProfileCanvas = () => {
  return (
    <motion.div
    variants={textVariant()}
    initial="hidden"
    animate="show"
    className="text-center pt-10"
    >
    </motion.div>
  )
}

export default ProfileCanvas