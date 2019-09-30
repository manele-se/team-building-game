import React, { Component } from 'react';
import { Consumer } from '../../context';

import soundfile from '../../music/music4.mp3';
import Spinner from '../../layouts/Spinner';
import avatars from '../../images';

class PlayerCreated extends Component {
	render() {
		//matching the paramethers in the url
		const { playerId } = this.props.match.params;
		return (
			<Consumer>
				{(value) => {
					const { player, game } = value;
					if (player && player.id && game && game.id) {
						return (
							<div className="container">
								<h2>
									{`Congratulation! You are now ready to play 
									the ${game.date.toDate().toLocaleDateString()}`}
								</h2>
								<div className="container chooseAvatar">
									<img src={avatars[player.avatar]} alt="avatar" />
								</div>
								<audio src={soundfile} autoPlay />
							</div>
						);
					} else if (player && player.id) {
						value.subscribe(player.gameId);
						return (
							<div>
								<Spinner />
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

export default PlayerCreated;
