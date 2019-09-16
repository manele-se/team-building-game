import React from "react";
import { Consumer } from "../../context";
import ape from "../../images/ape.png";
import cow from "../../images/cow.png";
import dog from "../../images/dog.png";
import cat from "../../images/cat.png";
import bagger from "../../images/bagger.png";
import crab from "../../images/crab.png";

const avatars = { cow, dog, cat, bagger, crab };

const TeamView = (props) => {
  const { gameId } = props.match.params;
  return (
    <Consumer>
      {value => {
          const { game } = value;
          if (game) {
          return(
            <div className="customContainer avatars">
              <div className="container d-flex flex-column justify-content-center align-items-center">
                <h1 className="titleWelcome">The Team</h1>
                {game.players.map(player => (
                  <div className="container d-flex flex-row justify-content-center align-items-center">
                    <img src={avatars[player.avatar]} alt="avatar" />
                    <h3>{player.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          )
          } else {
            value.subscribe(gameId);
            return '';
          }
        }
      }
    </Consumer>
    
  );
};

export default TeamView;
