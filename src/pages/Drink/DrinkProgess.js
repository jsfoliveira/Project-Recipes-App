import { PropTypes } from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Alert from '../../components/Alert';
import useFavorite from '../../context/hooks/useFavorite';
import useIngredients from '../../context/hooks/useIngredients';
import useLocalStorage from '../../context/hooks/useLocalStorage';
import useTimeOut from '../../context/hooks/useTimeOut';
import BlackHeart from '../../images/blackHeartIcon.svg';
import Share from '../../images/shareIcon.svg';
import WhiteHeart from '../../images/whiteHeartIcon.svg';
import renderIngredients from '../../services/renderIngredients';
import testDrink from '../../services/testDrink';
import './styles/DrinkProgress.css';

const copy = require('clipboard-copy');

const DRINK = 'drink';

const { idDrink: id, strArea: nationality, strCategory: category,
  strAlcoholic: alcoholicOrNot, strDrink: name, strDrinkThumb: image } = testDrink[0];
const favoriteObj = {
  id,
  nationality,
  type: 'food',
  category,
  alcoholicOrNot,
  name,
  image,
};

function FoodProgress({ match }) {
  const { params } = match;
  const { ingredients, setIngredients, handleIngredients } = useIngredients();
  const { favoriteRecipe, setFavoriteRecipe, handleFavorite } = useFavorite();
  const { inProgress, sendToInProgress, sendToFavoriteRecipes } = useLocalStorage();
  const { show, timeOut } = useTimeOut();

  useEffect(() => {
    const browserStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (browserStorage) {
      const { cocktails } = browserStorage;
      if (Object.keys(cocktails).length > 0) {
        setIngredients([...cocktails[params.id]]);
      }
    }
  }, []);

  useEffect(() => {
    const browserFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));

    if (browserFavorite && browserFavorite.length > 0) {
      const recipe = browserFavorite
        .find((el) => el.name === testDrink[0].strDrink);

      setFavoriteRecipe([recipe]);
    }
  }, []);

  useEffect(() => {
    sendToInProgress(DRINK, params.id, ingredients);
  }, [ingredients]);

  useEffect(() => {
    console.log(favoriteRecipe);
    sendToFavoriteRecipes(favoriteRecipe);
  }, [favoriteRecipe]);

  const isChecked = (ingredient) => {
    const { cocktails } = inProgress;
    if (Object.keys(cocktails).length > 0) {
      return cocktails[params.id].some((el) => el === ingredient);
    }
    return false;
  };

  const isFavorite = (favorite) => {
    const browserFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (browserFavorite && Object.keys(browserFavorite).length > 0) {
      const recipeName = browserFavorite
        .find((recipe) => recipe.name === testDrink[0].strDrink);
      const { name: faveName } = recipeName;
      return favorite === faveName;
    }
  };

  return (
    <main className="food-progress-container">
      <div>
        <img
          className="food-image"
          data-testid="recipe-photo"
          src={ testDrink[0].strDrinkThumb }
          alt="Foto da Receita"
        />
      </div>
      <div className="food-title">
        <h4 data-testid="recipe-title">{testDrink[0].strDrink}</h4>
        <button
          data-testid="share-btn"
          type="button"
          onClick={ () => {
            copy(`http://localhost:3000/drinks/${params.id}`); timeOut();
          } }
        >
          <img src={ Share } alt="compartilhar" />
        </button>
        <label htmlFor="favorite">
          <input
            onClick={ ({ target }) => handleFavorite({ target }) }
            type="checkbox"
            defaultChecked={ isFavorite(testDrink[0].strDrink) }
            value={ JSON.stringify(favoriteObj) }
            id="favorite"
          />
          <img
            data-testid="favorite-btn"
            src={ favoriteRecipe.length > 0 ? BlackHeart : WhiteHeart }
            alt="favoritar"
          />
        </label>
      </div>
      <span data-testid="recipe-category">Categoria</span>
      {show && <Alert />}
      <div className="ingredients-container">
        <h4>Ingredientes</h4>
        <div className="ingredient-list">
          {renderIngredients(testDrink)[0]
            .filter((ingredient) => ingredient)
            .map((ingredient, idx) => (
              <label
                data-testid={ `${idx}-ingredient-step` }
                htmlFor={ ingredient }
                key={ ingredient }
              >
                <input
                  type="checkbox"
                  id={ ingredient }
                  name={ ingredient }
                  value={ ingredient }
                  checked={ isChecked(ingredient) }
                  onChange={ ({ target }) => handleIngredients({ target }) }
                />
                {ingredient}
              </label>
            ))}
        </div>
      </div>
      <div className="instructions-container">
        <h4>Instruções</h4>
        <p data-testid="instructions">{testDrink[0].strInstructions}</p>
      </div>
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finish Recipe
      </button>
    </main>
  );
}

FoodProgress.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect()(FoodProgress);
