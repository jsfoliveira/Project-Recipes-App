import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IngredientFoodCard from '../../components/IngredientFoodCard';
import { getListAllFoodIngredients } from '../../services/fetchMeal';

function FoodIngredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getIngredients = async () => {
      const data = await getListAllFoodIngredients();
      console.log(data);
      setIngredients(data.meals);
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
            <IngredientFoodCard
              key={ index }
              index={ index }
              name={ element.strIngredient }
            />
          );
        }
        return null;
      })}
      <Footer />
    </div>
  );
}

export default FoodIngredients;
