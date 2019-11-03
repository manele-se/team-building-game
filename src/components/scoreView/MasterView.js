import React, { Component } from 'react';
import Spinner from '../../layouts/Spinner';
import ScoreView from './ScoreView';
import SubjectView from './SubjectView';
import WinnerView from './WinnerView';
import { Consumer } from '../../context';
import GameEngine from '../../GameEngine';
import ShowLoginsView from './ShowLoginsView';
import Confetti from './Confetti';

//classen hantera states mellan master. Lyssna på databas och player documents.
//it is a game engine

class MasterView extends Component {
  render() {
    const { gameId } = this.props.match.params;
    return (
      <Consumer>
        {(value) => {
          return (
            <GameEngine value={value} gameId={gameId} autoStart>
              <Spinner gameState="NONE, WAITING" />
              <ShowLoginsView gameState="WAITING_FOR_PLAYERS" />
              <SubjectView gameState="SHOW_CURRENT_SUBJECT" />
              <ScoreView gameState="SHOW_CURRENT_QUESTION, SHOW_CORRECT_ANSWERS" />
              <WinnerView gameState="SHOW_SUBJECT_WINNER, SHOW_TOTAL_WINNER" />
              <Confetti gameState="SHOW_TOTAL_WINNER" />
            </GameEngine>
          );
        }}
      </Consumer>
    );
  }
}

export default MasterView;
