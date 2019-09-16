import React from "react";
import sadY from "../../images/sadY.png";

const ModalQuitGame = () => {
  return (
    <div
      className="modal "
      tabIndex="-1"
      role="dialog"
      id="modalQuitGame"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content contentModal contentModalQuit">
          <div className="modal-header">
            <h5 className="modal-title modalTitle modalStyleTitleWrong">
              Are you sure you want to quit?
            </h5>
          </div>
          <div className="modal-body">
            <p>
              <img src={sadY} className="image" alt="sad face" />{" "}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              data-dismiss="modal"
            >
              I want to stay!
            </button>
            <button type="button" className="btn btn-danger">
              Quit Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalQuitGame;
