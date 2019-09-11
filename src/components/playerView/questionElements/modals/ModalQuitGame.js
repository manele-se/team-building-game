import React from "react";
import sadY from "../../../../images/sadY.png";

const ModalQuitGame = () => {
  return (
    <div
      class="modal "
      tabindex="-1"
      role="dialog"
      id="modalQuitGame"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content contentModal contentModalQuit">
          <div class="modal-header">
            <h5 class="modal-title modalTitle modalStyleTitleWrong">
              Are you sure you want to quit?
            </h5>
          </div>
          <div class="modal-body">
            <p>
              <img src={sadY} className="image" alt="sad face" />{" "}
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal">
              I want to stay!
            </button>
            <button type="button" class="btn btn-danger">
              Quit Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalQuitGame;
