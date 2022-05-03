async function fetchFoodCategories() {
  try {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    const respApi = await fetch(url);
    return await respApi.json();
  } catch (error) {
    return error;
  }
}

export default fetchFoodCategories;
