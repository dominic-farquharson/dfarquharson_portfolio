// importing react
import React, {Component} from 'react';
import '../css/style.css';
import Project from './Project';



// will be updating state
class Projects extends Component {
  constructor() {
    super();
    this.state = {
      viewModal: false
    }
    
    // binding methods
    this.printProjects = this.printProjects.bind(this);
  }

  // // function to toggle custom div
  // toggleDiv = (id) => {
  //   // selecting div anchor
  //   let target = document.querySelector(id);
  //   // selecting body element
  //   let body = document.querySelector('body');

  //   // hiding div
  //   if(target.style.display==="block") {
  //     target.style.display = "none";
  //   }

  //   // showing div
  //   else {   
  //     target.style.display="block";
      
  //   }
 
  // }
  // function to print projects
  printProjects(projects) {
    return (
      // Printing responsive cards to hold projects
      Object.keys(projects).map( (project, key)=>{
        return(
          <Project 
            key={key}
            name={projects[project]['name']} 
            image={projects[project]['image']}  
            alt={projects[project]['alt']}
            description={projects[project]['description']}
          />
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


