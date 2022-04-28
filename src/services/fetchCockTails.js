// as três requisições que mais serão usadas:
export async function getCookListAllCategories() {
  try {
    const URL = await fetch('www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const data = await URL;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getListAllCooksGlasses() {
  try {
    const URL = await fetch('www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
    const data = await URL;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getListAllCockIngredients() {
  try {
    const URL = await fetch('www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data = await URL;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getListAllAlcoholics() {
  try {
    const URL = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list');
    const data = await URL;
    return data;
  } catch (error) {
    console.log(error);
  }
}
// Fim das 4 mais importantes;

export async function getCookTailByName(name) {
  const URL = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const data = await URL.json();
  return data;
}

export async function getCookIngredientByName(name) {
  const URL = await fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`);
  const data = await URL.json();
  return data;
}
export async function getCookTailByFirstLetter(letter) {
  const URL = await fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
  const data = await URL.json();
  return data;
}

export async function getFullCookTailDetailsByID(id) {
  const URL = await fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await URL.json();
  return data;
}

export async function getFullCookIgredientsDetailsByID(id) {
  const URL = await fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`);
  const data = await URL.json();
  return data;
}

export async function getSingleRandomCookTail() {
  const URL = await fetch('www.thecocktaildb.com/api/json/v1/1/random.php');
  const data = await URL.json();
  return data;
}

export async function filterByAlcoholic(drink) {
  const URL = await fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?a=${drink}`);
  const data = await URL.json();
  return data;
}

export async function filterByCooksCategory(drink) {
  const URL = await fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drink}`);
  const data = await URL.json();
  return data;
}

export async function filterByCooksGlass(drink) {
  const URL = await fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?g=${drink}`);
  const data = await URL.json();
  return data;
}
