import React, { Component } from 'react';

class CreateQuestion extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          autoComplete="off"
          data-lpignore="true"
          className="form-control form-control-lg customForm formStyle"
          id="titleGame"
          placeholder="Type your question"
          required
          ref={this.props.textRef}
        />
      </div>
    );
  }
}

export default CreateQuestion;
