import React from "react";
import Header from "../../layouts/Header";

import Answers from "./questionElements/Answers";
import QuestionHeader from "./questionElements/QuestionHeader";
import QuitButton from "../../layouts/QuitButton";
import { Provider } from "../../context";

const PlayerView = () => {
  return (
    <Provider>
      <div>
        <Header gameTitle="Elena" />
        <QuestionHeader
          question="question: 1"
          questionText="How many lives a cat has?"
        />
        <Answers />
        <QuitButton />
      </div>
    </Provider>
  );
};

export default PlayerView;
