import React from "react";
import glad from "../../../../images/glad.png";

ModalRight = () => {
  return (
    <div class="modal-content contentModalRight">
      <div class="modal-header">
        <h5 class="modal-title modalStyleTitleRight">Congratulation! </h5>
      </div>
      <div class="modal-body">
        <p>
          <img src={glad} className="image" alt="smily face" />{" "}
        </p>
      </div>
    </div>
  );
};

export default ModalRight;
