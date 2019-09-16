import React from "react";
import { Consumer } from "../context";

const TitleHeader = props => {
  return (
    <Consumer>
      {value => {
        const gameTitle =
          (value.game && value.game.title) ||
          (value.player && value.player.game && value.player.game.title) ||
          "Loading...";
        return (
          <nav className="navbar navbar-expand-sm my-3 py-3 col-10 offset-1 d-flex flex-row justify-content-between">
            <h1 className="title">{gameTitle}</h1>
            <div className="nav-item"></div>
          </nav>
        );
      }}
    </Consumer>
  );
};

export default TitleHeader;
