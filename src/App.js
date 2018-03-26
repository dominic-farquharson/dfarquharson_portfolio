import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
// importing components
import Home from './components/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

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
          <Router>
            <Switch>
              <div>
                <Navbar />
                <Route
                  exact path="/"
                  render={props => {
                    return (
                      <Home /> 
                    );
                  }}
                />

                {/* Setting skilsl prop to skills state, will be pulled from firebase - allow for server side updating of skills*/}
                <Route 
                  exact path="/about"
                  render={props => {
                    return (
                      <About
                        skills={this.state.skills}
                      />
                    );
                  }}
                />
                <Route 
                  exact path="/projects"
                  render={props => {
                    {/* Setting projects prop to projects state, also pulled from firebase */}
                    return (
                      <Projects
                        projects={this.state.projects}
                      />
                    );
                  }}
                />

                <Route 
                  exact path="/contact"
                  render={props => {
                    return (
                      <Contact />
                    );
                  }}
                />
                
                {/* <Footer /> */}
              </div>
            </Switch>
          </Router>
        </main>
      </div>

    );
  }
}

function Navbar() {
  return (  
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Link className="navbar-brand" to="/">DF</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="nav navbar-right navbar-nav justify-content-center ml-md-auto">
          <li className="nav-item"> 
            <Link className="nav-link" to="/about">About</Link>  
          </li> 
          <li className="nav-item"> 
            <Link className="nav-link" to="/projects">Projects</Link>  
          </li> 
          <li className="nav-item"> 
            <Link className="nav-link" to="/contact">Contact</Link>  
          </li> 
        </ul>
      </div>
    </nav>
  )
}


export default App;


