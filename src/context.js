import React, { Component } from 'react';
import Firebase from './Firebase';

const Context = React.createContext();

const answeredReducer = async (state, isRight) => {
  const player = await Firebase.saveDoc('players', {
    ...state.player,
    isRight: isRight
  });
  return { ...state, player };
};

const updateTitleinDatabase = async (state, title) => {
  // Update the game.title value with the new game title
  const game = await Firebase.saveDoc('games', { ...state.game, title: title });
  return { ...state, game };
};

const addDateinDatabase = async (state, date) => {
  // Update the game.date value with the new date
  const game = await Firebase.saveDoc('games', { ...state.game, date: date });
  return { ...state, game };
};

const addAvatarinDatabase = async (state, avatar) => {
  // Update the game.date value with the new date
  const player = await Firebase.saveDoc('players', {
    ...state.player,
    avatar: avatar
  });
  const game = await Firebase.readDoc('games', state.player.gameId);
  game.players.forEach((player) => {
    if (player.id === state.player.id) {
      player.avatar = avatar;
    }
  });
  await Firebase.saveDoc('games', {
    ...game,
    id: state.player.gameId
  });
  return { ...state, player };
};

const addQuestioninDatabase = async (state, question) => {
  // Add a new question to the end of the player.questions array
  const player = await Firebase.saveDoc('players', {
    ...state.player,
    questions: [ ...state.player.questions, question ]
  });
  return { ...state, player };
};

const deletePlayerinDatabase = async (state, id) => {
  // filter out the memeber you want to delete from the games array
  const game = await Firebase.saveDoc('games', {
    ...state.game,
    players: state.game.players.filter((player) => player.id !== id)
  });
  //delete the document
  await Firebase.deleteDoc('players', id);
  return { ...state, game };
};

const addPlayerinDatabase = async (state, name) => {
  // First create a new document in the players collection
  const newPlayerDoc = await Firebase.saveDoc('players', {
    name: name,
    avatar: '',
    gameId: state.game.id,
    questions: []
  });

  // Now it's possible to get the new document's id
  const newPlayerId = newPlayerDoc.id;

  // Then update the game state to add the new player and their id to the game.players array
  const game = await Firebase.saveDoc('games', {
    ...state.game,
    players: [
      ...state.game.players,
      {
        name: name,
        id: newPlayerId
      }
    ]
  });

  return { ...state, game };
};

const reducer = async (state, action) => {
  //evaluate the action
  switch (action.type) {
    case 'UPDATE_GAMETITLE':
      //update database with the title of the game
      return await updateTitleinDatabase(state, action.payload);
    case 'UPDATE_GAMEDATE':
      //update database with the date
      return await addDateinDatabase(state, action.payload);
    case 'ADD_PLAYER':
      //update database with the players name
      return await addPlayerinDatabase(state, action.payload);
    case 'ADD_QUESTION':
      //update database, add a question to the player document
      return await addQuestioninDatabase(state, action.payload);
    case 'ADD_AVATAR':
      //add the avatar in the player doc
      return await addAvatarinDatabase(state, action.payload);
    case 'ANSWERED':
      //send the player id and isRight answer to the database to uppdate the scoreboard
      return await answeredReducer(state, action.payload);
    case 'DELETE_MEMBER':
      return await deletePlayerinDatabase(state, action.payload);

    default:
      throw new Error(`Unknown action.type: "${action.type}"`);
  }
};

//here you can place your global states
export class Provider extends Component {
  state = {
    game: { players: [] },

    player: {},

    dispatch: async (action) => {
      const newState = await reducer(this.state, action);
      this.setState(newState);
    },

    subscribeDoc: (collection, id, callback) => {
      Firebase.firestore().collection(collection).doc(id).onSnapshot((doc) => {
        const docData = {
          ...doc.data(),
          id
        };
        callback(docData);
      });
    },

    updateDoc: async (collection, id, changes) => {
      const doc = await Firebase.readDoc(collection, id);
      await Firebase.saveDoc(collection, Object.assign({}, doc, changes));
    },

    writeDoc: async (collection, id, doc) => {
      await Firebase.saveDoc(collection, Object.assign({ id }, doc));
    },

    readDoc: async (collection, id) => {
      return await Firebase.readDoc(collection, id);
    },

    //subscribe a game
    subscribeGame: (gameId) => {
      if (this.unsubscribeGame) this.unsubscribeGame();

      this.unsubscribeGame = Firebase.firestore().collection('games').doc(gameId).onSnapshot((doc) => {
        const game = {
          ...doc.data(),
          id: gameId
        };
        this.setState({ game: game });
      });
    },

    //subscribe a player
    subscribePlayer: (playerId) => {
      if (this.unsubscribePlayer) this.unsubscribePlayer();

      this.unsubscribePlayer = Firebase.firestore().collection('players').doc(playerId).onSnapshot((doc) => {
        const player = {
          ...doc.data(),
          id: playerId
        };
        this.setState({ player: player });
      });
    }
  };

  render() {
    //the provider provides the value
    return (
      //we pass the entire state
      <Context.Provider value={this.state}>{this.props.children}</Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
