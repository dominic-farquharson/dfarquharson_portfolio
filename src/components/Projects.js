// importing react
import React, {Component} from 'react';
import '../css/style.css';


// will be updating state
class Projects extends Component {
  constructor() {
    super();
    
    // binding methods
    this.printProjects = this.printProjects.bind(this);
  }

  // function to toggle custom div
  toggleDiv = (id) => {
    // selecting div anchor
    let target = document.querySelector(id);
    // selecting body element
    let body = document.querySelector('body');

    // hiding div
    if(target.style.display==="block") {
      target.style.display = "none";
    }

    // showing div
    else {   
      target.style.display="block";
      
    }
 
  }
  // function to print projects
  printProjects(projects) {
    return (
      // Printing responsive cards to hold projects
      Object.keys(projects).map( (project, key)=>{
        return(
<<<<<<< HEAD
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
=======
        <section className="portfolioCard projects" key={key}>
          <h1>{projects[project]['name']}</h1>
          <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
              <div className="uk-card-media-left uk-cover-container">
                  <img className="portfolioImage" title={projects[project]['title']} src={projects[project]['image']} alt={projects[project]['alt']} data-uk-cover />
              </div>
              <div>
                  <div className="uk-card-body">
                      <h3 className="uk-card-title">{projects[project]['name']}</h3>
                      <br />
                      {/* Getting description and technology used */}
                      <p>
                        <span>Description:</span>
                        {projects[project]['description']}
                        <br /><br />
                        <span>Built with:</span> {projects[project]['technology']}
                      </p>
                      {/* link to site and Repo buttons  */}
                      <section className="siteRepoLinks">
                        <a className="btn btn-default" href={projects[project]['link']}>Link to site</a>
                        <a className="btn btn-default" href={projects[project]['repo']}>Link to repo</a>
                      </section>
                  </div>
>>>>>>> cbfc605c124b9b66d81f77a9d20afecffa469fe2
              </div>
              <div className="uk-card-footer">
                  <a className="btn btn-default" href={projects[project]['link']}>Visit Site</a>
                  
                  {/* Button that opens div */}
                  <a className="btn btn-default" href={`#div${key}`} onClick={ ()=> this.toggleDiv(`#div${key}`)} >Learn More</a> 

                  <a className="btn btn-default" href={projects[project]['repo']}>View Code</a>
              </div>  

              {/* div containing additional details about project - centered */}
              <div id={`div${key}`} className="projectDiv">
                      {/* Project Description */}
                      <p><span>Description:</span> {projects[project]['description']}</p>
                      {/* Tech used */}
                      <p><span>Technology used:</span> {projects[project]['technology']}</p>
                      <button type="button" className="btn btn-default" onClick={ ()=> this.toggleDiv(`#div${key}`)}>Close</button>
                               
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


