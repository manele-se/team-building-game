import React from "react";
import { Consumer } from "../context";

const Header = props => {
  const newGame = e => {
    e.preventDefault();
    //code to start a new game
    console.log("button clicked");
  };

  return (
    <Consumer>
      {value => {
        const { gameTitle } = value;
        return (
          <nav className="navbar navbar-expand-sm navbar-dark mb-3 py-3 card bg-light">
            <div className="container">
              <h1 className="title">{gameTitle}</h1>
              <button className="btn btn-success" onClick={newGame}>
                New Quiz
              </button>
            </div>
          </nav>
        );
      }}
    </Consumer>
  );
};

export default Header;
