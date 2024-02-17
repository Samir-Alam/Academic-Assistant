import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Coding_club from '../assets/clubs/Coding_club.jpg';
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import {events} from '../constants'

const EventCanvas = () => {
  return (
    <div className="bg-darkPrimary h-full">
      <motion.div variants={textVariant()} initial="hidden" animate="show" className="text-center pt-10">
        <p className="sectionSubText">Explore Campus Events</p>
        <h1 className="sectionHeadText">EVENTS</h1>
      </motion.div>

      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#121212", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #121212" }}
            date="2011 - present"
            iconStyle={{ background: "#121212", color: "#fff" }}
            icon={<img src={event.image} alt={event.name} className="rounded-full"/>}
          >
            <h3 className="vertical-timeline-element-title">{event.name}</h3>
            <h4 className="vertical-timeline-element-subtitle">AEC</h4>
            <p>
              {/* Add event details here */}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default EventCanvas;
