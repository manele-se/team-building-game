import React, { Component } from 'react';
import soundfile from '../../music/music.mp3';
import ScoreBoard from './ScoreBoard';

//music B
class ScoreView extends Component {
	render() {
		const { game, subject, question, questionNumber } = this.props;
		return (
			<React.Fragment>
				<div className="scoreViewBackgound">
					<ScoreBoard game={game} subject={subject} question={question} questionNumber={questionNumber} />
					<audio src={soundfile} autoPlay loop />
				</div>
			</React.Fragment>
		);
	}
}

export default ScoreView;
