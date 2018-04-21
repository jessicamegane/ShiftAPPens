import React, { Component } from 'react';
import NavBar from './components/NavBar'
import About from './components/About'
import Contacts from './components/Contacts'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h2 className="heading" id="about">ABOUT</h2>
            <About />
        <h2 className="heading" id="contacts">CONTACTS US</h2>
            <Contacts />
      </div>
    );
  }
}

export default App;