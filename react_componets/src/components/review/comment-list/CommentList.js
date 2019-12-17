import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.css';

/**
 * @function CommentList
 * @description Comment List of elements for the display
 */
const CommentList = (props) => (
  <ul className="comment-list-display">{props.coms}</ul>
);

CommentList.propTypes = {
  coms: PropTypes.array
};

export default CommentList;
