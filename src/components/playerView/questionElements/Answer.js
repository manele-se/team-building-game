import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../../context";

class Answer extends Component {
  state = {
    background: ""
  };
  //ifRight: setBackground green, showModalPanelRight, playerScore ++, uppdateScore in Master
  //ifWrong: setBackf´ground red, showModalPanelWrong
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
      <Consumer>
        {value => {
          return (
            <div
              className={`card card-body mb-3 p-4 col-10 offset-1 board style={{ cursor: 'pointer'}} ${background}  `}
              style={{ cursor: "pointer" }}
              onClick={this.onShowResult.bind(this, textAnswer)}
            >
              <div className="list-group">
                <div className="list-group ">{textAnswer} </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

//check the type of the prototype
Answer.propTypes = {
  textAnswer: PropTypes.string.isRequired
};

export default Answer;
