import React, { Component } from "react";
import soundfile from "../../music/music.mp3";

import ScoreBoard from "./ScoreBoard";
import { isValid } from "date-fns";
//why the title is not there????
//TODO: fix the layout it is awful

class ScoreView extends Component {
  render() {
    const { gameId } = this.props.match.params;
    return (
      <React.Fragment>
        <div className="scoreViewBackgound">
          <h1 className="round">Round 1 </h1>
          <ScoreBoard gameId={gameId} />
          <audio src={soundfile} autoPlay />
        </div>
      </React.Fragment>
    );
  }
}

export default ScoreView;
