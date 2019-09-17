import React from 'react';
import { Consumer } from '../../context';
import Header from '../../layouts/Header';
import AddMemberButton from '../../layouts/buttons/AddMemberButton';
import { Link } from 'react-router-dom';
import EnterPlayerName from '../modals/EnterPlayerName';

console.log(EnterPlayerName);

class CreateTeamView extends React.Component {
	titleRef = React.createRef();
	playerNameModalRef = React.createRef();

	handleSubmit(dispatch, e) {
		e.preventDefault();
		console.log(`Creating a game called "${this.titleRef.current.value}"`);
	}

	onNewMemberName(name) {
		console.log(`New member: ${name}`);
	}

	onAddMemberClicked() {
		this.playerNameModalRef.current.show();
	}

	render() {
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					const { gameId } = this.props.match.params;
					return (
						<React.Fragment>
							<Header />

							<div className="container customFormContainer">
								<form onSubmit={this.handleSubmit.bind(this, dispatch)}>
									<input
										type="text"
										className="form-control form-control-lg customForm"
										id="titleGame"
										placeholder="Type the title of your game"
										ref={this.titleRef}
									/>
									<AddMemberButton onClick={this.onAddMemberClicked.bind(this)} />
								</form>
							</div>
							<EnterPlayerName onSave={this.onNewMemberName.bind(this)} ref={this.playerNameModalRef} />
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default CreateTeamView;
