import React from "react";
import { HardSkills } from "./HardSkills";

const Skills = () => {
  return (
    <section className="relative mt-10 sm:mx-24 sm:grid sm:grid-cols-2 justify-items-center text-center">
      <div className="sm:col-span-1 sm:col-start-1 sm:col-end-2 sm:row-span-2">
        <h3 className="text-xl sm:text-3xl font-bold mb-3">Hard skills</h3>
        <HardSkills />
      </div>
      <div className="sm:sm:col-span-1 sm:row-span-1">
        <h3 className="text-xl sm:text-3xl font-bold mb-3 mt-5 sm:mt-0">Soft skills</h3>
        <ul>
          <li>Problem solving</li>
          <li>Communication</li>
          <li>Teamwork and Collaboration</li>
          <li>Creativity</li>
          <li>Analytical Thinking</li>
          <li>Customer Focus</li>
        </ul>
      </div>
      <div className="sm:col-span-1 sm:col-start-2 sm:col-end-3 sm:row-span-1">
        <h3 className="text-xl sm:text-3xl font-bold mb-3 mt-5 sm:mt-0">Languages</h3>
        <ul>
          <li>French</li>
          <li>English</li>
          <li>Chinese</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
