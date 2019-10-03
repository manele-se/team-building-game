import React from "react";
import { Modal } from "react-bootstrap";

//visar rätt svar på fråga, starta en timer på 5s (detta betyder att det visas för 5s)
//gå vidare till scoreBoard eller grattis. Behöver den vara en Cosumer?
//Addera timer
class RightAnswerView extends Component {
  render() {
    <Consumer>
      {value => {
        const { player } = value;
        return (
          <Modal
            show={show}
            tabIndex="-1"
            id="modalPlayerName"
            onHide={onClose}>
            <Modal.Body>
              <form className="RightAnswerView">
                <input
                  type="name"
                  className="big-input form-control-lg "
                  placeholder="Type name"
                  ref={this.inputRef}
                  defaultValue={value}
                />{" "}
              </form>{" "}
            </Modal.Body>{" "}
            <Modal.Footer>
              <button
                type="button"
                className="btn btn-success"
                onClick={this.handleOk.bind(this)}>
                Next Team Meber{" "}
              </button>{" "}
            </Modal.Footer>{" "}
          </Modal>
        );
      }}
    </Consumer>;
  }
}

export default RightAnswerView;
