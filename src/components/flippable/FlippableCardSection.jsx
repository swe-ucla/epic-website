import React from 'react';
import FlippableCard from './FlippableCard';
import './flippable.css';
import AdvocacyFlower from '../../assets/advocacy-flower.svg';
import AdvocacyLeaf from '../../assets/advocacy-leaf.svg';
import Card2Plant from '../../assets/card-2-plant.svg';
import Card2Acorn from '../../assets/card-2-acorn.svg';
import Card3Flower from '../../assets/card-3-flower.svg';

const FlippableCardSection = () => {
  return (
    <section className="flippable-section">
      <div className="flippable-section-inner">
        <div className="flippable-card-wrapper">
          <FlippableCard
            frontTitle="Advocacy"
            frontSubtitle="focus"
            backText="Filler description about our advocacy focus goes here for now."
          />
          <img src={AdvocacyFlower} alt="Advocacy Flower" className="advocacy-flower-decoration" />
          <img src={AdvocacyLeaf} alt="Advocacy Leaf" className="advocacy-leaf-decoration" />
        </div>
        <div className="flippable-card-wrapper">
          <FlippableCard
            frontTitle="Who it's"
            frontSubtitle="for"
            backText="Filler description about who this event is for goes here for now."
          />
          <img src={Card2Plant} alt="Card 2 Plant" className="card-2-plant-decoration" />
          <img src={Card2Acorn} alt="Card 2 Acorn" className="card-2-acorn-decoration" />
        </div>
        <div className="flippable-card-wrapper">
          <FlippableCard
            frontTitle="Why"
            frontSubtitle="attend"
            backText="Filler description about why you should attend goes here for now."
          />
          <img src={Card3Flower} alt="Card 3 Flower" className="card-3-flower-decoration" />
        </div>
      </div>
      <div className="flippable-rsvp-container">
        <a href="/" className="flippable-rsvp-button">
          <span className="flippable-rsvp-text">RSVP</span>
        </a>
      </div>
    </section>
  );
};

export default FlippableCardSection;

