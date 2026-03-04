import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import flower from "../../assets/pink-flower.svg";
import epicSign from "../../assets/epic_event.jpg";
import epicEvent from "../../assets/epic_sign.jpg";
import epicEnd from "../../assets/epic_end.jpg";

const defaultImages = [epicSign, epicEvent, epicEnd];

const Carousel = ({ images = defaultImages, autoPlay = true, interval = 7000 }) => {
  const imagesLength = images.length;
  const [currentIndex, setCurrentIndex] = useState(1); // start at real first image
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef(null);

  const extendedImages = [ // clone first and last images for seamless looping
    images[imagesLength - 1],
    ...images,
    images[0],
  ];

  const nextImage = () => setCurrentIndex((prev) => prev + 1);
  const prevImage = () => setCurrentIndex((prev) => prev - 1);

  // autoplay
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval]);

  // seamless reset after transition ends
  const handleTransitionEnd = () => {
    if (currentIndex === extendedImages.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(extendedImages.length - 2);
    }
  };

  // re-enable transition after invisible jump
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  if (imagesLength === 0) return null;

  const slideWidth = 600;
  const gap = 40;
  const totalSlideWidth = slideWidth + gap;
  const offset = currentIndex * totalSlideWidth;
  const translateX = `translateX(${-offset}px)`;

  const logicalIndex = currentIndex % imagesLength; // index for active state to avoid repeating on clones

  return (
    <div className="carousel-section">
      <div className="carousel-text">
        <h2>What is EPIC?</h2>
        <p>Brief description of EPIC’s mission</p>
      </div>

      <div className="carousel-wrapper">
        <button className="carousel-btn prev" onClick={prevImage}>
          <FaChevronLeft />
        </button>

        <div className="carousel-viewport">
          <div
            ref={trackRef}
            className="carousel-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: translateX,
              transition: isTransitioning ? "transform 0.6s ease" : "none"
            }}
          >
            {extendedImages.map((img, index) => (
              <div
                className={`carousel-slide ${
                  index % imagesLength === logicalIndex ? "active" : ""
                }`}
                key={index}
              >
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="carousel-image"
                />

                <img
                  src={flower}
                  alt=""
                  aria-hidden="true"
                  className="carousel-flower carousel-flower--left"
                />
                <img
                  src={flower}
                  alt=""
                  aria-hidden="true"
                  className="carousel-flower carousel-flower--right"
                />
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-btn next" onClick={nextImage}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
