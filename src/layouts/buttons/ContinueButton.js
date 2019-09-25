import React from 'react';
import { Consumer } from '../../context';
import { Route } from 'react-router-dom';

const ContinueButton = () => {
	return (
		<Consumer>
			{(value) => {
				const { players, title, id } = value.game;
				return (
					<Route
						render={({ history }) => (
							<button
								type="button"
								className={
									players.length >= 2 && title ? (
										'btn continueButton continueButtonOk'
									) : (
										'btn continueButton'
									)
								}
								onClick={() => {
									history.push(`/team/created/${id}`);
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
