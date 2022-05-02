import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles/ExploreDrinks.css';

function ExploreDrinks() {
  const history = useHistory();
  return (
    <main>
      <Header />
      <div className="explore-drink-container">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
        </button>

        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => history.push('/drinks/178319') } // alterar para rota dinâmica
        >
          Surprise me!
        </button>
      </div>
      <Footer />
    </main>
  );
}

export default ExploreDrinks;
