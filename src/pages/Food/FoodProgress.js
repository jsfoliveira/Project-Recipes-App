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

const copy = require('clipboard-copy');

const FOOD = 'food';

const { idMeal: id, strArea: nationality, strCategory: category,
  strMeal: name, strMealThumb: image } = testMeal[0];
const favoriteObj = {
  id,
  nationality,
  type: 'food',
  category,
  alcoholicOrNot: '',
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
      const { meals } = browserStorage;
      if (Object.keys(meals).length > 0) {
        setIngredients([...meals[params.id]]);
      }
    }
  }, []);

  useEffect(() => {
    const browserFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));

    if (browserFavorite && browserFavorite.length > 0) {
      const recipe = browserFavorite
        .find((el) => el.name === testMeal[0].strMeal);

      setFavoriteRecipe([recipe]);
    }
  }, []);

  useEffect(() => {
    sendToInProgress(FOOD, params.id, ingredients);
  }, [ingredients]);

  useEffect(() => {
    console.log(favoriteRecipe);
    sendToFavoriteRecipes(favoriteRecipe);
  }, [favoriteRecipe]);

  const isChecked = (ingredient) => {
    const { meals } = inProgress;
    if (Object.keys(meals).length > 0) {
      return meals[params.id].some((el) => el === ingredient);
    }
    return false;
  };

  const isFavorite = (favorite) => {
    const browserFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (browserFavorite && Object.keys(browserFavorite).length > 0) {
      const recipeName = browserFavorite
        .find((recipe) => recipe.name === testMeal[0].strMeal);
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
          src={ testMeal[0].strMealThumb }
          alt="Foto da Receita"
        />
      </div>
      <div className="food-title">
        <h4 data-testid="recipe-title">{testMeal[0].strMeal}</h4>
        <button
          data-testid="share-btn"
          type="button"
          onClick={ () => {
            copy(`http://localhost:3000/foods/${params.id}`); timeOut();
          } }
        >
          <img src={ Share } alt="compartilhar" />
        </button>
        <label htmlFor="favorite">
          <input
            onClick={ ({ target }) => handleFavorite({ target }) }
            type="checkbox"
            defaultChecked={ isFavorite(testMeal[0].strMeal) }
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
          {renderIngredients(testMeal)[0]
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
        <p data-testid="instructions">{testMeal[0].strInstructions}</p>
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
