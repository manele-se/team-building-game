import React, { Component } from "react";
import QuitButton from "../../layouts/buttons/QuitButton";
import Header from "../../layouts/Header";
import { Provider } from "../../context";

import ScoreBoard from "./ScoreBoard";

class ScoreView extends Component {
  render() {
    return (
      <Provider>
        <Header />
        <ScoreBoard />
        <QuitButton />
      </Provider>
    );
  }
}

export default ScoreView;
