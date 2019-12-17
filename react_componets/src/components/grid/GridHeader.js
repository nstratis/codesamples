import React from 'react';
/**
 * @function GridHeader
 * @description Simple grid header component with the header columns
 */
const GridHeader = (props) => (
  <thead>
    <tr>
      <th> </th>
      <th className="code">Name</th>
      <th>Description</th>
      <th>Class</th>
    </tr>
  </thead>
);

export default GridHeader;
