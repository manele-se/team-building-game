import React, { Component } from 'react';
import PlayerProgressBar from './PlayerProgressBar';
import { Consumer } from '../../context';
import Spinner from '../../layouts/Spinner';
import '../../components/scoreView/score.css';

class ScoreBoard extends Component {
	render() {
		const { gameId } = this.props;

		return (
			<Consumer>
				{(value) => {
					const { game, player } = value;
					if (game && game.id && player && player.id) {
						const currentPlayerId = player.id;
						return (
							<React.Fragment>
								<h1 className="round">
									Questions about <strong>{player.name}</strong>
								</h1>
								<div className="card mb-3 p-4 col-10 offset-1 board">
									{game.players &&
										game.players.map((player) => (
											<PlayerProgressBar
												key={player.id}
												name={player.name}
												playerId={player.id}
												score={player.score || 0}
												avatar={player.avatar}
												currentSubject={player.id == currentPlayerId}
											/>
										))}
								</div>
							</React.Fragment>
						);
					} else {
						value.subscribe(gameId);
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

export default ScoreBoard;
