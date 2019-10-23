import React, { Component } from 'react';
import Spinner from '../../layouts/Spinner';
import ScoreView from './ScoreView';
import SubjectView from './SubjectView';
import RightAnswerView from '../modals/RightAnswerView';
import WinnerView from './WinnerView';
import GameOver from './GameOver';
import { Consumer } from '../../context';
import GameEngine, { Wrapper } from '../../GameEngine';

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
              <SubjectView gameState="SHOW_CURRENT_SUBJECT" />
              <ScoreView gameState="SHOW_CURRENT_QUESTION, SHOW_CORRECT_ANSWERS" />
              <Wrapper gameState="SHOW_SUBJECT_WINNER">
                <h1>TODO: Show subject winner</h1>
              </Wrapper>
              <Wrapper gameState="SHOW_TOTAL_WINNER">
                <h1>TODO: Show total winner</h1>
              </Wrapper>
            </GameEngine>
          );
        }}
      </Consumer>
    );
  }
}

export default MasterView;
