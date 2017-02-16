import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// importing components
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
