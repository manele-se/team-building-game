import React from "react";
import { Modal } from "react-bootstrap";
import glad from "../../images/glad.png";

const ModalRight = props => {
  const { show } = props;
  return (
    <Modal show={show} tabIndex="-1" id="modalRight">
      <Modal.Header>
        <h5 className="modalStyleTitleRight">Right!</h5>
      </Modal.Header>
      <Modal.Body>
        <p>
          <img src={glad} className="image" alt="smily face" />{" "}
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default ModalRight;
