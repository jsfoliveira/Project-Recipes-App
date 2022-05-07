import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardDrink from '../../components/CardDrink';
import useFavorite from '../../context/hooks/useFavorite';
import { getListOfRecomendations } from '../../services/fetchCockTails';
import { getFullMealDetailsByID } from '../../services/fetchMeal';
import '../styles/Details.css';
import BlackHeart from '../../images/blackHeartIcon.svg';
import WhiteHeart from '../../images/whiteHeartIcon.svg';

function FoodDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [recomendation, setRecomendation] = useState([]);
  const [favoriteObj, setFavoriteObj] = useState({});
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const { favoriteRecipe, /* setFavoriteRecipe, */ handleFavorite } = useFavorite();

  const fetchID = async () => {
    setLoading1(true);
    /* [/strIngredient/i] */
    const data = await getFullMealDetailsByID(id);
    setRecipe(data.meals);
    const renderIngredients = () => {
      data.meals.map((food) => {
        const keys = Object.keys(food).filter((obj) => obj.includes('strIngredient'));
        return setIngredients(keys.map((key) => food[key]));
      });
      data.meals.map((food) => {
        const keys = Object.keys(food).filter((obj) => obj.includes('strMeasure'));
        return setMeasures(keys.map((key) => food[key]));
      });
    };
    const setFavorite = () => {
      const { strArea: nationality, strCategory: category,
        strMeal: name, strMealThumb: image } = data.meals[0];
      setFavoriteObj({
        id,
        nationality,
        type: 'food',
        category,
        alcoholicOrNot: '',
        name,
        image,
      });
    };
    renderIngredients();
    setFavorite();
    setLoading1(false);
  };

  const fetchRecomedation = async () => {
    setLoading2(true);
    /* [/strIngredient/i] */
    const data = await getListOfRecomendations();
    const { drinks } = await data;
    await setRecomendation(drinks);
    setLoading2(false);
  };

  useEffect(() => {
    setLoading3(true);
    fetchID();
    fetchRecomedation();
    setLoading3(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const max = 6;
  return (
    <div className="FoodDetails">
      {!loading1 && !loading2 && !loading3
      && (
        <>
          <img
            className="image-recipe"
            src={ recipe[0].strMealThumb }
            alt={ recipe[0].strMeal }
            data-testid="recipe-photo"
          />
          <h1 data-testid="recipe-title">{ recipe[0].strMeal }</h1>
          <button type="button" data-testid="share-btn">Share</button>
          <label htmlFor="favorite">
            <input
              className="favorite-button"
              onClick={ ({ target }) => handleFavorite({ target }) }
              type="checkbox"
              /* defaultChecked={ isFavorite(testMeal[0].strMeal) } */
              value={ JSON.stringify(favoriteObj) }
              id="favorite"
            />
            <img
              data-testid="favorite-btn"
              src={ favoriteRecipe.length > 0 ? BlackHeart : WhiteHeart }
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
          {/* <iframe
            title="Videeo"
            data-testid="video"
            allow="fullscreen"
            src={ recipe[0].strYoutube }
          /> */}
          <ul className="carrossel">
            {recomendation.length
          && recomendation.map((element, i) => {
            const { strDrinkThumb, idDrink, strDrink } = element;
            return (i < max
                && (
                  <li key={ strDrink } data-testid={ `${i}-recomendation-card` }>
                    {' '}
                    <h3 data-testid={ `${i}-recomendation-title` }>{strDrink}</h3>
                    <CardDrink
                      key={ i }
                      index={ i }
                      strDrinkThumb={ strDrinkThumb }
                      strDrink={ strDrink }
                      id={ idDrink }
                    />
                    {' '}
                  </li>));
          }) }
          </ul>
          <button
            className="start-button"
            type="button"
            data-testid="start-recipe-btn"
          >
            Start Recipe
          </button>
        </>)}
    </div>
  );
}

export default FoodDetails;
