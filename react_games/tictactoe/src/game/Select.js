import React from 'react';

export default (props) => (
  <div className="grid-select">
    <label>Grid Size:</label>
    <select onChange={props.onChangeEvent}>
      <option value="3">3x3</option>
      <option value="4">4x4</option>
      <option value="5">5x5</option>
      <option value="6">6x6</option>
      <option value="7">7x7</option>
      <option value="8">8x8</option>
      <option value="9">9x9</option>
      <option value="10">10x10</option>
    </select>
  </div>
);
