import React, { Component } from "react";
import Image from "../layouts/Image";
import Answer from "../components/Answer";
//import './bootstrap/dist/css/bootstrap.mon.css';
import Button from "../layouts/Button";

//this ia a class component because it contains states
class Answers extends Component {
  //in the database

  state = {
    answers: [
      {
        id: 1,
        textAnswer: "A cat has 1 life"
      },
      {
        id: 2,
        textAnswer: "A cat has 3 lives"
      },
      {
        id: 3,
        textAnswer: "A cat has 9 lives"
      }
    ]
  };

  render() {
    const { answers } = this.state;
    return (
      <div>
        <Image />
        <div>
          {answers.map(answer => (
            <Answer key={answer.id} answer={answer} />
          ))}
        </div>
        <Button />
      </div>
    );
  }
}

export default Answers;
