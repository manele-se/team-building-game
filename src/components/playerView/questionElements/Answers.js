import React, { Component } from "react";
import Answer from "./Answer";
import { Consumer } from "../../../context";

//data come from the database and are displyed on the player board
class Answers extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { answers } = value;
          return (
            <React.Fragment>
              {answers.map(answer => (
                <Answer
                  key={answer.id}
                  textAnswer={answer.textAnswer}
                  isRight={answer.isRight}
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
