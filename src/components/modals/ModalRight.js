import React from "react";
import glad from "../../images/glad.png";

const ModalRight = () => {
  return (
    <div
      className="modal "
      tabIndex="-1"
      role="dialog"
      id="modalRight"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content contentModal contentModalRight">
          <div className="modal-header">
            <h5 className="modal-title modalTitle modalStyleTitleRight">
              Right!{" "}
            </h5>
          </div>
          <div className="modal-body">
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
