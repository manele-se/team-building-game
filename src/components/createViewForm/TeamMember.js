import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEdit, faCopy } from '@fortawesome/free-solid-svg-icons';
import { Consumer } from '../../context';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// OBS!! Byt ut domännamnet
const DOMAIN_NAME = 'http://localhost:3000/';

class TeamMember extends Component {
	state = {
		copied: false
	};

	//delete a player
	onDeteleClick = (dispatch, id) => {
		dispatch({
			type: 'DELETE_MEMBER',
			payload: id
		});
	};

	onCopy = () => {
		this.setState({ copied: true });
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
								{player.name}{' '}
								<Link to={`/question/player/${player.id}`}>{`/question/player/${player.id}`}</Link>
								<FontAwesomeIcon
									icon={faTimes}
									style={{ cursor: 'pointer', float: 'right', color: 'red' }}
									onClick={(id) => {
										this.onDeteleClick(dispatch, player.id);
									}}
								/>
								<CopyToClipboard
									onCopy={this.onCopy}
									text={`${DOMAIN_NAME}question/player/${player.id}`}>
									<FontAwesomeIcon
										icon={faCopy}
										style={{
											cursor: 'pointer',
											float: 'right',
											marginRight: '2rem',
											color: '#808080'
										}}
									/>
								</CopyToClipboard>
							</h4>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default TeamMember;
