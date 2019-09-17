import React from 'react';

const CreateTeamButton = (props) => {
	return (
		<button type="button" onClick={props.onClick} className="btn btn-success btn-lg buttonStyle addMemberButton">
			Add Member
		</button>
	);
};

export default CreateTeamButton;
