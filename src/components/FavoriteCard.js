import { PropTypes } from 'prop-types';
import React from 'react';
import useTimeOut from '../context/hooks/useTimeOut';
import BlackHeart from '../images/blackHeartIcon.svg';
import Share from '../images/shareIcon.svg';
import Alert from './Alert';
import './styles/FavoriteCard.css';

const copy = require('clipboard-copy');

function FavoriteCard({ name, category, image,
  nationality, alcoholic, index, favorite, favoriteMeal, isFavorite }) {
  const { show, timeOut } = useTimeOut();

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
        {show && <Alert />}
        <button
          type="button"
          onClick={ () => {
            copy('http://localhost:3000/foods/52771'); // alterar link copiado; req 63
            timeOut();
          } }
        >
          <img
            data-testid={ `${index}-horizontal-share-btn` }
            src={ Share }
            alt="compartilhar"
          />

        </button>
        <label htmlFor={ `favorite-${name}` }>
          <input
            onClick={ ({ target }) => favorite({ target }) }
            type="checkbox"
            defaultChecked={ isFavorite }
            value={ JSON.stringify(favoriteMeal) }
            id={ `favorite-${name}` }
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
  favoriteMeal: PropTypes.objectOf(PropTypes.any).isRequired,
  isFavorite: PropTypes.bool.isRequired,

};

export default FavoriteCard;
