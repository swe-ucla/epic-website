import React from 'react';
import Home from './pages/Home';
import SpeakersPage from './pages/SpeakersPage';
import RsvpPage from './pages/RsvpPage';
import ContactPage from './pages/ContactPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import MeetTheTeamPage from './pages/MeetTheTeamPage';

const App = () => {
  return (
    <>
      <Analytics />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/meet-the-team" element={<MeetTheTeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/rsvp" element={<RsvpPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;