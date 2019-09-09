import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../../context";

class QuestionHeader extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { questionText } = value;
          return (
            <React.Fragment className="row">
              <div className="jumbotron col-10 offset-1">
                <h2 className="question">Question</h2>
                <p className="textQuestion">{questionText}</p>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

//check the type of the prototype
QuestionHeader.propTypes = {
  question: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired
};

export default QuestionHeader;
