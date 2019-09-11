import React, { Component } from "react";
import { Consumer } from "../../context";
import ProgressBar from "react-bootstrap/ProgressBar";
import cow from "../../images/cow.png";

//show progress for each player

class PlayerProgressBar extends Component {
  render() {
    //consumer av states
    //check the score for a player
    const { name, score } = this.props;
    return (
      <div>
        <p>
          {" "}
          <img src={cow} className="avatar" alt="avatar" />{" "}
        </p>
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
