import React, { Component } from 'react';
import Button from './items/Button';
import './CreateReview.css';

/**
 * @class Review
 * @description A sample React JS Review Component
 */
export default class Review extends Component {
  /**
   * @function onClick
   * @description Handle the click event for adding a new review
   * @param {object} e - The event object
   */
  onClick(e) {
    // Something with the value
    alert('Dispatch to the application store and server to insert a new review record, and notify the message display component');
  }

  /**
   * @function render
   * @description Render the Review component
   */
  render() {
    return (<div id="review-container">
      <fieldset id="new-display" className="newrev">
      <legend>WRITE YOUR OWN REVIEW</legend>
      <div className="rev_input"><div className="msg_arrow"> </div>
      <input
        ref="reviewcomment"
        className="msg newrev_message"
        type="text" placeholder="Write a comment.." />
      </div>
      <Button
        i="0"
        label="LEAVE A REVIEW"
        classNames="newrev_btn send_btn"
        type="button"
        onClick={this.onClick} />
      </fieldset>
     </div>
    );
  }
}
