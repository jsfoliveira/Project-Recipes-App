// as três requisições que mais serão usadas:
export async function getCookListAllCategories() {
  const URL = fetch('www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const data = (await URL).json();
  return data;
}

export async function getListAllCooksGlasses() {
  const URL = fetch('www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
  const data = (await URL).json();
  return data;
}

export async function getListAllCooksIngredients() {
  const URL = fetch('www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  const data = (await URL).json();
  return data;
}
// Fim das 3 mais importantes;

export async function getByMealName(name) {
  const URL = fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const data = (await URL).json();
  return data;
}

export async function getMealByFirstLetter(letter) {
  const URL = fetch(`www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  const data = (await URL).json();
  return data;
}

export async function getFullCookDetailsByID(id) {
  const URL = fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = (await URL).json();
  return data;
}

export async function getSingleRandomMeal() {
  const URL = fetch('www.themealdb.com/api/json/v1/1/random.php');
  const data = (await URL).json();
  return data;
}

export async function getListAllMealCategories() {
  const URL = fetch('www.themealdb.com/api/json/v1/1/categories.php');
  const data = (await URL).json();
  return data;
}

export async function filterByCategory(food) {
  const URL = fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=52772${food}`);
  const data = (await URL).json();
  return data;
}

export async function filterByArea(food) {
  const URL = fetch(`www.themealdb.com/api/json/v1/1/filter.php?a=${food}`);
  const data = (await URL).json();
  return data;
}
