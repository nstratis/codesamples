import React from 'react';
// import PropTypes from 'prop-types';
import Button from './Button';
import './ListItem.css';

/**
 * @function ListItem
 * @description The review item
 */
const ListItem = (props) => {
  const you = props.likes[0],
  users = props.likes[1];
  let str = '', other = '';
  if (you === 1) {
    str = 'You and ';
    other = 'other ';
  }
  if (users === 1) {
    str += `1 ${other} person likes this`;
  } else if (users > 1) {
    str += `5 ${other} people like this`;
  }
  return (
    <li key={props.i} className={props.className} data-id={props.i}>
      <h2 className="revlst_title">{
        props.user
      }<span className="duration">{props.date}</span></h2>
      <article className="msg revlst_message">{
        props.message
      }</article>
      <Button
        label="like"
        classNames={props.butClass}
        type="button"
        onClick={props.onLike}
        i={props.i} />
      <span className="revlst_likes">{
        str
      }</span>
      {props.comObj}
    </li>
  );
};

ListItem.propTypes = {
  // i: PropTypes.string,
  // className: PropTypes.string,
  // onSend: PropTypes.func
};

export default ListItem;
