import React from 'react';
/**
 * @function GridRow
 * @description Grid Row Component with the columns for each row
 */
const GridRow = (props) => (
  <tr>
    <td>
      <img src={`../${props.img}`}
        width="100"
        height="100"
        alt="This is one of our bikes" />
    </td>
    <td className="code">{props.name}</td>
    <td>{props.description}</td>
    <td>{props.classes}</td>
  </tr>
);

export default GridRow;
