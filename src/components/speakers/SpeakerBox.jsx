import React from "react";
import "./SpeakerBox.css";
import upsideDownFlower from "../../assets/upsideDownFlower.svg"
import upwardFlower from "../../assets/upwardFlower.svg"

const SpeakerBox = ({ name, role, bio, image, reverse }) => {
  return (
    <div className={`speaker ${reverse ? "reverse" : ""}`}>
      {!reverse && (
        <img 
          src={upsideDownFlower} 
          className="flower-decor flower-top" 
          alt="" 
        />
      )}

      {reverse && (
        <img 
          src={upwardFlower} 
          className="flower-decor flower-bottom" 
          alt="" 
        />
      )}

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