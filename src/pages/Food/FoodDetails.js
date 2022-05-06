import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardDrink from '../../components/CardDrink';
import { getListOfRecomendations } from '../../services/fetchCockTails';
import { getFullMealDetailsByID } from '../../services/fetchMeal';
import '../styles/Details.css';

function FoodDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [recomendation, setRecomendation] = useState([]);

  const fetchID = async () => {
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
      console.log(recipe);
    };
    renderIngredients();
  };

  const fetchRecomedation = async () => {
    /* [/strIngredient/i] */
    const data = await getListOfRecomendations();
    const { drinks } = await data;
    await setRecomendation(drinks);
    console.log(drinks);
    console.log(recomendation);
  };

  useEffect(() => {
    fetchID();
    fetchRecomedation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const max = 6;
  return (
    <div className="FoodDetails">
      {recipe.length
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
          <button type="button" data-testid="favorite-btn">Favorite</button>
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
          <ul className="carrossel">
            {recomendation.length
          && recomendation.map((element, i) => {
            const { strDrinkThumb, idDrink, strDrink } = element;
            return (i < max
                && (
                  <li data-testid={ `${i}-recomendation-card` }>
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
