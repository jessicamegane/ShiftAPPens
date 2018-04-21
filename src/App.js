import React, { Component } from 'react';

import About from './components/About'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="heading" id="about">ABOUT</h2>
          <About />
      </div>
    );
  }
}

export default App;