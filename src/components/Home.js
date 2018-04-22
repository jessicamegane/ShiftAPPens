import React, { Component } from 'react';
import OptionBar from './OptionBar'
class Home extends Component {
    render() {
        return (
          <div className="Home one-third column">
            <h3> <b> FILTROS </b> </h3> 
            <OptionBar />
          </div>
        );
      }
}

export default Home;