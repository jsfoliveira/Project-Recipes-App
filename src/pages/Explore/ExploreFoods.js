import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles/ExploreFoods.css';

function ExploreFoods() {
  const history = useHistory();
  return (
    <main>
      <Header />
      <div className="explore-food-container">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
          className="explore-food-button"
        >
          By Ingredient
        </button>
        <button
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
          className="explore-food-button"
        >
          By Nationality
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => history.push('/foods/52771') } // alternar para rota dinâmica
          className="explore-food-button"
        >
          Surprise me!
        </button>
      </div>
      <Footer />
    </main>
  );
}

export default ExploreFoods;
