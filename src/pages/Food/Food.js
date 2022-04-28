import React from 'react';
import FoodCard from '../../components/FoodCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles/Food.css';

function Food() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="food-container">
        <FoodCard />

      </div>
      <Footer />

    </main>
  );
}

export default Food;
