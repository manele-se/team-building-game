import React, { Component } from "react";
import { Link } from "react-router-dom";
class TeamMember extends Component {
  render() {
    //const { players } = value;
    return (
      <React.Fragment>
        <div className="list-group-item listCustom">
          <h4>
            {players.name}{" "}
            <i className="fas fa-sort-down" style={{ cursor: "pointer" }} />
            <i
              className="fas fa-times"
              style={{ cursor: "pointer", float: "right", color: "red" }}
            />
            <Link to="#">
              <i
                className="fas fa-pencil-alt"
                style={{
                  cursor: "pointer",
                  float: "right",
                  color: "black",
                  marginRight: "1rem"
                }}
              />
            </Link>
          </h4>
        </div>
      </React.Fragment>
    );
  }
}

export default TeamMember;
