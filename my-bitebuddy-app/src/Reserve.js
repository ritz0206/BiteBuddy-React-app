import React, { useState } from 'react';
import './Reserve.css';
import { useNavigate } from 'react-router-dom';

const Reserve = ({ formDataTime, handleFormDataTimeChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '',
    date: '',
    time: '',
    occasion: ''
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      date: formDataTime.date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation details:", formData);
    console.log("Reservation details:", formDataTime);
    alert("Reservation request is sent!");
    navigate('/confirmation', { state: { date: formData.date, time: formData.time } });
    setFormData({
      name: '',
      email: '',
      guests: '',
      date: '',
      time: '',
      occasion: ''
    });
    handleFormDataTimeChange({target: { name: 'date', value: '' }});
  };

  return (
    <div className="reserve-container">
      <h1>Reserve Table</h1>
      <form onSubmit={handleSubmit} className="reserve-form">
        <div className="form-group">
          <label htmlFor="name"><span className="required">*</span>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email"><span className="required">*</span>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="guests"><span className="required">*</span>Number of guests:</label>
          <input
            type="number"
            id="guests"
            placeholder="1" min="1" max="10"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date"><span className="required">*</span>Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formDataTime.date}
            onChange={handleFormDataTimeChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time"><span className="required">*</span>Time:</label>
          <select
            id="time"
            name="time"
            value={formData.time || ''}
            onChange={handleChange}
          >
            {
              formDataTime.time && formDataTime.time.length > 0
                ? formDataTime.time.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))
                : <option value="">Select a time</option>
            }

          </select>
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion || ''}
            onChange={handleChange}
          >
            <option value="">Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Casual">Casual</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Submit Reservation</button>
      </form>
    </div>
  );
};

export default Reserve;
