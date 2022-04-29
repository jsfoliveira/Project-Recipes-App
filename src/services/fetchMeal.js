// as API's que mais necessárias:
export async function getListAllFoodCategories() {
  try {
    const URL = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const data = await URL.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getListAllFoodAreas() {
  try {
    const URL = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const data = await URL.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getListAllFoodIngredients() {
  try {
    const URL = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data = await URL.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFullMealDetailsByID(id) {
  try {
    const URL = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await URL.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
// Fim das 4 mais importantes;

export async function getByMealName(name) {
  const URL = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const data = await URL.json();
  return data;
}

export async function getMealByFirstLetter(letter) {
  const URL = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  const data = await URL.json();
  return data;
}

export async function getSingleRandomMeal() {
  try {
    const URL = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await URL.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getListAllMealCategories() {
  try {
    const URL = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await URL.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function filterByFoodCategory(food) {
  const URL = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${food}`);
  const data = await URL.json();
  return data;
}

export async function filterFoodByArea(food) {
  const URL = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${food}`);
  const data = await URL.json();
  return data;
}

export async function firstFoods() {
  try {
    const URL = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await URL.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
