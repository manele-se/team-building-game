import React, { Component } from "react";
import { Consumer } from "../../context";
import soundfile from "../../music/music4.mp3";
import avatars from "../../images";

//visar vem har vunnit hela spelkväll. Skicka data till databasen med alla spelarens data.
//consumer
//lägg till en rolig musik
export default class GameOver extends Component {
  render() {
    //matching the paramethers in the url
    const { playerId } = this.props.match.params;
    return (
      <Consumer>
        {value => {
          const { player, game } = value;
          return (
            <div className="scoreViewBackgound">
              <div className="container ">
                <h2 className="round">{player.name}</h2>
                <div className="container choosenAvatar  ">
                  <img src={avatars[player.avatar]} alt="avatar" />
                </div>
                <audio src={soundfile} autoPlay />
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
