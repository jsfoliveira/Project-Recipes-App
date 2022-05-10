import { useState } from 'react';

function useFavorite() {
  const [favoriteRecipe, setFavoriteRecipe] = useState([]);

  const handleFavorite = ({ target }) => {
    const { checked, value } = target;
    const { id } = JSON.parse(value);

    setFavoriteRecipe(() => (
      checked
        ? [...favoriteRecipe, JSON.parse(value)]
        : [...favoriteRecipe].filter((el) => el.id !== id)
    ));
  };

  return { favoriteRecipe, setFavoriteRecipe, handleFavorite };
}

export default useFavorite;
