import React from "react";
import { Consumer } from "../../context";
import Header from "../../layouts/Header";
import AddQuestionButton from "../../layouts/buttons/AddQuestionButton";
import CreateAnswer from "./CreateAnswer";
import Spinner from "../../layouts/Spinner";

class CreatePlayerForm extends React.Component {
  // Reference to the question title input element
  questionRef = React.createRef();

  onAddQuestionCreated = dispatch => {
    const question = this.questionRef.current.value;
    console.log(`New question: ${question}`);

    dispatch({
      type: "ADD_QUESTION",
      payload: {
        title: question,
        answers: []
      }
    });

    this.questionRef.current.value = "";
  };
  render() {
    const answers = [{}, {}, {}];
    return (
      <Consumer>
        {value => {
          const { playerId } = this.props.match.params;
          const { dispatch, player } = value;
          console.log({ player });
          if (player && player.id) {
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
                    />
                    <div className="container  answerContainer">
                      {answers.map((answer, index) => (
                        <CreateAnswer key={index} />
                      ))}
                      <AddQuestionButton
                        onClick={() => {
                          this.onAddQuestionCreated(dispatch);
                        }}
                      />
                    </div>
                  </form>
                </div>
              </React.Fragment>
            );
          } else {
            value.subscribePlayer(playerId);
            return (
              <div>
                <Spinner />
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default CreatePlayerForm;
