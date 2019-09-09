import React, { Component } from "react";
import QuitButton from "../../layouts/QuitButton";
import Header from "../../layouts/Header";

import ScoreBoard from "./ScoreBoard";

class ScoreView extends Component {
  render() {
    return (
      <div>
        <Header />
        <ScoreBoard />
        <QuitButton />
      </div>
    );
  }
}

export default ScoreView;
