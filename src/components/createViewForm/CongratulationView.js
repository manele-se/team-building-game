import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import soundfile from "../../music/music4.mp3";
import Spinner from "../../layouts/Spinner";

const CongratulationView = props => {
  const { gameId } = props.match.params;
  return (
    <Consumer>
      {value => {
        const { game } = value;
        if (game && game.id) {
          return (
            <div className="customContainer avatars">
              <div className="container d-flex flex-column justify-content-center align-items-center">
                <h1 className="titleWelcome">Your team!</h1>

                {game.players.map(player => (
                  <div className="container d-flex flex-row justify-content-center align-items-center">
                    <h3>{player.name}</h3>
                  </div>
                ))}

                <h2 className="titleWelcome">
                  <Link to={`/${game.id}`}>Starta</Link>
                </h2>
              </div>
              <audio src={soundfile} autoPlay loop />
            </div>
          );
        } else {
          value.subscribe(gameId);
          return (
            <div>
              <Spinner />
            </div>
          );
        }
      }}
    </Consumer>
  );
};

export default CongratulationView;
