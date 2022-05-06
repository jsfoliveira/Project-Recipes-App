import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FilterNationalities = ({ index, name, image, id }) => (
  <Link to={ `/foods/${id}` }>
    <div data-testid={ `${index}-ingredient-card` }>
      <img
        src={ image }
        alt={ name }
        data-testid={ `${index}-card-img` }
        width="100px"
      />
      <p
        data-testid={ `${index}-card-name` }
      >
        {name}
      </p>
    </div>
  </Link>
);

FilterNationalities.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FilterNationalities;
