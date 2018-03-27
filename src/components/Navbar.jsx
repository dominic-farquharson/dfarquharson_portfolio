import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (  
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Link className="navbar-brand" to="/">DF</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="nav navbar-right navbar-nav justify-content-center ml-md-auto">
          <li className="nav-item"> 
            <Link className="nav-link" to="/about">About</Link>  
          </li> 
          <li className="nav-item"> 
            <Link className="nav-link" to="/projects">Projects</Link>  
          </li> 
          <li className="nav-item"> 
            <Link className="nav-link" to="/contact">Contact</Link>  
          </li> 
        </ul>
      </div>
    </nav>
  )
}