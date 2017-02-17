// importing react
import React, {Component} from 'react';

// will be updating state
class Projects extends Component {
  constructor() {
    super();
    // bidning methods
    this.printProjects = this.printProjects.bind(this);
  }

  // function to print projects
  printProjects(projects) {
    return (
      // Printing responsive cards to hold projects
      Object.keys(projects).map( (project, key)=>{
        return(
        <section key={key}>
          <h1>{projects[project]['name']}</h1>
          <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
              <div className="uk-card-media-left uk-cover-container">
                  <img src="https://getuikit.com/docs/images/light.jpg" alt="" data-uk-cover />
                  <canvas width="600" height="400"></canvas>
              </div>
              <div>
                  <div className="uk-card-body">
                      <h3 className="uk-card-title">Media Left</h3>
                      <span>Name:</span>{projects[project]['name']}
                      <br />
                      <a href={projects[project]['link']}>Link to site</a>
                      <br />
                      <a href={projects[project]['repo']}>Link to repo</a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                      </p>
                  </div>
              </div>
          </div>
      </section>
    )
    })
  )
  }

  render() {
    // setting projects prop to projects variable
    const projects = this.props.projects;

    return (
      <div id="projects">
          <h1>Projects</h1>
          {/* Invoking function to Create responsive card to hold projects using ui kit */}
          <ul>
            {this.printProjects(projects)}
          </ul>
      </div>

    )
  }
}

// exporting component
export default Projects;
