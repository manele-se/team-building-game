import React, { Component } from 'react';
import Firebase from './Firebase';
import { strictEqual } from 'assert';

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

const updateGameDoc = async (game, changes) => {
	return await Firebase.saveDoc('games', Object.assign({}, game, changes));
};

const updateGame = async (state, changes) => {
	const game = await updateGameDoc(state.game, changes);
	return { ...state, game };
};

const updatePlayerDoc = async (player, changes) => {
	return await Firebase.saveDoc('players', Object.assign({}, player, changes));
};

const setCurrentSubjectId = async (state, payload) => {
	// payload : id of subject (player)
	for (let player of state.players) {
		await updatePlayerDoc(player, {
			currentQuestion: null
		});
	}

	return await updateGame(state, {
		currentSubjectId: payload,
		currentQuestionIndex: -1
	});
};

const setCurrentQuestionIndex = async (state, payload) => {
	// payload index of question
	return await updateGame(state, {
		currentQuestionIndex: payload
	});
};

const reducer = async (state, action) => {
	//evaluate the action
	switch (action.type) {
		case 'NEW_QUIZ':
			return {
				...state
				//start a new set of questions for a new tem member
			};
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
		case 'SET_CURRENT_SUBJECT_ID':
			return await setCurrentSubjectId(state, action.payload);
		case 'SET_CURRENT_QUESTION_INDEX':
			return await setCurrentQuestionIndex(state, action.payload);

		default:
			console.error('unknown action', action);
			return state;
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

		//subscribe a game
		subscribe: (gameId) => {
			// Om det redan finns en subscription, avbryt den.
			if (this.unsubscribeGame) this.unsubscribeGame();

			// Börja hämta ett dokument i collection "games" med det id
			// som skickats.
			this.unsubscribeGame = Firebase.firestore().collection('games').doc(gameId).onSnapshot((doc) => {
				// När det kommer en uppdatering, läs ut dokumentet
				const game = {
					...doc.data(),
					id: gameId
				};

				// ... och uppdatera state, så att vyn renderas om automatiskt.
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
		},

		// subscribe multiple players
		subscribePlayers: (playerIds) => {
			if (this.unsubscribePlayers) {
				this.unsubscribePlayers.forEach((unsubscribeCallback) => unsubscribeCallback());
			}

			const tempPlayers = [];
			let playersCount = 0;

			this.unsubscribePlayers = playerIds.map((playerId, index) => {
				const unsubscribe = Firebase.firestore().collection('players').doc(playerId).onSnapshot((doc) => {
					const player = {
						...doc.data(),
						id: playerId
					};

					tempPlayers[index] = player;
					++playersCount;
					if (playersCount >= playerIds.length) {
						this.setState({ players: tempPlayers });
					}
				});
				return unsubscribe;
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
