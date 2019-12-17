import { Link } from 'react-router-dom';
import React from "react";
export default (props) => {
  const { label, path } = props;
  return (<li><Link to={`${path}`}>{label}</Link></li>);
};
