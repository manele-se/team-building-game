import React, { Component } from "react";
import CreateTeamButton from "../layouts/buttons/CreateTeamButton";
import StartButton from "../layouts/buttons/StartButton";
import QuitButton from "../layouts/buttons/QuitButton";

class WelcomeView extends Component {
  render() {
    return (
      <div>
        <div className="container  welcome">
          <h1 className="jumbotron welcomeHeader ">
            Welcome to the team game!
          </h1>
          <div className="container d-flex flex-column buttons">
            <StartButton />
            <CreateTeamButton />
            <QuitButton />
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeView;
