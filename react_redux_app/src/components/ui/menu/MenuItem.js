// import { Link } from 'react-router-dom'
// <Link to={`/${login}`}>
import React from "react";
export default (props) => {
  const { label, path } = props;
  return (<li><a href={path}>{label}</a></li>);
};
