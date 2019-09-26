import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEdit, faCopy } from "@fortawesome/free-solid-svg-icons";
import { Consumer } from "../../context";
class TeamMember extends Component {
  //delete a player
  onDeteleMember = (dispatch, name) => {
    dispatch({
      type: "DELETE_MEMBER",
      payload: name
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { player } = this.props;
          return (
            <div className=" list-group listCustom ">
              <h4>
                {player.name}{" "}
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={name => {
                    this.onDeteleMember(dispatch, name);
                  }}
                />
                <FontAwesomeIcon
                  icon={faCopy}
                  style={{
                    cursor: "pointer",
                    float: "right",
                    marginRight: "2rem",
                    color: "#808080"
                  }}
                />
              </h4>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default TeamMember;
