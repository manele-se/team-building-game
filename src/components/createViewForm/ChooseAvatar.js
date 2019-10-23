import React from 'react';
import IMG from '../../images';
import './choose-avatar.css';
import '../scoreView/score.css';
import Header from '../../layouts/Header';
import { Consumer } from '../../context';
import Spinner from '../../layouts/Spinner';

//save the avatar which correspond to the playerId in the database
class ChooseAvatar extends React.Component {
  state = {
    selectedAvatar: ''
  };
  onAvatarSelected = (dispatch, avatarName) => {
    this.setState({
      selectedAvatar: avatarName
    });
    dispatch({
      type: 'ADD_AVATAR',
      payload: avatarName
    });
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const allAvatarNames = Object.getOwnPropertyNames(IMG);
          const { playerId } = this.props.match.params;
          const { dispatch, player } = value;

          if (player && player.id) {
            return (
              <React.Fragment>
                <Header canContinue={this.state.selectedAvatar} continueUrl={`/player/ready/${playerId}`} />
                <h1 className="titelAvatar">Choose your avatar!</h1>
                <div className="container chooseAvatar">
                  {allAvatarNames.map((avatarName) => (
                    <img
                      className={this.state.selectedAvatar === avatarName ? 'selected' : ''}
                      src={IMG[avatarName]}
                      alt="img"
                      onClick={() => {
                        this.onAvatarSelected(dispatch, avatarName);
                      }}
                    />
                  ))}
                </div>
              </React.Fragment>
            );
          } else {
            value.subscribePlayer(playerId);
            return (
              <div>
                <Spinner />
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default ChooseAvatar;
