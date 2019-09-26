import React from "react";
import IMG from "../../images";
import "./choose-avatar.css";
import "../scoreView/score.css";
import Header from "../../layouts/Header";

//save the avatar which correspond to the playerId in the database
const ChooseAvatar = () => {
  return (
    <React.Fragment>
      <Header />
      <h1 className="titelAvatar">Choose your avatar!</h1>
      <div className="container chooseAvatar">
        <img
          className="img1"
          src={IMG.ape}
          onClick={() => {
            this.onAvatarClicked();
          }}
        />
        <img className="img2" src={IMG.badger} />
        <img className="img3" src={IMG.cat} />
        <img className="img4" src={IMG.cow} />
        <img className="img5" src={IMG.crab} />
        <img className="img6" src={IMG.dog} />
        <img className="img7" src={IMG.goat} />
        <img className="img8" src={IMG.hedgehog} />
        <img className="img9" src={IMG.mouse} />
        <img className="img10" src={IMG.turtle} />
      </div>
    </React.Fragment>
  );
};

export default ChooseAvatar;
