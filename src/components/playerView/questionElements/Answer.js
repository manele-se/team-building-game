import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../../context";

class Answer extends Component {
  state = {
    background: ""
  };

  onShowResult = dispatch => {
    const { isRight } = this.props;
    dispatch({
      type: "ANSWERED",
      payload: isRight
    });
    if (isRight) {
      //show green
      this.setState({
        background: "list-group-item-success"
      });
    } else {
      //show red
      this.setState({
        background: "list-group-item-danger"
      });
    }
  };

  render() {
    const { textAnswer, isRight } = this.props;
    const { background } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div
              className={`card card-body mb-4 p-4 col-10 offset-1 board cardAnswer ${background}  `}
              style={{ cursor: "pointer" }}
              onClick={this.onShowResult.bind(this, dispatch)}
              data-toggle="modal"
              data-target={isRight ? "#modalRight" : "#modalWrong"}>
              <div className="list-group listCard ">
                <div className="list-group listText ">{textAnswer} </div>
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
