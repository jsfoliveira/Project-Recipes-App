import React from 'react';
import { Link } from 'react-router-dom';
import Drink from '../images/drinkIcon.svg';
import Explore from '../images/exploreIcon.svg';
import Food from '../images/mealIcon.svg';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <Link
        to="/drinks"
        type="button"
      >
        <img
          src={ Drink }
          alt="Drinks"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link
        to="/explore"
        type="button"
      >
        <img
          src={ Explore }
          alt="Explore"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link
        to="/foods"
        type="button"
      >
        <img
          src={ Food }
          alt="Food"
          data-testid="food-bottom-btn"
        />
      </Link>

    </footer>
  );
}

export default Footer;
