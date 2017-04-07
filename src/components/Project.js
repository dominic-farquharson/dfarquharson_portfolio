import React, {Component} from 'react';

// Modal component
const Modal = (props) => (
    <article className="projectModal">
        <section>
            <h1>{props.name}</h1>
        </section>
        {/* Project description */}  
        <section className="modalImage">
            <img src={props.src} alt={props.alt} />
        </section>
         <section className="modalBody">
             {/* Description */}
            <p><span>Description:</span>{props.description}</p>
            {/* Technology Used */}
            <p><span>Technology used:</span>{props.technology}</p> 
            <a className="btn btn-default" href={props.link}>View Site</a>
            <a className="btn btn-default" href={props.github}>View Code</a>        
        </section>
        <button className="btn btn-default closeModal" type="button" onClick={props.close}>Close</button>
    </article>
);


class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        }
    }
    // display Modal
    toggleModal = () => {
        // state of modal
        let modal = this.state.modal;
        // selecting body element
        const body = document.querySelector('body');
        if(modal) {
            this.setState({modal: false})
            // hack - removing scroll bar from body element
            body.setAttribute('style', 'overflow:none')
        } else {
            this.setState({modal:true})
            // hack - replacing scroll bar in body element
            body.setAttribute('style', 'overflow:hidden')            
        }
    }

    render() {
        // Setting state of modal to a variable
        const viewModal = this.state.modal;
        // setting this.props to a variable
        const project = this.props;
        if(!viewModal) {
            return (
                <li className="projectImage">
                    {/*<div>Learn More</div>*/}
                     <img
                        // toggling Modal
                        onClick={this.toggleModal} 
                        src={project.image}  
                        alt={project.alt}
                     />
                </li> 
            )
        } else {
            return (
                <li>
                    <Modal 
                        src={project.image}  
                        alt={project.alt}
                        name={project.name} 
                        close={this.toggleModal}
                        description={project.description}
                        link={project.link}
                        github={project.github}
                        technology={project.technology}
                    />
                </li>
            )
        }
    }
}

export default Project;
