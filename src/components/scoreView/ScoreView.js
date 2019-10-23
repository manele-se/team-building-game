import React, { Component } from 'react';
import soundfile from '../../music/music.mp3';
import ScoreBoard from './ScoreBoard';
import RightAnswerView from '../modals/RightAnswerView';

//music B
class ScoreView extends Component {
  render() {
    const { currentGame, currentSubject, currentQuestion, currentQuestionNumber, currentGameState } = this.props;
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
          {currentGameState === 'SHOW_CORRECT_ANSWERS' ? <RightAnswerView show question={currentQuestion} /> : null}
        </div>
      </React.Fragment>
    );
  }
}

export default ScoreView;
