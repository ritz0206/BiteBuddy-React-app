import React from "react";
import "./AboutUs.css";
import RestaurantImage from "./assets/LittleLemonRestaurant.png";

export default function AboutUs() {
  return (
    <div className="about-us">
      <section className="about-section">
        <div className="about-text">
          <h2 className="about-title">Little Lemon</h2>
          <h3 className="about-subtitle">Chicago</h3>
          <p className="about-description">
            Welcome to Little Lemon, your go-to Mediterranean restaurant in the heart of Chicago. We are passionate about bringing you the authentic flavors of the Mediterranean, crafted with traditional recipes and a modern twist. Our family-owned establishment prides itself on using fresh, locally-sourced ingredients to create dishes that are both delicious and wholesome.
          </p>
          <p className="about-description">
            At Little Lemon, we believe that dining is not just about food; it's about creating memorable experiences. Whether you're joining us for a casual lunch, a romantic dinner, or a special celebration, our warm and inviting atmosphere is perfect for any occasion. Our dedicated team is committed to providing exceptional service and ensuring that every visit leaves you satisfied and eager to return.
          </p>
          <p className="about-description">
            Thank you for choosing Little Lemon. We look forward to serving you and sharing the vibrant tastes of the Mediterranean with you.
          </p>
        </div>
        <div className="about-image">
          <img
            src={RestaurantImage}
            alt="About Us"
          />
        </div>
      </section>
    </div>
  );
}
