import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange, categories }) => {
  return(
    <select onChange={handleFilterChange} className="filter-select">
      <option value='All'>All</option>
      {categories.map(category => (
        <option key={category} >{category}</option>
      ))}
    </select>
  );
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.string),
}

CategoryFilter.defaultProps = {
  handleFilterChange: null,
  categories: [],
};

export default CategoryFilter;