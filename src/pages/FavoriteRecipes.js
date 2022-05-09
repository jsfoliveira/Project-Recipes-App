import React, { useEffect } from 'react';
import FavoriteCard from '../components/FavoriteCard';
import Header from '../components/Header';
import useFavorite from '../context/hooks/useFavorite';
// import useLocalStorage from '../context/hooks/useLocalStorage';
import './styles/FavoriteRecipes.css';

function FavoriteRecipes() {
  const { favoriteRecipe, setFavoriteRecipe, handleFavorite } = useFavorite();
  // const { sendToFavoriteRecipes } = useLocalStorage();
  useEffect(() => {
    const browserFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));

    if (browserFavorite && browserFavorite.length > 0) {
      setFavoriteRecipe(browserFavorite);
    }
  }, []);

  console.log(favoriteRecipe);
  return (
    <div>
      <Header />
      <div className="filter-container">
        <button data-testid="filter-by-all-btn" type="button">All</button>
        <button data-testid="filter-by-food-btn" type="button">Food</button>
        <button data-testid="filter-by-drink-btn" type="button">Drink</button>
      </div>
      <div className="favorite-container">

        {favoriteRecipe.map((recipe, idx) => (
          <FavoriteCard
            name={ recipe.name }
            category={ recipe.category }
            image={ recipe.image }
            nationality={ recipe.nationality }
            alcoholic={ recipe.alcoholicOrNot }
            index={ idx }
            favorite={ handleFavorite }
            key={ idx }
          />
        ))}
      </div>
    </div>
  );
}

export default FavoriteRecipes;
