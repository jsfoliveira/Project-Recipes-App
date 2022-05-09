const renderIngredients = (arr) => (
  arr.map((food) => {
    const keys = Object.keys(food).filter((obj) => obj.includes('strIngredient'));
    return keys.map((key) => food[key]);
  })
);

export default renderIngredients;
