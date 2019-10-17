import React, { Component } from "react";
import PlayerProgressBar from "./PlayerProgressBar";
import { Consumer } from "../../context";
import Spinner from "../../layouts/Spinner";
import "../../components/scoreView/score.css";

class ScoreBoard extends Component {
  render() {
    const { game, subject, question, questionNumber } = this.props;
    return (
      <React.Fragment>
        <h1 className="round">
          Questions about <strong>{subject.name}</strong>
        </h1>
        <h2 className="round">{question.title}</h2>
        <div className="card mb-3 p-4 col-10 offset-1 board">
          {game.players &&
            game.players
              .filter(player => player.id !== subject.id)
              .map(player => (
                <PlayerProgressBar
                  key={player.id}
                  name={player.name}
                  playerId={player.id}
                  score={player.score || 0}
                  avatar={player.avatar}
                  currentSubject={player.id === subject.id}
                />
              ))}
        </div>
      </React.Fragment>
    );
  }
}

export default ScoreBoard;
