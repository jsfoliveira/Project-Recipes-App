import React from 'react';
import food from '../assets/login.jpg';
import './styles/FoodCard.css';

function FoodCard() {
  return (
    <div className="card">
      <img src={ food } className="card-img-top" alt="card" />
      <div className="card-body">
        <p className="card-text">cards content.</p>
      </div>
    </div>
  );
}

export default FoodCard;
