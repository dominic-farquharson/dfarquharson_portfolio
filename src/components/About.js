// importing React
import React, {Component} from 'react';

// Creating About functional component
const About = (props) => {
  /* Setting props to variables for readibility */
  const skills = props.skills;

  // function to print skills
  let printSkills =() => {
    return (
      skills.map( (e, i)=>{
        return(<li key={i}>{e}</li>)
      })
    )
  }

  return (
    <div id="about">
      <h1>About</h1>
      <div className="uk-grid">
      <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
        <h3 className="uk-card-title">Default</h3>
        <img src="http://placehold.it/350x350" />
        {/* <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
      </div>
    {/* About section */}
    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
      <h3 className="uk-card-title">Hi, I'm Dominic. <br /> <span className="subText"> But you can call me Dom. </span></h3>
  				<p>I am currently a student in the WDI program at General Assembly.
  				Web developement has always been an interest of mine. </p>

  				<p>I was born and raised in the Bronx, NY.  When I am not hunched over a computer screen, I enjoy reading and writing. <br />My favorite book series is Wheel of Time.</p>

  				<p>In my spare time I am also writing a fiction novel that I hope to complete by the end of the year.</p>
        </div>
      </div>
      {/* Skills. Pulling from firebase */}
      {/* <p>Skills</p>
      <p>Will be from firebase</p> */}
      {/* Rendering skills from skills property */}
      <h1>Skills</h1>
      <ul id="skills">
        {/* Running function to print skills  */}
        {printSkills()}
      </ul>

      {/* {skills.map( (e)=>{
        return(<li>{e}</li>)
      })} */}
      {/* <ul>

      </ul> */}
    </div>
  )
}

// exporting component
export default About;
