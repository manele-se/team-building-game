import React, { Component } from "react";
import Header from "../../layouts/Header";

import ScoreBoard from "./ScoreBoard";

class ScoreView extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ScoreBoard gameId={this.props.match.params.gameId} />
      </React.Fragment>
    );
  }
}

export default ScoreView;
