import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function IngredientDrinkCard({ index, name }) {
  return (
    <Link to="/">
      <div data-testid={ `${index}-ingredient-card` }>
        <img
          data-testid={ `${index}-card-img` }
          src={ `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png` }
          alt={ name }
        />
        <p
          data-testid={ `${index}-card-name` }
        >
          {name}
        </p>
      </div>
    </Link>
  );
}

IngredientDrinkCard.propTypes = {
  index: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
};

export default IngredientDrinkCard;
