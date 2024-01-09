import React from "react";

const Skills = () => {
  return (
    <section className="relative mt-10 sm:mx-24 grid grid-cols-2">
      <div className="col-span-1 col-start-1 col-end-2 row-span-2">
        <h3>Hard skills</h3>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
      <div className="col-span-1 row-span-1">
        <h3>Soft skills</h3>
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
        <h3>Languages</h3>
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
