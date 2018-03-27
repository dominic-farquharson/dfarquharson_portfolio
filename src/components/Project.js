import React, {Component} from 'react';

// Modal component
// const Modal = (props) => (
//     <article className="projectModal">
//         <section>
//             <h1>{props.name}</h1>
//         </section>
//         {/* Project description */}  
//         <section className="modalImage">
//             <img src={props.src} alt={props.alt} />
//         </section>
//          <section className="modalBody">
//              {/* Description */}
//             <p><span>Description:</span>{props.description}</p>
//             {/* Technology Used */}
//             <p><span>Technology used:</span>{props.technology}</p> 
//             <a className="btn btn-default" href={props.link}>View Site</a>
//             <a className="btn btn-default" href={props.github}>View Code</a>        
//         </section>
//         <button className="btn btn-default closeModal" type="button" onClick={props.close}>Close</button>
//     </article>
// );


class Project extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         modal: false
    //     }
    // }
    // display Modal
    // toggleModal = () => {
    //     // state of modal
    //     let modal = this.state.modal;
    //     // selecting body element
    //     const body = document.querySelector('body');
    //     if(modal) {
    //         this.setState({modal: false})
    //         // hack - removing scroll bar from body element
    //         body.setAttribute('style', 'overflow:none')
    //     } else {
    //         this.setState({modal:true})
    //         // hack - replacing scroll bar in body element
    //         body.setAttribute('style', 'overflow:hidden')            
    //     }
    // }

    render() {
        // Setting state of modal to a variable
        // const viewModal = this.state.modal;
        // setting this.props to a variable
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
