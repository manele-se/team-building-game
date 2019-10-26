import React, { Component } from 'react';
import avatars from '../../images';
import './showLogins.css';

export default class ShowLoginsView extends Component {
  render() {
    const { protocol, host } = document.location;
    const DOMAIN_NAME = `${protocol}//${host}/`;
    const players = this.props.loginLinks;

    return (
      <div className="customContainer">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center showLoginsViewGroup">
            <h1 className="titleWelcome">Enter this link</h1>
            <h2 className="titleLink">{DOMAIN_NAME}join</h2>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center showLoginsViewGroup">
            {players.map((p) => (
              <div key={p.name} className={`showLoginsPlayer ${p.loggedIn ? 'loggedIn' : 'notLoggedIn'}`}>
                <img src={avatars[p.avatar]} alt="avatar" />
                <p>
                  <span className="name">{p.name}</span>
                  <span className="code">{p.code}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
