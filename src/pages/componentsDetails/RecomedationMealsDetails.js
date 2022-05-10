import React, { useEffect, useState } from 'react';
import FoodCard from '../../components/FoodCard';
import { firstFoods } from '../../services/fetchMeal';

function MealsRecomedations() {
  const [recomendation, setRecomendation] = useState([]);
  const [loading, setLoading] = useState(true);

  const Recomedation = async () => {
    setLoading(true);
    const data = await firstFoods();
    await setRecomendation(data.meals);
    setLoading(false);
  };

  useEffect(() => {
    Recomedation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const max = 6;
  return (
    <ul className="carrossel">
      {!loading && recomendation.length
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
        })}
    </ul>);
}

export default MealsRecomedations;
