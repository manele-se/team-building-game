import React from "react";

const QuitButton = () => {
  return (
    <div className="offset-1">
      <button
        className="btn btn-danger "
        data-target={"#modalQuitGame"}
        data-toggle="modal"
      >
        Quit Game
      </button>
    </div>
  );
};

export default QuitButton;
