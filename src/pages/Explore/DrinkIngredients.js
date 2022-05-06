import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IngredientDrinkCard from '../../components/IngredientDrinkCard';
import { getListAllCockIngredients } from '../../services/fetchCockTails';
import './DrinkIngredients.css';

function DrinkIngredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getIngredients = async () => {
      const data = await getListAllCockIngredients();
      setIngredients(data.drinks);
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
              ingredient={ element.strIngredient1 }
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
