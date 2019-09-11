import React, { Component } from "react";
import CreateTeamButton from "../layouts/buttons/CreateTeamButton";
import StartButton from "../layouts/buttons/StartButton";
import QuitButtonWelcome from "../layouts/buttons/QuitButtonWelcome";

class WelcomeView extends Component {
  render() {
    return (
      <div className="container ">
        <h1 className="titleWelcome">Welcome to the Team Game</h1>
        <div className="d-flex flex-column justify-content-center">
          <StartButton />
          <CreateTeamButton />
          <QuitButtonWelcome />
        </div>
      </div>
    );
  }
}

export default WelcomeView;
