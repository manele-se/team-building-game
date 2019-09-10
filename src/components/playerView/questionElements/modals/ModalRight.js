import React, { Component } from "react";

//it doesn't show the modal at all!!!why?????
class ModalRight extends Component {
  render() {
    return (
      <div>
        <button className="button" id="modalButton">
          Click here
        </button>

        <div id="simpleModal" className="modal">
          <span className="closeBtn">&times;</span>
          <p>Modal Test{console.log("into modal")}</p>
        </div>
      </div>
    );
  }
}

export default ModalRight;
