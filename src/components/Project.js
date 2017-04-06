import React, {Component} from 'react';

// Modal component
const Modal = (props) => (
    <article className="projectModal">
        <h1>{props.name}</h1>
        {/* Project description */}  
        <section>
            <img src={props.src} alt={props.alt} />
        </section>
         <section>
            <p>{props.description}</p>
            <button type="button" onClick={props.link}>View Site</button>
            <button type="button" onClick={props.github}>View Code</button>        
        </section>
        <button type="button" onClick={props.close}>Close</button>
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
        let modal = this.state.modal;
        if(modal) {
            this.setState({modal: false})
        } else {
            this.setState({modal:true})
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
                        github={project.repo}
                    />
                </li>
            )
        }
    }
}

export default Project;
