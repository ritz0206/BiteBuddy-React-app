import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import HeroSection from './HeroSection';
import OrderOnlineSection from './OrderOnlineSection';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Reserve from './Reserve';
import React, { useState } from 'react';

function App() {
    const [formDataTime, setFormDataTime] = useState({
      date: '',
      time: ''
    });

    const handleFormDataTimeChange = (e) => {
    const { name, value } = e.target;
    
    setFormDataTime(prevState => {
      if (name === 'date' && value === '') {
        return{
          ...prevState,
          [name]: value,
          time : ''
        };
      }
      else if (name === 'date' && value === "2026-01-17") {
        return{
          ...prevState,
          [name]: value,
          time : ['18:00', '19:00', '20:00']
        };
      }
      return {
      ...prevState,
      [name]: value,
      time: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    };
    });
  };
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <OrderOnlineSection />
              <AboutUs />
            </>
          }
        />
        <Route path="/reserve" element={<Reserve formDataTime={formDataTime} handleFormDataTimeChange={handleFormDataTimeChange} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
