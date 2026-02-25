import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import flower from "../../assets/pink-flower.svg";
import epicSign from "../../assets/epic_event.jpg";
import epicEvent from "../../assets/epic_sign.jpg";
import epicEnd from "../../assets/epic_end.jpg";

const defaultImages = [epicSign, epicEvent, epicEnd];

const Carousel = ({ images = defaultImages, autoPlay = true, interval = 7000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-play
  useEffect(() => {
    if (!autoPlay || images.length === 0) return;
    const timer = setInterval(nextImage, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  if (images.length === 0) return null;

  // Calculate transform to center the current slide
  const slideWidth = 600; // matches CSS flex-basis
  const slideMargin = 20; // matches CSS margin
  const totalSlideWidth = slideWidth + (slideMargin * 2);
  // Center the current slide: calculate offset to position current slide at viewport center
  const offset = currentIndex * totalSlideWidth;
  const translateX = `calc(50% - ${offset + slideWidth / 2}px)`;

  return (
    <div className="carousel-wrapper">
      <button className="carousel-btn prev" onClick={prevImage}>
        <FaChevronLeft />
      </button>

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(${translateX})`
          }}
        >
          {images.map((img, index) => (
            <div
              className={`carousel-slide ${
                index === currentIndex ? "active" : ""
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
  );
};

export default Carousel;
