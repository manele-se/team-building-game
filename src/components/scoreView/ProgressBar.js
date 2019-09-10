import React, { Component } from "react";

//show progress for each player

class ProgressBar extends Component {
  render() {
    return (
      <div className="container card card-body mb-3 p-4 col-10 offset-1 board">
        <div className="progress">
          <div
            className="progress-bar-striped bg-success card py-2 "
            style={{
              width: "5%"
            }}
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
