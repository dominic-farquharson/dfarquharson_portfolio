// importing react and component
import React, {Component} from 'react';
import '../css/style.css';

// stateless header component
let Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <span><li>DF</li></span>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

    </header>
  )
}


export default Header;
