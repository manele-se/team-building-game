import React, { Component } from "react";
import { Consumer } from "../../context";

import soundfile from "../../music/music4.mp3";
import Spinner from "../../layouts/Spinner";
import avatars from "../../images";

//visar vinnare. den som har svarat mest frågor om ett subject.
//lägg till nmnet på vinnare
export default class WinnerView extends Component {
  render() {
    //matching the parameters in the url
    const { gameId } = this.props.match.params;

    // TODO: find out who won!
    // For now, just use the first player!

    return (
      <Consumer>
        {value => {
          const { game } = value;
          if (game && game.id) {
            const winner = game.players[0];

            return (
              <div className="scoreViewBackgound">
                <div className="container">
                  <div className="container choosenAvatar ">
                    <img src={avatars[winner.avatar]} alt="avatar" />
                  </div>
                  <h1 className="round">You win!</h1>
                  <audio src={soundfile} autoPlay loop />
                </div>
              </div>
            );
          } else {
            value.subscribe(gameId);
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
