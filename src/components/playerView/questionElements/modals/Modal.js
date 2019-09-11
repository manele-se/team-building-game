import ModalRight from "./ModalRight";
import ModalWrong from "./ModalWrong";

import React from "react";

Modal = () => {
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
        <ModalRight />
        <ModalWrong />
      </div>
    </div>
  );
};

export default Modal;
