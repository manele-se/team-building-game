import React, { Component } from 'react';
import './create-answer.css';

class CreateAnswer extends Component {
  text = '';
  correct = false;

  onTextChanged = (e) => {
    this.text = e.target.value;
  };

  onCheckboxChanged = (e) => {
    this.correct = e.target.checked;
  };

  refAnswer = React.createRef();
  refCorrect = React.createRef();

  clearAnswer = () => {
    this.refAnswer.current.value = '';
    this.refCorrect.current.checked = false;
    this.text = '';
    this.correct = false;
  };
  //need to be a consumer to save the correct answer?
  render() {
    return (
      <div className="create-answer">
        <input
          type="text"
          name="answer"
          onInput={(e) => this.onTextChanged(e)}
          autoComplete="off"
          data-lpignore="true"
          placeholder="Type an answer..."
          ref={this.refAnswer}
        />
        <input
          title="Right or wrong answer"
          onInput={(e) => this.onCheckboxChanged(e)}
          type="checkbox"
          ref={this.refCorrect}
        />
      </div>
    );
  }
}

export default CreateAnswer;
