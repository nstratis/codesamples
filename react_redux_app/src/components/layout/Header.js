import React from "react";
import Burger from '../ui/Burger';
import Logo from '../ui/Logo';

export default (props) => (
  <header className="main">
    <Burger onClick={props.toggleMenu}/>
    <Logo />
  </header>
);
