import React from "react";
import Header from "../../layouts/Header";
import { Consumer } from "../../context";

import Answers from "./questionElements/Answers";
import QuestionHeader from "./questionElements/QuestionHeader";
import ModalRight from "../modals/ModalRight";
import ModalWrong from "../modals/ModalWrong";
import ModalQuitGame from "../modals/ModalQuitGame";
import Spinner from "../../layouts/Spinner";
import ChooseAvatar from "../createViewForm/ChooseAvatar";

const PlayerView = props => {
  const { playerId } = props.match.params;
  return (
    <Consumer>
      {value => {
        const { player, dispatch } = value;

        if (player && player.id) {
          if (player.currentQuestion) {
            return (
              <React.Fragment>
                <QuestionHeader
                  title={player.currentQuestion.title}
                  text={player.currentQuestion.text}
                />
                <Answers answers={player.currentQuestion.answers} />
                <ModalRight />
                <ModalWrong />
                <ModalQuitGame />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <QuestionHeader title="You have no question right now" />
                <Answers answers={[]} />
              </React.Fragment>
            );
          }
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
};

export default PlayerView;
