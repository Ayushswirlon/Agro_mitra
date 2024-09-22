import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import GovernmentScheme from './components/GovernmentScheme';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/GovernmentScheme" element={<GovernmentScheme />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;