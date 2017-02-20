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
          <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
              <div className="uk-card-media-left uk-cover-container">
                  <img className="portfolioImage" title={projects[project]['title']} src={projects[project]['image']} alt={projects[project]['alt']} data-uk-cover />
                  <canvas width="600" height="400"></canvas>
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
