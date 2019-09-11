import React from "react";
import sad from "../../../../images/sad.png";

ModalWrong = () => {
  return (
    <div class="modal-content contentModalWrong">
      <div class="modal-header">
        <h5 class="modal-title modalStyleTitleWrong">Wrong!</h5>
      </div>
      <div class="modal-body">
        <p>
          <img src={sad} className="image" alt="sad face" />{" "}
        </p>
      </div>
    </div>
  );
};

export default ModalWrong;
