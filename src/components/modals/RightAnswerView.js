import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './modals.css';

class RightAnswerView extends Component {
  render() {
    const { show, question } = this.props;
    const rightAnswers = question.answers.filter((a) => a.isCorrect).map((a) => a.text);
    const heading = rightAnswers.length >= 2 ? 'The right answers are' : 'The right answer is';

    return (
      <Modal show={show} tabIndex="-1" id="modalPlayerName" className="rightAnswerDisplay" centered size="lg">
        <Modal.Header>
          <h5>{question.title}</h5>
        </Modal.Header>
        <Modal.Body>
          <h6>{heading}:</h6>
          {rightAnswers &&
            rightAnswers.map((a) => (
              <div key={a} className="answer">
                {a}
              </div>
            ))}
        </Modal.Body>
      </Modal>
    );
  }
}

export default RightAnswerView;
