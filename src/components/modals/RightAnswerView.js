import React, { Component } from "react";
import { Consumer } from "../../context";
import { Modal } from "react-bootstrap";

class RightAnswerView extends Component {
  render() {
    const { show, question, rightAnswers } = this.props;
    return (
      <Modal show={show} tabIndex="-1" id="modalPlayerName">
        <Modal.Header>
          <h5>The right answer is...</h5>
        </Modal.Header>
        <Modal.Body>
          <h5>{question}</h5>
          {rightAnswers.map(a => (
            <div className="rightAnswerDisplay">{a}</div>
          ))}
        </Modal.Body>
      </Modal>
    );
  }
}

export default RightAnswerView;
