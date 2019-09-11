import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  //evaluate the action
  switch (action.type) {
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
    gameTitle: "Questions about a tree",

    scores: [
      {
        id: 23,
        name: "Patrik",
        score: 40,
        avatar: 1
      },
      {
        id: 24,
        name: "Hugo",
        score: 60,
        avatar: 2
      },
      {
        id: 25,
        name: "Frida",
        score: 80,
        avatar: 3
      }
    ],

    dispatch: action => {
      this.setState(state => reducer(state, action));
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
