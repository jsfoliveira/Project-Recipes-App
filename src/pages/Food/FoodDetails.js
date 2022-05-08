import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useFavorite from '../../context/hooks/useFavorite';
import '../styles/Details.css';
import BlackHeart from '../../images/blackHeartIcon.svg';
import WhiteHeart from '../../images/whiteHeartIcon.svg';
import Share from '../../images/shareIcon.svg';
import useLocalStorage from '../../context/hooks/useLocalStorage';
import Alert from '../../components/Alert';
import useTimeOut from '../../context/hooks/useTimeOut';
import { fetchIDMeals } from '../componentsDetails/fetchID';
import DrinksRecomedations from '../componentsDetails/RecomedationDrinksDetails';

const copy = require('clipboard-copy');

function FoodDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [favoriteObj, setFavoriteObj] = useState({});
  const [loading1, setLoading1] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const [recipeButton, setRecipeButton] = useState('');
  const { show, timeOut } = useTimeOut();
  const { favoriteRecipe, /* setFavoriteRecipe, */ handleFavorite } = useFavorite();
  const { /* inProgress, sendToInProgress, */ sendToFavoriteRecipes } = useLocalStorage();

  const isFavorite = async (favorite) => {
    const browserFavorite = await JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (browserFavorite && Object.keys(browserFavorite).length > 0) {
      const recipeName = browserFavorite
        .some((recip) => recip.name === favorite);
      return setChecked(recipeName);
    }
  };

  const fetchID = async () => {
    setLoading1(true);
    await fetchIDMeals({ id,
      setRecipe,
      isFavorite,
      setIngredients,
      setMeasures,
      setFavoriteObj });
    setLoading1(false);
  };

  const isInProgress = () => {
    const browserProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const idStorage = Object.keys(browserProgress.meals);
    if (idStorage && idStorage.some((idê) => idê === id)) {
      setRecipeButton('Continue Recipe');
    } else {
      setRecipeButton('Start Recipe');
    }
  };

  useEffect(() => {
    setLoading3(true);
    fetchID();
    isInProgress();
    setLoading3(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loading1 && !loading3) {
      sendToFavoriteRecipes(favoriteRecipe);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoriteRecipe]);

  const handleHandleFavorite = ({ target }) => {
    setChecked(!isChecked);
    handleFavorite({ target });
  };

  return (
    <div className="FoodDetails">
      {!loading1 && !loading3
      && (
        <>
          <img
            className="image-recipe"
            src={ recipe[0].strMealThumb }
            alt={ recipe[0].strMeal }
            data-testid="recipe-photo"
          />
          {show && <Alert />}
          <h1 data-testid="recipe-title">{ recipe[0].strMeal }</h1>
          <button
            data-testid="share-btn"
            type="button"
            onClick={ () => {
              copy(`http://localhost:3000/foods/${id}`); timeOut();
            } }
          >
            <img src={ Share } alt="compartilhar" />
          </button>
          <label htmlFor="favorite">
            <input
              className="favorite-button"
              onClick={ ({ target }) => handleHandleFavorite({ target }) }
              type="checkbox"
              defaultChecked={ isChecked }
              value={ JSON.stringify(favoriteObj) }
              id="favorite"
            />
            <img
              data-testid="favorite-btn"
              src={ isChecked ? BlackHeart : WhiteHeart }
              alt="favoritar"
            />
          </label>
          <ul>
            <h3 data-testid="recipe-category">{ recipe[0].strCategory }</h3>
            {ingredients
              .filter((ingredient) => ingredient)
              .map((ingredient, index) => (
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                  key={ ingredient }
                >
                  { `${ingredient} - ${measures[index]}` }
                </li>
              ))}
          </ul>
          <p data-testid="instructions">{ recipe[0].strInstructions }</p>
          <iframe
            title="Videeo"
            data-testid="video"
            allow="fullscreen"
            src={ recipe[0].strYoutube }
          />
          <DrinksRecomedations />
          <Link to={ `/foods/${id}/in-progress` }>
            <button
              className="start-button"
              type="button"
              data-testid="start-recipe-btn"
            >
              { recipeButton }
            </button>
          </Link>
        </>)}
    </div>
  );
}

export default FoodDetails;
