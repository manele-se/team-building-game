import React from 'react';
import { Consumer } from './context';

const delay = (ms) => new Promise((resolve, reject) => window.setTimeout(resolve, ms));

const same = (one, other) => {
  if (one === other) return true;
  return JSON.stringify(one) === JSON.stringify(other);
};

const NONE = 'NONE';
const WAITING = 'WAITING';
const READY_TO_PLAY = 'READY_TO_PLAY';
const SHOW_CURRENT_SUBJECT = 'SHOW_CURRENT_SUBJECT';
const SHOW_CURRENT_QUESTION = 'SHOW_CURRENT_QUESTION';

class GameEngine extends React.Component {
  state = {
    gameId: null,
    game: null,
    players: [],
    currentSubjectIndex: -1,
    currentSubject: null,
    currentQuestionIndex: -1,
    currentQuestion: null,
    gameState: NONE
  };

  constructor(props) {
    super(props);
    this.gameUpdateCallbacks = [];
    this.playerUpdateCallbacks = [];
  }

  componentDidMount() {
    const { value, gameId } = this.props;

    this.dispatch = value.dispatch;
    this.subscribeDoc = value.subscribeDoc;
    this.updateDoc = value.updateDoc;

    this.playGame(gameId);
  }

  async playGame(gameId) {
    this.setState({ gameState: WAITING, gameId: gameId });
    await this.startSubscriptions();
    await this.gameIsReadyToPlay();

    this.setState({ gameState: READY_TO_PLAY });
    await this.startButtonIsClicked();

    // Loop as many times as there are players
    for (let i = 0; i < this.state.players.length; i++) {
      this.pickNextSubject();
      await this.showCurrentSubject();

      // Loop as many times are this subject has questions
      for (let j = 0; j < this.state.currentSubject.questions.length; j++) {
        await this.showCurrentQuestion(j);
        await this.allPlayersHaveAnswered();
        await delay(3000);
        await this.showCorrectAnswers();
        await delay(5000);
      }

      if (this.state.players.length >= 3) {
        await this.showWinnerForThisSubject();
        await delay(10000);
      }
    }

    //await this.showTotalWinner();
  }

  // This method starts all Firestore subscriptions
  async startSubscriptions() {
    // Subscribe to the games/ID doc
    this.subscribeDoc('games', this.props.gameId, (gameDoc) => this.setState({ game: gameDoc }));
    const gameDoc = await this.gameIsUpdated(true);

    // Subscribe to all the players/ID docs for this game
    gameDoc.players.forEach((gamePlayer, index) => {
      this.subscribeDoc('players', gamePlayer.id, (playerDoc) => {
        const newPlayers = [ ...this.state.players ];
        newPlayers[index] = playerDoc;
        this.setState({
          players: newPlayers
        });
      });
    });
  }

  // This method waits until all players have created questions, and selected avatars
  async gameIsReadyToPlay() {
    // First wait until every player has selected an avatar
    await this.gameIsUpdated((game) => {
      return !game.players.find((player) => !player.avatar);
    });

    // Then wait until all player documents are loaded
    await Promise.all(this.state.game.players.map((p, i) => this.playerIsUpdated(i, true)));
  }

  startButtonIsClicked() {
    return new Promise((resolve, reject) => {
      this.notifyStartButton = () => {
        this.notifyStartButton = null;
        resolve();
      };
    });
  }

  pickNextSubject() {
    const { players } = this.state.game;
    const unusedPlayerIndices = players
      .map((player, index) => ({ doc: player, index }))
      .filter(({ doc }) => !doc.usedSubject)
      .map(({ index }) => index);
    console.log(unusedPlayerIndices);

    const indexIndex = Math.floor(Math.random() * unusedPlayerIndices.length);
    console.log({ indexIndex });
    this.setState({ currentSubjectIndex: unusedPlayerIndices[indexIndex] });
  }

  async showCurrentSubject() {
    this.setState({
      gameState: SHOW_CURRENT_SUBJECT,
      currentSubject: this.state.players[this.state.currentSubjectIndex],
      currentQuestion: null,
      currentQuestionIndex: -1
    });
    await delay(4000);
  }

  async showCurrentQuestion(index) {
    const currentQuestion = this.state.currentSubject.questions[index];

    this.setState({
      gameState: SHOW_CURRENT_QUESTION,
      currentQuestionIndex: index,
      currentQuestion
    });

    for (let i = 0; i < this.state.players.length; i++) {
      const player = this.state.players[i];
      if (i === index) {
        await this.updateDoc('players', player.id, {
          currentQuestion: null,
          isRight: null
        });
      } else {
        await this.updateDoc('players', player.id, {
          currentQuestion,
          isRight: null
        });
      }
    }
  }

  async allPlayersHaveAnswered() {
    console.log('allPlayersHaveAnswered : starting to wait');
    await Promise.all(
      this.state.players.map((player, index) =>
        this.playerIsUpdated(
          index,
          (updatedPlayer) => updatedPlayer.currentQuestion == null || typeof updatedPlayer.isRight === 'boolean'
        )
      )
    );
    console.log('allPlayersHaveAnswered : waiting done');
  }

  // -----------------------------------------------
  // Boilerplate code - this could be moved to a
  // base class, and hidden away from view!

  componentDidUpdate(oldProps, oldState) {
    if (!same(oldState.game, this.state.game)) {
      const newGameUpdateCallbacks = [];
      this.gameUpdateCallbacks.forEach(({ filter, callback, once }) => {
        const filterResult = typeof filter === 'function' ? filter(this.state.game) : filter;
        if (filterResult) {
          callback(this.state.game);
        }
        if (!(filterResult && once)) {
          newGameUpdateCallbacks.push({ filter, callback, once });
        }
      });
      this.gameUpdateCallbacks = newGameUpdateCallbacks;
    }

    for (let i = 0; i < oldState.players.length || i < this.state.players.length; i++) {
      const player = this.state.players[i];
      if (!same(oldState.players[i], player)) {
        console.log(
          `Received update for player with index ${i} (checking ${this.playerUpdateCallbacks.length} filters...)`
        );
        const newPlayerUpdateCallbacks = [];
        this.playerUpdateCallbacks.forEach(({ index, filter, callback, once }) => {
          const filterResult = index === i && (typeof filter === 'function' ? filter(player, i) : filter);

          console.log(`Matching filter: ${filterResult}`);
          if (filterResult) {
            callback(player, i);
          }
          if (!(filterResult && once)) {
            newPlayerUpdateCallbacks.push({ index, filter, callback, once });
          }
        });
        this.playerUpdateCallbacks = newPlayerUpdateCallbacks;
      }
    }
  }

  whenGameIsUpdated(filter, callback, once) {
    this.gameUpdateCallbacks.push({ filter, callback, once });
  }

  whenPlayerIsUpdated(index, filter, callback, once) {
    this.playerUpdateCallbacks.push({ index, filter, callback, once });
  }

  gameIsUpdated(filter) {
    return new Promise((resolve, reject) => {
      if (typeof filter === 'function' && this.state.game && filter(this.state.game)) {
        resolve(this.state.game);
      } else if (filter === true && this.state.game) {
        resolve(this.state.game);
      } else {
        this.whenGameIsUpdated(filter, resolve, true);
      }
    });
  }

  playerIsUpdated(index, filter) {
    return new Promise((resolve, reject) => {
      if (
        typeof filter === 'function' &&
        this.state.players &&
        this.state.players[index] &&
        filter(this.state.players[index], index)
      ) {
        resolve(this.state.players[index]);
      } else if (filter === true && this.state.players && this.state.players[index]) {
        resolve(this.state.players[index]);
      } else {
        this.whenPlayerIsUpdated(index, filter, resolve, true);
      }
    });
  }

  render() {
    const { children } = this.props;

    const childrenWithGameEngine = React.Children
      .toArray(children)
      .filter((child) => child.props.gameState === this.state.gameState)
      .map((child) =>
        React.cloneElement(child, {
          gameEngine: this,
          currentSubject: this.state.currentSubject,
          currentQuestion: this.state.currentQuestion,
          scores: this.state.players.map((p) => ({ name: p.name, avatar: p.avatar, score: p.score }))
        })
      );

    return <React.Fragment>{childrenWithGameEngine}</React.Fragment>;
  }
}

export default GameEngine;

class GameEngineTestChild extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.text}</h1>
        {this.props.gameState === 'READY_TO_PLAY' && (
          <button onClick={() => this.props.gameEngine.notifyStartButton()}>START GAME</button>
        )}
        <h2>props[{this.props.propsKey}]</h2>
        {this.props.propsKey && (
          <pre>
            <code>{JSON.stringify(this.props[this.props.propsKey], null, '  ')}</code>
          </pre>
        )}
        <h2>gameEngine.state</h2>
        <pre>
          <code>{JSON.stringify(this.props.gameEngine.state, null, '  ')}</code>
        </pre>
      </React.Fragment>
    );
  }
}

const GameEngineTestView = (props) => {
  return (
    <Consumer>
      {(value) => {
        return (
          <GameEngine value={value} gameId={props.match.params.gameId}>
            <GameEngineTestChild text="No state" gameState="NONE" />
            <GameEngineTestChild text="Waiting state" gameState="WAITING" />
            <GameEngineTestChild text="Ready to play" gameState="READY_TO_PLAY" />
            <GameEngineTestChild
              text="Showing current subject"
              propsKey="currentSubject"
              gameState="SHOW_CURRENT_SUBJECT"
            />
            <GameEngineTestChild
              text="Showing current question"
              propsKey="currentQuestion"
              gameState="SHOW_CURRENT_QUESTION"
            />
          </GameEngine>
        );
      }}
    </Consumer>
  );
};

export { GameEngineTestView };
