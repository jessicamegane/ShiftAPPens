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
          <input type="checkbox" id="cb_v"></input>
          <l>Voluntariado</l>
          <input type="checkbox" id="cb_f" ></input>
          <l>Festivais</l>
          <input type="checkbox" id="cb_pt" ></input>
          <l>Part-Time</l>
          <input type="checkbox" id="cb_tp"></input>
          <l>Trabalhos pontuais</l>
        </ul>
    );
  }
}

export default OptionBar;