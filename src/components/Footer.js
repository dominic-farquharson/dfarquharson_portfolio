// importing react and component
import React from 'react';

// Footer functional component
const Footer = (props) => {
    return (
      <footer className="footer bg-light">
        <ul style={{listStyleType: 'none', padding: 0, marginTop: 0}}>
          <div className="row justify-content-center"> 
            <li style={{marginRight: '20px'}}>
              {/* github - link */}
              <a style={{color:"black"}} href="https://github.com/dominic-farquharson">
                <i className="fa fa-github fa-3x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              {/* Linkedin Link */}
              <a style={{color:"black"}} href="https://www.linkedin.com/in/dominic-farquharson/">
                <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
              </a>
            </li>
          </div>
        </ul>  
        {/* <h1>&copy; Dominic Farquaharson 2017</h1> */}
      </footer>
    )
}

export default Footer;
