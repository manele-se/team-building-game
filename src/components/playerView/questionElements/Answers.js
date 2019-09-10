import React, { Component } from "react";
import Answer from "./Answer";
import { Consumer } from "../../../context";
import ModalRight from "../questionElements/modals/ModalRight";

//data come from the database and are displyed on the player board
class Answers extends Component {
  //testing the modal
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    console.log("modal");
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { answers } = value;
          return (
            <React.Fragment>
              {answers.map(answer => (
                <Answer key={answer.id} textAnswer={answer.textAnswer} />
              ))}
              <button onClick={this.toggleModal}>Open the modal</button>
              <ModalRight show={this.state.isOpen} onClose={this.toggleModal}>
                Here's some content for the modal
              </ModalRight>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Answers;
