import React from 'react';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/navbar';
import Timer from '../components/timer/Timer';
import Carousel from '../components/carousel/Carousel';
import FlippableCardSection from '../components/flippable/FlippableCardSection';
import HomeSchedule from '../components/homeSchedule/HomeSchedule';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="timer-container">
        <Timer />
      </div>
      <Carousel />
      <FlippableCardSection />
      <HomeSchedule />
      <Footer />
    </div>
  );
};

export default Home;