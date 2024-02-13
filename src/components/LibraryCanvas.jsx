import { motion } from 'framer-motion'
import { branches } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const LibraryCard = ({ index, name, id, image }) => {
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
          className="bg-darkGrey p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-card"
        >
          <Link to={`/${id}`}>
            <div className="relative w-full h-[230px]">
              <img
                src={image}
                alt="branch image"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
  
            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
            </div>
          </Link>
        </Tilt>
      </motion.div>
    );
  };

const LibraryCanvas = () => {
  return (
    <div className="bg-darkPrimary ">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="text-center pt-10"
      >
        <p className="sectionSubText">Pick A Course To Get Started</p>
        <h2 className="sectionHeadText">Library</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          initial="hidden"
          animate="show"
          className="mt-3 text-light2 text-[17px] max-w-3xl leading-[30px] backdrop-blur-md bg-darkGrey bg-opacity-50 rounded-2xl border-transparent p-3"
        >
          The Library&apos;s extensive collection of books, spanning a myriad of genres and disciplines, forms the bedrock of its intellectual offerings. From timeless classics to cutting-edge research materials, the library&apos;s shelves hold the keys to unlocking a world of knowledge and understanding. Whether delving into the depths of historical narratives, unraveling the mysteries of scientific breakthroughs, or immersing oneself in the imaginative realms of literature, the library provides a boundless source of intellectual enrichment.
        </motion.p>
      </div>

      <div className="ml-20 mt-20 flex flex-wrap gap-7">
        {branches.map((branch, index) => (
          <LibraryCard key={`branch-${index}`} index={index} {...branch} />
        ))}
      </div>
    </div>
  )
}

export default LibraryCanvas