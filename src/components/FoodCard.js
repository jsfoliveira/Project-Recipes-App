import React from 'react';
import propTypes from 'prop-types';
import './styles/FoodCard.css';
import { Link } from 'react-router-dom';

function FoodCard(props) {
  const { food, name, index, id } = props;
  return (
    <Link to={ `/foods/${id}` }>
      <div data-testid={ `${index}-recipe-card` } className="card">
        <img
          data-testid={ `${index}-card-img` }
          src={ food }
          className="card-img-top"
          alt="card"
        />
        <div className="card-body">
          <p data-testid={ `${index}-card-name` } className="card-text">{ name }</p>
        </div>
      </div>
    </Link>
  );
}

FoodCard.propTypes = {
  food: propTypes.string,
  name: propTypes.string,
  id: propTypes.string,
  index: propTypes.string,
}.isRequired;

export default FoodCard;
