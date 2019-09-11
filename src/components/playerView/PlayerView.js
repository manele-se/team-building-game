import React from "react";
import Header from "../../layouts/Header";

import Answers from "./questionElements/Answers";
import QuestionHeader from "./questionElements/QuestionHeader";
import QuitButton from "../../layouts/buttons/QuitButton";
import { Provider } from "../../context";
import ModalRight from "./questionElements/modals/ModalRight";
import ModalWrong from "./questionElements/modals/ModalWrong";
import ModalQuitGame from "./questionElements/modals/ModalQuitGame";

const PlayerView = () => {
  return (
    <Provider>
      <Header />
      <QuestionHeader />
      <Answers />
      <QuitButton />
      <ModalRight />
      <ModalWrong />
      <ModalQuitGame />
    </Provider>
  );
};

export default PlayerView;
