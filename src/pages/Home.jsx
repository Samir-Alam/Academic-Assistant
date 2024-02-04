import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-darkPrimary overflow-x-hidden pb-5">
      <Navbar/>
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
