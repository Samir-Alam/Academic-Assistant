import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Clubs from "./pages/Clubs";
import Events from "./pages/Events";
import Academics from "./pages/Academics";
import Library from "./pages/Library";
import UserProfile from "./pages/UserProfile";
import CodingPage from "./pages/Club_Pages/CodingPage";
import HardwarePage from "./pages/Club_Pages/HardwarePage";
import PhotographyPage from "./pages/Club_Pages/PhotographyPage";
import RoboticsPage from "./pages/Club_Pages/RoboticsPage";
import SciencePage from "./pages/Club_Pages/SciencePage";
import TechPage from "./pages/Club_Pages/TechPage";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import { auth } from "./firebase";
import BBA from "./pages/Libraries/BBA"
import CSE from "./pages/Libraries/CSE"
import IT from "./pages/Libraries/IT"
import ECE from "./pages/Libraries/ECE"
import BCA from "./pages/Libraries/BCA"
import CIVIL from "./pages/Libraries/CIVIL"
import EE from "./pages/Libraries/EE"
import ME from "./pages/Libraries/ME"

const App = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
      console.log(user);
    });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="/home" element={<Home name={userName} />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/library" element={<Library />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/coding" element={<CodingPage />} />
          <Route path="/hardware" element={<HardwarePage />} />
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/robotics" element={<RoboticsPage />} />
          <Route path="/science" element={<SciencePage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cse" element={<CSE />} />
          <Route path="/it" element={<IT />} />
          <Route path="/ece" element={<ECE />} />
          <Route path="/ee" element={<EE />} />
          <Route path="/me" element={<ME />} />
          <Route path="/civil" element={<CIVIL />} />
          <Route path="/bba" element={<BBA />} />
          <Route path="/bca" element={<BCA />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
