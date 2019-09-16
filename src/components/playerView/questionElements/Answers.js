import React, { Component } from "react";
import Answer from "./Answer";
import { Consumer } from "../../../context";

//data come from the database and are displyed on the player board
class Answers extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { answers, correctAnswerIndex } = value.player.currentQuestion;
          return (
            <React.Fragment>
              {answers.map((answer, index) => (
                <Answer
                  key={index}
                  textAnswer={answer}
                  isRight={index === correctAnswerIndex}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Answers;
