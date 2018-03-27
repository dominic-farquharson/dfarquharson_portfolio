// importing React
import React from 'react';

// Creating About functional component
const About = (props) => {
  /* Setting props to variables for readibility */
  const skills = props.skills;

  // function to print skills
  let printSkills = () => {
    return (skills.map((e, i) => {
      return (
        <li key={i}>{e}</li>
      )
    }))
  }

  return (
    <div className="container">
      <h2>About</h2>
      <div className="row justify-content-center"> 

        <div style={{height: '75vh'}}>
          {/* <div className="card col-lg-5 col-md-6 col-sm-12"> */}
          <img className="img-fluid img-thumbnail h-100" title="Picture of Dominc Farquharson" alt="Picture of Dominic Farquharson." src="/assets/images/me 2014.jpg"/>
        </div>
        <div className="card col-lg-5 col-md-6 col-sm-12">
          <div className="card-body">
            <p style={{fontSize: '1.5rem', lineHeight: 1.4}}className="text-center">Hi, I'm Dominic.
              <br/>
              <span className="subText font-italic">
                But you can call me Dom.
              </span>
            </p>
            <p>
              I am currently working as an Instructional Associate for the WDI program at General Assembly. Web developement has always been an interest of mine.I was born and raised in the Bronx, NY. When I am not hunched over a computer screen, I enjoy reading and writing. My favorite book series is Wheel of Time. In my spare time I am also writing a fiction novel that I hope to complete by the end of the year.
            </p>
            </div>
        </div>      
      </div>
    </div>
  );
}

// exporting component
export default About;
