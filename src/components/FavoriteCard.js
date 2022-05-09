import { PropTypes } from 'prop-types';
import React from 'react';
import BlackHeart from '../images/blackHeartIcon.svg';
import Share from '../images/shareIcon.svg';
import './styles/FavoriteCard.css';

function FavoriteCard({ name, category, image,
  nationality, alcoholic, index, favorite }) {
  const defineCategory = () => {
    if (alcoholic) {
      return `${alcoholic}`;
    }

    return `${nationality} - ${category}`;
  };
  return (
    <div className="favorite-meal-container">
      <div>
        <img
          className="meal-img"
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
        />
      </div>
      <div className="favorite-meal-description">
        <p data-testid={ `${index}-horizontal-top-text` }>
          {defineCategory()}
        </p>
        <p data-testid={ `${index}-horizontal-name` }>{name}</p>

        <button
          type="button"
          onClick={ () => {
            copy('link copiado');
            //   timeOut();
          } }
        >
          <img
            data-testid={ `${index}-horizontal-share-btn` }
            src={ Share }
            alt="compartilhar"
          />

        </button>
        <label htmlFor="favorite">
          <input
            onClick={ ({ target }) => favorite({ target }) }
            type="checkbox"
            //   defaultChecked={ isFavorite(testMeal[0].strMeal) }
            //   value={ JSON.stringify(favoriteObj) }
            id="favorite"
          />
          <img
            data-testid={ `${index}-horizontal-favorite-btn` }
            src={ BlackHeart }
            alt="favoritar"
          />

        </label>

      </div>

    </div>
  );
}

FavoriteCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  alcoholic: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  favorite: PropTypes.func.isRequired,
};

export default FavoriteCard;
