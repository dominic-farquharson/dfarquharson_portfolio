// importing react and component
import React, {Component} from 'react';
import '../css/style.css';

// stateless header component
let Header = (props) => {
  return (
    <header>
      <nav>
        {/* Navbar for devices greater than 960px */}
        <ul className="uk-visible@m">
          {/* Aligining logo to the left */}
          <span className="uk-position-left"><li>DF</li></span>
          {/* Aligining nav links to the right */}
          <section className="uk-position-right">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
          </section>
        </ul>

        {/* Navbar for devices less than 960px */}

      </nav>
      {/* vertical/horizontally aligning section using uikit */}
      <section>
        <p>
          <h1 className="uk-position-center">Dominic Farquharson
            <br />
            Web Developer
          </h1>
        </p>
      </section>
    </header>
  )
}


export default Header;
