import React from "react";

import { Modal } from "react-bootstrap";
import "../inputs.css";
import "./modals.css";

//fundera på att: om lista med deltagaren är tom, visa denna modalen på rätt plats.
//Det måste finnas: gametitle, members och en date. Men datum är ninte obligatorisk ... (?)

class EnterPlayerName extends React.Component {
  state = {
    show: false
  };

  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  show() {
    this.setState({ show: true });
  }

  render() {
    const { show } = this.state;

    return (
      <Modal show={show} tabIndex="-1" id="modalPlayerName" onHide={onClose}>
        <Modal.Body>
          <form className="formModalPlayerName">
            <input
              type="name"
              className="big-input form-control-lg modalTutorial "
              placeholder="You must add a member!"
              ref={this.inputRef}
              defaultValue={value}
            />
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default EnterPlayerName;
