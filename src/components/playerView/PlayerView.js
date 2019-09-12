import React from "react";
import Header from "../../layouts/Header";

import Answers from "./questionElements/Answers";
import QuestionHeader from "./questionElements/QuestionHeader";
import ModalRight from "./questionElements/modals/ModalRight";
import ModalWrong from "./questionElements/modals/ModalWrong";
import ModalQuitGame from "./questionElements/modals/ModalQuitGame";

const PlayerView = () => {
  return (
    <React.Fragment>
      <Header />
      <QuestionHeader />
      <Answers />
      <ModalRight />
      <ModalWrong />
      <ModalQuitGame />
    </React.Fragment>
  );
};

export default PlayerView;
