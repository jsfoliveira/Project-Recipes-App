export const requestIngredient = async (ingrediente, type) => {
  const endpoint = type === 'foods' ? `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}` : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const request = await fetch(endpoint);
  const option = type === 'foods' ? 'meals' : 'drinks';
  return request.json()
    .then((result) => result[`${option}`])
    .catch(() => {
      const error = [];
      return [error];
    });
};

export const requestName = async (nome, type) => {
  const endpoint = type === 'foods' ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}` : `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`;
  const request = await fetch(endpoint);
  const option = type === 'foods' ? 'meals' : 'drinks';
  return request.json()
    .then((result) => result[`${option}`])
    .catch(() => {
      const error = [];
      return [error];
    });
};

export const requestLetra = async (firstLetter, type) => {
  const endpoint = type === 'foods' ? `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}` : `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const request = await fetch(endpoint);
  const option = type === 'foods' ? 'meals' : 'drinks';
  return request.json()
    .then((result) => result[`${option}`])
    .catch(() => {
      const error = [];
      return error;
    });
};
