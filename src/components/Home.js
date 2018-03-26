// importing react and component
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

// stateless header component
const Home = (props) => {
  return (
    <div className="container">
      {/* accounting for padding */}
      <section className=" row align-items-center" style={{height: "calc(100vh - 98px)"}}>
        <div className="col col align-self-center">
          <h1>Dominic Farquharson
            <br />
            <span id="sub">Web Developer</span>
          </h1>
        </div>
      </section>
    </div>
  )
}

export default Home;