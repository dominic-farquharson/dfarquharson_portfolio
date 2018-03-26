// importing react and component
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

// stateless header component
const Home = (props) => {
  return (
    <div className="site-background" style={{position: 'absolute', width: '100vw', height: '100vh', top: 0, right: 0}}>
      <div className="container">
        {/* accounting for padding */}
        <section className=" row align-items-center" style={{height: "calc(100vh - 98px)"}}>
          <div className="col col align-self-center">
            <h1 style={{color: 'white'}}>Dominic Farquharson
              <br />
              <span id="sub">Web Developer</span>
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;