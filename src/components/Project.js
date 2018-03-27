import React, {Component} from 'react';

class Project extends Component {
  render() {
    const { name, description, alt, link, github, image, technology } = this.props;
    return (
      // <div className="card col-lg-4 col-md-6 col-sm-12 article">
      <div className="card col-lg-5 col-md-6 col-sm-12">
        <img className="card-img-top" src={image} alt={alt} style={{height: '200px'}}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text block-with-text">{description}</p>
          <p className="block-with-text"> 
            <span className="font-weight-bold">Built With: </span>
            {technology}
          </p>
          <a target="_blank" href={github} className="btn btn-outline">View code</a>
          <a target="_blank" href={link} className="btn btn-outline">View site</a>
        </div>
      </div>
    );
  }
}

export default Project;
