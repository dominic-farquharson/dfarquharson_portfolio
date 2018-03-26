// importing react and component
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

// stateless header component
const Home = (props) => {
  return (
    <div>
      <section>
          <h1 className="align-middle">Dominic Farquharson
            <br />
            <span id="sub">Web Developer</span>
          </h1>
      </section>
    </div>
  )
}


export default Home;