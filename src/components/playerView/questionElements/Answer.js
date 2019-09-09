import React, { Component } from "react";
import PropTypes from "prop-types";

class Answer extends Component {
  state = {
    background: ""
  };
  //show green if right answer, show red if wrong anwer
  onShowResult = (textAnswer, e) => {
    let isRight = "0";
    if (isRight === textAnswer) {
      //show green
      this.setState({
        background: "list-group-item-success"
      });
      console.log(textAnswer + " green");
    } else {
      console.log(textAnswer + " red");
      //show red
      this.setState({
        background: "list-group-item-danger"
      });
    }
  };

  render() {
    const { textAnswer } = this.props;
    const { background } = this.state;
    return (
      <div
        className={`card card-body mb-3 p-4 col-10 offset-1 ${background}`}
        onClick={this.onShowResult.bind(this, textAnswer)}
      >
        <div className="list-group">
          <div className="list-group ">{textAnswer} </div>
        </div>
      </div>
    );
  }
}

//check the type of the prototype
Answer.propTypes = {
  textAnswer: PropTypes.string.isRequired
};

export default Answer;
