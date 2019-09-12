import React, { Component } from "react";
import CreateTeamButton from "../layouts/buttons/CreateTeamButton";
import StartButton from "../layouts/buttons/StartButton";
import QuitButtonWelcome from "../layouts/buttons/QuitButtonWelcome";
import ModalQuitGame from "./playerView/questionElements/modals/ModalQuitGame";
import { Link } from "react-router-dom";
import soundfile from "../music/music.mp3";
import Sound from "react-sound";

class WelcomeView extends Component {
  render() {
    return (
      <div className="customContainer">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center buttons">
            <h1 className="titleWelcome">The Team Game</h1>
            <Link to="/play" className="nav-link ">
              <StartButton />
            </Link>
            <CreateTeamButton />

            <ModalQuitGame />
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeView;
