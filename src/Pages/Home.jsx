import React, { Component } from "react";
import Products from "../Components/Products";
import Slider from "../Components/Slider";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="info" id="home">
          <h2>
            Iubește stilul <br />
            <span>Fii una cu stilul!</span>
          </h2>
          <p>
            Suntem o rețea internațională de magazine care se ocupă cu retail-ul
            produselor de îmbrăcăminte cu țara de origine Turcia. Vă prezentăm o
            gamă mare de produse la un preț și de o calitate excelentă.
          </p>
          <a
            href="https://corporate.lcwaikiki.com/en-US/about-us#"
            className="info-btn"
          >
            Mai multă informație!
          </a>
        </div>
        <hr size="3px" color="#0073be" /> <br />
        <Slider/>
        <hr size="3px" color="#0073be" /> <br />
        <Products/>
      </div>
    );
  }
}
