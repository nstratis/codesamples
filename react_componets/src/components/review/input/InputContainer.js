import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import './InputContainer.css';

/**
 * @function InputContainer
 * @description The input container which wraps the input in a message bubble
 */
const InputContainer = (props) => (
  <div className="review-input-container">
    <Input
      refName={props.refItem}
      classNames={props.classNames}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
);

InputContainer.propTypes = {
  refItem: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default InputContainer;
