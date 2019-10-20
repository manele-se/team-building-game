import React from "react";
import { Consumer } from "./context";

const delay = ms =>
  new Promise((resolve, reject) => window.setTimeout(resolve, ms));

const NONE = "NONE";
const WAITING = "WAITING";

class GameEngine extends React.Component {
  state = {
    gameId: null,
    game: null,
    players: null,
    currentSubjectIndex: -1,
    currentSubject: null,
    currentQuestionIndex: -1,
    currentQuestion: null
  };

  constructor() {
    super();
  }

  componentDidMount() {
    const { value } = this.props;

    this.dispatch = value.dispatch;
    this.subscribeDoc = value.subscribeDoc;
    this.gameState = NONE;

    this.playGame();
  }

  async playGame() {
    this.setState({ gameState: WAITING });
    await this.startSubscriptions();
    await this.gameIsReadyToPlay();

    // Loop as many times as there are players
    for (let i = 0; i < this.state.players.length; i++) {
      this.pickNextSubject();
      await this.showCurrentSubject();

      // Loop as many times are this subject has questions
      for (let j = 0; j < this.subject.questions.length; j++) {
        this.pickNextQuestion();
        this.showCurrentQuestion();
        await this.allPlayersHaveAnswered();
        await this.showCorrectAnswers();
      }

      if (this.state.players.length >= 3) {
        await this.showWinnerForThisSubject();
      }
    }

    await this.showTotalWinner();
  }

  render() {
    const { children } = this.props;

    const childrenWithGameEngine = React.Children.toArray(children)
      .filter(child => {
        const { gameState } = child.props;
        console.log(`Comparing "${gameState}" to ${this.state.gameState}"`);
        return gameState === this.state.gameState;
      })
      .map(child => {
        return React.cloneElement(child, { gameEngine: this });
      });
    return <React.Fragment>{childrenWithGameEngine}</React.Fragment>;
  }

  // This method starts all Firestore subscriptions
  async startSubscriptions() {
    this.gameUpdateCallbacks = [];
    this.subscribeDoc("games", this.props.gameId, gameDoc =>
      this.receiveGameDoc(gameDoc)
    );
    const gameDoc = await this.gameIsUpdated(true, true);
    console.log(`Game is loaded!`, JSON.stringify(gameDoc, null, "  "));
  }

  async receiveGameDoc(gameDoc) {
    this.setState({ game: gameDoc });
    const newGameUpdateCallbacks = [];
    this.gameUpdateCallbacks.forEach(({ filter, callback, once }) => {
      const filterResult =
        typeof filter === "function" ? filter(gameDoc) : filter;
      if (filterResult) callback(gameDoc);
      if (!(filterResult && once)) {
        newGameUpdateCallbacks.push({ filter, callback, once });
      }
    });
  }

  whenGameIsUpdated(filter, callback, once) {
    this.gameUpdateCallbacks.push({ filter, callback, once });
  }

  gameIsUpdated(filter) {
    return new Promise((resolve, reject) => {
      if (typeof filter === "function" && this.state.game) {
        if (filter(this.state.game)) {
          resolve(this.state.game);
        }
      } else if (typeof filter === "function") {
        this.whenGameIsUpdated(filter, resolve, true);
      } else if (filter) {
        resolve(this.state.game);
      } else {
        reject();
      }
    });
  }

  // This method waits until all players have created questions, and selected avatars
  async gameIsReadyToPlay() {
    await this.gameIsUpdated(game => {
      return !game.players.find(player => !player.avatar);
    });
    // TODO: wait until all player docs are loaded
  }
}

export default GameEngine;

class GameEngineTestChild extends React.Component {
  render() {
    return (
      <p>
        {"gameEngine.name = "}
        {this.props.gameEngine.name}
      </p>
    );
  }
}

const GameEngineTestView = props => {
  return (
    <Consumer>
      {value => {
        return (
          <GameEngine value={value} gameId={props.match.params.gameId}>
            <GameEngineTestChild />
          </GameEngine>
        );
      }}
    </Consumer>
  );
};

export { GameEngineTestView };
