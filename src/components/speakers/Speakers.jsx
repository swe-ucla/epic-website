import React from "react";
import SpeakerBox from "./SpeakerBox";
import './speakers.css'

import Combs from "../../assets/Combs.png";
import Jones from "../../assets/Jones.png";
import Krider from "../../assets/Krider.png";

const speakers = [
  {
    name: "Dr. Tamara Jones",
    role: "Apple",
    image: Jones,
    reverse: false,
    bio: "Dr. Jones works on developing accessible and inclusive technologies that empower users across diverse communities."
  },
  {
    name: "Dr. Jennifer Combs",
    role: "Stanford Medicine",
    image: Combs,
    reverse: true,
    bio: "Dr. Combs studies biomedical innovation and the intersection of engineering and healthcare."
  },
  {
    name: "Dr. Brian Krider",
    role: "Google",
    image: Krider,
    reverse: false,
    bio: "Dr. Krider focuses on scalable systems and emerging technologies that drive impactful digital solutions."
  }
];

const Speakers = () => {
  return (
    <section>
      <h1 className="speakers-title">Speakers</h1>

      {speakers.map((speaker, index) => (
        <SpeakerBox
          key={index}
          name={speaker.name}
          role={speaker.role}
          bio={speaker.bio}
          image={speaker.image}
          reverse={speaker.reverse}
        />
      ))}
    </section>
  );
};

export default Speakers;