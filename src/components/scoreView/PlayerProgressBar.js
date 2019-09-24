import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import avatars from "../../images";

//show progress for each player

class PlayerProgressBar extends Component {
  render() {
    //consumer av states
    //check the score for a player
    const { playerId, name, score, avatar } = this.props;
    return (
      <div className="player-progress-bar">
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
            style={{
              marginLeft: `${score * 0.95}%`,
              transition: "margin-left 0.5s ease-out"
            }}
          />{" "}
        </p>
        <p>
          {name}{" "}
          <em>
            (player link:{" "}
            <a href={`/play/${playerId}`}>{`/play/${playerId}`}</a>
          </em>
        </p>
      </div>
    );
  }
}

export default PlayerProgressBar;
