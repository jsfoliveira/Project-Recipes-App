import React, { useState/* , useEffect */ } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function Provider(props) {
  const [headerText, setHeaderText] = useState('');
  const [path, setPath] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [searchBar, setSearchBar] = useState(false);
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
