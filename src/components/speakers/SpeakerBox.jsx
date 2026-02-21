import React from "react";
import "./speakerBox.css";

const SpeakerBox = ({ name, role, bio, image, reverse }) => {
  return (
    <div className={`speaker ${reverse ? "reverse" : ""}`}>
      <div className="speaker__image">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="speaker__placeholder" />
        )}
      </div>

      <div className="speaker__content">
        <h2 className="speaker__name">{name}</h2>
        <p className="speaker__role">{role}</p>
        <p className="speaker__bio">{bio}</p>
      </div>
    </div>
  );
};

export default SpeakerBox;