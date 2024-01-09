import React from "react";
import { hardskill } from "../data";

export const HardSkills = () => {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-5 sm:gap-8 items-center">
        {hardskill.map((skill) => {
          return (
            <li key={skill.id} className="flex flex-col items-center justify-around">
              <img src={skill.logo} alt={skill.name} className="sm:w-15 mb-2" />
              <span className="text-sm sm:text-lg">{skill.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
