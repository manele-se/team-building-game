import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './modals.css';

class RightAnswerView extends Component {
  render() {
    const { show, question, rightAnswers } = this.props;
    return (
      <Modal show={show} tabIndex="-1" id="modalPlayerName" className="rightAnswerDisplay" centered size="lg">
        <Modal.Header>
          <h5>{question}</h5>
        </Modal.Header>
        <Modal.Body>
          <h6>The right answer is...</h6>
          {rightAnswers.map((a) => (
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
