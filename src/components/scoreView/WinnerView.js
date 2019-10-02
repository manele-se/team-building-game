import React, { Component } from 'react';

//visar vinnare. den som har svarat mest frågor om ett subject.
export default class WinnerView extends Component {
	render() {
		return (
			<div>
				<h2>Grattis vinnare, du är subjektets bästa vän</h2>
				<button>Nästa människa eller game over</button>
			</div>
		);
	}
}
