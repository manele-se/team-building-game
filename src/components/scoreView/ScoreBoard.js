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
					const { game, player, players } = value;
					const currentPlayerId = player && player.id;
					console.log(players);
					const currentPlayer = players && players.find((p) => p.id === currentPlayerId);

					if (game && game.id && player && currentPlayer) {
						return (
							<React.Fragment>
								<h1 className="round">
									Questions about <strong>{player.name}</strong>
								</h1>
								<h2 className="round">{currentPlayer.questions[0].title}</h2>
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
						if (!(game && game.id)) {
							throw new Error('Should not be able to get here without a state.game!');
						}
						if (!(player && player.id)) {
							throw new Error('Should not be able to get here without a state.player!');
						}
						if (!(players && players.length)) {
							const playerIds = game.players.map((p) => p.id);
							value.subscribePlayers(playerIds);
						}
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
