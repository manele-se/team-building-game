import React, { Component } from 'react';
import { Consumer } from '../../context';
import './joinGameForm.css';

export default class JoinGameForm extends Component {
  constructor(props) {
    super(props);
    this.codeRef = React.createRef();
  }

  async handleSubmit(readDoc) {
    const code = this.codeRef.current.value.toUpperCase().trim();
    const { playerId } = await readDoc('codes', code);
    document.location.replace(`/play/${playerId}`);
  }

  render() {
    return (
      <Consumer>
        {(value) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.handleSubmit(value.readDoc);
            }}>
            <input type="text" id="joinCode" ref={this.codeRef} placeholder="Type your code" />
          </form>
        )}
      </Consumer>
    );
  }
}
