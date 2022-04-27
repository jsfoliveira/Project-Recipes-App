import React from 'react';
import { useHistory } from 'react-router-dom';
import Drink from '../images/drinkIcon.svg';
import Explore from '../images/exploreIcon.svg';
import Food from '../images/mealIcon.svg';
import './styles/Footer.css';

function Footer() {
  const history = useHistory();
  return (
    <footer className="footer" data-testid="footer">
      <img
        src={ Drink }
        alt="Drinks"
        data-testid="drinks-bottom-btn"
        onTouchStart={ () => history.push('/drinks') }
      />
      <img
        src={ Explore }
        alt="Explore"
        data-testid="explore-bottom-btn"
        onTouchStart={ () => history.push('/explore') }
      />
      <img
        src={ Food }
        alt="Food"
        data-testid="food-bottom-btn"
        onTouchStart={ () => history.push('/foods') }
      />

    </footer>
  );
}

export default Footer;
