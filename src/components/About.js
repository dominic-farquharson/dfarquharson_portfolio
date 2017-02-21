// importing React
import React, {Component} from 'react';

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
    <div id="about">
      <h1>About</h1>
      <div className="uk-column-1-2@m">
        <div className="uk-card uk-card-default uk-card-body">
          <img title="Picture of Dominc Farquharson" alt="Picture of Dominic Farquharson." id="aboutImage" src="/assets/images/me 2014.jpg"/>
        </div>
        {/* About section */}
        <div className="about uk-card uk-card-default uk-card-body">
          <h3 className="uk-card-title">Hi, I'm Dominic.
            <br/>
            <span className="subText">
              But you can call me Dom.
            </span>
          </h3>
          <p>
            I am currently a student in the WDI program at General Assembly. Web developement has always been an interest of mine.I was born and raised in the Bronx, NY. When I am not hunched over a computer screen, I enjoy reading and writing. My favorite book series is Wheel of Time. In my spare time I am also writing a fiction novel that I hope to complete by the end of the year.
          </p>
        </div>
      </div>
    </div>
  )
}

// exporting component
export default About;
