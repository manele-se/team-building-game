import React, { Component } from 'react';
import soundfile from '../../music/music.mp3';
import ScoreBoard from './ScoreBoard';

class ScoreView extends Component {
	render() {
		const { gameId } = this.props;
		return (
			<React.Fragment>
				<div className="scoreViewBackgound">
					<ScoreBoard gameId={gameId} />
					<audio src={soundfile} autoPlay loop />
				</div>
			</React.Fragment>
		);
	}
}

export default ScoreView;
