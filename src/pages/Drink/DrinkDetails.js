import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FoodCard from '../../components/FoodCard';
import { getFullCookTailDetailsByID } from '../../services/fetchCockTails';
import { firstFoods } from '../../services/fetchMeal';
import '../styles/Details.css';

function DrinkDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [recomendation, setRecomendation] = useState([]);

  const fetchID = async () => {
    /* [/strIngredient/i] */
    const data = await getFullCookTailDetailsByID(id);
    setRecipe(data.drinks);
    const renderIngredients = () => {
      data.drinks.map((drink) => {
        const keys = Object.keys(drink).filter((obj) => obj.includes('strIngredient'));
        return setIngredients(keys.map((key) => drink[key]));
      });
      data.drinks.map((drink) => {
        const keys = Object.keys(drink).filter((obj) => obj.includes('strMeasure'));
        return setMeasures(keys.map((key) => drink[key]));
      });
      console.log(data);
    };
    renderIngredients();
  };

  const fetchRecomedation = async () => {
    /* [/strIngredient/i] */
    const data = await firstFoods();
    const { meals } = await data;
    await setRecomendation(meals);
    console.log(data);
    console.log(recomendation);
  };

  useEffect(() => {
    fetchID();
    fetchRecomedation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const max = 6;
  return (
    <div className="drinkDetails">
      {recipe.length
      && (
        <>
          <img
            className="image-recipe"
            src={ recipe[0].strDrinkThumb }
            alt={ recipe[0].strDrink }
            data-testid="recipe-photo"
          />
          <h1 data-testid="recipe-title">{ recipe[0].strDrink }</h1>
          <button type="button" data-testid="share-btn">Share</button>
          <button type="button" data-testid="favorite-btn">Favorite</button>
          <div data-testid="recipe-category">
            <h3>{ recipe[0].strCategory }</h3>
            {recipe[0].strAlcoholic && (<p>{recipe[0].strAlcoholic}</p>)}

          </div>
          <ul>
            {ingredients
              .filter((ingredient) => ingredient)
              .map((ingredient, idx) => (
                <li
                  data-testid={ `${idx}-ingredient-name-and-measure` }
                  key={ ingredient }
                >
                  { `${ingredient} - ${measures[idx]}` }
                </li>
              ))}
          </ul>
          <p data-testid="instructions">{ recipe[0].strInstructions }</p>
          <ul className="carrossel">
            {recomendation.length
          && recomendation.map((element, i) => {
            const { strMealThumb, idMeal, strMeal } = element;
            return (i < max
                && (
                  <li key={ i } data-testid={ `${i}-recomendation-card` }>
                    {' '}
                    <h3 data-testid={ `${i}-recomendation-title` }>{strMeal}</h3>
                    <FoodCard
                      key={ i }
                      index={ i }
                      food={ strMealThumb }
                      name={ strMeal }
                      id={ idMeal }
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

export default DrinkDetails;
