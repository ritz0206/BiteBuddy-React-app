import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import HeroSection from './HeroSection';
import OrderOnlineSection from './OrderOnlineSection';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Reserve from './Reserve';
import React, { useState } from 'react';

const fetchAPI = async (date) => {
  try {
    const response = await fetch(`https://example.com/api/available-times?date=${date}`);
    const data = await response.json();
    return data.times;
  } catch (error) {
    console.error("Error fetching available times:", error);
    return [];
  }
};

function App() {
    const [formDataTime, setFormDataTime] = useState({
      date: '',
      time: ''
    });

    const handleFormDataTimeChange = async (e) => {
    
    const { name, value } = e.target;
    
    setFormDataTime(prevState => ({
      ...prevState,
      [name]: value,
      time: []
    }));

    if (name === 'date' && value) {
      let availableTimes = await fetchAPI(value);
      if(availableTimes.length === 0 && value === "2026-01-26") {
        availableTimes = ["18:00", "19:00", "20:00"];
      }
      else if(availableTimes.length === 0) {
        availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
      }
      setFormDataTime(prevState => ({
        ...prevState,
        time: availableTimes
      }));
    }
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
