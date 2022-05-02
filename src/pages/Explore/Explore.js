import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Explore() {
  return (
    <div>
      <Header />
      <div>
        <Link to="/explore/foods">
          <button
            id="food"
            type="submit"
            data-testid="explore-food"
          >
            Explore Foods
          </button>
        </Link>
        <Link to="/explore/drinks">
          <button
            id="drink"
            type="submit"
            data-testid="explore-drinks"
          >
            Explore Drinks
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
