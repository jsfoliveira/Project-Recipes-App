import React, { useContext, useEffect, useState } from 'react';
import myContext from '../context/myContext';
import fetchFoodCategories from '../services/fetchFoodCategories';
import fetchFoods from '../services/fetchFoods';
import { filterByFoodCategory } from '../services/fetchMeal';

function FoodButtons() {
  const { buttons, setButtons, setFoods } = useContext(myContext);
  const [categoryName, setCategoryName] = useState('');
  useEffect(() => {
    const getButtons = async () => {
      const resp = await fetchFoodCategories();
      setButtons(resp.meals);
    };
    getButtons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const All = async () => {
    const data = await fetchFoods();
    setFoods(data.meals);
    setCategoryName('');
  };

  const clickBtn = async ({ target }) => {
    const { name } = target;
    if (name !== categoryName) {
      const data = await filterByFoodCategory(name);
      setFoods(data.meals);
      setCategoryName(name);
    } else {
      const data = await fetchFoods();
      setFoods(data.meals);
      setCategoryName('');
    }
  };

  const max = 5;
  return (
    <div>
      <button type="button" data-testid="All-category-filter" onClick={ All }>
        All
      </button>
      {buttons.map((e, i) => {
        if (i < max) {
          return (
            <button
              data-testid={ `${e.strCategory}-category-filter` }
              type="button"
              key={ i }
              onClick={ clickBtn }
              name={ e.strCategory }
            >
              {e.strCategory}
            </button>
          );
        }
        return null;
      })}
    </div>
  );
}

export default FoodButtons;
