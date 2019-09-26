import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEdit, faCopy } from '@fortawesome/free-solid-svg-icons';
import { Consumer } from '../../context';

class TeamMember extends Component {
	//delete a player
	onDeteleClick = (dispatch, id) => {
		console.log(`id: ${id}`);
		dispatch({
			type: 'DELETE_MEMBER',
			payload: id
		});
	};

	render() {
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					const { player } = this.props;
					return (
						<div className=" list-group listCustom ">
							<h4>
								{player.name} <Link>{`/question/player/${player.id}`}</Link>
								<FontAwesomeIcon
									icon={faTimes}
									style={{ cursor: 'pointer', float: 'right', color: 'red' }}
									onClick={(id) => {
										this.onDeteleClick(dispatch, player.id);
									}}
								/>
								<FontAwesomeIcon
									icon={faCopy}
									style={{
										cursor: 'pointer',
										float: 'right',
										marginRight: '2rem',
										color: '#808080'
									}}
								/>
							</h4>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default TeamMember;
