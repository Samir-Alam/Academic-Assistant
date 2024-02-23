import {motion} from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { writeUserData } from "../firebase";
import { getDatabase, ref,  onValue} from "firebase/database";

// import Footer from "../components/Footer";
// import Profile from "../components/Profile";

const ProfileCanvas = () => {

  const currUser = getAuth().currentUser;
  let set = false;
  const db = getDatabase();
  const reference = ref(db, 'users/' + currUser.uid);

  const [male, setMale] = useState(true);
  const [maleBtn, setMaleBtn] = useState("text-white");
  const [femaleBtn, setFemaleBtn] = useState("text-white");

  onValue(reference, async (snapshot) => {
    const data = await snapshot.val();
    if (data.gender === "Male")
      setMale(true);
    else
      setMale(false);
  });
  
  const handleMaleGender = () => {
    setMale(true);
    setMaleBtn("text-blue-600 bg-white scale-120 font-bold");
    setFemaleBtn('text-white');
    onValue(reference, async (snapshot) => {
      const data = await snapshot.val();
      if(!set){
        writeUserData(currUser.uid, currUser.displayName, currUser.email, data.password, "Male")
        set = true;
      }
    });
  }
  const handleFemaleGender = () => {
    setMale(false);
    setFemaleBtn("text-blue-600 bg-white scale-120 font-bold");
    setMaleBtn('text-white');
    onValue(reference, async (snapshot) => {
      const data = await snapshot.val();
    if(!set){
      writeUserData(currUser.uid, currUser.displayName, currUser.email, data.password, "Female")
      set = true;
    }
    });
  }
  return (
    <div className="bg-darkPrimary h-max max-xs:h-[90vh] max-xs:overflow-y-hidden pb-16 flex flex-col justify-center items-center text-center">
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
        className="bg-darkGrey h-max w-max m-10 p-10 rounded-xl flex flex-col justify-center items-center align-middle text-center"
      >
        <div className="flex gap-4">
          <button className={`${maleBtn} font-mono py-1 px-3 rounded-xl transition ease-in-out`} onClick={handleMaleGender}>Male</button>
          <button className={`${femaleBtn} font-mono py-1 px-3 rounded-xl transition ease-in-out`} onClick={handleFemaleGender}>Female</button>
        </div>
        {male ? 
        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Student.png" alt="Student" width="175" height="175" />
        : 
          <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Student.png" alt="Woman Student" width="175" height="175" />
        }
        <h2 className="sectionHeadText">{getAuth().currentUser && getAuth().currentUser.displayName}</h2>
        <p className="sectionSubText">{currUser && '~~~~~~💖~~~~~~'}</p>
        <h2 className="sectionHeadText">{currUser && currUser.email}</h2>
        <p className="sectionSubText">{currUser && '~~~~~~💖~~~~~~'}</p>
        {/* <h2 className="sectionHeadText">My Name</h2>
        <p className="sectionSubText">~~~~~~💖~~~~~~</p>
        <h2 className="sectionHeadText">My Name</h2>
        <p className="sectionSubText">~~~~~~💖~~~~~~</p> */}
      </motion.div>
    </div>
  )
}

export default ProfileCanvas