import React from "react";
import MenuItem from './MenuItem';

export default (props) => {
  const menu = [
    { label: 'Home', path: '/' },
    { label: 'Page With Grid', path: '/grid' },
    { label: 'Page With Form', path: '/form' }
  ];
  return (<nav className="main">
    <ul>
      {menu.map((item, i) => {
        return <MenuItem key={`${i}-menu-item`} label={item.label} path={item.path} />;
      })}
    </ul>
  </nav>);
};
