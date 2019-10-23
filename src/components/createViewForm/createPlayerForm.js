import React from 'react';
import { Consumer } from '../../context';
import Header from '../../layouts/Header';
import AddQuestionButton from '../../layouts/buttons/AddQuestionButton';
import CreateAnswer from './CreateAnswer';
import Spinner from '../../layouts/Spinner';
import CreateQuestion from './CreateQuestion';
import { Modal } from 'react-bootstrap';
import './createPlayerForm.css';

class CreatePlayerForm extends React.Component {
  // Reference to the question title input element
  state = {
    errors: []
  };
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
    const answers = this.answers.map((answer) => ({
      text: answer.ref.current.text,
      isCorrect: answer.ref.current.correct
    }));

    const errors = [];

    if (!question || question.length < 3) {
      errors.push('Please type a question');
    }

    if (answers.find((a) => a.text.length === 0)) {
      errors.push('Please provide all three answers');
    }

    if (!answers.find((a) => a.isCorrect)) {
      errors.push('Please check at least one answer as correct');
    }

    if (errors.length) {
      this.setState({ errors });
      return;
    }

    dispatch({
      type: 'ADD_QUESTION',
      payload: {
        title: question,
        answers: answers
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
          const questionCount = player && player.questions && player.questions.length;
          const questionsText = questionCount === 1 ? '1 question' : `${questionCount} questions`;

          if (player && player.id) {
            const continueOk = player.questions && player.questions.length >= 2;
            return (
              <React.Fragment>
                <Header canContinue={continueOk} continueUrl={`/avatar/player/${player.id}`} />
                <div className="container customCreateQuestionsContainer">
                  <form>
                    <CreateQuestion textRef={this.questionRef} />
                    <div className="container  answerContainer">
                      {this.answers.map((answer, index) => <CreateAnswer key={index} ref={answer.ref} />)}
                      <AddQuestionButton
                        onClick={() => {
                          this.onAddQuestionCreated(dispatch);
                        }}
                      />
                      <p className="smallInfo">You have added {questionsText}</p>
                    </div>
                  </form>
                </div>
                <Modal show={this.state.errors.length > 0} onHide={() => this.setState({ errors: [] })}>
                  <Modal.Header closeButton>
                    <Modal.Title>Input validation</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ul>
                      {this.state.errors.map((text) => (
                        <li key={text} class="inputError">
                          {text}
                        </li>
                      ))}
                    </ul>
                  </Modal.Body>
                </Modal>
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
