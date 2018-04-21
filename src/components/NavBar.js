import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="NavBar">

          <li className="nav-item nav-name">EXTRA Cenas</li>
          <li className="nav-item nav-last"><a href="#contacts" className="nav-link">Contacts</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;