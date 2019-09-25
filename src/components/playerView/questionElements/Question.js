import React, { Component } from 'react';

import QuestionHeader from './QuestionHeader';
import Answers from './Answers';

class Question extends Component {
	render() {
		return (
			<React.Fragment>
				<QuestionHeader />
				<Answers />
			</React.Fragment>
		);
	}
}

export default Question;
