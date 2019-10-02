import React, { Component } from 'react';

//visar vem har vunnit hela spelkväll. Skicka data till databasen med alla spelarens data.
export default class GameOver extends Component {
	render() {
		return (
			<div>
				<h1>Tack för idag, någon vann</h1>
			</div>
		);
	}
}
