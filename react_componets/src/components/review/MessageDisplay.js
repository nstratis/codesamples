import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './items/ReviewItem';
import ListItem from './items/ListItem';
import CommentList from './items/CommentList';
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
      console.log('DATA LOADED', data);
      this.setState({ data: data.reviews });
    });
  }

  /**
   * @function onSend
   * @description Handle the send action for the comment box
   * @param {object} e - The event object
   */
  onSend = (e) => {
    console.log('asdassdassd');
    const box = e.target.attributes['data-id'].value,
    data = JSON.parse(JSON.stringify(this.state.data)),
    value = document.querySelector(`input[data-id="${box}"]`).value;
    if (value === '') {
      alert('Please enter a comment!');
      return;
    }
    let obj = data.map(item => item.id).indexOf(parseInt(box, 10));
    obj = data[0];
    obj.comments.push({
      user: 'Jason Jones',
      date: 'Now',
      message: value,
      likes: ''
    });
    this.setState({ data });
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
   * @function render
   * @description Render the MessageDisplay component
   */
  render() {
    const data = this.state.data,
    list = data.map((value, i) => {
    const className = 'revlst_elem',
    butClass = 'revlst_btn';
    let coms, comObj = '';
    if (value.comments !== undefined && value.comments.length > 0) {
      value.comments.push({ user: 'default' });
      coms = value.comments.map((v, j) => {
        if (v.user === 'default') {
          return <ReviewItem
                    key={j}
                    i={j}
                    className="comlst_write"
                    onSend={this.onSend} />;
        }
        return <ListItem
                  key={j}
                  i={j}
                  className={className}
                  butClass={butClass}
                  likes={v.likes}
                  message={v.message}
                  user={v.user}
                  date={v.date}
                  onLike={this.onLike} />;
      });
      comObj = <CommentList key={i} coms={coms} />;
    }
    return <ListItem
              key={i}
              i={i}
              className={className}
              butClass={butClass}
              likes={value.likes}
              message={value.message}
              user={value.user}
              comObj={comObj}
              date={value.date}
              onLike={this.onLike} />;
    });
    return (
      <div id="message-display" className="mncont">
        <ul className="revlst">{list}</ul>
      </div>
    );
  }
}
