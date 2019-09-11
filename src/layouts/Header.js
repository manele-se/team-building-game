import React from "react";
import { Consumer } from "../context";

import { Link } from "react-router-dom";

const Header = props => {
  return (
    <Consumer>
      {value => {
        const { gameTitle } = value;
        return (
          <nav className="navbar navbar-expand-sm mb-3 py-3  navStyle">
            <div className="container ">
              <h1 className="title">{gameTitle}</h1>
              <div className="nav-item">
                <Link to="/" className="nav-link ">
                  <i className="fas fa-home icon" />
                </Link>
              </div>
            </div>
          </nav>
        );
      }}
    </Consumer>
  );
};

export default Header;
