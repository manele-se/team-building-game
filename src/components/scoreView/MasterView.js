import React, { Component } from "react";
import ScoreView from "./ScoreView";
import gameStates from "./states";
import SubjectView from "./SubjectView";
import RightAnswerView from "../modals/RightAnswerView";
import WinnerView from "./WinnerView";
import GameOver from "./GameOver";

//classen hantera states mellan master. Lyssna på databas och player documents.

class MasterView extends Component {
  //set initial state to show the subject of the questions
  state = {
    gameState: gameStates.SHOW_SUBJECT
  };
  render() {
    switch (this.state.gameState) {
      case gameStates.SHOW_SUBJECT:
        return <SubjectView />;
      case gameStates.SHOW_SCORE:
        return <ScoreView />;
      case gameStates.SHOW_RIGHT_ANSWER:
        return <RightAnswerView />;
      case gameStates.SHOW_WINNER:
        return <WinnerView />;
      case gameStates.SHOW_GAME_OVER:
        return <GameOver />;
      default:
        return "";
    }
  }
}

export default MasterView;
