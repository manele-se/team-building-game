import React from 'react';
import { Consumer } from '../../context';
import Header from '../../layouts/Header';
import AddQuestionButton from '../../layouts/buttons/AddQuestionButton';
import CreateAnswer from './CreateAnswer';
import Spinner from '../../layouts/Spinner';
import CreateQuestion from './CreateQuestion';

class CreatePlayerForm extends React.Component {
	// Reference to the question title input element
	questionRef = React.createRef();

	// TODO: Refactor to make more generic
	answers = [
		{
			ref: React.createRef()
		},
		{
			ref: React.createRef()
		},
		{
			ref: React.createRef()
		}
	];

	onAddQuestionCreated = (dispatch) => {
		const question = this.questionRef.current.value;

		console.log(`New question: ${question}`);

		dispatch({
			type: 'ADD_QUESTION',
			payload: {
				title: question,
				answers: this.answers.map((answer) => ({
					text: answer.ref.current.text,
					isCorrect: answer.ref.current.correct
				}))
			}
		});

		this.questionRef.current.value = '';
		this.answers.forEach((answer) => answer.ref.current.clearAnswer());
	};
	render() {
		return (
			<Consumer>
				{(value) => {
					const { playerId } = this.props.match.params;
					const { dispatch, player } = value;
					console.log({ player });
					if (player && player.id) {
						return (
							<React.Fragment>
								<Header />
								<div className="container customCreateQuestionsContainer">
									<form>
										<CreateQuestion textRef={this.questionRef} />
										<div className="container  answerContainer">
											{this.answers.map((answer, index) => (
												<CreateAnswer key={index} ref={answer.ref} />
											))}
											<AddQuestionButton
												onClick={() => {
													this.onAddQuestionCreated(dispatch);
												}}
											/>
										</div>
									</form>
								</div>
							</React.Fragment>
						);
					} else {
						value.subscribePlayer(playerId);
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

export default CreatePlayerForm;
