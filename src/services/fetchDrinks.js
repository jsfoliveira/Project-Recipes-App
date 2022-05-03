async function fetchDrinks() {
  try {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const respApi = await fetch(url);
    const result = await respApi.json();
    return result;
  } catch (error) {
    return error;
  }
}

export default fetchDrinks;
