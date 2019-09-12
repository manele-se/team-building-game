import React, { Component } from "react";
import QuitButton from "../../layouts/buttons/QuitButton";
import Header from "../../layouts/Header";

import ScoreBoard from "./ScoreBoard";

class ScoreView extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ScoreBoard />
      </React.Fragment>
    );
  }
}

export default ScoreView;
