import React, { Component } from "react";
import PlayerProgressBar from "./PlayerProgressBar";
import { Consumer } from "../../context";
import Spinner from "../../layouts/Spinner";
class ScoreBoard extends Component {
  render() {
    const { gameId } = this.props;

    return (
      <Consumer>
        {value => {
          const { game } = value;
          if (game) {
            return (
              <div className="container card mb-3 p-4 col-10 offset-1 board">
                <React.Fragment>
                  {game.players &&
                    game.players.map(player => (
                      <PlayerProgressBar
                        key={player.id}
                        name={player.name}
                        playerId={player.id}
                        score={player.score || 0}
                        avatar={player.avatar}
                      />
                    ))}
                </React.Fragment>
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
  }
}

export default ScoreBoard;
