import React, { Component } from "react";
import CreateTeamButton from "../layouts/buttons/CreateTeamButton";
import StartButton from "../layouts/buttons/StartButton";
import QuitButtonWelcome from "../layouts/buttons/QuitButtonWelcome";
import ModalQuitGame from "./playerView/questionElements/modals/ModalQuitGame";
import { Link } from "react-router-dom";
import soundfile from "../music/music.mp3";
import Sound from "react-sound";
import TeamView from "./playerView/TeamView";
import MeetTeamButton from "../layouts/buttons/MeetTeamButton";
import { Consumer } from "../context";

class WelcomeView extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Consumer>
        {value => {
          const { gameTitle, dispatch } = value;
          window.setTimeout(() => {
            dispatch({ type: "LOAD_GAME", payload: id });
          }, 0);
          return (
            <div className="customContainer">
              <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center buttons">
                  <h1 className="titleWelcome">The Team Game</h1>
                  <h2>{gameTitle}</h2>
                  <Link to="/play" className="nav-link ">
                    <StartButton />
                  </Link>
                  <Link to="/team" className="nav-link ">
                    <MeetTeamButton />
                  </Link>
                  <CreateTeamButton />
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default WelcomeView;
