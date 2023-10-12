import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState(" ");
  return (
    <div className="navbar flex px-5 w-full bg-darkGrey justify-between top-0 z-20">
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
        <p className="text-white text-[18px] font-bold cursor-pointer flex">
          ACADEMIC ASSITANT &nbsp;
          <span className="sm:block hidden">| Empowering Academics</span>
        </p>
      </Link>
      <ul className="flex flex-row gap-6 px-5 py-4 text-md text-[#ccc] m-3 rounded-lg bg-transparent font-satoshi font-medium hover:cursor-pointer ">
        {navLinks.map((link) => (
          <li className="nav-link" key={link.id}>
            <Link to={`/${link.id}`} className="">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
