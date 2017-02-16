import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// importing components
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';

// app component
class App extends Component {
  constructor(props){
    super();
    // setting initial state for skills and projects to be an empty array
    this.state = {
      skills:[],
      projects:[]
    }
  }
  // grabbing skills and projects from firebase and setting state when component mounts
  componentDidMount() {
    // setting state after making ajax call
    this.setState({
      skills:'Hello skills',
      projects:'Hello project'
    })
  }

  render() {
    return (
      <div className="App">
        <main>
          <Header />
          {/* Setting skilsl prop to skills state, will be pulled from firebase - allow for server side updating of skills*/}
          <About skills={this.state.skills} />
          {/* Setting projects prop to projects state, also pulled from firebase */}
          <Projects projects={this.state.projects} />
          <Footer />
        </main>
      </div>

    );
  }
}

export default App;
