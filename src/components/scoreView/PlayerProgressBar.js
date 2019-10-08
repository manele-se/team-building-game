import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import avatars from '../../images';

//show progress for each player

class PlayerProgressBar extends Component {
	render() {
		//consumer av states
		//check the score for a player
		const { playerId, name, score, avatar, currentSubject } = this.props;
		const className = currentSubject ? 'player-progress-bar current-player' : 'player-progress-bar';
		return (
			<div className={className}>
				<ProgressBar striped variant="success" now={score} />
				<div className="player-avatar-holder">
					<img
						src={avatars[avatar]}
						className="player-avatar"
						alt="avatar"
						style={{
							marginLeft: `calc(${Math.round(score)}% - 3rem)`
						}}
					/>{' '}
				</div>
				<div className="player-name">{name}</div>
			</div>
		);
	}
}

export default PlayerProgressBar;
