import React from "react";
import { Consumer } from "../context";
import NewQuizButton from "./buttons/NewQuizButton";
import CreateQuizButton from "./buttons/CreateQuizButton";

const Header = props => {
  return (
    <Consumer>
      {value => {
        const { gameTitle } = value;
        return (
          <nav className="navbar navbar-expand-sm mb-3 py-3  navStyle">
            <div className="container ">
              <h1 className="title">{gameTitle}</h1>
              <div className="navButtons">
                <NewQuizButton />
                <CreateQuizButton />
              </div>
            </div>
          </nav>
        );
      }}
    </Consumer>
  );
};

export default Header;
