import React, { useState/* , useEffect */ } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function Provider(props) {
  // FoodPage Context
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  // Buttons for Foods and Drinks
  const [buttons, setButtons] = useState([]);
  const [headerText, setHeaderText] = useState('');
  const [path, setPath] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [searchBar, setSearchBar] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [foodCountry, setFoodCountry] = useState([]);
  const { children } = props;
  const contextValue = {
    headerText,
    path,
    searchBar,
    recipes,
    setRecipes,
    setSearchBar,
    setPath,
    setHeaderText,
    foods,
    setFoods,
    drinks,
    setDrinks,
    buttons,
    setButtons,
    redirect,
    setRedirect,
    foodCountry,
    setFoodCountry,
  };
  return (
    <div>
      <myContext.Provider value={ contextValue }>
        {children}
      </myContext.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
