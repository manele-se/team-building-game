import React from "react";
import { Consumer } from "../../context";
import Header from "../../layouts/Header";
import AddQuestionButton from "../../layouts/buttons/AddQuestionButton";
import { MDBInput } from "mdbreact";

class CreatePlayerForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <div className="container customCreateQuestionsContainer">
          <form>
            <input
              type="text"
              className="form-control form-control-lg customQuestion  formStyle "
              id="question"
              placeholder="Type here your question..."
            />

            <div className="container  answerContainer">
              <input
                type="text"
                className="form-control formStyle form-control-lg  cardAnswer"
                id="answer1"
                placeholder="Type here your answer..."
              />

              <input
                type="text"
                className="form-control formStyle form-control-lg  cardAnswer"
                id="answer2"
                placeholder="Type here your answer..."
              />
              <input
                type="text"
                className="form-control  formStyle form-control-lg  cardAnswer"
                id="answer3"
                placeholder="Type here your answer..."
              />
              <AddQuestionButton />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default CreatePlayerForm;
