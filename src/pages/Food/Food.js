import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import FoodCard from '../../components/FoodCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles/Food.css';
import SearchBar from '../../components/searchBar';
import myContext from '../../context/myContext';

function Food() {
  const { recipes } = useContext(myContext);
  const fckLint = 12;
  return (
    <main>
      <header>
        <Header />
        <SearchBar type="foods" />
      </header>
      <div className="food-container">
        {recipes && recipes.length > 1
        && recipes.map((element, i) => {
          const { strMealThumb, strMeal } = element;
          return (i < fckLint
        && <FoodCard
          key={ i }
          index={ i }
          food={ strMealThumb }
          name={ strMeal }
        />);
        }) }

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
