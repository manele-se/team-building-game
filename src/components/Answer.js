import React, { Component } from "react";
import PropTypes from "prop-types";

class Answer extends Component {
  state = {
    background: ""
  };
  //show green if right answer, show red if wrong anwer
  onShowResult = (textAnswer, e) => {
    let isRight = "A cat has 9 lives";

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
    //property to pull out
    const { textAnswer } = this.props.answer;
    console.log("here");
    return (
      <div
        className={`card card-body mb-3 p-4 col-10 offset-1 ${this.state.background}`}
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
  textAnswer: PropTypes.object.isRequired
};

export default Answer;
