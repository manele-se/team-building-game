import React from "react";
import IMG from "../../images";
import "./choose-avatar.css";
import "../scoreView/score.css";
import Header from "../../layouts/Header";

//save the avatar which correspond to the playerId in the database
class ChooseAvatar extends React.Component {
  state = {
    selected: ""
  };

  render() {
    const keys = Object.getOwnPropertyNames(IMG);
    const { playerId } = this.props.match.params;

    return (
      <React.Fragment>
        <Header
          canContinue={this.state.selected}
          continueUrl={`/player/ready/${playerId}`}
        />
        <h1 className="titelAvatar">Choose your avatar!</h1>
        <div className="container chooseAvatar">
          {keys.map(key => (
            <img
              className={this.state.selected === key ? "selected" : ""}
              src={IMG[key]}
              onClick={() => {
                this.setState({ selected: key });
              }}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default ChooseAvatar;
