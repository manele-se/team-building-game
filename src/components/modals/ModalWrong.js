import React from "react";
import { Modal } from "react-bootstrap";
import sad from "../../images/sad.png";

const ModalWrong = props => {
  const { show } = props;
  return (
    <Modal show={show} tabIndex="-1" id="modalWrong">
      <Modal.Header>
        <h5 className="modalStyleTitleWrong">Wrong!</h5>
      </Modal.Header>
      <Modal.Body>
        <p>
          <img src={sad} className="image" alt="sad face" />
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default ModalWrong;
