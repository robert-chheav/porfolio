import React from "react";
import PetApp from "../assets/home-screen-app.png";
const Projects = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-3xl font-bold mb-3 mt-5 sm:mt-0">
        Projects
      </h3>

      <div className="flex">
        <img src={PetApp} alt="home-screen-app" className="w-4/12" />
        <ul>
            <h4>PetLovers</h4>
            <p>Report a missing or found pet (2023)</p>

            <li>
              <strong>Project aim :</strong>
              Final project at Le Wagon, our team of four developed a
              mobile-first web app using Rails, JavaScript, and CSS. The app
              lets you report lost or missing pets effortlessly
            </li>
            <li>
              <strong>My contribution :</strong>
              Led a team of three students, implementing an agile SCRUM/KANBAN
              framework for collaboration. Primarily focused on the front-end of
              the project, but also made significant contributions to the
              backend.
            </li>
            <li>
              <strong>Tech stack :</strong>
              Ruby on Rails, JavaScript (Stimulus) and Sass
            </li>
          </ul>
      </div>
    </section>
  );
};

export default Projects;
