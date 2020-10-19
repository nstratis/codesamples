import React, { Component } from 'react';
import Grid from './Grid';
import './Game.css';
import Button from './Button';


class Game extends Component {
  // Game State variables
  state = {
    count: 0,
    currentPlayer: '1',
    items: Array(9).fill(null),
    completed: false
  };

  /**
   * @function checkCollision
   * @description Checks the collision of various objects
   */
  checkCollision(a) {
    // This is the simplest form of checking whether a row, column or diagonal
    // has been completed
    // 0, 1, 2
    // 3, 4, 5
    // 6, 7, 8
    if ((a[0] && (a[0] === a[1] && a[0] === a[2]))) { return [0, 1, 2]; }
    if ((a[3] && (a[3] === a[4] && a[3] === a[5]))) { return [3, 4, 5]; }
    if ((a[6] && (a[6] === a[7] && a[7] === a[8]))) { return [6, 7, 8]; }
    // 0, 3, 6
    // 1, 4, 7
    // 2, 5, 8
    if ((a[0] && (a[0] === a[3] && a[0]  === a[6]))) { return [0, 3, 6]; }
    if ((a[1] && (a[1] === a[4] && a[1]  === a[7]))) { return [1, 4, 7]; }
    if ((a[6] && (a[6] === a[7] && a[6]  === a[9]))) { return [6, 4, 9]; }
    // 0, 4, 8
    // 2, 5, 6
    if ((a[0] && (a[0] === a[4] && a[0] === a[8]))) { return [0, 4, 8]; }
    if ((a[2] && (a[2] === a[5] && a[2] === a[6]))) { return [2, 5, 6]; }
    return null;
  }

  /**
   * @function handleItemClick
   * @description Handles the grid item click event
   */
  handleItemClick = (e) => {
    const id = parseInt(e.currentTarget.id, 10);
    let newArray = [...this.state.items],
    newPlayer = this.state.currentPlayer === '1' ? '2' : '1';

    if (this.state.currentPlayer === '2') {
      newArray[id] = '2';
    } else {
      newArray[id] = '1';
    }

    const response = this.checkCollision(newArray);
    this.setState({
      count: this.state.count + 1,
      items: newArray,
      currentPlayer: newPlayer,
      completed: !response ? false : response
    });
  }

  /**
   * @function handleReset
   * @description Handles the reset of the application
   */
  handleReset = () => {
    this.setState({
      count: 0,
      currentPlayer: '1',
      items: Array(9).fill(null),
      completed: false
    });
  }

  /**
   * @function render
   * @description Renders the main game containers
   */
  render() {
    return (<div className="game-tictactoe">
      <h1>Tic Tac Toe Example</h1>
      <Grid
        count={this.state.count}
        items={this.state.items}
        completed={this.state.completed}
        handleItemClick={this.handleItemClick} />
      <Button handleClick={this.handleReset} />
    </div>);
  }
}

export default Game;
