import React, {Component} from 'react';

// Modal component
const Modal = (props) => (
    <section className="projectModal">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <button type="button" onClick={props.close}>Close</button>
    </section>
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
        const viewModal = this.state.modal;
        const project = this.props;
        if(!viewModal) {
            return (
                <li>
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
                        name={project.name} 
                        close={this.toggleModal}
                        description={project.description}
                    />
                </li>
            )
        }
    }
}

export default Project;
