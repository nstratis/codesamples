import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './review-item/ReviewItem';
import CommentItem from './comment-item/CommentItem';
import CommentList from './comment-list/CommentList';
import './MessageDisplay.css';

/**
 * @class MessageDisplay
 * @description A sample React JS MessageDisplay Component
 */
export default class MessageDisplay extends Component {
  static propTypes = {
    data: PropTypes.array
  }

  state = {
    data: []
  };

  /**
   * @function componentDidMount
   * @description When the component mounts, load the data from the server
   */
  componentDidMount() {
    fetch('./data/messages.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({ data: data.reviews });
    });
  }

  /**
   * @function onSend
   * @description Handle the send action for the comment box
   * @param {object} e - The event object
   */
  onSend = (e) => {
    console.log('DATA', this.state.data);
    const box = e.target.attributes['data-id'].value,
    data = JSON.parse(JSON.stringify(this.state.data)),
    // Could have used a controlled component here, but
    // not really necessary in this example
    value = document.querySelector(`input[data-id="${box}"]`).value;
    console.log(box, value);
    if (value === '') {
      alert('Please enter a comment!');
      return;
    }
    let obj = data.map(item => item.id).indexOf(parseInt(box, 10));
    console.log(obj);
    if (obj !== -1) {
      obj = data[obj];
      obj.comments.push({
        user: 'Jason Jones',
        date: 'Now',
        message: value,
        likes: ''
      });
      this.setState({ data });
    }
  }

  /**
   * @function onLike
   * @description Handle the like event action for each comment
   * @param {object} e - The event object
   */
  onLike = () => {
    alert('You have pressed the like button');
  }

  /**
   * @function getCommentItem
   * @description Returns a single comment item
   */
  getCommentItem(data) {
    return (
      <CommentItem
        key={data.key}
        i={data.key}
        classNames={data.classNames}
        butClass={data.butClass}
        likes={data.likes}
        message={data.message}
        user={data.user}
        date={data.date}
        onLike={this.onLike}
        comObj={data.comObj || null}
    />);
  }

  /**
   * @function getList
   * @description Returns the current list of items
   */
  getList() {
    // Still the easiest way to deep clone a
    // a multidimensional array
    const data = JSON.parse(JSON.stringify(this.state.data));
    const classNames = 'review-list-element',
    butClass = 'review-list-bt';

    return  data.map((value, i) => {
      let items, comObj = '';
      if (value.comments !== undefined && value.comments.length > 0) {
        value.comments.push({ user: 'default' });
        items = value.comments.map((v, j) => {
          if (v.user === 'default') {
            return <ReviewItem
                      key={j}
                      dataId={i}
                      classNames="align-right"
                      onSend={this.onSend} />;
          }
          return this.getCommentItem({
            key: j,
            classNames,
            butClass,
            likes: v.likes,
            message: v.message,
            user: v.user,
            date: v.date
          });
        });
        comObj = <CommentList key={i} coms={items} />;
      }
      return this.getCommentItem({
        key: i,
        classNames,
        butClass,
        likes: value.likes,
        message: value.message,
        user: value.user,
        date: value.date,
        comObj
      });
    });
  }

  /**
   * @function render
   * @description Render the MessageDisplay component
   */
  render() {
    const list = this.getList();
    return (
      <div id="message-display" className="message-container">
        <ul className="review-item-list">{list}</ul>
      </div>
    );
  }
}
