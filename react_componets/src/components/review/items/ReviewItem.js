import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ReviewItem.css';

/**
 * @function ReviewItem
 * @description The review item
 */
const ReviewItem = (props) => (
  <li key={props.i} className={props.className}>
    <div className="rev_input">
      <div className="msg_arrow"> </div>
      <input
        data-id={props.i}
        className="msg"
        type="text"
        placeholder="Write a comment.." />
    </div>
    <Button
      label="SEND"
      i={props.i}
      classNames="comlst_send send_btn"
      type="button"
      onClick={props.onSend} />
  </li>
);

ReviewItem.propTypes = {
  i: PropTypes.number,
  className: PropTypes.string,
  onSend: PropTypes.func
};

export default ReviewItem;
