import React, { useState/* , useEffect */ } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function Provider(props) {
  const [headerText, setHeaderText] = useState('');
  const [path, setPath] = useState('');
  const { children } = props;
  const contextValue = {
    headerText,
    path,
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
