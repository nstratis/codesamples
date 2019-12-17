import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import './CommentItem.css';

/**
 * @function CommentItem
 * @description A user comment to display
 */
const CommentItem = (props) => {
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
    <li key={props.i} className={props.classNames} data-id={props.i}>
      <h2 className="review-list-title">{
        props.user
      }<span className="duration">{props.date}</span></h2>
      <article className="list-message">{
        props.message
      }</article>
      <Button
        label="like"
        classNames={props.butClass}
        type="button"
        onClick={props.onLike}
        dataId={props.i} />
      <span className="review-likes-num">{
        str
      }</span>
      {props.comObj}
    </li>
  );
};

CommentItem.propTypes = {
  i: PropTypes.number,
  date: PropTypes.string,
  message: PropTypes.string,
  classNames: PropTypes.string,
  butClass: PropTypes.string,
  onLike: PropTypes.func
};

export default CommentItem;
