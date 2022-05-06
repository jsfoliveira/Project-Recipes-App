import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IngredientDrinkCard from '../../components/IngredientDrinkCard';
import { getListAllCockIngredients } from '../../services/fetchCockTails';

function DrinkIngredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getIngredients = async () => {
      const data = await getListAllCockIngredients();
      setIngredients(data.drinks);
      console.log(ingredients);
    };
    getIngredients();
  }, []);

  const max = 12;
  return (
    <div>
      <Header />
      { ingredients.map((element, index) => {
        if (index < max) {
          return (
            <IngredientDrinkCard
              key={ index }
              index={ index }
              name={ element.strIngredient1 }
            />
          );
        }
        return null;
      })}
      <Footer />
    </div>
  );
}

export default DrinkIngredients;
