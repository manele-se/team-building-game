import React, { Component } from 'react';
import Firebase from './Firebase';

const Context = React.createContext();

const answeredReducer = async (state, isRight) => {
	console.log(state);
	state.player.isRight = isRight;
	await Firebase.firestore().collection('players').doc(state.player.id).set(state.player);
	return state;
};

const updateTitleinDatabase = async (state, title) => {
	state.title = title;
	const { id } = state;
	if (id) {
		//if there is a id which corresponds to a game, pick the id
		await Firebase.firestore().collection('games').doc(id).set({ title: state.title, player: state.players });
	} else {
		// create a new document
		const newDoc = { title: state.title };
		const res = await Firebase.firestore().collection('games').add(newDoc);
		state.id = res.id;
	}
	return state;
};

const addPlayerinDatabase = async (state, name) => {
	state.players = [ ...state.players, { name: name } ];
	const { id } = state;
	if (id) {
		//if there is a id which corresponds to a game, pick the id
		await Firebase.firestore().collection('games').doc(id).set({ title: state.title, players: state.players });
	} else {
		// create a new document
		const newDoc = { players: state.players };
		const res = await Firebase.firestore().collection('games').add(newDoc);
		state.id = res.id;
	}
	return state;
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
		case 'ADD_PLAYER':
			//update database with the title of the game
			return await addPlayerinDatabase(state, action.payload);

		case 'ANSWERED':
			//send the player id and isRight answer to the database to uppdate the scoreboard
			return await answeredReducer(state, action.payload);

		default:
			console.error('unknown action', action);
			return state;
	}
};

//here you can place your global states
export class Provider extends Component {
	state = {
		players: [],
		dispatch: async (action) => {
			const newState = await reducer(this.state, action);
			this.setState(newState);
		},

		//subscribe a game
		subscribe: (gameId) => {
			// Om det redan finns en subscription, avbryt den.
			if (this.unsubscribeGame) this.unsubscribeGame();
			console.log(`Subscribing to game ${gameId}`);

			// Börja hämta ett dokument i collection "games" med det id
			// som skickats.
			this.unsubscribeGame = Firebase.firestore().collection('games').doc(gameId).onSnapshot((doc) => {
				// När det kommer en uppdatering, läs ut dokumentet
				const game = {
					...doc.data(),
					id: gameId
				};
				console.log('Received snapshot', game);

				// ... och uppdatera state, så att vyn renderas om automatiskt.
				this.setState({ game: game });
			});
		},

		//subscribe a player
		subscribePlayer: (playerId) => {
			if (this.unsubscribePlayer) this.unsubscribePlayer();
			console.log(`Subscribing to player ${playerId}`);
			this.unsubscribePlayer = Firebase.firestore().collection('players').doc(playerId).onSnapshot((doc) => {
				const player = {
					...doc.data(),
					id: playerId
				};
				console.log('Received snapshot', player);
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
