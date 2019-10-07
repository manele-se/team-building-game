import React, { Component } from 'react';
import ScoreView from './ScoreView';
import gameStates from './states';
import SubjectView from './SubjectView';
import RightAnswerView from '../modals/RightAnswerView';
import WinnerView from './WinnerView';
import GameOver from './GameOver';
import { Spinner } from 'react-bootstrap';
import { Consumer } from '../../context';

//classen hantera states mellan master. Lyssna på databas och player documents.
//it is a game engine

class MasterView extends Component {
	//set initial state to show the subject of the questions
	state = {
		gameState: gameStates.SHOW_SUBJECT
	};

	//random player choosen
	choosePlayer({ players }) {
		const choosenIndex = Math.floor(Math.random() * players.length);
		return players[choosenIndex].id;
	}

	changeToScoreView = () => {
		this.setState({
			gameState: gameStates.SHOW_SCORE
		});
	};
	selectView(game) {
		switch (this.state.gameState) {
			case gameStates.SHOW_SUBJECT:
				return <SubjectView playerId={this.choosePlayer(game)} countdownFinished={this.changeToScoreView} />;
			case gameStates.SHOW_SCORE:
				return <ScoreView />;
			case gameStates.SHOW_RIGHT_ANSWER:
				return <RightAnswerView />;
			case gameStates.SHOW_WINNER:
				return <WinnerView />;
			case gameStates.SHOW_GAME_OVER:
				return <GameOver />;
			default:
				return '';
		}
	}

	render() {
		return (
			<Consumer>
				{(value) => {
					const { game } = value;
					const { gameId } = this.props.match.params;
					if (game && game.id) {
						return this.selectView(game);
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

export default MasterView;
