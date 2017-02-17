// importing react
import React, {Component} from 'react';

// will be updating state
class Projects extends Component {
  constructor() {
    super();
  }

  render() {
    // setting projects prop to projects variable
    const projects = this.props.projects;

    return (
      <div id="projects">
        <h1>Projects</h1>
        {/* Printing out projects details from projects prop */}
        <section>
          <ul>
            {Object.keys(projects).map( (project, key)=>{

            return (
            <li key={key}>
              <section>
                <span>Name:</span>{projects[project]['name']}
                <img src="{project['image']}" />
                <br />
                <a href={projects[project]['link']}>Link to site</a>
                <br />
                <a href={projects[project]['repo']}>Link to repo</a>
                <hr />
              </section>
            </li>
            )
            })}
          </ul>
      </section>

      </div>
    )
  }
}

// exporting component
export default Projects;
