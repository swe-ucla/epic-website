import React from 'react';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/navbar';
import Carousel from '../components/carousel/Carousel';
import HomeSchedule from '../components/homeSchedule/HomeSchedule';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Carousel />
      <HomeSchedule />
      <Footer />
    </div>
  );
};

export default Home;