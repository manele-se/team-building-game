import React from "react";
import Header from "../../layouts/Header";

import Answers from "./questionElements/Answers";
import QuestionHeader from "./questionElements/QuestionHeader";
import QuitButton from "../../layouts/buttons/QuitButton";
import { Provider } from "../../context";
import Modal from "./questionElements/modals/Modal";

const PlayerView = () => {
  return (
    <Provider>
      <Header />
      <QuestionHeader />
      <Answers />
      <QuitButton />
      <Modal />
    </Provider>
  );
};

export default PlayerView;
