import React from "react";

const QuitButton = () => {
  //quit the game
  const quit = e => {
    e.preventDefault();
    console.log("quit clicked");
  };

  return (
    <div className="offset-1 py-4  ">
      <button className="btn btn-danger " onClick={quit}>
        Quit
      </button>
    </div>
  );
};

export default QuitButton;
