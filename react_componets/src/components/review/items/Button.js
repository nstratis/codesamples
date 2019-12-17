import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

/**
 * @function Button
 * @description A simple button element
 */
const Button = (props) => (
  <button
    data-id={props.i}
    className={props.classNames}
    type="button"
    onClick={props.onClick}>{props.label}</button>
);

Button.propTypes = {
  i: PropTypes.number,
  label: PropTypes.string,
  classNames: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
