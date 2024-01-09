import React, { useState } from "react";
import { buttons } from "../data";

export const Buttons = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-5 w-screen">
      {buttons.map((button) => {
        return (
          <div key={button.id}>
            <a
              href={button.link}
              className="flex gap-x-3 w-max bg-blue-800 px-3 py-2 rounded-md"
            >
              <img src={button.img} alt={button.name} />
              <p>{button.name}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};
