import { useEffect, useState } from 'react';

const inProgressRecipes = {
  cocktails: {},
  meals: {},
};

const favoriteRecipes = [];

const browserStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
const browserFavoite = JSON.parse(localStorage.getItem('favoriteRecipes'));

function useLocalStorage() {
  const [inProgress, setInProgress] = useState(() => (
    browserStorage || inProgressRecipes));
  const [favorite, setFavorite] = useState(() => (browserFavoite || favoriteRecipes));

  const sendToInProgress = (type, id, ingredient) => {
    switch (type) {
    case 'drink':
      setInProgress({
        ...inProgress,
        cocktails: { [id]: [...ingredient] },
      });
      return localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    case 'food':
      setInProgress({
        ...inProgress,
        meals: { [id]: [...ingredient] },
      });
      return localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    default:
      return localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    }
  };
  const sendToFavoriteRecipes = (arr) => {
    setFavorite(arr);
    return localStorage
      .setItem('favoriteRecipes', JSON.stringify(arr));
  };

  useEffect(() => {
    sendToInProgress();
  }, [inProgress, setInProgress]);

  return { sendToInProgress, inProgress, sendToFavoriteRecipes, favorite };
}

export default useLocalStorage;
