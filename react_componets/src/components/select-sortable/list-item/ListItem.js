import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

/**
 * @function ListItem
 * @description A simple film list item to display in the ul
 */
const ListItem = (props) => (
  <li key={props.i} className="list-item">
    <img className="film-img" src={'../' + props.image} alt="product item" />
    <div className="company">{props.company}</div>
    <div className="name">{props.name}</div>
    <a href={props.url}>Link</a>
  </li>
);

ListItem.propTypes = {
  i: PropTypes.number,
  image: PropTypes.string,
  company: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string
};

export default ListItem;
