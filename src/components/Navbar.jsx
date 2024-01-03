import React from "react";
import { navLinks } from "../assets";
import logo from "../assets/logo.svg";
// import { logo } from "../assets";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center sm:mx-20">
      <a href="/index.html" className="flex w-10">
        <img src={logo} alt="" />
      </a>
      <ul className="flex gap-5">
        <li className="hover:text-cyan-400">
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>About me</li>
      </ul>
    </nav>
  );
};

export default Navbar;
