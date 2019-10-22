import React, { Component } from 'react';
import ScoreView from './ScoreView';
import gameStates from './states';
import SubjectView from './SubjectView';
import RightAnswerView from '../modals/RightAnswerView';
import WinnerView from './WinnerView';
import GameOver from './GameOver';
import { Spinner } from 'react-bootstrap';
import { Consumer } from '../../context';
import GameEngine, { Wrapper } from '../../GameEngine';

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

  changeToScoreView = (dispatch) => {
    dispatch({
      type: 'SHOW_NEXT_QUESTION'
    }).then(() => {
      this.setState({
        gameState: gameStates.SHOW_SCORE
      });
    });
  };

  updatePlayerScores = async (game, players, dispatch) => {
    if (!game.scoresUpdated) {
      await dispatch({
        type: 'UPDATE_QUESTION_SCORES',
        payload: null
      });

      // Replace this timeout with the Timer component on the page
      window.setTimeout(
        () =>
          this.setState({
            gameState: gameStates.SHOW_RIGHT_ANSWER
          }),
        3000
      );
      window.setTimeout(() => dispatch({ type: 'SHOW_NEXT_QUESTION' }), 7000);
    }
  };

  checkCurrentState = async (value) => {
    const { game, players, dispatch } = value;

    if (!(game && game.id)) {
      // No game is loaded - load using url parameter
      const { gameId } = this.props.match.params;
      value.subscribe(gameId);
      return;
    }
    if (!players) {
      // Players aren't loaded - load using player ids from game.players
      const playerIds = game.players.map((p) => p.id);
      value.subscribePlayers(playerIds);
      return;
    }
    if (!game.currentSubjectId) {
      // No current subject - select one randomly
      dispatch({
        type: 'SET_CURRENT_SUBJECT_ID',
        payload: this.choosePlayer(game)
      });
      return;
    }

    const subject = players.find((p) => p.id === game.currentSubjectId);

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

  selectView = (value) => {
    const { game, players, dispatch } = value;
    const { gameState } = this.state;

    switch (gameState) {
      case gameStates.SHOW_SUBJECT:
        return this.renderShowSubject(dispatch);

      case gameStates.SHOW_SCORE:
      case gameStates.SHOW_RIGHT_ANSWER:
        const showRightAnswer = gameState === gameStates.SHOW_RIGHT_ANSWER;
        return this.renderShowScore(game, players, dispatch, showRightAnswer);

      case gameStates.SHOW_WINNER:
        return <WinnerView />;
      case gameStates.SHOW_GAME_OVER:
        return <GameOver />;
      default:
        this.checkCurrentState(value);
        return <Spinner />;
    }
  };

  renderShowScore(game, players, dispatch, showRightAnswer) {
    const { subject } = this.state;
    const question = subject.questions[game.currentQuestionIndex];

    const rightAnswers = question.answers.filter((answer) => answer.isCorrect).map((answer) => answer.text);

    console.log({ subject, question, rightAnswers });

    const playersPlaying = players.filter((p) => p.id !== game.currentSubjectId);

    // Find any player that hasn't answered yet
    const anyPlayerNotAnswered = playersPlaying.find((p) => p.isRight !== true && p.isRight !== false);

    // If no such player exists, all players have answered this question!
    if (!anyPlayerNotAnswered) {
      this.updatePlayerScores(game, players, dispatch);
    }

    return (
      <React.Fragment>
        <ScoreView game={game} subject={subject} question={question} questionNumber={game.currentQuestionIndex + 1} />
        <RightAnswerView show={showRightAnswer} question={question.title} rightAnswers={rightAnswers} />
      </React.Fragment>
    );
  }

  renderShowSubject(dispatch) {
    const { subject } = this.state;
    return <SubjectView player={subject} countdownFinished={() => this.changeToScoreView(dispatch)} />;
  }

  render() {
    const { gameId } = this.props.match.params;
    return (
      <Consumer>
        {(value) => {
          return (
            <GameEngine value={value} gameId={gameId} autoStart>
              <Wrapper gameState="NONE">
                <Spinner />
              </Wrapper>
              <Wrapper gameState="WAITING">
                <Spinner />
              </Wrapper>
              <SubjectView gameState="SHOW_CURRENT_SUBJECT" />
              <ScoreView gameState="SHOW_CURRENT_QUESTION" />
              <Wrapper gameState="SHOW_CORRECT_ANSWERS">
                <h1>TODO: Show correct answers</h1>
              </Wrapper>
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
