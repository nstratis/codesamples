import React, { Component } from 'react';
import Square from './Square';

class Grid extends Component {
  /**
   * @function
   * @description The grid constructor function
   */
  constructor(props) {
    super(props);
    console.log('Game Component Initialized');

  }

  /**
   * @function getItems
   * @description Returns the 9 grid squares to be rendered, ultimately these have
   * been created as stateless since they are behaving more like controlled inputs
   */
  getItems() {
    return this.props.items.map((item, i) => {
      let classNames = '';
      if (this.props.completed) {
        this.props.completed.forEach((winner) => {
          if (i === winner) {
            classNames = 'win';
          }
        });
      }
      return <Square
        key={i}
        id={i}
        classNames={classNames}
        itemValue={item !== null ? ((item === '1') ? 'X' : 'O')  : ''}
        onClickEvent={this.props.handleItemClick} />;
    });
  }

  /**
   * @function render
   * @description Renders the main grid
   */
  render() {
    const items = this.getItems();
    // if (Array.isArray(this.props.completed)) {
    if (this.props.count === 9) {
      return(<div className="game">
        <span className="result-display"> Game over </span>
      </div>
      );
    }
    return (
      <>
      <div className="game">
        {
          items
        }
      </div>
      </>
    );
  }
}

export default Grid;
