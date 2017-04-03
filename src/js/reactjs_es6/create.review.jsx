/*global aim, ReactDOM */
/*jslint nomen:true, plusplus:true */
/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
(function(){

/**
 * @class Review
 * @description A sample React JS Review Component
 */
class Review extends React.Component {

  /**
   * @function constructor
   * @memberof Review
   * @description The constructor function for the Review component
   */
  constructor(props){
    // All constructors require the super() to be executed
    super(props);
    // Bind the current scope to the method, standard ES6 requirement
    this.onClick = this.onClick.bind(this);
  }

  /**
   * @function destroy
   * @memberof Review
   * @description Destroy the component
   */
  destroy(){
    // Unmount the component from the dom
    return ReactDOM.unmountComponentAtNode(document.getElementById(this.props.parent));
  }

  /**
   * @public
   * @function onClick
   * @memberof Review
   * @description Handle the click event for adding a new review
   * @param {object} e - The event object
   */
  onClick(e){
    debug(this.refs.reviewcomment.value);
    // Something with the value
    alert('Dispatch to the application store and server to insert a new review record, and notify the message display component');
  }

  /**
   * @function render
   * @memberof Review
   * @description Render the Review component
   */
  render(){
    // Render the review content
    return (
      <fieldset id="new-display" className="newrev">
      <legend>WRITE YOUR OWN REVIEW</legend>
      <div className="rev_input"><div className="msg_arrow"> </div>
      <input ref="reviewcomment" className="msg newrev_message" type="text" placeholder="Write a comment.." />
      </div>
      <button className="newrev_btn send_btn" type="button" onClick={this.onClick}>LEAVE A REVIEW</button>
      </fieldset>
    );
    }
}

/**
 * @namespace app
 * @function Review
 * @description The aim.Review reference object for creating new instances
 */
app.review = (function(){
  // Return the create function for the component initialization
  return {
    create:function(parent){
      // Get the parent element from the dom
      let pNode = document.getElementById(parent);
      // Add the default class name to the parent
      let review = <Review parent={parent} />;
      // Render the review panel in the dom
      review = ReactDOM.render(review, pNode);
      // Return the Message display object for referencing
      return review;
    }
  }
}());

}());
