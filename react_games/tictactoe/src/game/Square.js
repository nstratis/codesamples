import React from 'react';

export default (props) => {
  if (props.itemValue !== '') {
    return (
      <div className={`square ${props.classNames} disabled`}>{  props.itemValue }</div>
    )
  }
  return (
    <div id={props.id} className="square" onClick={props.onClickEvent}></div>
  );
};
