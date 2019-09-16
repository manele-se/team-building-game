import React from "react";
import sad from "../../images/sad.png";

const ModalWrong = () => {
  return (
    <div
      className="modal "
      tabIndex="-1"
      role="dialog"
      id="modalWrong"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content contentModal contentModalWrong">
          <div className="modal-header">
            <h5 className="modal-title modalTitle modalStyleTitleWrong">
              Wrong!{" "}
            </h5>
          </div>
          <div className="modal-body">
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
