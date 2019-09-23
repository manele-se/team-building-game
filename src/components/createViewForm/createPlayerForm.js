import React from 'react';
import { Consumer } from '../../context';
import Header from '../../layouts/Header';
import AddQuestionButton from '../../layouts/buttons/AddQuestionButton';
import CreateAnswer from './CreateAnswer';

//if continue is pressed --> go to "choose an avatar view"

class CreatePlayerForm extends React.Component {
	render() {
		const answers = [ {}, {}, {} ];
		return (
			<React.Fragment>
				<Header />
				<div className="container customCreateQuestionsContainer">
					<form>
						<input
							type="text"
							className="form-control form-control-lg customQuestion  formStyle "
							id="question"
							placeholder="Type here your question..."
						/>
						<div className="container  answerContainer">
							{answers.map((answer, index) => <CreateAnswer key={index} />)}
							<AddQuestionButton />
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default CreatePlayerForm;
