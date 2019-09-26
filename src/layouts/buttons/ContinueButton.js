import React from 'react';
import { Consumer } from '../../context';
import { Route } from 'react-router-dom';

const ContinueButton = () => {
	return (
		<Consumer>
			{(value) => {
				const { players, title, id } = value.game;
				const { questions } = value.player;

				let buttonOk = false;
				let url = '';
				if (players && players.length >= 2 && title) {
					buttonOk = true;
					url = `/team/created/${id}`;
				} else if (questions && questions.length >= 1) {
					buttonOk = true;
					url = `/avatar/player/${value.player.id}`;
				}

				return (
					<Route
						render={({ history }) => (
							<button
								type="button"
								className={buttonOk ? 'btn continueButton continueButtonOk' : 'btn continueButton'}
								onClick={() => {
									history.push(url);
								}}>
								Continue
							</button>
						)}
					/>
				);
			}}
		</Consumer>
	);
};

export default ContinueButton;
