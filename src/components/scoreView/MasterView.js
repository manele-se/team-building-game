import React, { Component } from "react";
import ScoreView from "./ScoreView";
import gameStates from "./states";
import SubjectView from "./SubjectView";
import RightAnswerView from "../modals/RightAnswerView";
import WinnerView from "./WinnerView";
import GameOver from "./GameOver";
import { Spinner } from "react-bootstrap";
import { Consumer } from "../../context";

//classen hantera states mellan master. Lyssna på databas och player documents.
//it is a game engine

class MasterView extends Component {
  //set initial state to show the subject of the questions
  state = {
    gameState: gameStates.NO_STATE
  };

  //random player choosen
  choosePlayer({ players }) {
    const choosenIndex = Math.floor(Math.random() * players.length);
    return players[choosenIndex].id;
  }

  changeToScoreView = dispatch => {
    dispatch({
      type: "SET_CURRENT_QUESTION_INDEX",
      payload: 0
    }).then(() => {
      this.setState({
        gameState: gameStates.SHOW_SCORE
      });
    });
  };

  checkCurrentState = async value => {
    const { game, players, dispatch } = value;

    if (!(game && game.id)) {
      // No game is loaded - load using url parameter
      const { gameId } = this.props.match.params;
      value.subscribe(gameId);
      return;
    }
    if (!players) {
      // Players aren't loaded - load using player ids from game.players
      const playerIds = game.players.map(p => p.id);
      value.subscribePlayers(playerIds);
      return;
    }
    if (!game.currentSubjectId) {
      // No current subject - select one randomly
      dispatch({
        type: "SET_CURRENT_SUBJECT_ID",
        payload: this.choosePlayer(game)
      });
      return;
    }

    const subject = players.find(p => p.id === game.currentSubjectId);

    if (game.currentQuestionIndex === -1) {
      this.setState({
        gameState: gameStates.SHOW_SUBJECT,
        subject: subject
      });
    } else if (game.currentQuestionIndex < subject.questions.length) {
      this.setState({
        gameState: gameStates.SHOW_SCORE,
        subject: subject
      });
    }
  };

  selectView = value => {
    const { game, dispatch } = value;

    switch (this.state.gameState) {
      case gameStates.SHOW_SUBJECT:
        return this.renderShowSubject(dispatch);

      case gameStates.SHOW_SCORE:
        return this.renderShowScore(game);

      case gameStates.SHOW_RIGHT_ANSWER:
        return <RightAnswerView />;
      case gameStates.SHOW_WINNER:
        return <WinnerView />;
      case gameStates.SHOW_GAME_OVER:
        return <GameOver />;
      default:
        this.checkCurrentState(value);
        return <Spinner />;
    }
  };

  renderShowScore(game) {
    const { subject } = this.state;
    const question = subject.questions[game.currentQuestionIndex];
    return (
      <ScoreView
        game={game}
        subject={subject}
        question={question}
        questionNumber={game.currentQuestionIndex + 1}
      />
    );
  }

  renderShowSubject(dispatch) {
    const { subject } = this.state;
    return (
      <SubjectView
        player={subject}
        countdownFinished={() => this.changeToScoreView(dispatch)}
      />
    );
  }

  render() {
    return (
      <Consumer>
        {value => {
          return this.selectView(value);
        }}
      </Consumer>
    );
  }
}

export default MasterView;
