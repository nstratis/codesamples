import React, { Component } from 'react';
import Grid from './Grid';
import './Game.css';
import Select from './Select';
import Button from './Button';


class Game extends Component {
  // Game State variables
  state = {
    size: 3,
    count: 0,
    currentPlayer: 1,
    items: Array(9).fill(null),
    completed: false
  };

  /**
   * @function checkStatus
   * @description Checks the grid status to determine if a row, column or diagonal has been
   * inputted
   */
  checkStatus(a) {
    // 0, 1, 2
    // 3, 4, 5
    // 6, 7, 8

    // 0, 1, 2, 3
    // 4, 5, 6, 7
    // 8, 9, 10, 11
    // 12, 13, 14, 15

    // Below is a standard 3x3 Check, this isn't very dynamic and limited
    // to a 3 by 3 board..
    // 0, 1, 2
    // 3, 4, 5
    // 6, 7, 8
    // if ((a[0] && (a[0] === a[1] && a[0] === a[2]))) { return [0, 1, 2]; }
    // if ((a[3] && (a[3] === a[4] && a[3] === a[5]))) { return [3, 4, 5]; }
    // if ((a[6] && (a[6] === a[7] && a[7] === a[8]))) { return [6, 7, 8]; }
    // 0, 3, 6
    // 1, 4, 7
    // 2, 5, 8
    // if ((a[0] && (a[0] === a[3] && a[0]  === a[6]))) { return [0, 3, 6]; }
    // if ((a[1] && (a[1] === a[4] && a[1]  === a[7]))) { return [1, 4, 7]; }
    // if ((a[2] && (a[2] === a[5] && a[2]  === a[8]))) { return [2, 5, 8]; }
    // 0, 4, 8
    // 2, 4, 6
    // if ((a[0] && (a[0] === a[4] && a[0] === a[8]))) { return [0, 4, 8]; }
    // if ((a[2] && (a[2] === a[4] && a[2] === a[6]))) { return [2, 4, 6]; }
    // return null;

    const
    // Let's create a function that can support checking the columns, rows and
    // diagonals
    // func = (i, type = 'row', size = 3) => {
    //   // ROWS
    //   if (type === 'row' && size === 3) {
    //     return ((a[i] && (a[i] === a[i + 1] && a[i] === a[i + 2]))) ? [i, i + 1, i + 2] : null;
    //   } else if (type === 'row' && size === 4) {
    //     return ((a[i] && (a[i] === a[i + 1] && a[i] === a[i + 2] && a[i] === a[i + 3]))) ? [i, i + 1, i + 2, i + 3] : null;
    //   }
    //   // COLUMNS
    //   if (type === 'col' && size === 3) {
    //     return ((a[i] && (a[i] === a[i + size] && a[i] === a[i + (2 * size)]))) ? [i, i + size, i + (2 * size)] : null;
    //   } else if (type === 'col' && size === 4) {
    //     return ((a[i] && (a[i] === a[i + size] && a[i] === a[i + (2 * size)] && a[i] === a[i + (3 * size)]))) ? [i, i + size, i + (2 * size), i + (3 * size)] : null;
    //   }
    //   // DIAGS
    //   if (type === 'diagLeft' && size === 3) {
    //     return ((a[i] && (a[i] === a[i + (size + 1)] && a[i] === a[i  + ((size + 1) * 2)]))) ? [i, i + (size + 1), (size + 1) * 2] : null;
    //   } else if (type === 'diagRight' && size === 3) {
    //     return ((a[i] && (a[i] === a[i * 2] && a[i] === a[i * 3]))) ? [i, i * 2, i * 3] : null;
    //   } else if (type === 'diagLeft' && size === 4) {
    //     return ((a[i] && (a[i] === a[i + (size + 1)] && a[i] === a[i  + ((size + 1) * 2)] && a[i] === a[i  + ((size + 1) * 3)]))) ? [i, i + (size + 1), (size + 1) * 2, (size + 1) * 3] : null;
    //   } else if (type === 'diagRight' && size === 4) {
    //     return ((a[i] && (a[i] === a[i * 2] && a[i] === a[i * 3] && a[i] === a[i * 4]))) ? [i, i * 2, i * 3, i * 4] : null;
    //   }
    //   return null;
    // },

    // Let's clean the function up even further make it dynamic to any
    // size of grid
    func = (i, type = 'row', size = 3) => {
      let conditionals = [],
      indicies = [],
      array = Array(size).fill(null);
      if (type === 'row') {
        array.forEach((item, n) => {
          if (n !== size - 1) { conditionals.push(`${a[i]} === ${a[i + (n + 1)]}`); }
          indicies.push(i + n);
        });
      } else if (type === 'col') {
        array.forEach((item, n) => {
          if (n !== size - 1) { conditionals.push(`${a[i]} === ${a[i + ((n + 1) * size)]}`); }
          indicies.push(i + (n * size));
        });
      } else if (type === 'diagLeft') {
        array.forEach((item, n) => {
          conditionals.push(`${a[i]} === ${a[i + ((size + 1) * n)]}`);
          indicies.push(i + ((size + 1) * n));
        });
      } else if (type === 'diagRight') {
        array.forEach((item, n) => {
          conditionals.push(`${a[i]} === ${a[i * ((n - 1) + 2)]}`);
          indicies.push(i * (n - 1 + 2));
        });
      }
      const statement = `(a[i] && (${conditionals.join(' && ')})) ? [${indicies}] : null`;
      // Eval is evil, except when it's not... just make sure users scripts cannot be injected ;)
      // eslint-disable-next-line
      return eval(String(statement));
    },
    rowNumber = Array(this.state.size).fill(null),
    colNumber = Array(this.state.size).fill(null);
    let correctResult = null;
    // CHECK ROWS
    rowNumber.forEach((item, i) => {
      const check = func(i *  this.state.size, 'row', this.state.size);
      if (check) { correctResult = check; }
    });
    // CHECK COLUMNS
    colNumber.forEach((item, i) => {
      const check = func(i, 'col', this.state.size);
      if (check) { correctResult = check; }
    });
    // CHECK DIAGS
    const diagLeft = func(0, 'diagLeft', this.state.size);
    if (diagLeft) { correctResult = diagLeft; }
    const diagRight = func(this.state.size - 1, 'diagRight', this.state.size);
    if (diagRight) { correctResult = diagRight; }
    return correctResult;
  }

  /**
   * @function handleItemClick
   * @description Handles the grid item click event
   */
  handleItemClick = (e) => {
    const id = parseInt(e.currentTarget.id, 10);
    let newArray = [...this.state.items],
    newPlayer = this.state.currentPlayer === 1 ? 2 : 1;
    newArray[id] = this.state.currentPlayer;
    const status = this.checkStatus(newArray);
    this.setState({
      count: this.state.count + 1,
      items: newArray,
      currentPlayer: newPlayer,
      completed: !status ? null : status
    });
  }

  /**
   * @function handleReset
   * @description Handles the reset of the game whilst preserving game size
   * @param {Event} e - The event object passed if from a button click
   */
  handleReset = (e) => {
    const s = {
      count: 0,
      currentPlayer: 1,
      items: Array(this.state.size * this.state.size).fill(null),
      completed: false
    };
    if (e) { this.setState(s); }
    return s;
  }

  /**
   * @function handleGridSizeChange
   * @description Handles the grid size change, this will also reset any current game
   * @param {Event} e - The event object dispatched by the select component
   */
  handleGridSizeChange = (e) => {
    const val = parseInt(e.currentTarget.value, 10);
    const s = this.handleReset();
    s.size = val;
    s.items = Array(val * val).fill(null);
    this.setState(s);
  }

  /**
   * @function render
   * @description Renders the main game containers and any ui components
   */
  render() {
    return (<div className="game-tictactoe">
      <h1>Tic Tac Toe Example</h1>
      <p>This is a simple Tic Tac Toe example that supports AND Grid Size, currently set to max 10x10.</p>
      <Select onChangeEvent={this.handleGridSizeChange} />
      <Grid
        size={this.state.size}
        count={this.state.count}
        items={this.state.items}
        completed={this.state.completed}
        handleItemClick={this.handleItemClick} />
      <Button handleClick={this.handleReset} />
    </div>);
  }
}

export default Game;
