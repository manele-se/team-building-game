import React from "react";
import cow from "../../images/cow.png";
import bagger from "../../images/bagger.png";
import ape from "../../images/ape.png";
import crab from "../../images/crab.png";

const TeamView = () => {
  return (
    <div className="customContainer avatars">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="titleWelcome">The Team</h1>
        <div className="container d-flex flex-row justify-content-center align-items-center">
          <img src={cow} alt="avatar" />
          <h3>Patrik</h3>
        </div>

        <div className="container d-flex flex-row justify-content-center align-items-center">
          <img src={bagger} alt="avatar" />
          <h3>Frida</h3>
        </div>

        <div className="container d-flex flex-row justify-content-center align-items-center">
          <img src={ape} alt="avatar" />
          <h3>Hugo</h3>
        </div>

        <div className="container d-flex flex-row justify-content-center align-items-center">
          <img src={crab} alt="avatar" />
          <h3>Daniel</h3>
        </div>
      </div>
    </div>
  );
};

export default TeamView;
