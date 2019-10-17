import React, { Component } from "react";
import Answer from "./Answer";
import { Consumer } from "../../../context";

//data come from the database and are displyed on the player board
class Answers extends Component {
  render() {
    const { answers } = this.props;
    return (
      <React.Fragment>
        {answers.map((answer, index) => (
          <Answer
            key={index}
            textAnswer={answer.text}
            isRight={answer.isCorrect}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Answers;
