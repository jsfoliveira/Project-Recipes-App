import React, { useEffect, useState } from 'react';
import FavoriteCard from '../components/FavoriteCard';
import Header from '../components/Header';
import useFavorite from '../context/hooks/useFavorite';
import useLocalStorage from '../context/hooks/useLocalStorage';
import './styles/FavoriteRecipes.css';

function FavoriteRecipes() {
  const { favoriteRecipe, setFavoriteRecipe, handleFavorite } = useFavorite();
  const [filter, setFilter] = useState({ food: false, drink: false });
  const { sendToFavoriteRecipes } = useLocalStorage();
  useEffect(() => {
    const browserFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));

    if (browserFavorite && browserFavorite.length > 0) {
      setFavoriteRecipe(browserFavorite);
    }
  }, []);

  useEffect(() => {
    sendToFavoriteRecipes(favoriteRecipe);
  }, [favoriteRecipe]);

  const isFavorite = (favorite) => {
    const browserFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (browserFavorite && Object.keys(browserFavorite).length > 0) {
      return favoriteRecipe.some((el) => el.name === favorite);
    }
  };

  const filterMeals = ({ target }) => {
    const { name } = target;
    // let mealsToRender = favoriteRecipe;
    if (name === 'food') {
      setFilter({ ...filter, food: !filter.food, drink: false });
      // mealsToRender = favoriteRecipe.filter((el) => el.type === 'food');
    }
    if (name === 'drink') {
      setFilter({ ...filter, food: false, drink: !filter.drink });
      // mealsToRender = favoriteRecipe.filter((el) => el.type === 'cocktails');
    }

    if (name === 'all') {
      setFilter({ ...filter, food: false, drink: false });
    }

    // return renderFavoriteMeals(mealsToRender);
  };

  const renderFavoriteMeals = () => {
    const { food, drink } = filter;
    const copyFavorites = [...favoriteRecipe];
    let mealsToRender = copyFavorites;

    if (!food && !drink) {
      mealsToRender = copyFavorites;
    }

    if (food) {
      mealsToRender = copyFavorites.filter((el) => el.type === 'food');
    }
    if (drink) {
      mealsToRender = copyFavorites.filter((el) => el.type === 'cocktails');
    }
    console.log(mealsToRender);
    return mealsToRender.map((recipe, idx) => (
      <FavoriteCard
        name={ recipe.name }
        category={ recipe.category }
        image={ recipe.image }
        nationality={ recipe.nationality }
        alcoholic={ recipe.alcoholicOrNot }
        index={ idx }
        isFavorite={ isFavorite(recipe.name) }
        favorite={ handleFavorite }
        favoriteMeal={ recipe }
        key={ idx }
      />
    ));
  };
  return (
    <div>
      <Header />
      <div className="filter-container">
        <button
          data-testid="filter-by-all-btn"
          type="button"
          name="all"
          onClick={ ({ target }) => filterMeals({ target }) }
        >
          All

        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          name="food"
          onClick={ ({ target }) => filterMeals({ target }) }
        >
          Food

        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          name="drink"
          onClick={ ({ target }) => filterMeals({ target }) }
        >
          Drinks

        </button>
      </div>
      <div className="favorite-container">

        {renderFavoriteMeals()}
      </div>
    </div>
  );
}

export default FavoriteRecipes;
