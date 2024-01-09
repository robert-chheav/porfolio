import React from "react";
import { HardSkills } from "./HardSkills";

const Skills = () => {
  return (
    <section className="relative mt-10 sm:mx-24 grid grid-cols-2 justify-items-center text-center">
      <div className="col-span-1 col-start-1 col-end-2 row-span-2">
        <h3 className="text-xl sm:text-3xl font-bold mb-3">Hard skills</h3>
        <HardSkills />
      </div>
      <div className="col-span-1 row-span-1">
        <h3 className="text-xl sm:text-3xl font-bold mb-3">Soft skills</h3>
        <ul>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
        </ul>
      </div>
      <div className="col-span-1 col-start-2 col-end-3 row-span-1">
        <h3 className="text-xl sm:text-3xl font-bold mb-3">Languages</h3>
        <ul>
          <li>French</li>
          <li>English</li>
          <li></li>Chinese
        </ul>
      </div>
    </section>
  );
};

export default Skills;
