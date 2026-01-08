import React from 'react';
import './Confirmation.css';
import GreenTick from './assets/greenTick.png';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation(); 
  const { date, time } = location.state || {}; 

  if (!date || !time) {
    return <p>No reservation details found.</p>;
  }
  return (
    <div className="confirmation-container">
      <img
        src={GreenTick}
        alt="Green Tick"
        className="confirmation-icon"
      />

      <h2 className="confirmation-message">Reservation Confirmed</h2>

      <div className="confirmation-details">
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
      </div>
    </div>
  );
};

export default Confirmation;
