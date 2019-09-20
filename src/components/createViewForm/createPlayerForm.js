import React from "react";
import { Consumer } from "../../context";
import Header from "../../layouts/Header";
import AddQuestionButton from "../../layouts/buttons/AddQuestionButton";
import { MDBInput } from "mdbreact";

//if continue is pressed --> go to "choose an avatar view"

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
              <div className="d-flex flex-row">
                <input
                  type="text"
                  className="form-control formStyle form-control-lg  cardAnswer"
                  id="answer1"
                  placeholder="Type here your answer..."
                />
                <MDBInput
                  filled
                  type="checkbox"
                  id="checkbox1"
                  className="checkBoxCustom "
                />
              </div>
              <div className="d-flex flex-row">
                <input
                  type="text"
                  className="form-control formStyle form-control-lg  cardAnswer"
                  id="answer2"
                  placeholder="Type here your answer..."
                />
                <MDBInput
                  filled
                  type="checkbox"
                  id="checkbox1"
                  className="checkBoxCustom "
                />
              </div>
              <div className="d-flex flex-row">
                <input
                  type="text"
                  className="form-control  formStyle form-control-lg  cardAnswer"
                  id="answer3"
                  placeholder="Type here your answer..."
                />
                <MDBInput
                  filled
                  type="checkbox"
                  id="checkbox1"
                  className="checkBoxCustom checkbox-success "
                />
              </div>
              <AddQuestionButton />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default CreatePlayerForm;
