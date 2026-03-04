import React from 'react';
import Navbar from '../components/navbar/navbar';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;

