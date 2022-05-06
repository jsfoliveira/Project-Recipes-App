// todas as receitas
export const fetchAllMeals = async () => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const results = fetch(endpoint);
  const response = results.json();
  return response;
};

// todas as areas
export const fetchAllArea = async () => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const result = await fetch(endpoint);
  const response = await result.json();
  return response;
};

// todas as receitas de cada país
export const fetchAreaCountryFood = async (country) => {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
  const result = await fetch(endpoint);
  const response = await result.json();
  return response;
};
