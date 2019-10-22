import React, { Component } from 'react';
import soundfile from '../../music/music.mp3';
import ScoreBoard from './ScoreBoard';

//music B
class ScoreView extends Component {
  render() {
    const { currentGame, currentSubject, currentQuestion, currentQuestionNumber } = this.props;
    return (
      <React.Fragment>
        <div className="scoreViewBackgound">
          <ScoreBoard
            game={currentGame}
            subject={currentSubject}
            question={currentQuestion}
            questionNumber={currentQuestionNumber}
          />
          <audio src={soundfile} autoPlay loop />
        </div>
      </React.Fragment>
    );
  }
}

export default ScoreView;
