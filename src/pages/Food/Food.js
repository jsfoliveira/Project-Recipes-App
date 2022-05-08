import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import FoodButtons from '../../components/FoodButtons';
import FoodCard from '../../components/FoodCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles/Food.css';
import SearchBar from '../../components/searchBar';
import myContext from '../../context/myContext';
import fetchFoods from '../../services/fetchFoods';

function Food() {
  const { foods, setFoods, redirect } = useContext(myContext);
  const fckLint = 12;
  
  useEffect(() => {
    const getFetch = async () => {
      const data = await fetchFoods();
      if (!redirect) {
        setFoods(data.meals);
      }
    };
    getFetch();
  }, [setFoods]);
  return (
    <main>
      <header>
        <Header />
        <SearchBar type="foods" />
      </header>
      <div className="food-container">
        <FoodButtons />
        {foods.map((element, i) => {
          const { strMealThumb, strMeal, idMeal } = element;
          return (i < fckLnt
            && <FoodCard
              key={ i }
              index={ i }
              food={ strMealThumb }
              name={ strMeal }
              id={ idMeal }
            />
          );
        })}
        {/*         {recipes && recipes.length > 1
        && recipes.map((element, i) => {
          const { strMealThumb, strMeal } = element;
          return (i < fckLnt
        && <FoodCard
          key={ i }
          index={ i }
          food={ strMealThumb }
          name={ strMeal }
        />);
        }) } */}

      </div>
      <Footer />
    </main>
  );
}

Food.propTypes = {
  objectList: propTypes.object,
}.isRequired;

const mapStateToProps = (store) => ({
  objectList: store.API.objectList,
});

export default connect(mapStateToProps)(Food);
