import React, { Component } from "react";
import Firebase from "./Firebase";

const Context = React.createContext();

const reducer = async (state, action) => {
  //evaluate the action
  switch (action.type) {
    case "LOAD_GAME":
      const { gameId } = action.payload;
      const gamesResult = await Firebase.firestore()
        .collection("games")
        .get();

      console.log(gamesResult);
      const gameDocs = gamesResult.docs.map(document => ({
        id: document.id,
        ...document.data()
      }));

      const game = gameDocs.filter(g => g.id === gameId);

      console.log(game);
      gameDocs.sort((a, b) => a.created.seconds - b.created.seconds);
      return {
        ...state,
        gameTitle: game.title
      };

    case "NEW_QUIZ":
      return {
        ...state
        //start a new set of questions for a new tem member
      };
    case "ANSWERED":
      //send the player id and isRight answer to the database to uppdate the scoreboard
      return {
        ...state
      };
    case "QUIT":
      return {
        ...state
        //quit the game , send information to the db
      };
    default:
      return state;
  }
};

//here you can place your global states
export class Provider extends Component {
  state = {
    //mockdata to put into the database
    answers: [
      {
        id: 1,
        textAnswer: "1m",
        isRight: false
      },
      {
        id: 2,
        textAnswer: "There is no tree here",
        isRight: true
      },
      {
        id: 3,
        textAnswer: "2.6 m",
        isRight: false
      }
    ],

    questionTitle: "Question: 2/10",
    questionText: "How tall is the tree behind you?",

    scores: [
      {
        id: 23,
        name: "Patrik",
        score: 20,
        avatar: "cow"
      },
      {
        id: 24,
        name: "Hugo",
        score: 50,
        avatar: "dog"
      },
      {
        id: 25,
        name: "Frida",
        score: 100,
        avatar: "cat"
      }
    ],

    dispatch: async action => {
      const newState = await reducer(this.state, action);
      this.setState(newState);
    }
  };

  render() {
    //the provider provides the value
    return (
      //we pass the entire state
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
