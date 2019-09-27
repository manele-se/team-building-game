import React, { Component } from "react";

class CreateQuestion extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control form-control-lg customForm formStyle "
          id="titleGame"
          placeholder="Type the title of your game"
          ref={this.titleRef}
        />
      </div>
    );
  }
}

export default CreateQuestion;
