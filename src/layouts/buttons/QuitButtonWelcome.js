import React from "react";

const QuitButtonWelcome = () => {
  return (
    <button
      className="btn btn-danger buttonStyle btn-lg  "
      data-target={"#modalQuitGame"}
      data-toggle="modal"
    >
      Quit Game
    </button>
  );
};

export default QuitButtonWelcome;
