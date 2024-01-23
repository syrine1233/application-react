import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import Section from "./components/home/Section";
import Shop from "./components/home/shop";
import Saving from "./components/home/saving";
import Gift from "./components/home/gift";
import Contact from "./components/home/contact";
import Client from "./components/home/client";
import Login from './components/Login/Login'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        {/* Corrected element usage */}
        <Route
          path="/"
          element={ 
            <div className="header_section">
              <Navbar />
              <Section />
              <Shop />
              <Saving />
              <Gift />
              <Contact />
              <Client />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
