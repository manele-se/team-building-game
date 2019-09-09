import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  //evaluate the action
  switch (action.type) {
    case "NEW":
      return {
        ...state
        //start a new game
      };
    case "ISRIGHT":
      return {
        ...state
        //change background and activate the modal
      };
    case "QUIT":
      return {
        ...state
        //quit the game , send information to the master
      };
    default:
      return state;
  }
};

//here you can place your global states
export class Provider extends Component {
  state = {
    //to put into the database
    answers: [
      {
        id: 1,
        textAnswer: "1"
      },
      {
        id: 2,
        textAnswer: "0"
      },
      {
        id: 3,
        textAnswer: "2"
      }
    ],

    //can we have multiple states in the same context?
    question: "How many cats has Elena?",
    background: "",

    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    //the provider provides the value
    return (
      //we pass th entire state
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
