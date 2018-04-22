import React, { Component } from 'react';
import NavBar from './components/NavBar'
import About from './components/About'
import Contacts from './components/Contacts'
import Home from './components/Home'
import './App.css';
import MapContainer from './components/MapContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="navbar">
        <NavBar />
        </div>
        <div className="row" id="map" style={{height: "100vh"}}>
          <MapContainer />
          <Home/>
        </div>
        <div id="about">
            <About />
        </div>
        <div id="contacts">
            <Contacts />
        </div>
      </div>
    );
  }
}

export default App;