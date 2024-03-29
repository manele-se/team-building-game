import React from 'react';
import { Consumer } from '../../context';
import Header from '../../layouts/Header';
import AddMemberButton from '../../layouts/buttons/AddMemberButton';

import EnterPlayerName from '../modals/EnterPlayerName';
import DatePicker from 'react-datepicker';
import TeamMember from './TeamMember';
import './createView.css';
import 'react-datepicker/dist/react-datepicker.css';

class CreateTeamView extends React.Component {
	state = {
		startDate: new Date()
	};

	//create a pointer to the input element in order to read and write
	titleRef = React.createRef();
	playerNameModalRef = React.createRef();

	handleSubmit = (e) => {
		e.preventDefault();
	};

	onNewMemberName = (name, dispatch) => {
		dispatch({
			type: 'ADD_PLAYER',
			payload: name
		});
	};

	//show modal view for a player
	onAddMemberClicked = (dispatch) => {
		this.playerNameModalRef.current.show();
		//sent the game title to the database
		dispatch({
			type: 'UPDATE_GAMETITLE',
			payload: this.titleRef.current.value
		});
	};

	onChoosingDate = (dispatch, date) => {
		this.setState({
			startDate: date
		});

		dispatch({
			type: 'UPDATE_GAMEDATE',
			payload: date
		});
	};

	render() {
		return (
			<Consumer>
				{(value) => {
					const { dispatch, game } = value;
					const players = game.players;
					const title = game.title;
					const continueOk = players && players.length >= 2 && title;

					return (
						<React.Fragment>
							<Header canContinue={continueOk} continueUrl={`/team/created/${game.id}`} />
							<div className="container customFormContainer ">
								<form onSubmit={this.handleSubmit}>
									<input
										type="text"
										className="form-control form-control-lg customForm formStyle "
										id="titleGame"
										placeholder="Type the title of your game"
										ref={this.titleRef}
									/>

									{players.map((player, index, id) => (
										<TeamMember key={index} player={player} id={id} className="ulCustom" />
									))}

									<AddMemberButton
										onClick={() => {
											this.onAddMemberClicked(dispatch);
										}}
									/>
								</form>
								<DatePicker
									selected={this.state.startDate}
									className=" card formStyle datePickerStyle"
									onChange={(date) => {
										this.onChoosingDate(dispatch, date);
									}}
								/>
							</div>

							<EnterPlayerName
								onSave={(name) => {
									this.onNewMemberName(name, dispatch);
								}}
								ref={this.playerNameModalRef}
							/>
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default CreateTeamView;
