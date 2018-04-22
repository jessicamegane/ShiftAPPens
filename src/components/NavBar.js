import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    
    return (
        <ul className="NavBar">
          <li className="nav-item nav-name">for.extra.timez</li>
          <li className="nav-item nav-last"><a href="#contacts" className="nav-link">Contacts</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#optionbar" className="nav-link">Home</a></li>
        </ul>
    );
  }
}

export default NavBar;