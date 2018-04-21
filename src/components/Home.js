import React, { Component } from 'react';
import mapa from "../images/mapa.png";

class Home extends Component {
    render() {
        return (
          <div className="Home">
            <div className="Home-mapa">
              <img src={mapa} width="1300" height="600" />
            </div>
            <div className="Home-descricao">
              <p> Descricao dos lugares: </p> 
              <p>Um lugar </p> 
              <p>outro lugar </p> 
            </div> 
          </div>
        );
      }
}

export default Home;