import React from "react";
import { Button } from "react";
import { Modal } from "react-bootstrap";
import "../inputs.css";
import "./modals.css";
import "../../layouts/buttons/buttons.css";

class EnterPlayerName extends React.Component {
  state = {
    show: false
  };

  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  handleCancel() {
    const { onClose } = this.props;
    if (onClose) {
      onClose();
    }
    this.setState({ show: false });
  }

  handleOk() {
    const { onSave } = this.props;
    if (onSave) {
      const name = this.inputRef.current.value;
      console.log(`handleOk : name = ${name}`);
      onSave(name);
    }
    this.setState({ show: false });
  }

  show() {
    this.setState({ show: true });
  }

  render() {
    const { onClose, value } = this.props;
    const { show } = this.state;

    return (
      <Modal show={show} tabIndex="-1" id="modalPlayerName" onHide={onClose}>
        <Modal.Body>
          <form className="formModalPlayerName">
            <input
              type="name"
              className="big-input form-control-lg "
              placeholder="Type name"
              ref={this.inputRef}
              defaultValue={value}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-warning "
            onClick={this.handleCancel.bind(this)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.handleOk.bind(this)}
          >
            OK
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EnterPlayerName;
