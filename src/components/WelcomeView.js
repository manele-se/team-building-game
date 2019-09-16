import React, { Component } from "react";
import CreateTeamButton from "../layouts/buttons/CreateTeamButton";
import EditTeamButton from "../layouts/buttons/CreateTeamButton";
import StartButton from "../layouts/buttons/StartButton";
import { Link } from "react-router-dom";
import soundfile from "../music/music4.mp3";
import MeetTeamButton from "../layouts/buttons/MeetTeamButton";

class WelcomeView extends Component {
  render() {
    const { gameId } = this.props.match.params;
    // TODO: Make an EditTeamButton component
    //if there is a game Id
    return (
      <div className="customContainer">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center buttons">
            <h1 className="titleWelcome">The Team Game</h1>
            {gameId ? (
              <>
                <Link to={`/score/${gameId}`} className="nav-link ">
                  <StartButton />
                </Link>
                <Link to={`/team/${gameId}`} className="nav-link ">
                  <MeetTeamButton />
                </Link>
                <Link to={`/edit/team/${gameId}`} className="nav-link">
                  <EditTeamButton />
                </Link>
              </>
            ) : (
              <Link to="/create/team" className="nav-link">
                <CreateTeamButton />
              </Link>
            )}
          </div>
        </div>
        <audio src={soundfile} autoPlay />
      </div>
    );
  }
}

export default WelcomeView;
