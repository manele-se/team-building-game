import React from "react";
import { Consumer } from "../../context";
import Header from "../../layouts/Header";
import AddMemberButton from "../../layouts/buttons/AddMemberButton";
import { Link } from "react-router-dom";

class CreateTeamView extends React.Component {
  titleRef = React.createRef();

  handleSubmit(dispatch, e) {
    e.preventDefault();
    console.log(`Creating a game called "${this.titleRef.current.value}"`);
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { gameId } = this.props.match.params;
          return (
            <React.Fragment>
              <Header />

              <div className="container customFormContainer">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                  <input
                    type="text"
                    className="form-control form-control-lg customForm"
                    id="titleGame"
                    placeholder="Type the title of your game"
                    ref={this.titleRef}
                  ></input>
                  <Link to="/new_member" className="nav-link">
                    <AddMemberButton />
                  </Link>
                </form>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default CreateTeamView;
