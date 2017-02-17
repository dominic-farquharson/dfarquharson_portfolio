import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// importing components
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
// importing axios
import axios from 'axios';

// app component
class App extends Component {
  constructor(props){
    super();
    // binding methods
    this.fetchSkillsAndProjects = this.fetchSkillsAndProjects.bind(this);

    // setting initial state for skills and projects to be an empty array
    this.state = {
      skills:[],
      projects:[]
    }
  }
  // grabbing skills and projects from firebase and setting state when component mounts
  componentDidMount() {
    // setting state after making ajax call
    this.fetchSkillsAndProjects();
  }

  // ajax call to firebase - setting state
  fetchSkillsAndProjects() {
    // firebase endpoint
    const url = 'https://portfolio-5e471.firebaseio.com/.json';
    // get request to firebase endpoint
    axios.get(url)
      .then( (response) => {
        // Running setState method for skills and projects
        this.setState({
          skills: response.data.skills,
          projects:response.data.projects
        })
      })
      .catch( (error) => {
        console.log(error)
      })


  }

  render() {
    return (
      <div className="App">
        <main>
          <Header />
          {/* Setting skilsl prop to skills state, will be pulled from firebase - allow for server side updating of skills*/}
          <About
            skills={this.state.skills}
          />
          {/* Setting projects prop to projects state, also pulled from firebase */}
          <Projects
            projects={this.state.projects}
          />
          <Footer />
        </main>
      </div>

    );
  }
}

export default App;
