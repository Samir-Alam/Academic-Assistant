// import student1 from "../assets/student1.jpg";
import Coding_club from "../assets/clubs/Coding_club.jpg";
import Hardware_club from "../assets/clubs/Hardware_club.jpg";
// import Hardware_club_1 from "../assets/clubs/Hardware_club_1.jpg";
import Photography_club from "../assets/clubs/Photography_club.jpg";
import Robotics_club from "../assets/clubs/Robotics_club.png";
import Science_club from "../assets/clubs/Science_club.jpg";
// import Science_club_1 from "../assets/clubs/Science_club_1.jpg";
import Tech_club from "../assets/clubs/Tech_club.jpeg";

import Dancing from "../assets/events/Dancing.jpeg";
import Singing from "../assets/events/Singing.jpg";
import Sports from "../assets/events/Sports.jpeg";
import Technova from "../assets/events/Technova.jpeg";
// import { UserCircle2 } from "lucide-react";
// import Dropdown from "../components/dropdown";
import bba from "../assets/branch/bba.jpeg"
import bca from "../assets/branch/bca.jpeg"
import civil from "../assets/branch/civil.jpeg"
import cse from "../assets/branch/cse.jpeg"
import ece from "../assets/branch/ece.jpeg"
import ee from "../assets/branch/ee.jpeg"
import it from "../assets/branch/it.jpeg"
import me from "../assets/branch/me.jpeg"

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "clubs",
    title: "Clubs",
  },
  {
    id: "events",
    title: "Events",
  },
  {
    id: "academics",
    title: "Academics"
  },
  {
    id: "library",
    title: "Library"
  },
  // {
  //   id: "user",
  //   // title: <UserCircle2 className="transform-cpu"/>
  //   title: <Dropdown />
  // }
];

export const clubs = [
  {
    name: "Coding Club",
    id: "coding",
    description:
      "A club for students who love to code and learn new programming languages and technologies. You can work on various projects, challenges, and competitions with other coding enthusiasts. Whether you are a beginner or an expert, you will find something to enjoy in this club",
    image: Coding_club,
  },
  {
    name: "Robotics Club",
    id: "robotics",
    description:
      "A club for students who are interested in robotics and engineering. You can design, build, and program robots using different tools and materials. You can also participate in robotics events and contests with other teams. This club will help you develop your creativity and problem-solving skills",
    image: Robotics_club,
  },
  {
    name: "Science Club",
    id: "science",
    description:
      "A club for students who are curious about science and the natural world. You can explore different topics and phenomena through experiments, demonstrations, and field trips. You can also share your findings and ideas with other science lovers. This club will spark your imagination and passion",
    image: Science_club,
  },
  {
    name: "Photography Club",
    id: "photography",
    description:
      "A club for students who have a passion for photography and art. You can learn how to take beautiful photos using different cameras and techniques. You can also showcase your work and get feedback from other photographers. This club will help you capture the moments and express yourself",
    image: Photography_club,
  },
  {
    name: "Hardware Club",
    id: "hardware",
    description:
      "A club for students who are fascinated by hardware and electronics. You can learn how to use various components and devices to create your own projects and inventions. You can also collaborate with other hardware enthusiasts and exchange tips and tricks. This club will help you discover the wonders of hardware",
    image: Hardware_club,
  },
  {
    name: "Tech Club",
    id: "tech",
    description:
      "A club for students who are enthusiastic about technology and innovation. You can learn about the latest trends and developments in the tech industry and society. You can also discuss and debate various issues and topics related to technology with other tech-savvy people.",
    image: Tech_club,
  },
];



export const events = [
  {
    name: "Dance",
    description: "",
    image: Dancing,
  },
  {
    name: "Singing",
    description: "",
    image: Singing,
  },
  {
    name: "Technova",
    description: "",
    image: Technova,
  },
  {
    name: "Sports",
    description: "",
    image: Sports,
  },
];

export const branches = [
  {
    name: "Computer Science Engineering",
    id: "cse",
    image: cse,
  },
  {
    name: "Information Technology",
    id: "it",
    image: it,
  },
  {
    name: "Electronics and Communication Engineering",
    id: "ece",
    image: ece,
  },
  {
    name: "Electrical and Electronics Engineering",
    id: "ee",
    image: ee,
  },
  {
    name: "Mechanical Engineering",
    id: "me",
    image: me,
  },
  {
    name: "Civil Engineering",
    id: "civil",
    image: civil,
  },
  {
    name: "Bachelor of Business Administration",
    id: "bba",
    image: bba,
  },
  {
    name: "Bachelor of Computer Applications",
    id: "bca",
    image: bca,
  },
]