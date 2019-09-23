import React from "react";
import { Consumer } from "../../context";
import Header from "../../layouts/Header";
import AddQuestionButton from "../../layouts/buttons/AddQuestionButton";
import CreateAnswer from "./CreateAnswer";

class CreatePlayerForm extends React.Component {
  onAddQuestionCreated = (dispatch, question) => {
    console.log(`New member: ${question}`);
    dispatch({
      type: "ADD_QUESTION",
      payload: question
    });
  };
  render() {
    const answers = [{}, {}, {}];
    return (
      <Consumer>
        {value => {
          const { dispatch, players } = value;
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
                    ref={this.questionRef}
                    onSave={() => {
                      this.onAddQuestionCreated(dispatch);
                    }}
                  />
                  <div className="container  answerContainer">
                    {answers.map((answer, index) => (
                      <CreateAnswer key={index} />
                    ))}
                    <AddQuestionButton />
                  </div>
                </form>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default CreatePlayerForm;
