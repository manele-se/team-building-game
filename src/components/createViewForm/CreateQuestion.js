import React, { Component } from "react";

class CreateQuestion extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control form-control-lg customForm formStyle "
          id="titleGame"
          placeholder="Type your question"
          ref={this.props.textRef}
        />
      </div>
    );
  }
}

export default CreateQuestion;
