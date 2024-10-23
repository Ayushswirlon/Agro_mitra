import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import GovernmentScheme from './components/GovernmentScheme';
import ContactUs from './components/ContactUs';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/government-scheme" element={<GovernmentScheme />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;