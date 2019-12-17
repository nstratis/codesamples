import React from 'react';
import PropTypes from 'prop-types';
/**
 * @function GridFilter
 * @description A Grid filter using a SELECT element
 * @param {Object} props
 * {
 *  label - The text label for the label element
 * }
 */
export const GridFilter = (props) => (
  <nav className="sorter">
    <label>{props.label}</label>
    <select onChange={props.onChange}>
      {
        props.data.map((value, i) => (<option key={i}>{value}</option>))
      }
    </select>
  </nav>
);

GridFilter.propTypes = {
  type: PropTypes.oneOf([
    "text",
    "password"
  ]),
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default GridFilter;
