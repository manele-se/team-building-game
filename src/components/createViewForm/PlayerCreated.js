import React, { Component } from "react";
import { Consumer } from "../../context";

import soundfile from "../../music/music4.mp3";

//!!! ERROR!!!
class PlayerCreated extends Component {
  render() {
    const { gameId } = this.props;
    return (
      <Consumer>
        {value => {
          const { game } = value;
          if (game && game.id) {
            return (
              <div className="cointainer">
                <h2>
                  {`Congratulation! You are now ready to play 
									on the ${game.date}`}
                </h2>
                <div className="container">{game.players.avatar}</div>
              </div>
            );
          }
        }}
        <div>
          <audio src={soundfile} autoPlay />
        </div>
      </Consumer>
    );
  }
}

export default PlayerCreated;
