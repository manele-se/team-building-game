import React from "react";
import { Consumer } from "../../context";
import Header from "../../layouts/Header";
import AddQuestionButton from "../../layouts/buttons/AddQuestionButton";
import CreateAnswer from "./CreateAnswer";
import Spinner from "../../layouts/Spinner";
import CreateQuestion from "./CreateQuestion";

class CreatePlayerForm extends React.Component {
  // Reference to the question title input element
  questionRef = React.createRef();
  answersRef = React.createRef();

  onAddQuestionCreated = dispatch => {
    const question = this.questionRef.current.value;
    const answer = this.answersRef.current.value;
    console.log(`New question: ${question}`);

    dispatch({
      type: "ADD_QUESTION",
      payload: {
        title: question,
        answers: [],
        counter: 0
      }
    });

    this.questionRef.current.value = "";
    this.answersRef.current.value = [];
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
                    <CreateQuestion />
                    <div className="container  answerContainer">
                      {answers.map((answer, index) => (
                        <CreateAnswer key={index} />
                      ))}
                      <AddQuestionButton
                        onClick={() => {
                          this.onAddQuestionCreated(dispatch);
                        }}
                        ref={this.answersRef}
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
