import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

/**
 * @function Tab
 * @description A simple tab item
 */
const Tab = (props) => (
  <li data-id={props.id} className={`tab ${props.active}`} onClick={props.onClick}>
    { props.label }
  </li>
);

Tab.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  active: PropTypes.string,
  onClick: PropTypes.func
};

export default Tab;
