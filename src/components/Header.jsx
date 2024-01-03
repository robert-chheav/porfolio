import React from "react";
import picture from "../assets/profile-pic.png";
import Blob from "./Blob";
const Header = () => {
  return (
    <header className="relative mt-10 sm:mx-24">
      <Blob />
      <div className="grid grid-cols-3">
        <div className="sm:col-span-2">
          <span className="text-xl font-extrabold">Hey there! I'm </span>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text table">
            Robert Chheav
          </h1>
          <span className="text-xl font-bold">Software Engineer</span>
          <p>Experienced in Customer experiences and business</p>
        </div>
        <img
          src={picture}
          className="max-w-52 md:max-w-80"
          alt="robert profile picture"
        />
      </div>
    </header>
  );
};

export default Header;
