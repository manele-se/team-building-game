import React, { Component } from "react";
import soundfile from "../../music/music.mp3";

import ScoreBoard from "./ScoreBoard";
//why the title is not there????
//TODO: fix the layout it is awful

class ScoreView extends Component {
  render() {
    const { gameId } = this.props;
    return (
      <React.Fragment>
        <h1>{gameId}</h1>
        <ScoreBoard gameId={this.props.match.params.gameId} />
        <audio src={soundfile} autoPlay />
      </React.Fragment>
    );
  }
}

export default ScoreView;
