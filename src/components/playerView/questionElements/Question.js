import React, { Component } from "react";

import QuestionHeader from "./QuestionHeader";
import Answers from "./Answers";

class Question extends Component {
  render() {
    return (
     <>
        <QuestionHeader />
        <Answers />
     </>
    );
  }
}

export default Question;
