import "./SirenActiveSoundType.css";
import React, { useState } from "react";

const soundType = [
  {
    id: 0,
    color: "blue",
    message: "Upozorenje na nadolazeću opasnost",
  },
  {
    id: 1,
    color: "yellow",
    message: "Neposredna opasnost",
  },
  {
    id: 2,
    color: "green",
    message: "Prestanak opasnosti",
  },
  {
    id: 3,
    color: "red",
    message: "Vatrogasna uzbuna",
  },
];

// komponenta dodaje legendu zvukova sa bojama - sa hover efektom

const SirenActiveSoundType = () => {
  const [isHovering, setIsHovering] = useState(false);

  const onHoverHandler = () => {
    setIsHovering(true);
  };

  const onLeaveHandler = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="soundTypeContainer"
      onMouseEnter={onHoverHandler}
      onMouseLeave={onLeaveHandler}
    >
      {soundType.map((item) => {
        return (
          <div className="perTypeContainer" key={item.id}>
            <div
              style={{ backgroundColor: item.color }}
              className="soundColorWindow"
            ></div>
            <div type="text" className="textSoundTypeOutput">
              {isHovering && item.message}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SirenActiveSoundType;
