import React from "react";
import { Consumer } from "../../context";
import Header from "../../layouts/Header";
import AddMemberButton from "../../layouts/buttons/AddMemberButton";
import { Link } from "react-router-dom";
import EnterPlayerName from "../modals/EnterPlayerName";
import DatePicker from "react-datepicker";
import "./createView.css";
import "react-datepicker/dist/react-datepicker.css";

class CreateTeamView extends React.Component {
  state = {
    startDate: new Date()
  };

  //create a pointer to the input element in order to read and write
  titleRef = React.createRef();
  playerNameModalRef = React.createRef();

  handleSubmit(dispatch, e) {
    e.preventDefault();
    console.log(`Creating a game called "${this.titleRef.current.value}"`);
  }

  onNewMemberName = (name, dispatch) => {
    console.log(`New member: ${name}`);
    dispatch({
      type: "ADD_PLAYER",
      payload: name
    });
  };

  //show modal view for a player
  onAddMemberClicked = dispatch => {
    this.playerNameModalRef.current.show();
    //sent the game title to the database
    dispatch({
      type: "UPDATE_GAMETITLE",
      payload: this.titleRef.current.value
    });
  };

  onChoosingDate = (dispatch, date) => {
    console.log(date);
    this.setState({
      startDate: date
    });
    console.log(`New member: ${date}`);
    dispatch({
      type: "UPDATE_GAMEDATE",
      payload: date
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, game } = value;
          const players = game.players;

          return (
            <React.Fragment>
              <Header />

              <div className="container customFormContainer ">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                  <input
                    type="text"
                    className="form-control form-control-lg customForm formStyle "
                    id="titleGame"
                    placeholder="Type the title of your game"
                    ref={this.titleRef}
                  />
                  <ul className="list-group list-group-flush ulCustom">
                    {players.map((player, index) => (
                      <li className="list-group-item listCustom" key={index}>
                        {player.name}
                      </li>
                    ))}
                  </ul>
                  <AddMemberButton
                    onClick={() => {
                      this.onAddMemberClicked(dispatch);
                    }}
                  />
                </form>
                <DatePicker
                  selected={this.state.startDate}
                  className=" card formStyle datePickerStyle"
                  onChange={date => {
                    this.onChoosingDate(dispatch, date);
                  }}
                />
              </div>

              <EnterPlayerName
                onSave={name => {
                  this.onNewMemberName(name, dispatch);
                }}
                ref={this.playerNameModalRef}
              />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default CreateTeamView;
