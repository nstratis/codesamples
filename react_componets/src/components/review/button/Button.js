import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

/**
 * @function Button
 * @description A simple button element
 */
const Button = (props) => (
  <button
    data-id={props.dataId}
    className={`action-bt ${props.classNames}`}
    type="button"
    onClick={props.onClick}>{props.label}</button>
);

Button.propTypes = {
  dataId: PropTypes.number,
  label: PropTypes.string,
  classNames: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
