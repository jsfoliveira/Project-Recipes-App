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
        >
          By Ingredient
        </button>
        <button
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => history.push('/foods/52771') } // alterar para rota dinâmica
        >
          Surprise me!
        </button>
      </div>
      <Footer />
    </main>
  );
}

export default ExploreFoods;
