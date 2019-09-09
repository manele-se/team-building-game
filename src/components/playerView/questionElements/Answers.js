import React, { Component } from "react";
import Answer from "./Answer";
import { Consumer } from "../../../context";

//this ia a class component because it contains states
class Answers extends Component {
  //in the database

  render() {
    return (
      <Consumer>
        {value => {
          const { answers } = value;
          return (
            <React.Fragment className="row">
              <div>
                <div>
                  {answers.map(answer => (
                    <Answer key={answer.id} answer={answer} />
                  ))}
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Answers;
