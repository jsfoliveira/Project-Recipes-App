import React from 'react';
import myContext from './myContext';

function Provider(props) {
  const { children } = props;
  return (
    <div>
      <myContext.Provider value={ values }>
        {children}
      </myContext.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
