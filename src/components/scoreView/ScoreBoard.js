import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import { Consumer } from "../../context";

class ScoreBoard extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { scores } = value;
          return (
            <React.Fragment>
              {scores.map(score => (
                <ProgressBar
                  key={score.id}
                  name={score.name}
                  score={score.score}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default ScoreBoard;
