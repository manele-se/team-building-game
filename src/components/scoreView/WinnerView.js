import React, { Component } from 'react';
import soundfile from '../../music/music4mixed.mp3';
import avatars from '../../images';
import './winner.css';

//visar vinnare. den som har svarat mest frågor om ett subject.
//lägg till nmnet på vinnare
export default class WinnerView extends Component {
  render() {
    const { scores, currentGameState } = this.props;
    const isFinalWinner = currentGameState === 'SHOW_TOTAL_WINNER';
    const scoreGetter = isFinalWinner ? (s) => s.totalScore : (s) => s.score;
    const maxScore = Math.max(...scores.map(scoreGetter));
    const winners = maxScore === 0 ? [] : scores.filter((s) => scoreGetter(s) === maxScore);
    const avatarContainerClass = isFinalWinner ? 'container winner' : 'container winner smaller';
    const outerClassName = isFinalWinner ? 'scoreViewBackground2' : 'scoreViewBackground';

    return (
      <div className={outerClassName}>
        <div className="container">
          <h1 className="winner">Congratulations!</h1>
          <div className={avatarContainerClass}>
            {winners.map((winner) => <img src={avatars[winner.avatar]} key={winner.name} alt="avatar" />)}
          </div>
          <h1 className="winnerScore">
            You win {isFinalWinner ? 'the game' : 'this round'} with a score of {maxScore} points!
          </h1>
          <audio src={soundfile} autoPlay loop />
        </div>
      </div>
    );
  }
}
