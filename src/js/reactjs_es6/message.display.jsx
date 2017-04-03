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
 * @class ReviewItem
 * @description Review Item, the final item in the comment lists
 */
function ReviewItem(props){
  return (
    <li key={props.i} className={props.className}>
      <div className="rev_input"><div className="msg_arrow"> </div><input data-id={props.i} className="msg" type="text" placeholder="Write a comment.." /></div>
      <button data-id={props.i} className="comlst_send send_btn" type="button" onClick={props.onSend}>SEND</button>
    </li>
  );
}

/**
 * @class ListIem
 * @description Simple list item
 */
function ListIem(props){
  // Quick Likes refernces
  let you = props.likes[0], users = props.likes[1],
  // Declare the like string
  str = '', other = '';
  // Write the correct like button string
  if(you === 1){ str = 'You and '; other = 'other '; }
  if(users === 1){
    str += '1 ' + other + 'person likes this';
  } else if(users > 1){
    str += '5 ' + other + 'people like this';
  }
  return (
    // The default list item, this has no state
    <li key={props.i} className={props.className} data-id={props.i}>
      <h2 className="revlst_title">{props.user}<span className="duration">{props.date}</span></h2>
      <article className="msg revlst_message">{props.message}</article>
      <button className={props.butClass} type="button"
      onClick={props.onLike} data-id={props.i}>Like</button>
      <span className="revlst_likes">{str}</span>
      {props.comObj}
    </li>
  );
}

/**
 * @class User Review Comments
 * @description Return the user comments
 */
function Comments(props){
  return (
    <ul className="commuser">{props.coms}</ul>
  );
}

/**
 * @class MessageDisplay
 * @description A sample React JS MessageDisplay Component
 */
class MessageDisplay extends React.Component {

  /**
   * @function constructor
   * @memberof MessageDisplay
   * @description The constructor function for the MessageDisplay component
   */
  constructor(props){
    // All constructors require the super() to be executed
    super(props);
    // Set the state for the board
    this.state = {
      data:this.props.data
    };
    // Bind the current scope to the method, standard ES6 requirement
    this.onLike = this.onLike.bind(this);
    this.onSend = this.onSend.bind(this);
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
  destroy(){
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
  onSend(e){
    // Get the selected value
    let box = e.target.attributes['data-id'].value;
    // For the sake of this demonstration I will update the component
    // state given there is no server object available for data storage
    let data = JSON.parse(JSON.stringify(this.state.data));
    // Return the value of the related comment input
    let value = document.querySelector('input[data-id="' + box + '"]').value;
    // Ensure the value is not empty
    if(value === ""){ alert('Please enter a comment!'); return; }
    // Update the
    let obj = data.map(function(item) { return item.id; }).indexOf(parseInt(box, 10));
    // Set the object reference
    obj = data[0];
    // Push a new comment into the object
    obj.comments.push({
      user:"Jason Jones",
      "date":"Now",
      "message":value,
      "likes":""
    });
    // Update the state with the new data structure
    this.setState({data:data});
  }

  /**
   * @public
   * @function onLike
   * @memberof MessageDisplay
   * @description Handle the like event action for each comment
   * @param {object} e - The event object
   */
  onLike(e){
    // Get the selected value
    debug('Perform the Like Action');
    alert('You have pressed the like button');
  }

  /**
   * @function render
   * @memberof MessageDisplay
   * @description Render the MessageDisplay component
   */
  render(){
    // Set the quick reference to the data, given props are immutable
    let data = JSON.parse(JSON.stringify(this.state.data));
    let list = data.map((value, i) => {
    // Set the class name
    let className = 'revlst_elem',
    // Default button class
    butClass = 'revlst_btn',
    // Declare the coms variable
    coms, comObj = '';
    // Check the comments for the item
    if(value.comments !== undefined && value.comments.length > 0){
      // Push the default action which is to add a comment to the list
      value.comments.push({ "user":"default" });
      // Map the comments
      coms = value.comments.map((v, j) => {
        // Determine which object type to return
        if(v.user === 'default'){
          // Return a new review comment box item
          return <ReviewItem key={j} i={j} className="comlst_write" onSend={this.onSend} />
        }
        return <ListIem key={j} i={j} className={className} butClass={butClass}
          likes={v.likes} message={v.message}
          user={v.user} date={v.date} onLike={this.onLike}  />
      });
      // Create the new comment component
      comObj = <Comments key={i} coms={coms} />
    }
    // Return the new list item for the review
    return <ListIem key={i} i={i} className={className} butClass={butClass}
      likes={value.likes} message={value.message}
      user={value.user} comObj={comObj} date={value.date} onLike={this.onLike} />
    });
    // Return the component elements
    return (
      <ul className="revlst">{list}</ul>
    );
  }
}

/**
 * @function propTypes
 * @memberof MessageDisplay
 * @description Strong type the property expectations
 */
MessageDisplay.propTypes = {
  data:React.PropTypes.array
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
app.messageDisplay = (function(){
  // Return the create function for the component initialization
  return {
    create:function(parent, options){
      // // Get the parent element from the dom
      let pNode = document.getElementById(parent);
      // // Add the default class name to the parent
      let list = <MessageDisplay data={options.data} parent={parent} />;
      // Render the list in the dom
      list = ReactDOM.render(list, pNode);
      // // Return the Message display object for referencing
      return list;
    }
  }
}());

}());
