import React from "react";
import PropTypes from "prop-types";

const Button = (props) => (
  <button
    className="bt-action"
    type="button"
    onClick={props.onClick}>{
      props.label
    }</button>
);

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
