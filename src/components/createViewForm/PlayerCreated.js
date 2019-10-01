import React, { Component } from "react";
import { Consumer } from "../../context";

import soundfile from "../../music/music4.mp3";
import Spinner from "../../layouts/Spinner";
import avatars from "../../images";

class PlayerCreated extends Component {
  render() {
    //matching the paramethers in the url
    const { playerId } = this.props.match.params;
    return (
      <Consumer>
        {value => {
          const { player, game } = value;
          if (player && player.id && game && game.id && game.date) {
            return (
              <div className="scoreViewBackgound">
                <div className="container ">
                  <h2 className="round">
                    {`Congratulation! You are now ready to play 
									the ${game.datetoDate().toLocaleDateString()}`
                      ? game.date
                      : "Congratulation, you are now ready to play!"}
                    }
                  </h2>
                  <div className="container choosenAvatar ">
                    <img src={avatars[player.avatar]} alt="avatar" />
                  </div>
                  <audio src={soundfile} autoPlay />
                </div>
              </div>
            );
          } else if (player && player.id) {
            value.subscribe(player.gameId);
            return (
              <div>
                <Spinner />
              </div>
            );
          } else {
            value.subscribePlayer(playerId);
            return (
              <div>
                <Spinner />
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default PlayerCreated;
