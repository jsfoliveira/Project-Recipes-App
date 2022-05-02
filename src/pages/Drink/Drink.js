import React, { useContext } from 'react';
import FoodCard from '../../components/FoodCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/searchBar';
import myContext from '../../context/myContext';

function Drink() {
  const { recipes } = useContext(myContext);
  console.log(recipes);
  const fckLint = 12;
  return (
    <>
      <Header />
      <SearchBar type="drinks" />
      {recipes && recipes.length > 1
        && recipes.map((element, i) => {
          const { strDrinkThumb, strDrink } = element;
          return (i < fckLint
        && <FoodCard
          key={ i }
          index={ i }
          food={ strDrinkThumb }
          name={ strDrink }
        />);
        })}
      <Footer />
    </>

  );
}

export default Drink;
