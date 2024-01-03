import React from "react";
import picture from "../assets/profile-pic.png";
const Header = () => {
  return (
    <>
      <span>Hey there! I'm </span>
      <h1 className="text-3xl font-extrabold">Robert Chheav</h1>
      <span>Software Engineer</span>
      <p>Experienced in Customer experiences and business</p>
      <img src={picture} className="max-w-52 md:max-w-80" alt="robert profile picture" />
    </>
  );
};

export default Header;
