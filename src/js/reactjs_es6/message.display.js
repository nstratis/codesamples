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
   * @class ReviewItem
   * @description Review Item, the final item in the comment lists
   */
  function ReviewItem(props) {
    return React.createElement(
      "li",
      { key: props.i, className: props.className },
      React.createElement(
        "div",
        { className: "rev_input" },
        React.createElement(
          "div",
          { className: "msg_arrow" },
          " "
        ),
        React.createElement("input", { "data-id": props.i, className: "msg", type: "text", placeholder: "Write a comment.." })
      ),
      React.createElement(
        "button",
        { "data-id": props.i, className: "comlst_send send_btn", type: "button", onClick: props.onSend },
        "SEND"
      )
    );
  }

  /**
   * @class ListIem
   * @description Simple list item
   */
  function ListIem(props) {
    // Quick Likes refernces
    var you = props.likes[0],
        users = props.likes[1],

    // Declare the like string
    str = '',
        other = '';
    // Write the correct like button string
    if (you === 1) {
      str = 'You and ';other = 'other ';
    }
    if (users === 1) {
      str += '1 ' + other + 'person likes this';
    } else if (users > 1) {
      str += '5 ' + other + 'people like this';
    }
    return (
      // The default list item, this has no state
      React.createElement(
        "li",
        { key: props.i, className: props.className, "data-id": props.i },
        React.createElement(
          "h2",
          { className: "revlst_title" },
          props.user,
          React.createElement(
            "span",
            { className: "duration" },
            props.date
          )
        ),
        React.createElement(
          "article",
          { className: "msg revlst_message" },
          props.message
        ),
        React.createElement(
          "button",
          { className: props.butClass, type: "button",
            onClick: props.onLike, "data-id": props.i },
          "Like"
        ),
        React.createElement(
          "span",
          { className: "revlst_likes" },
          str
        ),
        props.comObj
      )
    );
  }

  /**
   * @class User Review Comments
   * @description Return the user comments
   */
  function Comments(props) {
    return React.createElement(
      "ul",
      { className: "commuser" },
      props.coms
    );
  }

  /**
   * @class MessageDisplay
   * @description A sample React JS MessageDisplay Component
   */

  var MessageDisplay = function (_React$Component) {
    _inherits(MessageDisplay, _React$Component);

    /**
     * @function constructor
     * @memberof MessageDisplay
     * @description The constructor function for the MessageDisplay component
     */
    function MessageDisplay(props) {
      _classCallCheck(this, MessageDisplay);

      // Set the state for the board
      var _this = _possibleConstructorReturn(this, (MessageDisplay.__proto__ || Object.getPrototypeOf(MessageDisplay)).call(this, props));
      // All constructors require the super() to be executed


      _this.state = {
        data: _this.props.data
      };
      // Bind the current scope to the method, standard ES6 requirement
      _this.onLike = _this.onLike.bind(_this);
      _this.onSend = _this.onSend.bind(_this);
      return _this;
    }

    /**
     * @function componentWillReceiveProps
     * @memberof MessageDisplay
     * @description The lifecyle method to determine if props are received
     */
    //componentWillReceiveProps(nextProps){
    //console.log('componentWillReceiveProps()');
    //}

    /**
     * @function componentDidMount
     * @memberof MessageDisplay
     * @description The lifecyle didMount method executed after the render
     */
    //componentDidMount(){
    //console.log('componentDidMount()');
    //}

    /**
     * @function componentWillUnmount
     * @memberof MessageDisplay
     * @description The lifecyle will unmount method
     */
    //componentWillUnmount(){
    //console.log('componentWillUnmount()');
    //}

    /**
     * @function destroy
     * @memberof MessageDisplay
     * @description Destroy the component
     */


    _createClass(MessageDisplay, [{
      key: "destroy",
      value: function destroy() {
        // Unmount the component from the dom
        return ReactDOM.unmountComponentAtNode(document.getElementById(this.props.parent));
      }

      /**
       * @public
       * @function onSend
       * @memberof MessageDisplay
       * @description Handle the send action for the comment box
       * @param {object} e - The event object
       */

    }, {
      key: "onSend",
      value: function onSend(e) {
        // Get the selected value
        var box = e.target.attributes['data-id'].value;
        // For the sake of this demonstration I will update the component
        // state given there is no server object available for data storage
        var data = JSON.parse(JSON.stringify(this.state.data));
        // Return the value of the related comment input
        var value = document.querySelector('input[data-id="' + box + '"]').value;
        // Ensure the value is not empty
        if (value === "") {
          alert('Please enter a comment!');return;
        }
        // Update the
        var obj = data.map(function (item) {
          return item.id;
        }).indexOf(parseInt(box, 10));
        // Set the object reference
        obj = data[0];
        // Push a new comment into the object
        obj.comments.push({
          user: "Jason Jones",
          "date": "Now",
          "message": value,
          "likes": ""
        });
        // Update the state with the new data structure
        this.setState({ data: data });
      }

      /**
       * @public
       * @function onLike
       * @memberof MessageDisplay
       * @description Handle the like event action for each comment
       * @param {object} e - The event object
       */

    }, {
      key: "onLike",
      value: function onLike(e) {
        // Get the selected value
        debug('Perform the Like Action');
        alert('You have pressed the like button');
      }

      /**
       * @function render
       * @memberof MessageDisplay
       * @description Render the MessageDisplay component
       */

    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        // Set the quick reference to the data, given props are immutable
        var data = JSON.parse(JSON.stringify(this.state.data));
        var list = data.map(function (value, i) {
          // Set the class name
          var className = 'revlst_elem',

          // Default button class
          butClass = 'revlst_btn',

          // Declare the coms variable
          coms = void 0,
              comObj = '';
          // Check the comments for the item
          if (value.comments !== undefined && value.comments.length > 0) {
            // Push the default action which is to add a comment to the list
            value.comments.push({ "user": "default" });
            // Map the comments
            coms = value.comments.map(function (v, j) {
              // Determine which object type to return
              if (v.user === 'default') {
                // Return a new review comment box item
                return React.createElement(ReviewItem, { key: j, i: j, className: "comlst_write", onSend: _this2.onSend });
              }
              return React.createElement(ListIem, { key: j, i: j, className: className, butClass: butClass,
                likes: v.likes, message: v.message,
                user: v.user, date: v.date, onLike: _this2.onLike });
            });
            // Create the new comment component
            comObj = React.createElement(Comments, { key: i, coms: coms });
          }
          // Return the new list item for the review
          return React.createElement(ListIem, { key: i, i: i, className: className, butClass: butClass,
            likes: value.likes, message: value.message,
            user: value.user, comObj: comObj, date: value.date, onLike: _this2.onLike });
        });
        // Return the component elements
        return React.createElement(
          "ul",
          { className: "revlst" },
          list
        );
      }
    }]);

    return MessageDisplay;
  }(React.Component);

  /**
   * @function propTypes
   * @memberof MessageDisplay
   * @description Strong type the property expectations
   */


  MessageDisplay.propTypes = {
    data: React.PropTypes.array
  };

  /**
   * @function defaultProps
   * @memberof MessageDisplay
   * @description Set the default props for the component in the event they
   * were not define in the creation
   */
  // MessageDisplay.defaultProps = {
  //
  // }

  /**
   * @namespace app
   * @function messageDisplay
   * @description The aim.messageDisplay reference object for creating new instances
   */
  app.messageDisplay = function () {
    // Return the create function for the component initialization
    return {
      create: function create(parent, options) {
        // // Get the parent element from the dom
        var pNode = document.getElementById(parent);
        // // Add the default class name to the parent
        var list = React.createElement(MessageDisplay, { data: options.data, parent: parent });
        // Render the list in the dom
        list = ReactDOM.render(list, pNode);
        // // Return the Message display object for referencing
        return list;
      }
    };
  }();
})();