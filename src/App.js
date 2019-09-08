import React from "react";

import "./App.css";
//import import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./layouts/Header";

import Answers from "./components/Answers";
import Question from "./components/Question";

function App() {
  //state to refactor: TAKE IT AWAY , THIS IS JUST TO TEST UI
  let state = {
    questionNr: 1
  };
  return (
    <div>
      <Header gameTitle="Elena" />
      <Question
        question={`Question: ${state.questionNr}`}
        questionText="How many lives a cat has?"
      />
      <Answers />
    </div>
  );
}

export default App;
