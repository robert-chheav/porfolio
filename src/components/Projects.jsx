import React from "react";
import PetApp from "../assets/home-screen-app.png";
const Projects = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-3xl font-bold mb-3 mt-5 sm:mt-0">
        Projects
      </h3>

      <img src={PetApp} alt="home-screen-app" className="w-4/12	" />
    </section>
  );
};

export default Projects;
