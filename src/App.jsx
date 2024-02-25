import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Rsvp from './components/rsvp/Rsvp'
import Navbar from './components/navbar/navbar'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
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
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
    </>
  );
}

export default App