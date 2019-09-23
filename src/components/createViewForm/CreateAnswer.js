import React, { Component } from 'react';
import './create-answer.css';

export default class CreateAnswer extends Component {
	text = '';
	correct = false;

	onTextChanged = (e) => {
		this.text = e.target.value;
	};

	onCheckboxChanged = (e) => {
		this.correct = e.target.value;
	};

	render() {
		return (
			<div className="create-answer">
				<input
					type="text"
					name="answer"
					onInput={(e) => this.onTextChanged(e)}
					autoComplete="off"
					placeholder="Type an answer..."
				/>
				<input onInput={(e) => this.onCheckboxChanged(e)} type="checkbox" />
			</div>
		);
	}
}
