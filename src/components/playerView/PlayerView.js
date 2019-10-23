import React from 'react';
import { Consumer } from '../../context';

import Answers from './questionElements/Answers';
import QuestionHeader from './questionElements/QuestionHeader';
import ModalRight from '../modals/ModalRight';
import ModalWrong from '../modals/ModalWrong';
import ModalQuitGame from '../modals/ModalQuitGame';
import Spinner from '../../layouts/Spinner';

const PlayerView = (props) => {
  const { playerId } = props.match.params;
  return (
    <Consumer>
      {(value) => {
        const { player } = value;

        if (player && player.id) {
          if (player.currentQuestion) {
            return (
              <React.Fragment>
                <QuestionHeader number={player.currentQuestion.number} text={player.currentQuestion.title} />
                <Answers answers={player.currentQuestion.answers} />
                <ModalRight show={player.isRight === true} />
                <ModalWrong show={player.isRight === false} />
                <ModalQuitGame />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <QuestionHeader text="You have no question right now" />
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
