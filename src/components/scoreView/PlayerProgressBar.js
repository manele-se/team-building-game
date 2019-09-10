import React, { Component } from "react";
import { Consumer } from "../../context";
import ProgressBar from "react-bootstrap/ProgressBar";

//show progress for each player

class PlayerProgressBar extends Component {
  render() {
    //consumer av states
    //check the score for a player

    return (
      <Consumer>
        {value => {
          const { name, score } = value;
          return (
            <div>
              <ProgressBar
                striped
                variant="success"
                now={20}
                className="progress"
              />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default PlayerProgressBar;
