import React, { Component } from 'react';
import Square from './Square';

class Grid extends Component {
  /**
   * @function getItems
   * @description Returns the 9 grid squares to be rendered, ultimately these have
   * been created as stateless since they are behaving more like controlled inputs
   * and the overall game state is stored in the higher order component
   */
  getItems() {
    return this.props.items.map((item, i) => {
      return <Square
        key={i}
        id={i}
        win={this.props.completed ? this.props.completed.indexOf(i) : -1 }
        itemValue={item ? ((item === 1) ? 'X' : 'O')  : ''}
        onClickEvent={this.props.handleItemClick} />;
    });
  }

  /**
   * @function render
   * @description Renders the main game grid
   */
  render() {
    const items = this.getItems();
    let gameClass = `type${this.props.size}-${this.props.size}`;
    if (this.props.completed) { gameClass += ' disabled'; }
    // Since we know the Grid is a fixed 3/3 we can simply check if all squares
    // have been selected to which event there has been no winner and the game
    // is a draw
    return (<div className={`game ${gameClass}`}>{
      (this.props.count === (this.props.size * this.props.size)) ?
        <div className="result-display">Game over, it's a draw!</div> :
        items
    }</div>);
  }
}

export default Grid;
