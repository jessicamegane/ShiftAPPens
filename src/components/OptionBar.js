import React, { Component } from 'react';

class OptionBar extends Component {
  render() {
    function checked() {
      var cb = document.getElementById("cb_pt");
      if (cb.checked == true) {

      } else {

      }
    }
    return (
        <ul className="OptionBar">
          <label><input type="checkbox" id="cb_v"></input>Voluntariado</label>
          <label><input type="checkbox" id="cb_f" ></input>Festivais</label>
          <label><input type="checkbox" id="cb_pt" ></input>Part-Time</label>
          <label><input type="checkbox" id="cb_tp"></input>Trabahos Pontuais</label>
        </ul>
    );
  }
}

export default OptionBar;