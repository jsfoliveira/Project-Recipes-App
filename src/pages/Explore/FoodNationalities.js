import React, { useState, useEffect } from 'react';
import {
  fetchAllArea,
  fetchAreaCountryFood,
  fetchAllMeals,
} from '../../services/apiNationalities';
import FilterNationalities from '../../components/FilterNationalities';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles/Nationalities.css';

function FoodNationalities() {
  const [country, setCountry] = useState('All');
  const [optionsCountry, setOptionCountry] = useState([]);
  const [foodCountry, setFoodCountry] = useState([]);
  const maxRecipe = 12;

  const allArea = async () => {
    const response = await fetchAllArea();
    setOptionCountry(response.meals);
  };

  useEffect(() => {
    allArea();
  }, []);

  useEffect(() => {
    // se o country for diferente de all, vai buscar a receita do seu país, caso contrário vai buscar todas as receitas.
    if (country !== 'All') {
      const AreaCountryFood = async () => {
        const response = await fetchAreaCountryFood(country);
        setFoodCountry(response.meals);
        console.log(response.meals);
      };
      AreaCountryFood();
    } else {
      const AllMeals = async () => {
        const response = await fetchAllMeals();
        setFoodCountry(response.meals);
        console.log(response);
      };
      AllMeals();
    }
  }, [country]);

  return (
    <div>
      <Header />
      <div className="nationalities-container">
        <select
          value={ country }
          onChange={ (event) => setCountry(event.target.value) }
          data-testid="explore-by-nationality-dropdown"
        >
          <option
            value="All"
            data-testid="All-option"
          >
            All
          </option>
          {optionsCountry.length && optionsCountry.map((element) => (
            <option
              value={ element.strArea }
              key={ element.strArea }
              data-testid={ `${element.strArea}-option` }
            >
              {element.strArea}
            </option>
          ))}
        </select>
        {foodCountry.length && foodCountry.slice(0, maxRecipe)
          .map((element, index) => (
            <FilterNationalities
              key={ element.strMeal }
              index={ index }
              name={ element.strMeal }
              image={ element.strMealThumb }
              id={ element.idMeal }
            />
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default FoodNationalities;
