import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import FoodCard from '../../components/FoodCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles/Food.css';
import SearchBar from '../../components/searchBar';

function Food() {
  return (
    <main>
      <header>
        <Header />
        <SearchBar type="foods" />
      </header>
      <div className="food-container">
        <FoodCard />

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
