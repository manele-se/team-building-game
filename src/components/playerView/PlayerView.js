import React from "react";
import Header from "../../layouts/Header";

import Answers from "./questionElements/Answers";
import QuestionHeader from "./questionElements/QuestionHeader";
import QuitButton from "../../layouts/QuitButton";
import { Provider } from "../../context";

const PlayerView = () => {
  return (
    <Provider>
      <Header />
      <QuestionHeader />
      <Answers />
      <QuitButton />
    </Provider>
  );
};

export default PlayerView;
