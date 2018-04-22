import React, { Component } from 'react';
import OptionBar from './OptionBar'
class Home extends Component {
    render() {
        return (
          <div className="Home one-third column">
            <OptionBar />
            <p> Descricao dos lugares: </p> 
            <p>Um lugar </p> 
            <p>outro lugar </p> 
          </div>
        );
      }
}

export default Home;