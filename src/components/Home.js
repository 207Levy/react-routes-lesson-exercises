import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div id="u-input">
          <input type="text" placeholder="Ask and you shall receive" />
          <div id="button">Seek</div>
        </div>

        <h1 id="home-title">Your Adventure</h1>

        <div id="home-container">
          <div id="world">
            <span className="main-directory-text">World</span>
          </div>
          <Link id="wizards" to="/directory/wizards">
            <span className="main-directory-text">Wizards</span>
          </Link>
          <Link id="bestiary" to="/directory/bestiary">
            <span className="main-directory-text">Bestiary</span>
          </Link>
          <div id="potions">
            <span className="main-directory-text">Potions</span>
          </div>
          <div id="deities">
            <span className="main-directory-text">Deities</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
