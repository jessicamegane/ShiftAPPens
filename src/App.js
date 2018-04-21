import React, { Component } from 'react';
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'
import Contacts from './components/Contacts'
import './App.css';
import MapContainer from './components/MapContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div id="home">
          <Home />
        </div>
        <div id="map">
          <MapContainer />
        </div>
        <h2 className="heading" id="about">ABOUT</h2>
            <About />
        <h2 className="heading" id="contacts">CONTACT US</h2>
            <Contacts />
      </div>
    );
  }
}

export default App;