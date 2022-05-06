import propTypes from 'prop-types';
import React from 'react';

function IngredientFoodCard({ index, name }) {
  return (
    <div data-testid={ `${index}-ingredient-card` }>
      <img
        data-testid={ `${index}-card-img` }
        src={ `https://www.themealdb.com/images/ingredients/${name}-Small.png` }
        alt={ name }
      />
      <p
        data-testid={ `${index}-card-name` }
      >
        {name}
      </p>
    </div>
  );
}

IngredientFoodCard.propTypes = {
  index: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
};

export default IngredientFoodCard;
