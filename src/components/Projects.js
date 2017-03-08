// importing react
import React, {Component} from 'react';
import '../css/style.css';


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
          /*
            Card containing projects
          */  
          <li className="uk-card" key={key}>
              <div className="uk-card-header">
                <h3 className="uk-card-title">{projects[project]['name']}</h3>
              </div>
              <div className="uk-card-body">
                {/* Project Image */}
                <img src={projects[project]['image']}  />
              </div>
              <div className="uk-card-footer">
                  <a className="btn btn-default" href={projects[project]['link']}>Visit Site</a>
                  <a className="btn btn-default" href={projects[project]['link']}>Learn More</a>     
                  <a className="btn btn-default" href={projects[project]['repo']}>View Code</a>
              </div>     
          </li>       
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
          <ul className="uk-grid-collapse uk-child-width-1-2@m" data-uk-grid>
            {this.printProjects(projects)}
          </ul>
      </div>

    )
  }
}

// exporting component
export default Projects;


