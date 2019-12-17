import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

/**
 * @function Input
 * @description A message input block
 */
const Input = (props) => (
  <input
    data-id={props.refName}
    className={props.classNames}
    type="text"
    placeholder="Write a comment.."
    onChange={props.onChange} />
);

Input.propTypes = {
  refName: PropTypes.number,
  classNames: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
