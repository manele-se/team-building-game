import React, { Component } from 'react';
import soundfile from '../../music/music4.mp3';
import avatars from '../../images';
import Timer from './Timer';
import './score.css';

//consumer, show the subject of the next group of questions and a timer
//en subject kommer att vara utvald av systemet
//lägg till timer och avatar sysn inte!!
class SubjectView extends Component {
  countdownFinished = () => {
    this.props.countdownFinished();
  };
  render() {
    const { player } = this.props;
    return (
      <div className="scoreViewBackgound">
        <div className="container">
          <Timer seconds="8" onFinished={() => this.countdownFinished()} />
          <h1 className="round">{player.name}</h1>
          <h1 className="round">It's your turn now!</h1>
          <div className="container choosenAvatar">
            <img src={avatars[player.avatar]} alt="avatar" />
          </div>
          <audio src={soundfile} autoPlay loop />
        </div>
      </div>
    );
  }
}

export default SubjectView;
