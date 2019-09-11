import React from "react";
import glad from "../../../../images/glad.png";

const ModalRight = () => {
  return (
    <div
      class="modal "
      tabindex="-1"
      role="dialog"
      id="modalRight"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content contentModal contentModalRight">
          <div class="modal-header">
            <h5 class="modal-title modalTitle modalStyleTitleRight">
              Congratulation!{" "}
            </h5>
          </div>
          <div class="modal-body">
            <p>
              <img src={glad} className="image" alt="smily face" />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRight;
