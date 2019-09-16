import React from "react";

const EnterPlayerName = () => {
  return (
    <div
      className="modal "
      tabIndex="-1"
      role="dialog"
      id="modalPlayerName"
      data-keyboard="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content contentModal contentModalWrong">
          <div className="modal-header">
            <div className="modal-title card "> Enter name </div>
          </div>
          <div className="modal-body"></div>
        </div>
      </div>
    </div>
  );
};

export default EnterPlayerName;
