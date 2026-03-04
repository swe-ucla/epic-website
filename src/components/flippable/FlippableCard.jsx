import React, { useState } from 'react';
import './flippable.css';

const FlippableCard = ({ frontTitle, frontSubtitle, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <button
      type="button"
      className={`flippable-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleToggle}
    >
      <div className="flippable-card-inner">
        <div className="flippable-card-face flippable-card-front">
          <p className="flippable-card-front-title">{frontTitle}</p>
          {frontSubtitle && (
            <p className="flippable-card-front-subtitle">{frontSubtitle}</p>
          )}
        </div>
        <div className="flippable-card-face flippable-card-back">
          <p className="flippable-card-back-text">{backText}</p>
        </div>
      </div>
    </button>
  );
};

export default FlippableCard;

