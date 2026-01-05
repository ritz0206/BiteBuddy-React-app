import React from "react";
import "./OrderOnlineSection.css";
import greekSaladImg from "./assets/greeksalad.png";   // Replace with your actual images
import bruschettaImg from "./assets/bruschetta.png";
import lemonDessertImg from "./assets/lemondessert.png";

export default function OrderOnlineSection() {
  const specials = [
    {
      id: 1,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSaladImg,
    },
    {
      id: 2,
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruschettaImg,
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonDessertImg,
    },
  ];

  return (
    <section className="order-section">
      <div className="order-header">
        <h2>This week specials!</h2>
        <button className="online-menu-btn">Online menu</button>
      </div>
      <div className="specials-container">
        {specials.map((item) => (
          <div key={item.id} className="special-card">
            <img src={item.image} alt={item.title} className="special-image" />
            <div className="special-info">
              <h3 className="special-title">{item.title}</h3>
              <span className="special-price">{item.price}</span>
              <p className="special-description">{item.description}</p>
              <button className="order-delivery-btn">Order a Delivery</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
