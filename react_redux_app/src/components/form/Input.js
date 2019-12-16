import React from "react";
import PropTypes from "prop-types";
/**
 * @function Input
 * @description A Standard input component
 * @param {Object} props
 * {
 *  label - The text label for the label element,
 *  type - The type of input element,
 *  name - The form reference name for the input,
 *  value - The value for the input controlled via the parent form state
 *  onChange - The onChange handler function
 * }
 */
export const Input = (props) => (
  <div className="form-row">
    <label>{
      props.label
    }</label><input
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange} />
  </div>
);

Input.propTypes = {
  type: PropTypes.oneOf([
    "text",
    "password"
  ]),
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
