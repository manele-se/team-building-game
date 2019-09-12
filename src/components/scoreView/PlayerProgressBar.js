import React, { Component } from "react";
import { Consumer } from "../../context";
import ProgressBar from "react-bootstrap/ProgressBar";
import cow from "../../images/cow.png";
import dog from "../../images/dog.png";
import cat from "../../images/cat.png";

const avatars = { cow, dog, cat };

//show progress for each player

class PlayerProgressBar extends Component {
  render() {
    //consumer av states
    //check the score for a player
    const { name, score, avatar } = this.props;
    return (
      <div class="player-progress-bar">
        <ProgressBar
          striped
          variant="success"
          now={score}
          className="progress"
        />
        <p>
          <img
            src={avatars[avatar]}
            className="avatar"
            alt="avatar"
            style={{ marginLeft: `${score * 0.95}%` }}
          />{" "}
        </p>
      </div>
    );
  }
}

export default PlayerProgressBar;
