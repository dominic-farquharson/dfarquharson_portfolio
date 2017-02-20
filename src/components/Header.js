// importing react and component
import React, {Component} from 'react';
import '../css/style.css';

// stateless header component
let Header = (props) => {
  return (
    <header>
      <nav className="navbar">
        {/* Navbar for devices greater than 960px */}
        <ul className="uk-visible@m">
          {/* Aligining logo to the left */}
          <span className="uk-position-left"><li>DF</li></span>
          {/* Aligining nav links to the right -adding smooth scroll */}
          <section className="uk-position-right">
            <li><a data-uk-scroll href="#">Home</a></li>
            <li><a data-uk-scroll href="#about">About</a></li>
            <li><a data-uk-scroll href="#projects">Projects</a></li>
          </section>
        </ul>

        {/* Mobile NavBar  */}
        <i className="uk-position-left uk-hidden@m  fa fa-bars fa-2x" aria-hidden="true" data-uk-toggle="target: #offcanvas-overlay"></i>
        <div className="uk-hidden@m" id="offcanvas-overlay" data-uk-offcanvas="overlay: true">
          <div className="uk-offcanvas-bar">
          <ul>
            <li><a data-uk-scroll href="#">Home</a></li>
            <li><a data-uk-scroll href="#about">About</a></li>
            <li><a data-uk-scroll href="#projects">Projects</a></li>
          </ul>

        </div>
      </div>
      {/* Mobile Navbar End  */}


      </nav>






      {/* vertical/horizontally aligning section using uikit */}
      <section>
          <h1 className="uk-position-center">Dominic Farquharson
            <br />
            Web Developer
          </h1>
      </section>
      {/* Learn more button */}
      <section id="learnMore">
        {/* <a href="#about" data-uk-scroll>Learn More</a> */}
      </section>
    </header>
  )
}


export default Header;
