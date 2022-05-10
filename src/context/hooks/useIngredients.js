import { useState } from 'react';

function useIngredients() {
  const [ingredients, setIngredients] = useState([]);

  const handleIngredients = ({ target }) => {
    const { checked, value } = target;
    setIngredients(() => (
      checked ? [...ingredients, value] : [...ingredients].filter((el) => el !== value)
    ));
  };

  return { ingredients, setIngredients, handleIngredients };
}

export default useIngredients;
