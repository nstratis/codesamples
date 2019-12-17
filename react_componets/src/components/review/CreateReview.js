import React, { Component } from 'react';
import Button from './button/Button';
import InputContainer from './input/InputContainer';
import './CreateReview.css';

/**
 * @class Review
 * @description A sample React JS Review Component
 */
export default class Review extends Component {

  state = {
    value: ''
  }

  /**
   * @function onChange
   * @description Handles the onChange event for the message input
   * @param {object} e - The event object
   */
  onChange = (e) => {
    this.setState({ value: e.currentTarget.value });
  }

  /**
   * @function onClick
   * @description Handle the click event for adding a new review
   * @param {object} e - The event object
   */
  onClick = (e) => {
    // TODO: The review data would be saved to a server...
    alert(
      `Dispatch to the application store and server to insert a new
      review record, and notify the message display component:

      ${this.state.value}`
    );
  }

  /**
   * @function render
   * @description Render the Review component
   */
  render() {
    return (
      <div id="review-container">
        <fieldset id="new-display" className="new-review">
          <legend>WRITE YOUR OWN REVIEW</legend>
          <InputContainer
            classNames="message-input new-review-message"
            value={this.state.value}
            onChange={this.onChange} />
          <Button
            dataId={0}
            label="LEAVE A REVIEW"
            classNames="send-bt new-review-bt"
            type="button"
            onClick={this.onClick} />
        </fieldset>
     </div>
    );
  }
}
