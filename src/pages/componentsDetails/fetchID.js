import { getFullCookTailDetailsByID } from '../../services/fetchCockTails';
import { getFullMealDetailsByID } from '../../services/fetchMeal';

export const fetchIDMeals = async ({ id,
  setRecipe, isFavorite, setIngredients, setMeasures,
  setFavoriteObj }) => {
  /* [/strIngredient/i] */
  const data = await getFullMealDetailsByID(id);
  setRecipe(data.meals);
  await isFavorite(data.meals[0].strMeal);
  const renderIngredients = () => {
    data.meals.map((food) => {
      const keys = Object.keys(food).filter((obj) => obj.includes('strIngredient'));
      return setIngredients(keys.map((key) => food[key]));
    });
    data.meals.map((food) => {
      const keys = Object.keys(food).filter((obj) => obj.includes('strMeasure'));
      return setMeasures(keys.map((key) => food[key]));
    });
  };
  const setFavorite = () => {
    const { strArea: nationality, strCategory: category,
      strMeal: name, strMealThumb: image } = data.meals[0];
    setFavoriteObj({
      id,
      nationality,
      type: 'food',
      category,
      alcoholicOrNot: '',
      name,
      image,
    });
  };
  renderIngredients();
  setFavorite();
};

export const fetchIDDrinks = async ({ id,
  setRecipe, isFavorite, setIngredients, setMeasures,
  setFavoriteObj }) => {
  /* [/strIngredient/i] */
  const data = await getFullCookTailDetailsByID(id);
  setRecipe(data.drinks);
  isFavorite(data.drinks[0].strDrink);
  const renderIngredients = () => {
    data.drinks.map((drink) => {
      const keys = Object.keys(drink).filter((obj) => obj.includes('strIngredient'));
      return setIngredients(keys.map((key) => drink[key]));
    });
    data.drinks.map((drink) => {
      const keys = Object.keys(drink).filter((obj) => obj.includes('strMeasure'));
      return setMeasures(keys.map((key) => drink[key]));
    });
  };
  const setFavorite = () => {
    const { strCategory: category,
      strDrink: name, strDrinkThumb: image,
      strAlcoholic: alcoholicOrNot } = data.drinks[0];
    setFavoriteObj({
      id,
      nationality: '',
      type: 'drink',
      category,
      alcoholicOrNot,
      name,
      image,
    });
  };
  renderIngredients();
  setFavorite();
};
