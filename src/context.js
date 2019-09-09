import React, { Component } from "react";

const Context = React.createContext();

//here you can place your global states
export class Provider extends Component {
  state = {
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
    question: "How many cats has Elena?",
    background: ""
  };

  render() {
    //the provider provides the value
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
