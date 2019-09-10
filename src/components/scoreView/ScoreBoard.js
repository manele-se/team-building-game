import React, { Component } from "react";
import PlayerProgressBar from "./PlayerProgressBar";
import { Consumer } from "../../context";

class ScoreBoard extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { scores } = value;
          return (
            <div className="container card mb-3 p-4 col-10 offset-1 board">
              <React.Fragment>
                {scores.map(score => (
                  <PlayerProgressBar
                    key={score.id}
                    name={score.name}
                    score={score.score}
                  />
                ))}
              </React.Fragment>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ScoreBoard;
