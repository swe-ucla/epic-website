import React from 'react'
import Home from './pages/Home'
import SpeakersPage from './pages/SpeakersPage'
import SchedulePage from './pages/SchedulePage'
import RsvpPage from './pages/RsvpPage'
import AboutPage from './pages/AboutPage'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <>
        <Analytics />
      <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/speakers"
                        element={<SpeakersPage />}
                    />
                    <Route
                        path="/schedule"
                        element={<SchedulePage />}
                    />
                    <Route
                        path="/rsvp"
                        element={<RsvpPage />}
                    />
                    <Route
                        path="/about"
                        element={<AboutPage />}
                    />
 
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
    </>
  );
}

export default App