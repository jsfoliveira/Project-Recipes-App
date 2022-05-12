/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import myContext from '../context/myContext';
import { filterByCooksCategory } from '../services/fetchCockTails';
import fetchDrinkCategories from '../services/fetchDrinkCategories';
import fetchDrinks from '../services/fetchDrinks';
import './styles/DrinkButtons.css';

function DrinkButtons() {
  const { buttons, setButtons, setDrinks } = useContext(myContext);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const getButtons = async () => {
      const resp = await fetchDrinkCategories();
      setButtons(resp.drinks);
    };
    getButtons();
  }, [setButtons]);

  const All = async () => {
    const data = await fetchDrinks();
    setDrinks(data.drinks);
    setCategoryName('');
  };

  const clickBtn = async ({ target }) => {
    const { name } = target;
    if (name !== categoryName) {
      const data = await filterByCooksCategory(name);
      setDrinks(data.drinks);
      setCategoryName(name);
    } else {
      const data = await fetchDrinks();
      setDrinks(data.drinks);
      setCategoryName('');
    }
  };

  const max = 5;

  return (
    <div className="buttons-container">
      <button
        type="button"
        className="drink-buttons"
        data-testid="All-category-filter"
        onClick={ All }
      >
        All
      </button>
      {buttons.map((e, i) => {
        if (i < max) {
          return (
            <button
              data-testid={ `${e.strCategory}-category-filter` }
              className="drink-buttons"
              type="button"
              key={ i }
              name={ e.strCategory }
              onClick={ clickBtn }
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

export default DrinkButtons;
