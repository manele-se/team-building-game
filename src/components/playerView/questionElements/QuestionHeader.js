import React, { Component } from "react";
import { Consumer } from "../../../context";

class QuestionHeader extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { questionTitle, questionText } = value;
          return (
            <React.Fragment>
              <div className="jumbotron col-10 offset-1 board">
                <h2 className="question">{questionTitle}</h2>
                <p className="textQuestion">{questionText}</p>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default QuestionHeader;
