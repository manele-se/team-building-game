import React from "react";
import { Consumer } from "../context";

import { Link } from "react-router-dom";

const Header = props => {
  return (
    <Consumer>
      {value => {
        const { gameTitle } = value;
        return (
          <nav className="navbar navbar-expand-sm my-3 py-3 col-10 offset-1 d-flex flex-row justify-content-between">
            <h1 className="title">{gameTitle}</h1>
            <div className="nav-item">
              <Link to="/" className="nav-link ">
                <i className="fas fa-home icon" />
              </Link>
            </div>
          </nav>
        );
      }}
    </Consumer>
  );
};

export default Header;
