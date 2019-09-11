import React, { Component } from "react";
import { Consumer } from "../../context";
import ProgressBar from "react-bootstrap/ProgressBar";

//show progress for each player

class PlayerProgressBar extends Component {
  render() {
    //consumer av states
    //check the score for a player
    const { name, score } = this.props;
    return (
      <div>
        <p>{name}</p>
        <ProgressBar
          striped
          variant="success"
          now={score}
          className="progress"
        />
      </div>
    );
  }
}

export default PlayerProgressBar;
