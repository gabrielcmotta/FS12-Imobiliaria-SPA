import React from 'react';
import './Card.css'; // Import a CSS file for styling

function Card({ title, address, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <hr />
        <p className="card-address">{address}</p>
        <hr />
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
}

export default Card;
