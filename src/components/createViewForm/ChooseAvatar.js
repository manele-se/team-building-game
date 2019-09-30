import React from "react";
import IMG from "../../images";
import "./choose-avatar.css";
import "../scoreView/score.css";
import Header from "../../layouts/Header";
import { Consumer } from "../../context";

//save the avatar which correspond to the playerId in the database
class ChooseAvatar extends React.Component {
  state = {
    selected: ""
  };
  onAddAvatarSelected = (dispatch, selected) => {
    this.setState({
      selected: key //not defined...
    });
    dispatch({
      type: "ADD_AVATAR",
      payload: {
        avatar: selected
      }
    });

    this.questionRef.current.value = "";
    this.answers.forEach(answer => answer.ref.current.clearAnswer());
  };

  render() {
    return (
      <Consumer>
        {value => {
          const keys = Object.getOwnPropertyNames(IMG);
          const { playerId } = this.props.match.params;
          const { dispatch } = value;

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
                    onClick={selected => {
                      this.onAddAvatarSelected(dispatch, selected);
                    }}
                  />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default ChooseAvatar;
