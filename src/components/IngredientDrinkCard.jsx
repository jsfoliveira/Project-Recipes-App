import propTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import myContext from '../context/myContext';
import { requestIngredient } from '../services/RequesSearchBar';

function IngredientDrinkCard({ index, ingredient }) {
  const { setDrinks, redirect, setRedirect } = useContext(myContext);

  const clickBtn = async ({ target }) => {
    const { name } = target;
    const data = await requestIngredient(name, 'drinks');
    setDrinks(data);
    setRedirect(true);
  };

  useEffect(() => {
    const red = () => {
      setRedirect(false);
    };
    red();
  }, []);

  return (
    <div name={ ingredient } className="DrinkIngredient">
      <button type="button" name={ ingredient } onClick={ clickBtn }>
        <div name={ ingredient } data-testid={ `${index}-ingredient-card` }>
          <img
            name={ ingredient }
            data-testid={ `${index}-card-img` }
            src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png` }
            alt={ ingredient }
          />
          <p
            name={ ingredient }
            data-testid={ `${index}-card-name` }
          >
            {ingredient}
          </p>
        </div>
      </button>
      {redirect && <Redirect to="/drinks" />}
    </div>
  );
}

IngredientDrinkCard.propTypes = {
  index: propTypes.number.isRequired,
  ingredient: propTypes.string.isRequired,
};

export default IngredientDrinkCard;
