import React from 'react';
import FlippableCard from './FlippableCard';
import './flippable.css';

const FlippableCardSection = () => {
  return (
    <section className="flippable-section">
      <div className="flippable-section-inner">
        <FlippableCard
          frontTitle="Advocacy"
          frontSubtitle="focus"
          backText="Filler description about our advocacy focus goes here for now."
        />
        <FlippableCard
          frontTitle="Who it’s"
          frontSubtitle="for"
          backText="Filler description about who this event is for goes here for now."
        />
        <FlippableCard
          frontTitle="Why"
          frontSubtitle="attend"
          backText="Filler description about why you should attend goes here for now."
        />
      </div>
    </section>
  );
};

export default FlippableCardSection;

