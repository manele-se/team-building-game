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
    case "IS_RIGHT_OR_WRONG":
      return {
        ...state
        //change background and activate the modal
        /*if (textAnswer === action.payload ) {
          //show green
          this.setState({
            background: "list-group-item-success"
          });
          console.log(textAnswer + " green");
        } else {
          console.log(textAnswer + " red");
          //show red
          this.setState({
            background: "list-group-item-danger"
          });
        }*/
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

    questionTitle: "Question: 1",
    questionText: "How many cats has Elena?",
    gameTitle: "Questions about Elena",

    scores: [
      {
        id: 23,
        name: "Patrik",
        score: 3
      },
      {
        id: 24,
        name: "Hugo",
        score: 4
      },
      {
        id: 25,
        name: "Frida",
        score: 5
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
