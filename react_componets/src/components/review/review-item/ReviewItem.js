import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import InputContainer from '../input/InputContainer';
import './ReviewItem.css';

/**
 * @function ReviewItem
 * @description The review item
 */
const ReviewItem = (props) => (
  <li key={props.dataId} className={props.classNames}>
    <InputContainer refItem={props.dataId} classNames="message-input" />
    <Button
      label="SEND"
      dataId={props.dataId}
      classNames="send-bt"
      type="button"
      onClick={props.onSend} />
  </li>
);

ReviewItem.propTypes = {
  dataId: PropTypes.number,
  classNames: PropTypes.string,
  onSend: PropTypes.func
};

export default ReviewItem;
