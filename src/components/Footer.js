// importing react and component
import React from 'react';

// Footer functional component
let Footer = (props) => {
    return (
      <footer>
        <ul id="socialLinks">
          <li>
            {/* github - link */}
            <a style={{color:"white"}} href="https://github.com/dominic-farquharson">
              <i className="fa fa-github fa-3x" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            {/* Linkedin Link */}
            <a style={{color:"white"}} href="https://www.linkedin.com/in/dominic-farquharson/">
              <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
            </a>
          </li>
        </ul>  
        <h1>&copy; Dominic Farquaharson 2017</h1>
      </footer>
    )
}

export default Footer;
