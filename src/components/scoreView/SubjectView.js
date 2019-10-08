import React, { Component } from 'react';
import soundfile from '../../music/music4.mp3';
import Spinner from '../../layouts/Spinner';
import avatars from '../../images';
import Timer from './Timer';
import { Consumer } from '../../context';

//consumer, show the subject of the next group of questions and a timer
//en subject kommer att vara utvald av systemet
//lägg till timer och avatar sysn inte!!
class SubjectView extends Component {
	countdownFinished = () => {
		this.props.countdownFinished();
	};
	render() {
		return (
			<Consumer>
				{(value) => {
					const { player } = value;
					const { playerId } = this.props;
					if (player && player.id) {
						return (
							<div className="scoreViewBackgound">
								<div className="container">
									<Timer onFinished={() => this.countdownFinished()} />
									<h1 className="round">{player.name}</h1>
									<h2 className="round">It's your turn now!</h2>
									<div className="container choosenAvatar ">
										<img src={avatars[player.avatar]} alt="avatar" />
									</div>
									<audio src={soundfile} autoPlay />
								</div>
							</div>
						);
					} else {
						value.subscribePlayer(playerId);
						return (
							<div>
								<Spinner />
							</div>
						);
					}
				}}
			</Consumer>
		);
	}
}

export default SubjectView;
