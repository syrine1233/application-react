import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Shop from "./components/shop";
import Saving from "./components/saving";
import Gift from "./components/gift";
import Contact from "./components/contact";
import Client from "./components/client";
import Login from './components/Login/Login'; 
import Signup from './components/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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
