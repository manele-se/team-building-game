import React, { Component } from "react";

class ModalRight extends Component {
  render() {
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
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Congratulation!!!</h5>
            </div>
            <div class="modal-body">
              <p>:)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalRight;
