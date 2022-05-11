import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function CardDrink({ index, strDrinkThumb, strDrink, id }) {
  return (
    <Link to={ `/drinks/${id}` }>
      <div className="card" data-testid={ `${index}-recipe-card` }>
        <img
          data-testid={ `${index}-card-img` }
          src={ strDrinkThumb }
          alt={ strDrink }
          className="card-img-top"
        />
        <div className="card-body">
          <p data-testid={ `${index}-card-name` }>{ strDrink }</p>
        </div>
      </div>
    </Link>
  );
}

CardDrink.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  strDrink: PropTypes.string.isRequired,
  strDrinkThumb: PropTypes.string.isRequired,
};

export default CardDrink;
