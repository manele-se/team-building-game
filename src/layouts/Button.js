import React from "react";

const Button = () => {
  //quit the game
  const quit = e => {
    e.preventDefault();
    console.log("quit clicked");
  };

  return (
    <div className="mb-3 p-4 col-10 offset-1 ">
      <button className="btn btn-danger btn-block" onClick={quit}>
        Quit
      </button>
    </div>
  );
};

export default Button;
