import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import avatars from '../../images';

//show progress for each player
//do not show avatar if anwers is about the same avatar!!!
//do not show the name of the avatar, just the picture

class PlayerProgressBar extends Component {
  render() {
    const { score, avatar, currentSubject, questionCount } = this.props;
    const className = currentSubject ? 'player-progress-bar current-player' : 'player-progress-bar';
    return (
      <div className={className}>
        <ProgressBar striped variant="success" min={0} now={score} max={questionCount * 10} />
        <div className="player-avatar-holder">
          <img
            src={avatars[avatar]}
            className="player-avatar"
            alt="avatar"
            style={{
              marginLeft: `calc(${Math.round(score * 100 / (questionCount * 10))}% - 3rem)`
            }}
          />{' '}
        </div>
      </div>
    );
  }
}

export default PlayerProgressBar;
