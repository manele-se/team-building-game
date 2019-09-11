import React from "react";

const QuitButton = () => {
  //quit the game
  const quit = e => {
    e.preventDefault();
    console.log("quit clicked");
  };

  return (
    <div className="offset-1   ">
      <button className="btn btn-danger " onClick={quit}>
        Quit Game
      </button>
    </div>
  );
};

export default QuitButton;
