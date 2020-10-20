import React from 'react';

// Could be argued that a stateful component is better here...
export default (props) => {
  const attr = { className: 'square' };
  if (props.itemValue !== '') { attr.className += ' disabled'; }
  if (props.win !== -1) { attr.className += ' win'; }
  if (props.onClickEvent) { attr.onClick = props.onClickEvent; }
  return (
    <div id={props.id} {...attr}>{props.itemValue}</div>
  );
};
