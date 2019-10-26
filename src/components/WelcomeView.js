import React, { Component } from 'react';
import CreateTeamButton from '../layouts/buttons/CreateTeamButton';
import StartButton from '../layouts/buttons/StartButton';
import { Link } from 'react-router-dom';
import soundfile from '../music/music4.mp3';
import JoinGameForm from './playerView/JoinGameForm';

//this view is used in 2 differents situations: one when starting game the other when creating game
class WelcomeView extends Component {
  startGame = () => {
    console.log('start game');
  };
  render() {
    const { gameId } = this.props.match.params;

    return (
      <div className="customContainer">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center welcomeViewGroup">
            <h1 className="titleWelcome">The Team Game</h1>
            {gameId ? gameId === 'join' ? (
              <React.Fragment>
                <JoinGameForm />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to={`/master/${gameId}`} className="nav-link ">
                  <StartButton
                    onClick={() => {
                      this.startGame();
                    }}
                  />
                </Link>
              </React.Fragment>
            ) : (
              <Link to="/create/team" className="nav-link">
                <CreateTeamButton />
              </Link>
            )}
          </div>
        </div>
        <audio src={soundfile} autoPlay loop />
      </div>
    );
  }
}

export default WelcomeView;
