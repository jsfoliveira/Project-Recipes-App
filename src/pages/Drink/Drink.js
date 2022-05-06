/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import DrinkButtons from '../../components/DrinkButtons';
import CardDrink from '../../components/CardDrink';
import myContext from '../../context/myContext';
import fetchDrinks from '../../services/fetchDrinks';
import SearchBar from '../../components/searchBar';

function Drink() {
  const { drinks, setDrinks, redirect } = useContext(myContext);

  useEffect(() => {
    const getFetch = async () => {
      const data = await fetchDrinks();
      if (!redirect) {
        setDrinks(data.drinks);
      }
    };
    getFetch();
  }, []);

  const max = 12;

  return (
    <main>
      <Header />
      <SearchBar type="drinks" />
      <DrinkButtons />
      <div>
        { drinks.map((element, i) => {
          if (i < max) {
            return (
              <CardDrink
                key={ i }
                index={ i }
                strDrinkThumb={ element.strDrinkThumb }
                strDrink={ element.strDrink }
                id={ element.idDrink }
              />
            );
          }
          return null;
        })}
      </div>
      <Footer />
    </main>

  );
}

export default Drink;
