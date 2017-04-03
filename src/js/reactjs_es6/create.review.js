"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*global aim, ReactDOM */
/*jslint nomen:true, plusplus:true */
/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
(function () {

  /**
   * @class Review
   * @description A sample React JS Review Component
   */
  var Review = function (_React$Component) {
    _inherits(Review, _React$Component);

    /**
     * @function constructor
     * @memberof Review
     * @description The constructor function for the Review component
     */
    function Review(props) {
      _classCallCheck(this, Review);

      // Bind the current scope to the method, standard ES6 requirement
      var _this = _possibleConstructorReturn(this, (Review.__proto__ || Object.getPrototypeOf(Review)).call(this, props));
      // All constructors require the super() to be executed


      _this.onClick = _this.onClick.bind(_this);
      return _this;
    }

    /**
     * @function destroy
     * @memberof Review
     * @description Destroy the component
     */


    _createClass(Review, [{
      key: "destroy",
      value: function destroy() {
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

    }, {
      key: "onClick",
      value: function onClick(e) {
        debug(this.refs.reviewcomment.value);
        // Something with the value
        alert('Dispatch to the application store and server to insert a new review record, and notify the message display component');
      }

      /**
       * @function render
       * @memberof Review
       * @description Render the Review component
       */

    }, {
      key: "render",
      value: function render() {
        // Render the review content
        return React.createElement(
          "fieldset",
          { id: "new-display", className: "newrev" },
          React.createElement(
            "legend",
            null,
            "WRITE YOUR OWN REVIEW"
          ),
          React.createElement(
            "div",
            { className: "rev_input" },
            React.createElement(
              "div",
              { className: "msg_arrow" },
              " "
            ),
            React.createElement("input", { ref: "reviewcomment", className: "msg newrev_message", type: "text", placeholder: "Write a comment.." })
          ),
          React.createElement(
            "button",
            { className: "newrev_btn send_btn", type: "button", onClick: this.onClick },
            "LEAVE A REVIEW"
          )
        );
      }
    }]);

    return Review;
  }(React.Component);

  /**
   * @namespace app
   * @function Review
   * @description The aim.Review reference object for creating new instances
   */


  app.review = function () {
    // Return the create function for the component initialization
    return {
      create: function create(parent) {
        // Get the parent element from the dom
        var pNode = document.getElementById(parent);
        // Add the default class name to the parent
        var review = React.createElement(Review, { parent: parent });
        // Render the review panel in the dom
        review = ReactDOM.render(review, pNode);
        // Return the Message display object for referencing
        return review;
      }
    };
  }();
})();