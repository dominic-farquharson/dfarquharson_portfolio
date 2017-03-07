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
        <section className="portfolioCard" key={key}>
          <h1>{projects[project]['name']}</h1>
          <img src={projects[project]['image']}  />
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


