import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  requestIngredient,
  requestName,
  requestLetra } from '../services/RequesSearchBar';
import myContext from '../context/myContext';

function SearchBar({ type }) {
  const [valueRadioSearchBar, setValueRadioSearchBar] = useState('');
  const [valueInputSearchBar, setValueInputSearchBar] = useState('');
  const { setRecipes, searchBar } = useContext(myContext);
  const customAlert = window.alert;

  const history = useHistory();
  const showSearchRequestResult = (result) => {
    if (result.length === undefined) {
      return null;
    }
    if (result.length === 1 && type === 'foods') {
      history.push(`/${type}/${result[0].idMeal}`);
    }
    if (result.length === 1 && type === 'drinks') {
      history.push(`/${type}/${result[0].idDrink}`);
    }
    if (result.length > 1 && type === 'foods') {
      setRecipes(result);
    }
    if (result.length > 1 && type === 'drinks') {
      setRecipes(result);
    }
  };

  const handleSearchBar = async () => {
    if (valueInputSearchBar.length === undefined) {
      return null;
    }
    let resultRequest;
    if (valueRadioSearchBar === 'ingrediente') {
      resultRequest = await requestIngredient(valueInputSearchBar, type);
    }
    if (valueRadioSearchBar === 'nome') {
      resultRequest = await requestName(valueInputSearchBar, type);
    }
    if (valueRadioSearchBar === 'primeira letra') {
      if (valueInputSearchBar.length > 1) {
        return customAlert('Your search must have only 1 (one) character');
      }
      resultRequest = await requestLetra(valueInputSearchBar, type);
    }
    if (!resultRequest) {
      return customAlert(
        'Sorry, we haven\'t found any recipes for these filters.',
      );
    }
    await showSearchRequestResult(resultRequest);
  };
  return (
    <form className="searchBar">
      {searchBar
      && (
        <div className="form-search">
          <label htmlFor="valueName">
            <input
              type="text"
              data-testid="search-input"
              onChange={ (event) => setValueInputSearchBar(event.target.value) }
              id="valueName"
            />
          </label>
          <div>
            <label htmlFor="ingredient-search-radio">
              <input
                type="radio"
                name="flexRadioDefault"
                id="ingredient-search-radio"
                data-testid="ingredient-search-radio"
                onClick={ () => setValueRadioSearchBar('ingrediente') }
              />
              Ingrediente
            </label>
          </div>
          <div>
            <label htmlFor="name-search-radio">
              <input
                type="radio"
                name="flexRadioDefault"
                id="name-search-radio"
                data-testid="name-search-radio"
                onClick={ () => setValueRadioSearchBar('nome') }
              />
              Nome
            </label>
          </div>
          <div>
            <label htmlFor="first-letter-search-radio">
              <input
                type="radio"
                name="flexRadioDefault"
                id="first-letter-search-radio"
                data-testid="first-letter-search-radio"
                onClick={ () => setValueRadioSearchBar('primeira letra') }
              />
              Primeira Letra
            </label>
          </div>
          <button
            type="button"
            data-testid="exec-search-btn"
            onClick={ () => handleSearchBar() }
            id="exerc-search-btn"
          >
            Buscar
          </button>

        </div>)}
    </form>
  );
}

SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SearchBar;
