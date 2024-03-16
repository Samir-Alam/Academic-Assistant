import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
// import { clubs } from "../constants";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import add from "../assets/clubs/add-more.png";
import { getDatabase, onValue, ref } from "firebase/database";
import {Trash2} from 'lucide-react'
import { deleteClubData } from "../firebase";

// eslint-disable-next-line react/prop-types
const ClubCard = ({ index, name, id, description, image }) => {

  const handleDelete = (e) => {
    e.stopPropagation();
    e.preventDefault();
    deleteClubData(id);
    console.log("Deleted Successfully");
    
  }
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-darkGrey p-5 max-xs:p-4 rounded-2xl sm:w-[360px] w-full max-xs:w-[90vw] hover:shadow-card"
      >
        <Link to={`/${id}`}>
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="club_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            {id != "addclub" && <button className="absolute top-1 right-1 hover:scale-120" onClick={handleDelete}><Trash2 className="text-white opacity-60 hover:opacity-100 hover:transition-all"/></button>}
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  );
};

const ClubCanvas = () => {

  const db = getDatabase();
  const reference = ref(db, "/clubs")
  const allClubs = [];
  onValue(reference, async (snapshot) => {
    await snapshot.forEach((club) => {
      allClubs.push(club.val());
    })
  })
  
  console.log(allClubs);
  const currUser = getAuth().currentUser;
  const uid = currUser.uid != null? currUser.uid : "";
  let ind = allClubs.length;
  return (
    <div className="bg-darkPrimary ">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="text-center pt-10"
      >
        <p className="sectionSubText">Extracurricular Activities</p>
        <h2 className="sectionHeadText">CLUBS</h2>
      </motion.div>

      <div className="w-full max-xs:w-[90%] flex justify-center max-xs:ml-5">
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          initial="hidden"
          animate="show"
          className="mt-3 text-light2 text-[17px] max-xs:text-[10px] max-xs:font-mono max-w-3xl leading-[30px] backdrop-blur-md bg-darkGrey bg-opacity-50 rounded-2xl border-transparent p-3"
        >
          Clubs are a great way to explore your interests, meet new people, and
          have fun outside the classroom. Whether you are into sports, arts,
          culture, or social causes, there is a club for you at the college.
          {window.screen.width > 750 && 
          "Here you can find a list of all the clubs available, along with their brief introduction, contact information, and upcoming events. You can also search for a club by name or category, or create your own club if you have an idea. Joining a club is easy and free, just fill out the online form and wait for the confirmation email. Don’t miss this opportunity to enrich your academic experience and make some lasting memories." }
        </motion.p>
      </div>

      <div className="ml-20 max-xs:ml-5 mt-20 max-xs:mt-10 flex flex-wrap gap-7 max-xs:gap-4">
        {allClubs.map((club, index) => (
          <ClubCard key={`project-${index}`} index={index} name={club.name} id={club.id} description={club.description} image={club.image}/>
        ))}

        {/* {clubs.map((project, index) => (
          <ClubCard key={`project-${index}`} index={index} {...project} />
        ))} */}
        
        {uid === "ZmpUeulhIff6KUBUbYm9KaQAOz13" &&
          <ClubCard key={`project-null`} index={ind} name="Add More Clubs" id="addclub" discription={null} image={add} />
        }
      </div>
    </div>
  );
};

export default ClubCanvas;
