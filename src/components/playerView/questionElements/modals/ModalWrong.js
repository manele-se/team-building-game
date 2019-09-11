import React from "react";
import sad from "../../../../images/sad.png";

const ModalWrong = () => {
  return (
    <div
      class="modal "
      tabindex="-1"
      role="dialog"
      id="modalWrong"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content contentModal contentModalWrong">
          <div class="modal-header">
            <h5 class="modal-title modalTitle modalStyleTitleWrong">Wrong! </h5>
          </div>
          <div class="modal-body">
            <p>
              <img src={sad} className="image" alt="sad face" />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWrong;
